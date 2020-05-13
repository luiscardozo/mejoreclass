console.log('inyectando...');

function width_column(colNr, width){
	tbl = document.getElementsByTagName('table')[2];
	tr = tbl.getElementsByTagName("tr");
	for (i = 0; i < tr.length; i++) {

	    if(i == 0) elem = 'th'; else elem = 'td';

	    tds = tr[i].getElementsByTagName(elem);
	    if(tds !== 'undefined' && tds.length > 0) {
		td = tds[colNr];
		if(td){
			td.style.width = width;
		}
	    }
	}
}

function un_hide_column(colNr, display){
	tbl = document.getElementsByTagName('table')[2];
	tr = tbl.getElementsByTagName("tr");
	for (i = 0; i < tr.length; i++) {

	    if(i == 0) elem = 'th'; else elem = 'td';

	    tds = tr[i].getElementsByTagName(elem);
	    if(tds !== 'undefined' && tds.length > 0) {
		td = tds[colNr];
		if(td){
			td.style.display = display;
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

hide_column(1); //Matricula
//hide_column(4); //Titulo
hide_column(5); //Tipo
hide_column(6); //Archivo

console.log('inyectado Mejor EClass...');