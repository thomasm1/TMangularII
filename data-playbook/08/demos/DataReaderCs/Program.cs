using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataReaderCs
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter a station name:");
            try
            {
                var name = Console.ReadLine();
                var stations = GetStations(name);
                var path = CsvToDisk(stations);
                Console.WriteLine("File created: " + path);
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error: " + ex.Message);
            }
            Console.ReadLine();
        }

        private static string CsvToDisk(string stations)
        {
            var fileName = $@"NOAA_{DateTime.Now.Ticks}.csv";
            var folder = ConfigurationManager.AppSettings["ExportFolder"];
            var path = Path.Combine(folder, fileName);
            File.WriteAllText(path, stations);
            return path;
        }

        private static string GetStations(string name)
        {
            var connectionString = ConfigurationManager.ConnectionStrings["Default"].ConnectionString;
            var tsql = @"SELECT
                            st.name, 
                            st.country,
                            gs.year, 
                            gs.mo, 
                            gs.da, 
                            gs.temp
                        FROM            
                            dbo.stations AS st INNER JOIN
                            dbo.gsod2017 AS gs ON st.usaf = gs.stn AND st.wban = gs.wban
                        WHERE        
                            st.name = @name
                        ORDER BY 
                            gs.year, 
                            gs.mo, 
                            gs.da";
            var results = new StringBuilder();

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                var command = new SqlCommand(tsql, connection);
                var param = new SqlParameter { ParameterName = "name", Value = name };
                command.Parameters.Add(param);
                connection.Open();

                var reader = command.ExecuteReader();
                AddHeaderRow(reader, results);
                while (reader.Read())
                {
                    for(int i=0; i< reader.FieldCount; i++)
                    {
                        var val = reader[i].ToString();
                        //Escape val
                        val = EscapeCsv(val);
                        results.Append(val + ",");
                    }
                    results.Length--;
                    results.AppendLine();
                }
                reader.Close();
            }
            return results.ToString();
        }

        private static string EscapeCsv(string val)
        {
            if (string.IsNullOrWhiteSpace(val)) return val;

            //escape CSV-Injection
            var escapeChars = new[] { '=', '+', '-', '@' };
            val = val.TrimStart(escapeChars);

            //escape quotes within a value
            if (val.IndexOf("\"") >= 0)
                val = val.Replace("\"", "\"\"");

            //quote entire value if comma exists within
            if (val.IndexOf(",") >= 0)
                val = "\"" + val + "\"";

            //escape new lines
            while (val.Contains("\r"))
            {
                val = val.Replace("\r", "");
            }
            while (val.Contains("\n"))
            {
                val = val.Replace("\n", "");
            }
            return val;
        }

        private static void AddHeaderRow(SqlDataReader reader, StringBuilder results)
        {
            var columnNames = Enumerable.Range(0, reader.FieldCount)
                .Select(reader.GetName)
                .ToList();
            results.Append(string.Join(",", columnNames));
            results.AppendLine();
        }
    }
}
