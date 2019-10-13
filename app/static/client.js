var el = x => document.getElementById(x);

attr = [];
var posibles = new Map();
datos8Bits = [
"img0.gif:Male,Bald,Mustache,Black_Hair",
"img1.gif:Male,Brown_Hair,Mustache,Bangs,Wavy_Hair",
"img2.gif:Male,Gray_Hair,Mustache,Pale_Skin,Bangs,Wavy_Hair",
"img3.gif:Male,Pale_Skin,Bangs,Wavy_Hair,Black_Hair",
"img4.gif:Male,Bangs,Wavy_Hair,Mustache,Black_Hair",
"img5.gif:Male,Bald,Black_Hair,Pale_Skin",
"img6.gif:Male,No_Beard,Black_Hair,Pale_Skin,Bangs,Wavy_Hair",
"img7.gif:Male,No_Beard,Brown_Hair,Pale_Skin,Bangs,Wavy_Hair",
"img8.gif:Male,Bangs,Black_Hair",
"img9.gif:Male,Bald,Pale_Skin",
"img10.gif:Male,Brown_Hair,Bangs,Mustache",
"img11.gif:Male,No_Beard,Brown_Hair,Pale_Skin,Straight_Hair",
"img12.gif:Male,Bald,Blond_Hair,Mustache,Pale_Skin",
"img13.gif:Male,Pale_Skin,Mustache,Black_Hair,Bangs",
"img14.gif:Male,Blond_Hair,Mustache,Bangs",
"img15.gif:Male,Straight_Hair,Mustache,Blond_Hair",
"img16.gif:Male,Bangs,Gray_Hair,No_Beard",
"img17.gif:Male,Straight_Hair,Gray_Hair",
"img18.gif:Male,Bald,Blond_Hair,Pale_Skin",
"img19.gif:Male,Mustache,Straight_Hair,Black_Hair",
"img20.gif:Male,Bangs,Gray_Hair,Pale_Skin",
"img21.gif:Male,Bald,Brown_Hair,Pale_Skin",
"img22.gif:Male,Bangs,Pale_Skin,Blond_Hair",
"img23.gif:Male,Straight_Hair,Mustache,Pale_Skin,Blond_Hair",
"img24.gif:Male,Bangs,Brown_Hair",
"img25.gif:Male,Bald,Blond_Hair",
"img26.gif:Male,Pale_Skin,Gray_Hair,Straight_Hair,No_Beard",
"img27.gif:Male,No_Beard,Bangs,Brown_Hair,Wavy_Hair",
"img28.gif:Male,Pale_Skin,Gray_Hair,No_Beard,Bangs",
"img29.gif:Male,Blond_Hair,Wavy_Hair,Bangs,Pale_Skin",
"img30.gif:Male,Bald,Brown_Hair",
"img31.gif:Male,Bangs,No_Beard,Blond_Hair",
"img32.gif:Male,Pale_Skin,No_Beard,Bangs,Brown_Hair",
"img33.gif:Male,Blond_Hair,Straight_Hair",
"img34.gif:Male,Mustache,Gray_Hair,Bangs,Wavy_Hair",
"img35.gif:Male,Straight_Hair,No_Beard,Gray_Hair",
"img36.gif:Male,Mustache,Brown_Hair,Pale_Skin,Straight_Hair",
"img37.gif:Male,Bald,Black_Hair,Pale_Skin",
"img38.gif:Male,Bald,Mustache,Gray_Hair,Pale_Skin",
"img39.gif:Male,Bangs,Mustache,Black_Hair",
"img40.gif:Male,Blond_Hair,No_Beard,Bangs,Wavy_Hair",
"img41.gif:Male,Pale_Skin,No_Beard,Bangs,Wavy_Hair,Gray_Hair",
"img42.gif:Male,No_Beard,Bangs,Wavy_Hair,Gray_Hair",
"img43.gif:Male,Bangs,Wavy_Hair,Black_Hair",
"img44.gif:Male,Bald,No_Beard",
"img45.gif:Male,Brown_Hair,Bangs,Brown_Hair",
"img46.gif:Male,Pale_Skin,Blond_Hair,Bangs",
"img47.gif:Male,Pale_Skin,Brown_Hair,Straight_Hair",
"img48.gif:Male,Straight_Hair,Blond_Hair,Pale_Skin",
"img49.gif:Male,Bangs,Wavy_Hair,Blond_Hair",
"img50.gif:Male,Brown_Hair,Bangs,Wavy_Hair,Mustache,Pale_Skin",
"img51.gif:Male,Mustache,Bangs,Pale_Skin",
"img52.gif:Male,Bald,Mustache,Gray_Hair",
"img53.gif:Male,Straight_Hair,Black_Hair",
"img54.gif:Male,Gray_Hair,Mustache,Straight_Hair",
"img55.gif:Male,Bald,Mustache,Gray_Hair",
"img56.gif:Male,Blond_Hair,Mustache,Bangs,Wavy_Hair",
"img57.gif:Male,Straight_Hair,Brown_Hair,Mustache",
"img58.gif:Male,No_Beard,Black_Hair,Bangs",
"img59.gif:Male,Blond_Hair,Bangs,Wavy_Hair,Mustache,Pale_Skin",
"img60.gif:Male,Bangs,Blond_Hair",
"img61.gif:Male,Pale_Skin,Straight_Hair,Black_Hair",
"img62.gif:Male,Blond_Hair,No_Beard,Straight_Hair",
"img63.gif:Male,Straight_Hair,Blond_Hair,No_Beard",
"img64.gif:Male,Pale_Skin,Bangs,Wavy_Hair,Gray_Hair",
"img65.gif:Male,Pale_Skin,Gray_Hair,Straight_Hair,Mustache",
"img66.gif:Male,Bangs,Wavy_Hair,Gray_Hair",
"img67.gif:Male,Pale_Skin,No_Beard,Black_Hair",
"img68.gif:Male,Brown_Hair,Straight_Hair",
"img69.gif:Male,Pale_Skin,Straight_Hair,Black_Hair,No_Beard",
"img70.gif:Male,Bald,Brown_Hair,Pale_Skin",
"img71.gif:Male,Black_Hair,Bangs",
"img72.gif:Male,Gray_Hair,Straight_Hair,Pale_Skin",
"img73.gif:Male,Brown_Hair,Bangs,Wavy_Hair,Pale_Skin",
"img74.gif:Male,Brown_Hair,Bangs,No_Beard",
"img75.gif:Male,Brown_Hair,Bangs,Mustache",
"img76.gif:Male,Mustache,Bangs,Wavy_Hair,Pale_Skin",
"img77.gif:Male,Bald,Gray_Hair",
"img78.gif:Male,Mustache,Gray_Hair,Bangs",
"img79.gif:Male,Bangs,Wavy_Hair,Brown_Hair",
"img80.gif:Male,Gray_Hair,Bangs",
"img81.gif:Male,Brown_Hair,No_Beard,Straight_Hair",
"img82.gif:Male,No_Beard,Straight_Hair,Black_Hair",
"img83.gif:Male,Blond_Hair,No_Beard,Bangs,Wavy_Hair",
"img84.gif:Male,Mustache,Straight_Hair,Black_Hair,Pale_Skin",
"img85.gif:Male,Bald,Brown_Hair,Mustache",
"img86.gif:Male,Bald,Blond_Hair",
"img87.gif:Male,Pale_Skin,Bangs,Mustache,Gray_Hair",
"img88.gif:Male,No_Beard,Bangs,Wavy_Hair,Black_Hair",
"img89.gif:Male,Bald,Black_Hair",
"img90.gif:Gray_Hair,Straight_Hair,No_Beard,Bangs",
"img91.gif:Blond_Hair,Straight_Hair,No_Beard,Bangs",
"img92.gif:Black_Hair,Wavy_Hair,No_Beard",
"img93.gif:Gray_Hair,Wavy_Hair,No_Beard,Bangs",
"img94.gif:Black_Hair,Straight_Hair,No_Beard,Bangs",
"img95.gif:Blond_Hair,Wavy_Hair,No_Beard",
"img96.gif:Blond_Hair,Straight_Hair,No_Beard,Bangs",
"img97.gif:Brown_Hair,Wavy_Hair,No_Beard,Bangs",
"img98.gif:Brown_Hair,Wavy_Hair,No_Beard",
"img99.gif:Gray_Hair,Straight_Hair,No_Beard,Bangs",
"img100.gif:Gray_Hair,Wavy_Hair,No_Beard",
"img101.gif:Brown_Hair,Straight_Hair,No_Beard,Bangs",
"img102.gif:Gray_Hair,Straight_Hair,No_Beard,Bangs",
"img103.gif:Blond_Hair,Wavy_Hair,No_Beard",
"img104.gif:Brown_Hair,Straight_Hair,No_Beard,Bangs",
"img105.gif:Black_Hair,Wavy_Hair,No_Beard,Bangs",
"img106.gif:Gray_Hair,Straight_Hair,No_Beard,Bangs",
"img107.gif:Black_Hair,Wavy_Hair,No_Beard",
"img108.gif:Black_Hair,Wavy_Hair,No_Beard,Bangs",
"img109.gif:Blond_Hair,Wavy_Hair,No_Beard,Bangs",
"img110.gif:Black_Hair,Wavy_Hair,No_Beard,Bangs",
"img111.gif:Black_Hair,Straight_Hair,No_Beard,Bangs",
"img112.gif:Black_Hair,Straight_Hair,No_Beard,Bangs",
"img113.gif:Gray_Hair,Wavy_Hair,No_Beard",
"img114.gif:Gray_Hair,Wavy_Hair,No_Beard",
"img115.gif:Black_Hair,Straight_Hair,No_Beard,Bangs",
"img116.gif:Blond_Hair,Wavy_Hair,No_Beard,Bangs",
"img117.gif:Black_Hair,Straight_Hair,No_Beard,Bangs",
"img118.gif:Blond_Hair,Wavy_Hair,No_Beard",
"img119.gif:Gray_Hair,Wavy_Hair,No_Beard",
"img120.gif:Blond_Hair,Wavy_Hair,No_Beard,Bangs",
"img121.gif:Gray_Hair,Wavy_Hair,No_Beard,Bangs",
"img122.gif:Blond_Hair,Straight_Hair,No_Beard,Bangs",
"img123.gif:Gray_Hair,Wavy_Hair,No_Beard,Bangs",
"img124.gif:Black_Hair,Wavy_Hair,No_Beard",
"img125.gif:Black_Hair,Wavy_Hair,No_Beard",
"img126.gif:Brown_Hair,Straight_Hair,No_Beard,Bangs",
"img127.gif:Brown_Hair,Wavy_Hair,No_Beard",
"img128.gif:Gray_Hair,Straight_Hair,No_Beard,Bangs",
"img129.gif:Black_Hair,Straight_Hair,No_Beard,Bangs",
"img130.gif:Brown_Hair,Straight_Hair,No_Beard,Bangs",
"img131.gif:Brown_Hair,Wavy_Hair,No_Beard,Bangs",
"img132.gif:Brown_Hair,Wavy_Hair,No_Beard",
"img133.gif:Gray_Hair,Wavy_Hair,No_Beard,Bangs",
"img134.gif:Brown_Hair,Wavy_Hair,No_Beard,Bangs",
"img135.gif:Gray_Hair,Straight_Hair,No_Beard,Bangs",
"img136.gif:Black_Hair,Wavy_Hair,No_Beard,Bangs",
"img137.gif:Brown_Hair,Wavy_Hair,No_Beard",
"img138.gif:Brown_Hair,Straight_Hair,No_Beard,Bangs",
"img139.gif:Brown_Hair,Wavy_Hair,No_Beard,Bangs"
];

