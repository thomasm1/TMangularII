Imports System.Configuration
Imports System.Data.SqlClient

Module Module1

    Sub Main()
        GetStations()
        Console.ReadLine()
    End Sub

    Private Sub GetStations()
        Dim connectionString = ConfigurationManager.ConnectionStrings("Default").ConnectionString
        Dim tsql = "select usaf from dbo.stations"

        Using connection As SqlConnection = New SqlConnection(connectionString)
            Dim command = New SqlCommand(tsql, connection)
            connection.Open()
            Dim reader = command.ExecuteReader()

            Console.WriteLine("Stations:")
            While reader.Read()
                Console.WriteLine(reader("usaf"))
            End While

            reader.Close()
        End Using
    End Sub

End Module
