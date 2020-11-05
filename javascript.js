//window.setInterval(function(){
//	UpdateComparison();
//}, 5000);

const input1 = document.getElementById('myFile1').files[0];
const input2 = document.getElementById("myFile2").files[0];
var output1 = document.getElementById("screen1"), output2 = document.getElementById("screen2");

function fileChange(inputFile, targetScreen) {
	const reader = new FileReader()
  reader.onload = handleFileLoad;
  reader.readAsText(event.target.files[0])
}

function handleFileLoad(event){
	var text = event.target.result;
	var lines = text.split(/[\r\n]+/g);
  for(var i = 0; i < lines.length; i++) {
  	document.getElementById("screen1").textContent += "Line " + i + " " + lines[i] + "\r\n";
	}
}

function UpdateComparison() {
	console.log("clicked");
	var screen1text = document.getElementById("screen1").value.split(/[\r\n]+/g);
  var screen2text = document.getElementById("screen2").value.split(/[\r\n]+/g);
  document.getElementById("screen1").innerHTML = "";
  document.getElementById("screen2").innerHTML = "";
  for (i=0;i<screen1text.length;i++) {
  	if (screen1text[i] = screen2text[i]) {
    	document.getElementById("screen1").innerHTML += "<span style=\"color:red;\">" + screen1text[i] + "</span>";
      document.getElementById("screen2").innerHTML += "<span style=\"color:red;\">" + screen2text[i] + "</span>";
    } else {
    	document.getElementById("screen1").innerHTML += screen1text[i];
      document.getElementById("screen2").innerHTML += screen2text[i];
    }
  }
}
