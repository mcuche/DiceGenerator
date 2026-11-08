// Dice Generator: three attacker dice and three defender dice.
// Tap a die to cycle through its colors. The last color (white) means "not in use".
// Rolling shows a random face (1-6) on every die that is not white.
//
// Images follow a naming pattern: img/<Kleur>.png is the blank die,
// img/<Kleur><ogen>.png shows a face, e.g. img/Blauw4.png.

var AANTAL_STENEN = 3;
var AANTAL_OGEN = 6;
var WIT = 3;                    // index of 'Wit' in both color lists
var BEGINSTAND = [0, WIT, WIT]; // one colored die, two unused

var zijden = {
	aanvaller:  { kleuren: ['Blauw', 'Rood', 'Geel', 'Wit'],   stenen: BEGINSTAND.slice() },
	verdediger: { kleuren: ['Grijs', 'Bruin', 'Zwart', 'Wit'], stenen: BEGINSTAND.slice() }
};

// Show die i of a side; without `ogen` it shows the blank die in its color.
function toonSteen(naam, i, ogen) {
	var zijde = zijden[naam];
	var kleur = zijde.kleuren[zijde.stenen[i]];
	$('#' + naam + (i + 1)).attr('src', 'img/' + kleur + (ogen || '') + '.png');
}

function gooi(naam) {
	for (var i = 0; i < AANTAL_STENEN; i++) {
		if (zijden[naam].stenen[i] !== WIT) {
			toonSteen(naam, i, 1 + Math.floor(Math.random() * AANTAL_OGEN));
		}
	}
}

function wisselKleur(naam, i) {
	var zijde = zijden[naam];
	zijde.stenen[i] = (zijde.stenen[i] + 1) % zijde.kleuren.length;
	toonSteen(naam, i);
}

function reset(naam) {
	zijden[naam].stenen = BEGINSTAND.slice();
	for (var i = 0; i < AANTAL_STENEN; i++) {
		toonSteen(naam, i);
	}
}

$(document).on('tap', '#btnAanvaller', function () { gooi('aanvaller'); });
$(document).on('tap', '#btnVerdediger', function () { gooi('verdediger'); });
$(document).on('tap', '#btnAllDice', function () { gooi('aanvaller'); gooi('verdediger'); });
$(document).on('tap', '#btnReset', function () { reset('aanvaller'); reset('verdediger'); });

// #aanvaller1..3 and #verdediger1..3: tapping a die changes its color.
$.each(zijden, function (naam) {
	for (var i = 0; i < AANTAL_STENEN; i++) {
		$(document).on('tap', '#' + naam + (i + 1), wisselKleur.bind(null, naam, i));
	}
});
