console.log('inyectando...');

function width_column(colNr, width){
	var tbl = document.getElementsByTagName('table')[2];
	var tr = tbl.getElementsByTagName("tr");
	for (var i = 0; i < tr.length; i++) {

		var elem = 'td';
	    if(i == 0) elem = 'th';

	    var tds = tr[i].getElementsByTagName(elem);
	    if(tds !== 'undefined' && tds.length > 0) {
			var td = tds[colNr];
			if(td){
				td.style.width = width;
			}
	    }
	}
}

function un_hide_column(colNr, display){
	for(var idNr = 1; idNr <= 20; idNr++){
		var div = document.getElementById(idNr.toString());
		if(!div) continue;

		var tbl = div.getElementsByTagName('table')[0];
		var tr = tbl.getElementsByTagName("tr");
		for (var i = 0; i < tr.length; i++) {

			var elem = 'td';
			if(i == 0) elem = 'th';

			var tds = tr[i].getElementsByTagName(elem);
			if(tds !== 'undefined' && tds.length > 0) {
				var td = tds[colNr];
				if(td){
					td.style.display = display;
					console.log(`setting column ${colNr} to ${display}`);
				}
			}
		}
	}
}

function unhide_column(colNr){
	un_hide_column(colNr, '');
}

function hide_column(colNr){
	un_hide_column(colNr, 'none');
}

function resaltar_nombre(){
	console.log("Resaltar nombres");
	for(var idNr = 1; idNr <= 20; idNr++){
		var div = document.getElementById(idNr.toString());
		if(!div) continue;

		var tbl = div.getElementsByTagName('table')[0];
		var tr = tbl.getElementsByTagName("tr");
		//recorremos cada fila
		for (var i = 0; i < tr.length; i++) {
			if(i == 0) continue;	//saltamos th
			
			var tds = tr[i].getElementsByTagName('td');
			if(tds !== 'undefined' && tds.length > 0) {
				//estamos dentro de un row válido.
				var td_Nombre = tds[3];		//la columna 3 es la de nombres
				if(td_Nombre){
					const nameSpl = td_Nombre.innerHTML.split(',');
					td_Nombre.innerHTML = nameSpl[0] + ', <b style="color:green;">' + nameSpl[1] + '</b>';
				}
			}
		}
	}
}

resaltar_nombre();
hide_column(2); //Matricula
//hide_column(4); //Titulo
hide_column(5); //Tipo
hide_column(6); //Archivo

console.log('inyectado Mejor EClass...');
