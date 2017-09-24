/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//the last one didn't have a package, this one does, remove it if you don't want it, keep it if you do, you know the drill
package websocket;

import static java.lang.Double.parseDouble;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import java.sql.*;

/**
 * 
 * @author Ian Currie
 */
public class Initialize {
    public static void main(String[] args){
        List<String> longloca = new ArrayList<>();
        try{
            longloca = callServer("PKIN");
        }catch(Exception exception){
            exception.printStackTrace();
        }
        List<Integer> loca = new ArrayList<>();
        for(String spot: longloca){
            Integer iSpot = Integer.parseInt(spot);
            if(!loca.contains(iSpot)){
                loca.add(iSpot);
            }
        }
        List<String> names = new ArrayList<>();
        names.add("'PARKING INC.'");
        names.add("'Glenmount'");
        names.add("'City Lot A'");
        names.add("'City Lot B'");
        names.add("'City Lot C'");
        names.add("'City Lot D'");
        names.add("'City Lot E'");
        names.add("'City Lot F'");
        names.add("'City Lot G'");
        names.add("'City Lot H'");
        names.add("'Hospital Lot A'");
        names.add("'Hospital Lot B'");
        names.add("'Chiddington Plaza'");
        names.add("'Hamilton & Yorkdale'");
        names.add("'University Lot A'");
        names.add("'University Lot B'");
        names.add("'University Lot C'");
        names.add("'University Lot D'");
        names.add("'University Lot E'");
        names.add("'Fair Grounds'");
        names.add("'Envy Parking'");
        
        List<String> addresses = new ArrayList<>();
        for(int i = 0; i<21; i++){
            addresses.add("NULL");
        }
        List<Integer> spots = new ArrayList<>();
        spots.add(300);
        spots.add(20);
        spots.add(250);
        spots.add(200);
        spots.add(200);
        spots.add(50);
        spots.add(210);
        spots.add(25);
        spots.add(22);
        spots.add(15);
        spots.add(30);
        spots.add(72);
        spots.add(42);
        spots.add(12);
        spots.add(24);
        spots.add(80);
        spots.add(78);
        spots.add(67);
        spots.add(44);
        spots.add(69);
        spots.add(10);
        
        List<List<Double>> latLong = new ArrayList<>();
        try{
            latLong = latLong();
        }catch(Exception exception){
            System.out.println(exception);
        }
        
        List<Integer> paid = new ArrayList<>();
        paid.add(1);
        paid.add(1);
        paid.add(0);
        paid.add(0);
        paid.add(0);
        paid.add(1);
        paid.add(1);
        paid.add(0);
        paid.add(0);
        paid.add(1);
        paid.add(1);
        paid.add(1);
        paid.add(0);
        paid.add(0);
        paid.add(0);
        paid.add(1);
        paid.add(1);
        paid.add(0);
        paid.add(0);
        paid.add(0);
        paid.add(0);
        
        
        System.out.println("here");
        
        
        try{
            Class.forName("com.mysql.jdbc.Driver");
            System.out.println("here");
            String url = "jdbc:mysql://parking-service.mysql.database.azure.com:3306/mysql?verifyServerCertificate=true&useSSL=true&requireSSL=false&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC"; 
            System.out.println("here");
            Connection con=DriverManager.getConnection(url,"parking-user@parking-service","Password123");
            Statement stmt = con.createStatement();
            for(int i = 0; i<21; i++){
                String lot = loca.get(i).toString();
                String name = names.get(i);
                String spot = spots.get(i).toString();
                String longi = latLong.get(i).get(1).toString();
                String lat = latLong.get(i).get(0).toString();
                String pay = paid.get(i).toString();
                //String stringg = "INSERT INTO parking.parkinglotattribute(idparkinglotattribute, name,address,spots,longitude,latitude,paid,spotsAvailable) VALUES ("+lot+",'"+name+"',NULL,"+spot+","+longi+","+lat+","+pay+","+spot+")";
                String stringg = "select * from parking.parkinglotattribute";
                ResultSet rs = stmt.executeQuery(stringg);
                //
                while(rs.next()){
                    System.out.println(rs.getInt(4));
                    
                }
            }
        }catch(Exception exception){exception.printStackTrace();}            
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
    public static List<List<Double>> latLong() throws Exception{
        OkHttpClient client = new OkHttpClient();

        Request request = new Request.Builder()
            .url("https://ic-event-service.run.aws-usw02-pr.ice.predix.io/v2/locations/events?bbox=32.715675%3A-117.161230%2C32.708498%3A-117.151681&locationType=PARKING_ZONE&eventType=PKIN&startTime=1497908264000&endTime=1497909114000")
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
        List<List<Double>> result = new ArrayList<>();
        lResponse.forEach((res) -> {
            String temp = res.replaceAll("^[:{},]+", "").replaceAll("[,}]+$","");
            String value;
            
            try{
                value = temp.split("\",\"")[6];
                value = value.substring(17,value.length());
                List<String> values = Arrays.asList(value.split(","));
                List<List<String>> moreValues = new ArrayList<>();
                
                Double finLong = 0d;
                Double finLat = 0d;
                
                for(String value2: values){
                    List<String> twoValues = Arrays.asList(value2.split(":"));
                    finLat += parseDouble(twoValues.get(0));
                    finLong += parseDouble(twoValues.get(1));
                }
                finLat = finLat/4;
                finLong = finLong/4;
                
                List<Double> fin = new ArrayList<>();
                fin.add(finLat);
                fin.add(finLong);
                
                result.add(fin);
            }catch(IndexOutOfBoundsException exception){}
        });
        
        return result;
    }
}

