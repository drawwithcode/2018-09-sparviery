var myLoc;
var myMap;
var canvas;

var mappa = new Mappa('Leaflet');

//
var pizzaLat = 41.1771836;
var pizzaLng = 14.3638165;

//
options = {
  lat: 0,
  lng: 0,
  zoom: 6,
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

var pizza = {
	lat: pizzaLat,
	lng: pizzaLng,
	name: 'MandolinoMafia',
}

function preload(){
  myLoc = getCurrentPosition();
}


function setup() {

  canvas = createCanvas(windowWidth, windowHeight);

  options.lat = myLoc.latitude;
  options.lng = myLoc.longitude;

  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);




}


function draw() {

  clear();
  //
  var taaacPizza = calcGeoDistance(myLoc.latitude, myLoc.longitude, pizzaLat, pizzaLng, "km");
  fill(255);
  textSize(14);
  var pointpizza = myMap.latLngToPixel(pizzaLat, pizzaLng);

  //
  noStroke();
  fill(0,0,255);
  strokeWeight(4);
  textSize(40);
  text('YOU ARE ' + Math.round(taaacPizza) + 'KM AWAY FROM THE BEST PIZZA IN THE WORLD' , 50, 50);

  //
  fill(255);
  stroke(40);
  textSize(40);
  var pointHere = myMap.latLngToPixel(myLoc.latitude, myLoc.longitude);




  //
  noStroke();
  push();
  stroke(255);
  strokeWeight(20);
  line(pointHere.x, pointHere.y, pointpizza.x, pointpizza.y);
  pop();
  fill(0,255,0);
  ellipse(pointHere.x, pointHere.y, 20);
  fill(255,0,0);
  ellipse(pointpizza.x, pointpizza.y, 20);

  fill(0,0,255);
  text('YOU', pointHere.x -35, pointHere.y-15);
  text('PIZZA', pointpizza.x-10, pointpizza.y+50);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
