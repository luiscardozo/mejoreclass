console.log("MejorEClass Cargando");

function focused(el){
	tabRow = el.parentNode.parentNode; //.nodeName;
	tabRow.bgColor = '#C0C0C0';
}

function blurred(el){
	tabRow = el.parentNode.parentNode; //.nodeName;
	tabRow.bgColor = '#DCE4E4';
}

function addEventsToInputs(el){
	el.addEventListener("focus", function() {
		focused(el);
	});
	el.addEventListener("blur", function() {
		blurred(el);
	});
}

//onfocus="focused(this)"
//onblur="blurred(this)"
//object.addEventListener("blur", myScript);

inputs = document.querySelectorAll('[id^="asistencia_"]');
inputs.forEach(element => addEventsToInputs(element));

console.log("MejorEClass Inyectado");
