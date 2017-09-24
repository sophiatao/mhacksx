/*
 * Feel free to add a package, I left it in websocket cause cool        .
 */

package websocket;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import java.util.Arrays;
import java.util.ArrayList;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.util.List;

/**
 *
 * @author Ian Currie
 */


public class Update {
//"wss://890407d7-e617-4d70-985f-01792d693387.prefix-uaa.run.aws-usw02-pr.ice.predix.io"
    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) throws Exception{
        List<String> out;
        List<String> in;
        out = callServer("PKOUT");
        in = callServer("PKIN");
        
        System.out.println(out);
        System.out.println(in);
        
        Class.forName("com.mysql.jdbc.Driver");
        Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/mysql?atoReconnect=true&useSSL=false","root","root");
        Statement stmt = con.createStatement();
        for(String lot: out){
            stmt.executeQuery("CALL move_car("+lot+", 1)");
        }
        for(String lot: in){
            stmt.executeQuery("CALL move_car("+lot+", 0)");
        }
    }
    public static List<String> callServer(String command) throws Exception{
        OkHttpClient client = new OkHttpClient();

        Request request = new Request.Builder()
            .url("https://ic-event-service.run.aws-usw02-pr.ice.predix.io/v2/locations/events?bbox=32.715675%3A-117.161230%2C32.708498%3A-117.151681&locationType=PARKING_ZONE&eventType="+command+"&startTime=1497908264000&endTime=1497909114000")
            .get()
            .addHeader("authorization", "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiIzNzkwMGU0OThmZjA0NTA0YWE0ZTBlMzM0ZTU0NjM5OCIsInN1YiI6ImhhY2thdGhvbiIsInNjb3BlIjpbInVhYS5yZXNvdXJjZSIsImllLWN1cnJlbnQuU0RTSU0tSUUtUFVCTElDLVNBRkVUWS5JRS1QVUJMSUMtU0FGRVRZLkxJTUlURUQuREVWRUxPUCIsImllLWN1cnJlbnQuU0RTSU0tSUUtRU5WSVJPTk1FTlRBTC5JRS1FTlZJUk9OTUVOVEFMLkxJTUlURUQuREVWRUxPUCIsImllLWN1cnJlbnQuU0RTSU0tSUUtVFJBRkZJQy5JRS1UUkFGRklDLkxJTUlURUQuREVWRUxPUCIsImllLWN1cnJlbnQuU0RTSU0tSUUtUEFSS0lORy5JRS1QQVJLSU5HLkxJTUlURUQuREVWRUxPUCIsImllLWN1cnJlbnQuU0RTSU0tSUUtUEVERVNUUklBTi5JRS1QRURFU1RSSUFOLkxJTUlURUQuREVWRUxPUCJdLCJjbGllbnRfaWQiOiJoYWNrYXRob24iLCJjaWQiOiJoYWNrYXRob24iLCJhenAiOiJoYWNrYXRob24iLCJncmFudF90eXBlIjoiY2xpZW50X2NyZWRlbnRpYWxzIiwicmV2X3NpZyI6IjlmMWYyYzRkIiwiaWF0IjoxNTA2MTgyNTEzLCJleHAiOjE1MDY3ODczMTMsImlzcyI6Imh0dHBzOi8vODkwNDA3ZDctZTYxNy00ZDcwLTk4NWYtMDE3OTJkNjkzMzg3LnByZWRpeC11YWEucnVuLmF3cy11c3cwMi1wci5pY2UucHJlZGl4LmlvL29hdXRoL3Rva2VuIiwiemlkIjoiODkwNDA3ZDctZTYxNy00ZDcwLTk4NWYtMDE3OTJkNjkzMzg3IiwiYXVkIjpbImllLWN1cnJlbnQuU0RTSU0tSUUtVFJBRkZJQy5JRS1UUkFGRklDLkxJTUlURUQiLCJpZS1jdXJyZW50LlNEU0lNLUlFLVBBUktJTkcuSUUtUEFSS0lORy5MSU1JVEVEIiwiaWUtY3VycmVudC5TRFNJTS1JRS1QVUJMSUMtU0FGRVRZLklFLVBVQkxJQy1TQUZFVFkuTElNSVRFRCIsInVhYSIsImhhY2thdGhvbiIsImllLWN1cnJlbnQuU0RTSU0tSUUtRU5WSVJPTk1FTlRBTC5JRS1FTlZJUk9OTUVOVEFMLkxJTUlURUQiLCJpZS1jdXJyZW50LlNEU0lNLUlFLVBFREVTVFJJQU4uSUUtUEVERVNUUklBTi5MSU1JVEVEIl19.S8qPvgEFZPVQk6wawemPblC-z2hIv35mFZpHjbFpP-1cjjLTIsVLn4BzTFfYicJCOXpnryn_RaB3An8a3C82bqlokbp_8MV18JyeDuRSTInYkR_ysAumwVQeDMAtktbHZKieToPMEDjCOXH0qZZbe0oWEdBWJSo3sfPawk1vGLFkfnztICJTJhnmTf3ggRNKoULBK0uCUNBNaL3mdR86sJ4pF-_FrEZnpcGvA_XldF9sIHqfy6bcAN1L6NQJ44YZpvSBP3ISG94hBeFJf3fkP3JaknfAvzkCgLTSndMPcnqT-L79VNlJzQLFrNzBKzZM4jcha9h5KF1RAmiNgHIuqg")
            .addHeader("predix-zone-id", "SDSIM-IE-PARKING")
            .addHeader("cache-control", "no-cache")
            .addHeader("postman-token", "9123217b-d68f-d423-c56a-ddc1be1af988")
            .build();
        

        Response response = client.newCall(request).execute();
        String sResponse;
        sResponse = response.body().string();
        sResponse = sResponse.trim();
        sResponse = sResponse.replaceAll("^[{ \"content\":]+","");
        sResponse = sResponse.substring(1,sResponse.length());
        ArrayList<String> lResponse = new ArrayList<>(Arrays.asList(sResponse.split("\"measures\"")));
        ArrayList<String> result = new ArrayList<>();
        lResponse.forEach((res) -> {
            String temp = res.replaceAll("^[:{},]+", "").replaceAll("[,}]+$","");
            String location = temp.split(",")[0].replaceAll("^[\"locationUid\":\"LOCATION-]+", "").replaceAll("\"+$", "");
            result.add(location);
        });
        result.remove(result.size()- 1);
        return result;
    }
    /*

        request = new Request.Builder()
    .url("https://ic-event-service.run.aws-usw02-pr.ice.predix.io/v2/locations/events?bbox=32.715675%3A-117.161230%2C32.708498%3A-117.151681&locationType=PARKING_ZONE&eventType=PKIN&startTime=1497908264000&endTime=1497909114000")
     .get()
    .addHeader("authorization", "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiIzNzkwMGU0OThmZjA0NTA0YWE0ZTBlMzM0ZTU0NjM5OCIsInN1YiI6ImhhY2thdGhvbiIsInNjb3BlIjpbInVhYS5yZXNvdXJjZSIsImllLWN1cnJlbnQuU0RTSU0tSUUtUFVCTElDLVNBRkVUWS5JRS1QVUJMSUMtU0FGRVRZLkxJTUlURUQuREVWRUxPUCIsImllLWN1cnJlbnQuU0RTSU0tSUUtRU5WSVJPTk1FTlRBTC5JRS1FTlZJUk9OTUVOVEFMLkxJTUlURUQuREVWRUxPUCIsImllLWN1cnJlbnQuU0RTSU0tSUUtVFJBRkZJQy5JRS1UUkFGRklDLkxJTUlURUQuREVWRUxPUCIsImllLWN1cnJlbnQuU0RTSU0tSUUtUEFSS0lORy5JRS1QQVJLSU5HLkxJTUlURUQuREVWRUxPUCIsImllLWN1cnJlbnQuU0RTSU0tSUUtUEVERVNUUklBTi5JRS1QRURFU1RSSUFOLkxJTUlURUQuREVWRUxPUCJdLCJjbGllbnRfaWQiOiJoYWNrYXRob24iLCJjaWQiOiJoYWNrYXRob24iLCJhenAiOiJoYWNrYXRob24iLCJncmFudF90eXBlIjoiY2xpZW50X2NyZWRlbnRpYWxzIiwicmV2X3NpZyI6IjlmMWYyYzRkIiwiaWF0IjoxNTA2MTgyNTEzLCJleHAiOjE1MDY3ODczMTMsImlzcyI6Imh0dHBzOi8vODkwNDA3ZDctZTYxNy00ZDcwLTk4NWYtMDE3OTJkNjkzMzg3LnByZWRpeC11YWEucnVuLmF3cy11c3cwMi1wci5pY2UucHJlZGl4LmlvL29hdXRoL3Rva2VuIiwiemlkIjoiODkwNDA3ZDctZTYxNy00ZDcwLTk4NWYtMDE3OTJkNjkzMzg3IiwiYXVkIjpbImllLWN1cnJlbnQuU0RTSU0tSUUtVFJBRkZJQy5JRS1UUkFGRklDLkxJTUlURUQiLCJpZS1jdXJyZW50LlNEU0lNLUlFLVBBUktJTkcuSUUtUEFSS0lORy5MSU1JVEVEIiwiaWUtY3VycmVudC5TRFNJTS1JRS1QVUJMSUMtU0FGRVRZLklFLVBVQkxJQy1TQUZFVFkuTElNSVRFRCIsInVhYSIsImhhY2thdGhvbiIsImllLWN1cnJlbnQuU0RTSU0tSUUtRU5WSVJPTk1FTlRBTC5JRS1FTlZJUk9OTUVOVEFMLkxJTUlURUQiLCJpZS1jdXJyZW50LlNEU0lNLUlFLVBFREVTVFJJQU4uSUUtUEVERVNUUklBTi5MSU1JVEVEIl19.S8qPvgEFZPVQk6wawemPblC-z2hIv35mFZpHjbFpP-1cjjLTIsVLn4BzTFfYicJCOXpnryn_RaB3An8a3C82bqlokbp_8MV18JyeDuRSTInYkR_ysAumwVQeDMAtktbHZKieToPMEDjCOXH0qZZbe0oWEdBWJSo3sfPawk1vGLFkfnztICJTJhnmTf3ggRNKoULBK0uCUNBNaL3mdR86sJ4pF-_FrEZnpcGvA_XldF9sIHqfy6bcAN1L6NQJ44YZpvSBP3ISG94hBeFJf3fkP3JaknfAvzkCgLTSndMPcnqT-L79VNlJzQLFrNzBKzZM4jcha9h5KF1RAmiNgHIuqg")
    .addHeader("predix-zone-id", "SDSIM-IE-PARKING")
     .addHeader("cache-control", "no-cache")
    .addHeader("postman-token", "cbaaccd5-b77d-82c6-917e-672c7829dc34")
    .build();

    response = client.newCall(request).execute();
        
    sResponse = response.body().string();
    sResponse = sResponse.trim();
    sResponse = sResponse.replaceAll("^[{ \"content\":]+","");
    sResponse = sResponse.substring(1,sResponse.length());
    lResponse = new ArrayList<>(Arrays.asList(sResponse.split("\"measures\"")));
    ArrayList<String> in = new ArrayList<>();
    lResponse.forEach((res) -> {
        String temp = res.replaceAll("^[:{},]+", "").replaceAll("[,}]+$","");
        String location = temp.split(",")[0].replaceAll("^[\"locationUid\":\"LOCATION-]+", "").replaceAll("\"+$", "");
        in.add(location);
    });
    in.remove(in.size()- 1);
    
    Class.forName("com.mysql.jdbc.Driver");
    Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/mysql?atoReconnect=true&useSSL=false","root","root");
    Statement stmt = con.createStatement();
    //stmt.    INSERT THING NAME cool     ;
    
    }*/
}
