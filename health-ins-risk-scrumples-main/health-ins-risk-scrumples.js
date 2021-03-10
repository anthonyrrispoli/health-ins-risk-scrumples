var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);

// function to calculate risk scores by values from the user

function doCalculations() { 
    var age = document.getElementById("ageID").value;
    var ageRisk;
    
    // Age Risk
    
    if(age < 30) {
      ageRisk = 0;
    }
    else if(age < 45) {
      ageRisk = 10;
    }
    else if(age < 60) {
      ageRisk = 20
    }
    else{
      ageRisk = 30;
    }

    document.getElementById("ageRiskID").innerHTML = ageRisk;

    // Body-Mass (Written by Billy)

    var toKilo = document.getElementById("weightID").value/2.205;  // converts from pound to Kg
    var toMeters = document.getElementById("heightID").value/39.37 // converts from inch to Meters
    var bmi = toKilo / Math.pow(toMeters, 2); // Calculates BMI index
    var points;

    if( bmi <= 24.9 && bmi >= 18.5 ){
      points = 0;
    }
    else if(bmi <= 29.9 && bmi >= 25){
      points = 30;
    }
    else if( bmi <= 34.9 && bmi >= 30){
      points = 75;
    }

   
    var indexLine = points +' (index = ' + bmi.toFixed(2) +')'; // formatted index value
    document.getElementById("indexID").innerHTML = indexLine;
    
    // end Body-Mass
    

    
}
