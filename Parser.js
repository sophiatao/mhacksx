function Parser(input){
		var sResponse;
		var lResponse;
        sResponse = response.body().string();
        sResponse = sResponse.trim();
        sResponse = sResponse.replaceAll("^[{ \"content\":]+","");
        sResponse = sResponse.substring(1,sResponse.length());
        lResponse = sResponse.split("\"measures\"");
        var result = [];
        for (var i = 0; i < lResponse; i++) {
    		var temp = res.replaceAll("^[:{},]+", "").replaceAll("[,}]+$","");
            var location = temp.split(",")[0].replaceAll("^[\"locationUid\":\"LOCATION-]+", "").replaceAll("\"+$", "");
            result.push(location);
		}
        result.remove(result.size()- 1);
        return result;
        
}

