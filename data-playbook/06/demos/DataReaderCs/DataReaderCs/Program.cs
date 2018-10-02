using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataReaderCs
{
    class Program
    {
        static void Main(string[] args)
        {
            GetStations();
            Console.ReadLine();
        }

        private static void GetStations()
        {
            var connectionString = ConfigurationManager.ConnectionStrings["Default"].ConnectionString;
            var tsql = "select usaf from dbo.stations";

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                var command = new SqlCommand(tsql, connection);
                connection.Open();

                var reader = command.ExecuteReader();

                Console.WriteLine("Stations:");
                while(reader.Read())
                {
                    Console.WriteLine(reader["usaf"]);
                }

                reader.Close();
            }
        }
    }
}
