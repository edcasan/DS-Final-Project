// Create an initial map object
/* Set the longitude, latitude, and the starting zoom level
var myMap = L.map("map", {
	center: [15.5994, -28.6731],
	zoom: 3
  });
  
  
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
	attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
	tileSize: 512,
	maxZoom: 12,
	zoomOffset: -1,
	id: "mapbox/streets-v11",
	accessToken: "pk.eyJ1IjoiYmVyZW5pY2UtZHMiLCJhIjoiY2trN2txN3YzMDJjZDJvbzdnNnQ1azd0OSJ9.R0DgOZ9y2CVzBHjau0grvw"
  }).addTo(myMap);
  
  
  var countries = [
	{
	  name: "United States",
	  location: [38.541, -98.608],
	  people_vaccinated: 26376556.0,
	  population: 331002651,
	
	},
	{
	  name: "China",
	  location: [31.277, 112.197],
	  people_vaccinated: 21794325.0,
	  population: 1439323776
	},
	{
	  name: "United Kingdom",
	  location: [55.968, -4.243],
	  people_vaccinated: 7956920.0,
	  population: 15493721
	},
	{
	  name: "England",
	  location: [51.555, -0.030],
	  people_vaccinated: 6936235.0,
	  population: 55382791
	},
	{
	  name: "Israel",
	  location: [30.803, 34.486],
	  people_vaccinated: 4535713.0,
	  population:  8655535 
	},
	{
	  name: "India",
	  location: [22.912, 78.948],
	  people_vaccinated: 3379485.0,
	  population: 1380004385
	},
	{
	  name: "Turkey",
	  location: [39.103, 34.991],
	  people_vaccinated: 2540614.0,
	  population: 84339067
	},
	{
	  name: "United Arab Emirates",
	  location: [23.871, 54.147],
	  people_vaccinated: 2317170.0,
	  population: 9890402
	},
	{
	  name: "Germany",
	  location: [51.158, 10.077],
	  people_vaccinated: 2296069.0, 
	  population:83783942
	},
	{
	  name: "Italy",
	  location: [43.060, 12.441],
	  people_vaccinated: 808746.0,
	  population: 60461826
	},
	{
	  name: "Brasil",
	  location: [-8.878, -56.570],
	  people_vaccinated: 1633573.0,
	  population: 212559417 
	},
	{
	  name: "Spain",
	  location: [39.581, -3.390],
	  people_vaccinated: 1366039.0,
	  population: 212559417 
	},
	{
	  name: "France",
	  location: [46.691, 2.551],
	  people_vaccinated: 1261221.0,
	  population: 65273511 
	},
	{
	  name: "Poland",
	  location: [53.020, 18.713],
	  people_vaccinated: 1069106.0,
	  population: 37846611
	},
	{
	  name: "Russia",
	  location: [62.606, 94.795],
	  people_vaccinated: 927026.0,
	  population: 145934462
	}
  ];
  
  // Loop through the countries array
  for (let country of countries){

  // Conditionals for countries vaccination
	let color = "";
  
	if(country.people_vaccinated>5000000){
	  color = "seagreen"
	  radio = country.people_vaccinated / 30
	}else if (country.people_vaccinated>1600000){
	  color = "gold"
	  country.people_vaccinated / 35
	}else if (country.people_vaccinated>1200000){
	  color = "darkorange"
	  country.people_vaccinated / 40
	}else{
	  color = "red"
	  country.people_vaccinated / 45
	}
  // Add circles to map
  L.circle(country.location,{
	color: "Gainsboro",
	fillColor : color,
	fillOpacity: 0.75,
	// Adjust radius
	radius: radio
  })
  .bindPopup(`<h1>${country.name}</h1> <hr> <p>People Vaccinated: ${country.people_vaccinated}</p>
  <hr> <p>Population: ${country.population}<p>`)
	.addTo(myMap)
  } */

 // save form data


let button = d3.select("#btnPredict");
button.on("click", function() {
	let predictDiv = d3.select("#predictionResult")
    answers = []
    let age = d3.select("#age");
	let weight = d3.select("#weight");
	let pregnancy = d3.select("#pregnancy");
    let smoke = d3.select("#smoke");
	let gender = d3.select("#gender");
	let epoc = d3.select("#epoc");
	let hypertension = d3.select("#hypertension");
	let asthma = d3.select("#asthma");
	let diabetes = d3.select("#diabetes");
	let dinmusupr = d3.select("#inmusupr");
	let cardiovascular = d3.select("#cardiovascular");
	let renal = d3.select("#renal");
	
    let ageValue = parseInt(age.property("value"));
	let weightValue = weight.property("value");	
    let pregnancyValue = pregnancy.property("value");
    let smokeValue = smoke.property("value");
	let genderValue = gender.property("value");
	var male = 0, female = 0
	
	let epocValue = epoc.property("value");
	let hypertensionValue = hypertension.property("value");
	let asthmaValue = asthma.property("value");
	let diabetesValue = diabetes.property("value");
	let dinmusuprValue = dinmusupr.property("value");
	let cardiovascularValue = cardiovascular.property("value");
	let renalValue = renal.property("value");

	if (genderValue == "MUJER"){
		female = 1;
	} else if(genderValue == "HOMBRE"){
		male = 1;
	}
	
	if(parseInt(weightValue)>90){
		weightValue = 1;
	}else {
		weightValue = 0	;
	}

	let age1 = 0, age2 = 0, age3 = 0, age4 = 0, age5 = 0, age6 = 0
	if (ageValue < 25){
		age1 = 1;
	} else if(ageValue < 41){
		age2 = 1;
	} else if(ageValue < 56){
		age3 = 1;
	} else if(ageValue < 71){
		age4 = 1;
	} else if(ageValue < 86){
		age5 = 1;
	} else{
		age6 = 1;
	}

	var requestData = {
		"EMBARAZO": parseInt(pregnancyValue),
		"DIABETES":	parseInt(diabetesValue),
		"EPOC": parseInt(epocValue),
		"ASMA": parseInt(asthmaValue),
		"INMUSUPR": parseInt(dinmusuprValue),
		"HIPERTENSION": parseInt(hypertensionValue),
		"CARDIOVASCULAR": parseInt(cardiovascularValue),
		"OBESIDAD": weightValue,
		"RENAL_CRONICA": parseInt(renalValue),
		"TABAQUISMO": parseInt(smokeValue),
		"SEXO_HOMBRE": male,
		"SEXO_MUJER": female,
		"Age Ranges_25 - 40": age2,
		"Age Ranges_41 - 55": age3,
		"Age Ranges_56 - 70": age4,
		"Age Ranges_71 - 85": age5,
		"Age Ranges_85+": age6,
		"Age Ranges_<25": age1
	}
	
<<<<<<< HEAD
	d3.json("http://127.0.0.1:5000/form/",{
=======
	d3.json("/api/",{
>>>>>>> e209193b831ba3a36c25b783ef3bea9c9c69142c
		method:"POST",
		body: JSON.stringify(requestData),
		headers: {
		  "Content-type": "application/json; charset=UTF-8",
		  "Access-Control-Allow-Origin": "true"
		}
	  }).then(data=> {
		  console.log(data['results']['results']);
		predictDiv.html( data['results']['results'] === 0 ? "No Intubation risk" : "Intubation risk" );
	})



    console.log(answers);
})


