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

    if(age < 12 || age > 99){
      ageRisk = "Must be greater than 12 and less than 99";
    }

    console.log(ageRisk);
    document.getElementById("ageRiskID").innerHTML = ageRisk;

    // Body-Mass (Written by Billy)

    var weight = document.getElementById("weightID").value;
    var height = document.getElementById("heightID").value;
    var toKilo = weight/2.205;  // converts from pound to Kg
    var toMeters = height/39.37 // converts from inch to Meters
    var bmi = toKilo / Math.pow(toMeters, 2); // Calculates BMI index
    var bmiRisk;
    console.log(bmi);

    if( bmi <= 24.9 && bmi >= 18.5 ){
      bmiRisk = 0;
    }
    else if(bmi <= 29.9 && bmi >= 25){
      bmiRisk = 30;
    }
    else if( bmi <= 34.9 && bmi >= 30){
      bmiRisk = 75;
    }

    if(height < 54 || height > 84 || weight < 80 || weight > 400){
      bmiRisk = "Height must be between 54 and 84 inches, weight must be between 80 and 400 lbs.";
    }

    console.log(bmiRisk);
    document.getElementById("bmiID").innerHTML = bmiRisk;

    // Blood pressure

    var sbp = document.getElementById("sbpID").value;
    var dbp = document.getElementById("dbpID").value;
    var bpRisk;

    if( sbp < 120 && dbp < 80){
      bpRisk = 0;
    }
    else if ( sbp >= 120 && sbp <= 129 && dbp < 80){
      bpRisk = 15;
    }
    else if( sbp >= 130 && sbp <= 139 || dbp >= 80 && dbp <= 89){
      bpRisk = 30;
    }
    else if( sbp >= 140 || dbp >= 90){
      bpRisk = 75;
    }
    else if( sbp > 180 || dbp > 120){
      bbRisk = 100;
    }

    if(sbp < 50 || sbp > 250 || dbp < 25 || dbp > 200){
      bpRisk = "Systolic BP must be between 50 and 250, Diastolic BP must be between 25 and 200.";
    }

    console.log(bpRisk);
    document.getElementById("bpID").innerHTML = bpRisk;
    // Family history
    
    var diabetes = document.getElementById("diabetes").checked;
    var cancer = document.getElementById("cancer").checked;
    var alzheimers = document.getElementById("alzheimers").checked;
    var historyRisk = 0;

    if(diabetes){
      historyRisk += 10;
    }
    if(cancer){
      historyRisk += 10;
    }
    if(alzheimers){
      historyRisk += 10;
    }

    console.log(historyRisk);
    document.getElementById("familyID").innerHTML = historyRisk;

    // Total risk
    var totalRisk = ageRisk + bmiRisk + bpRisk + historyRisk;
    var riskLevel;

    if (totalRisk <= 20){
      riskLevel = "Low risk";
    }
    else if (totalRisk <= 50){
      riskLevel = "Moderate risk";
    }
    else if (totalRisk <= 75){
      riskLevel = "High risk";
    }
    else{
      riskLevel = "Uninsurable";
    }

    if(typeof ageRisk != 'number' || typeof bmiRisk != 'number' || typeof bpRisk != 'number'){
     riskLevel = "One or more invalid inputs. Please try again."
    }

    console.log(riskLevel);
    document.getElementById("riskID").innerHTML = riskLevel;

}
