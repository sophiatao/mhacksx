package com.gil.hellocontroller;

public class User {
    private double longitude;
    private double latitude;

    public User(double uLo, double uLa)
    {
        longitude = uLo;
        latitude = uLa;
    }

	public double getLongitude(){
        return longitude;
    }
    public double getLatitude(){
        return latitude;
    }
}