maxPoints = 0;
selected = 'img0.gif';


function showPicker() {
  el("file-input").click();
}

function showPicked(input) {
  el("upload-label").innerHTML = input.files[0].name;
  var reader = new FileReader();
  reader.onload = function(e) {
    el("image-picked").src = e.target.result;
    el("image-picked").className = "";
  };
  reader.readAsDataURL(input.files[0]);
}

function analyze() {
  attr = [];
  posibles = new Map();
  maxPoints = 0;
  selected = 'img0.gif';
  
  var uploadFiles = el("file-input").files;
  if (uploadFiles.length !== 1) alert("Please select a file to analyze!");

  el("analyze-button").innerHTML = "Analyzing...";
  var xhr = new XMLHttpRequest();
  var loc = window.location;
  xhr.open("POST", `${loc.protocol}//${loc.hostname}:${loc.port}/analyze`,
    true);
  xhr.onerror = function() {
    alert(xhr.responseText);
  };
  xhr.onload = function(e) {
    if (this.readyState === 4) {
      var response = JSON.parse(e.target.responseText);
      attr = response["result"];
      console.log(attr);
      obtainResult();
      //el("result-label").innerHTML = `Result = ${response["result"]}`;
    }
    el("analyze-button").innerHTML = "Analyze";
  };
  
  var fileData = new FormData();
  fileData.append("file", uploadFiles[0]);
  xhr.send(fileData);
}

