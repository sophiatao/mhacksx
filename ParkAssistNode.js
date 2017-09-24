function ParkingLot(spaces, aSpaces, paid, dist, name, address){
	this.spaces = spaces;
	this.aSpaces = aSpaces;
	this.paid = paid;
	this.dist = dist;
	this.name = name;
	this.address = address;
}

var lots = [];


var conn = mysql.createConnection({host: "parking-service.mysql.database.azure.com", user: "parking-user@parking-service", password: "Password123", database: "mysql", port: 3306, ssl:{ca:fs.readFileSync({ca-cert filename})}});

function calDist(pLong, pLat, uLong, uLat){
	return sqrt(pow(uLong - pLong,2) + pow(uLat - pLat, 2));
}
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    for (var i = 0; i < Object.keys(result).length; i++) {
    	var dist = calDist(result[i].longitude, result[i].latitude, 0, 0)
    	var newLot = new ParkingLot(result[i].spots, result[i].spotsAvailabe, result[i].paid, dist, result[i].name, result[i].address);
    	lots.push(newLot);
    }
    
	});
});

