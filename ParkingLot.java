public class ParkingLot implements Comparable<ParkingLot> 
{
    private int spaces;
    private int availableSpaces;
    private boolean paid;
    private double distance;
    private String name;
    
    public ParkingLot(int pSpaces, int aSpaces, boolean pPaid, double pDistance, String n){
        spaces = pSpaces;
        availableSpaces = aSpaces;
        paid = pPaid;
        distance = pDistance;
        name = n;
    }
    public void carArrived(){
        availableSpaces--;
    }
    public void carLeft(){
        availableSpaces++;
    }
    public boolean spacesLeft(){
        if (availableSpaces == 0){
            return false;
        }
        else
            return true;
    }
    public int compareTo(ParkingLot b){
        if(distance > b.distance)
            return 1;
        if(distance == b.distance)
            return 0;
        else
            return -1;
    }
    //getter methods
    public int getSpaces(){
        return spaces;
    }
    public int getAvailableSpaces(){
        return availableSpaces;
    }
    public boolean paid(){
        return paid;
    }
    public double getDistance(){
        return distance;
    }
    public String getName(){
        return name;
    }
    
}
