var canvas , backgroundImg;
var surveyState = 0;
var voterCount , database , form , voter , survey;

function setup() {  
  canvas = createCanvas(500,1000);

  database = firebase.database();

  survey = new Survey();
  survey.getState();
  survey.start();
}

function draw() {
  background("white");

  
}