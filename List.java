import java.util.ArrayList;
import java.util.Collections;
import java.sql.*; 
import java.lang.Math;
public class List
{
    private ArrayList<ParkingLot> lots = new ArrayList<ParkingLot>();
    private User person;
    public List(float uLo, float uLa){
        person = new User(uLo, uLa);
    }
    public String sortedList(){
        addLots();
        Collections.sort(lots);
        String lotName = "";
        for (int i = 0; i < lots.size(); i++){
            lotName = lotName.concat(lots.get(i).getName());
            lotName = lotName.concat(", ");
        }
        return lotName;
    }
    private void addLots(){
        try{  
            Class.forName("com.mysql.jdbc.Driver");  
            String url ="jdbc:mysql://parking-service.mysql.database.azure.com:3306/mysql?verifyServerCertificate=true&useSSL=true&requireSSL=false&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC"; 
            Connection myDbConn = DriverManager.getConnection(url, "parking-user@parking-service", "Password123");
            //here sonoo is database name, root is username and password  
            Statement stmt=myDbConn.createStatement();  
            ResultSet rs=stmt.executeQuery("select * from parking.parkinglotattribute");  
            boolean payed = false;
            while(rs.next()){  
                double dist = Math.sqrt(Math.pow((person.getLongitude() - rs.getFloat(4)),2) + Math.pow((person.getLatitude() - rs.getFloat(5)),2)) ;
                if(rs.getInt(7) == 1)
                    payed = true;
                else
                    payed = false;
                ParkingLot newLot = new ParkingLot(rs.getInt(4),rs.getInt(8),payed,(double)dist, rs.getString(2)); 
                newLot.getName();
                lots.add(newLot);
            }
            myDbConn.close();  
        }catch(Exception e){ System.out.println(e);}
        
    }
}
