var aanvallerKleuren = new Array("img/Blauw.png","img/Rood.png","img/Geel.png","img/Wit.png");
var verdedigerKleuren = new Array("img/Grijs.png","img/Bruin.png","img/Zwart.png","img/Wit.png");

var blauweStenen = new Array("img/Blauw1.png","img/Blauw2.png","img/Blauw3.png","img/Blauw4.png","img/Blauw5.png","img/Blauw6.png");
var rodeStenen = new Array("img/Rood1.png","img/Rood2.png","img/Rood3.png","img/Rood4.png","img/Rood5.png","img/Rood6.png");
var geleStenen = new Array("img/Geel1.png","img/Geel2.png","img/Geel3.png","img/Geel4.png","img/Geel5.png","img/Geel6.png");
var grijzeStenen = new Array("img/Grijs1.png","img/Grijs2.png","img/Grijs3.png","img/Grijs4.png","img/Grijs5.png","img/Grijs6.png");
var bruineStenen = new Array("img/Bruin1.png","img/Bruin2.png","img/Bruin3.png","img/Bruin4.png","img/Bruin5.png","img/Bruin6.png");
var zwarteStenen = new Array("img/Zwart1.png","img/Zwart2.png","img/Zwart3.png","img/Zwart4.png","img/Zwart5.png","img/Zwart6.png");

var aanvallerStenen = new Array(aanvallerKleuren[0],aanvallerKleuren[3],aanvallerKleuren[3]);
var verdedigerStenen = new Array(verdedigerKleuren[0],verdedigerKleuren[3],verdedigerKleuren[3]);

var aanvallerAfbeeldingen = new Array(aanvallerKleuren[0],aanvallerKleuren[3],aanvallerKleuren[3]);
var verdedigerAfbeeldingen = new Array(verdedigerKleuren[0],verdedigerKleuren[3],verdedigerKleuren[3]);

var aanvallers = new Array("#aanvaller1","#aanvaller2","#aanvaller3");
var verdedigers = new Array("#verdediger1","#verdediger2","#verdediger3");

//var aanvallerGeworpen = false;
//var verdedigerGeworpen = false;

var aanvaller1 = 0;
var aanvaller2 = 3;
var aanvaller3 = 3;
var verdediger1 = 0;
var verdediger2 = 3;
var verdediger3 = 3;

$(document).on('tap', '#btnAanvaller', function(event) {
	rolAanvallerStenen ();
	refreshAanvaller();
});

$(document).on('tap', '#btnVerdediger', function(event) {
	rolVerdedigerStenen ();
	refreshVerdediger();
});

$(document).on('tap', '#btnAllDice', function(event) {
	rolAanvallerStenen ();
	rolVerdedigerStenen ();
	refreshAanvaller();
	refreshVerdediger();
});

$(document).on('tap', '#btnReset', function(event) {
	aanvallerStenen[0] = aanvallerKleuren[0];
	aanvallerStenen[1] = aanvallerKleuren[3];
	aanvallerStenen[2] = aanvallerKleuren[3];
	verdedigerStenen[0] = verdedigerKleuren[0];
	verdedigerStenen[1] = verdedigerKleuren[3];
	verdedigerStenen[2] = verdedigerKleuren[3];
	aanvallerAfbeeldingen[0] = aanvallerKleuren[0];
	aanvallerAfbeeldingen[1] = aanvallerKleuren[3];
	aanvallerAfbeeldingen[2] = aanvallerKleuren[3];
	verdedigerAfbeeldingen[0] = verdedigerKleuren[0];
	verdedigerAfbeeldingen[1] = verdedigerKleuren[3];
	verdedigerAfbeeldingen[2] = verdedigerKleuren[3];
	aanvaller1 = 0;
	aanvaller2 = 3;
	aanvaller3 = 3;
	verdediger1 = 0;
	verdediger2 = 3;
	verdediger3 = 3;
	refreshAanvaller();
	refreshVerdediger();
});


function checkPosition(steen) {
	if (steen < 3) {
		steen++;	
	}
	else {
		steen = 0;
	}
	return steen;
}

function veranderAanvallerSteen (positie, steen) {
	aanvallerAfbeeldingen[positie] = aanvallerKleuren[steen];
	aanvallerStenen[positie] = aanvallerKleuren[steen];
	$( aanvallers[positie] ).attr( "src" , aanvallerKleuren[steen]);
}

function veranderVerdedigerSteen (positie, steen) {
	verdedigerAfbeeldingen[positie] = verdedigerKleuren[steen];
	verdedigerStenen[positie] = verdedigerKleuren[steen];
	$( verdedigers[positie] ).attr( "src" , verdedigerKleuren[steen]);
}

$(document).on('tap', '#aanvaller1', function(event) {
	aanvaller1 = checkPosition (aanvaller1);
	veranderAanvallerSteen(0, aanvaller1);
});

$(document).on('tap', '#aanvaller2', function(event) {
	aanvaller2 = checkPosition (aanvaller2);
	veranderAanvallerSteen(1, aanvaller2);
});

$(document).on('tap', '#aanvaller3', function(event) {
	aanvaller3 = checkPosition (aanvaller3);
	veranderAanvallerSteen(2, aanvaller3);
});

$(document).on('tap', '#verdediger1', function(event) {
	verdediger1 = checkPosition (verdediger1);
	veranderVerdedigerSteen(0, verdediger1);
});

$(document).on('tap', '#verdediger2', function(event) {
	verdediger2 = checkPosition (verdediger2);
	veranderVerdedigerSteen(1, verdediger2);
});

$(document).on('tap', '#verdediger3', function(event) {
	verdediger3 = checkPosition (verdediger3);
	veranderVerdedigerSteen(2, verdediger3);
});

function refreshAanvaller() {
	for (var i = 0; i < 3; i++) {
		$( aanvallers[i] ).attr( "src" , aanvallerStenen[i]);
	}
}

function refreshVerdediger() {
	for (var i = 0; i < 3; i++) {
		$( verdedigers[i] ).attr( "src" , verdedigerStenen[i]);
	}
}

function rolAanvallerStenen () {
	for (var i = 0; i < 3; i++) {
		var random = Math.floor((Math.random()*5));
		switch (aanvallerAfbeeldingen[i]) {
			case aanvallerKleuren[0]:
				aanvallerStenen[i] = blauweStenen[random];
				break;
			case aanvallerKleuren[1]:
				aanvallerStenen[i] = rodeStenen[random];
				break;
			case aanvallerKleuren[2]:
				aanvallerStenen[i] = geleStenen[random];
				break;
			default:
				break;
		}
	}
}

function rolVerdedigerStenen () {
	for (var i = 0; i < 3; i++) {
		var random = Math.floor((Math.random()*5));
		switch (verdedigerAfbeeldingen[i]) {
			case verdedigerKleuren[0]:
				verdedigerStenen[i] = grijzeStenen[random];
				break;
			case verdedigerKleuren[1]:
				verdedigerStenen[i] = bruineStenen[random];
				break;
			case verdedigerKleuren[2]:
				verdedigerStenen[i] = zwarteStenen[random];
				break;
			default:
				break;
		}
	}
}