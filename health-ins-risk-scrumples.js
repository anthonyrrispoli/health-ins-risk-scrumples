var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);

function doCalculations() { 
    age = document.getElementById("ageID").value;
    height = document.getElementById("heightID").value;
    weight = document.getElementById("weightID").value;
    sbp = document.getElementById("spbID").value;
    dbp = document.getElementById("dpbID").value;

    if(age < 30) {
      ageRisk = 0;
    }
    else if(age < 45) {
      ageRisk = 10;
    }
    else if(age < 60) {
      ageRisk = 20;
    }
    else {
      ageRisk = 30;
    }

    console.log(ageRisk);
    console.log("Hello");

    document.getElementById("ageRiskID").innerHTML = ageRisk;
}