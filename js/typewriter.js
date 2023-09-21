var CONTENT = [ 
	"Siber Güvenlik",
	"Web Geliştirme",
    "Defacer"];
var PART = 0;
var PART_INDEX = 0;
var INTERVAL_VAL;
var ELEMENT = document.querySelector("#text");
var CURSOR = document.querySelector("#cursor");
function Type() { 	
	var text =  CONTENT[PART].substring(0, PART_INDEX + 1);
	ELEMENT.innerHTML = text;
	PART_INDEX++;
	if(text === CONTENT[PART]) {
		CURSOR.style.display = 'none';
		clearInterval(INTERVAL_VAL);
		setTimeout(function() {
			INTERVAL_VAL = setInterval(Delete, 50);
		}, 1000);}}
function Delete() {
	var text =  CONTENT[PART].
	substring(0, PART_INDEX - 1);
	ELEMENT.innerHTML = text;
	PART_INDEX--;
	if(text === '') {
		clearInterval(INTERVAL_VAL);
		if(PART == (CONTENT.length - 1))
			PART = 0;
		else
			PART++;
		PART_INDEX = 0;		
		setTimeout(function() {
			CURSOR.style.display = 'inline-block';
			INTERVAL_VAL = setInterval(Type, 100);
		}, 200);}}
INTERVAL_VAL = setInterval(Type, 100);