function obtainResult() {
	result = attr.split(';');
	el("result-label").innerHTML = 'You: ';
	resultLen = result.length;
	for (i = 0; i < resultLen; ++i) {
		if(i != 0) el("result-label").innerHTML += ', ' + result[i];
		else el("result-label").innerHTML += result[i];
	}
	
	attr = result;
	//console.log('INI: '+ attr);
	
	buscar8Bits();
	
	
	select8Bits();
	/*
	console.log('Points: ');
	for (var [clave, valor] of posibles) {
	  console.log(clave + " = " + valor);
	}
	console.log(' MaxPoints: ' + maxPoints + ' 8Bits -> ' + selected);
	*/
	img8bits = document.getElementById('bits8');
	img8bits.src = '../static/8Bits/' + selected;
	img8bits.className = "";
	document.getElementById('flecha').className = "";
	
	//el("result-label-8bits").innerHTML = 'Your 8Bits character: ' + result;
	
}

function buscar8Bits() {
	datos8Bits.forEach(datosIteration);
}

function datosIteration(value, index, array) {
	x = value.split(':');
	id = x[0];
	dataAttr = x[1].split(',');
	
	dataAttrLen = dataAttr.length;
	attrLen = attr.length;
	points = 0;
	for(i = 0; i < dataAttrLen; i++) {
		for(j = 0; j < attrLen; j++) {
			//console.log('dataAttr: ' + dataAttr[i] + '  ' + 'attr: ' + attr[j]);
			if (dataAttr[i] == 'Male' && dataAttr[i] == attr[j]) points += 5;
			else if (dataAttr[i] == attr[j]) points += 1;
		}
		if(points > maxPoints) maxPoints = points;
		//posibles.push(id+':'+points);
		posibles.set(id, points);
	}
	
	
	//console.log(id + ' -> ' + dataAttr + ' - ' + attr);
}

function select8Bits() {
	options = [];
	posiblesLen = posibles.size;
	for (var [clave, valor] of posibles) {
	  if(valor == maxPoints) options.push(clave);
	}
	/*
	for(i = 0; i < posiblesLen; i++) {
		aux = posibles[i].split(':');
		idPos = aux[0];
		points = aux[1];
		if(points == maxPoints) options.push(idPos);
	}
	*/
	optionsLen = options.length;
	random = Math.floor((Math.random() * optionsLen) + 1);
	random -= 1;
	selected = options[random];
	//console.log('---' + random + '---' + optionsLen);
}

