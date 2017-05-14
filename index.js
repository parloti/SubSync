document.getElementById('sincronizar').onclick = function (){
	document.getElementsByTagName('textarea')[1].value = "";
	texto = document.getElementsByTagName('textarea')[0].value;
	falas=texto.split(/\n\n/);
	maxi = falas.length;
	for(i=0;i<maxi;i++){
		falas1=falas[i].replace(/^\s*/, '');
		falas2=falas1.split(/\n/);
		times = falas2[1].match(/^(\d+):(\d+):(\d+),(\d+) --> (\d+):(\d+):(\d+),(\d+)/);
		inicio = document.getElementById('inicio').value.match(/^(\d+):(\d+):(\d+),(\d+)/);
		fim = document.getElementById('fim').value.match(/^(\d+):(\d+):(\d+),(\d+)/);
		if(
		((times[1]>inicio[1]||(times[1]==inicio[1]&&times[2]>inicio[2])||(times[1]==inicio[1]&&times[2]==inicio[2]&&times[3]>inicio[3])||(times[1]==inicio[1]&&times[2]==inicio[2]&&times[3]==inicio[3]&&times[4]>=inicio[4]))||document.getElementById('inicio').value==="00:00:00,000")
		&&
		((times[1]<fim[1]||(times[1]==fim[1]&&times[2]<fim[2])||(times[1]==fim[1]&&times[2]==fim[2]&&times[3]<fim[3])||(times[1]==fim[1]&&times[2]==fim[2]&&times[3]==fim[3]&&times[4]<=fim[4]))||document.getElementById('fim').value==="00:00:00,000")
		) {
			nova= '';
			for(j = 0; j < falas2.length; j++){
				if(j==1){
					sincroniza();
				}
				nova += falas2[j] + "\n" ;
			}
			document.getElementsByTagName('textarea')[1].value += nova + "\n";
		}
		else {
			document.getElementsByTagName('textarea')[1].value += falas1 + "\n\n";
		}
	}
}
function sincroniza(){
	incremento = document.getElementById('incremento').value.match(/^(\+|\-)(\d+):(\d+):(\d+),(\d+)/);
	if(incremento[1]=='+'){
		hora = (a = new Number(times[1])) + (b = new Number(incremento[2]));
		minuto = (a = new Number(times[2])) + (b = new Number(incremento[3]));
		segundo = (a = new Number(times[3])) + (b = new Number(incremento[4]));
		switch(times[4].toString().length){
			case 0:
				times[4] = '000';
				break;
			case 1:
				times[4] += '00';
				break;
			case 2:
				times[4] += '0';
				break;
			default:
				break;
		}
		milesimo = (a = new Number(times[4])) + (b = new Number(incremento[5]));
		if (milesimo > 999){
			milesimo = milesimo - 1000;
			segundo++;
			switch(milesimo.toString().length){
				case 0:
					milesimo = '000';
					break;
				case 1:
					milesimo = '00' + milesimo;
					break;
				case 2:
					milesimo = '0' + milesimo;
					break;
				default:
					break;
			}
		}
		if(segundo>59){minuto++; segundo=segundo-60;}
		if(segundo<10){segundo = '0' + segundo;}
		if(minuto>59){hora++; minuto=minuto-60;}
		if(minuto<10){minuto = '0' + minuto}
		if(hora<10){hora = '0' + hora}
		
		
		hora1 = (a = new Number(times[5])) + (b = new Number(incremento[2]));
		minuto1 = (a = new Number(times[6])) + (b = new Number(incremento[3]));
		segundo1 = (a = new Number(times[7])) + (b = new Number(incremento[4]));
		milesimo1 = (a = new Number(times[8])) + (b = new Number(incremento[5]));
		if (milesimo1 > 999){
			milesimo1 = milesimo1 - 1000;
			segundo1++;
			switch(milesimo1.toString().length){
				case 1:
					milesimo1 = '00' + milesimo1;
					break;
				case 2:
					milesimo1 = '0' + milesimo1;
					break;
				default:
					break;
			}
		}
		if(segundo1>59){minuto1++; segundo1=segundo1-60;}
		if(segundo1<10){segundo1 = '0' + segundo1;}
		if(minuto1>59){hora1++; minuto1=minuto1-60;}
		if(minuto1<10){minuto1 = '0' + minuto1}
		if(hora1<10){hora1 = '0' + hora1}
	}
	else if(incremento[1]=='-'){
		hora = (a = new Number(times[1])) - (b = new Number(incremento[2]));
		minuto = (a = new Number(times[2])) - (b = new Number(incremento[3]));
		segundo = (a = new Number(times[3])) - (b = new Number(incremento[4]));
		switch(times[4].toString().length){
			case 0:
				times[4] = '000';
				break;
			case 1:
				times[4] += '00';
				break;
			case 2:
				times[4] += '0';
				break;
			default:
				break;
		}
		milesimo = (a = new Number(times[4])) - (b = new Number(incremento[5]));
		if (milesimo < 0){
			milesimo = milesimo + 1000;
			segundo--;
			switch(milesimo.toString().length){
				case 0:
					milesimo = '000';
					break;
				case 1:
					milesimo = '00' + milesimo;
					break;
				case 2:
					milesimo = '0' + milesimo;
					break;
				default:
					break;
			}
		}
		if(segundo<0){minuto--; segundo=segundo+60;}
		if(segundo<10){segundo = '0' + segundo;}
		if(minuto<0){hora--; minuto=minuto+60;}
		if(minuto<10){minuto = '0' + minuto}
		if(hora<10){hora = '0' + hora}
		
		
		hora1 = (a = new Number(times[5])) - (b = new Number(incremento[2]));
		minuto1 = (a = new Number(times[6])) - (b = new Number(incremento[3]));
		segundo1 = (a = new Number(times[7])) - (b = new Number(incremento[4]));
		switch(times[8].toString().length){
			case 0:
				times[8] = '000';
				break;
			case 1:
				times[8] += '00';
				break;
			case 2:
				times[8] += '0';
				break;
			default:
				break;
		}
		milesimo1 = (a = new Number(times[8])) - (b = new Number(incremento[5]));
		if (milesimo1 < 0){
			milesimo1 = milesimo1 + 1000;
			segundo1--;
			switch(milesimo1.toString().length){
				case 0:
					milesimo = '000';
					break;
				case 1:
					milesimo1 = '00' + milesimo1;
					break;
				case 2:
					milesimo1 = '0' + milesimo1;
					break;
				default:
					break;
			}
		}
		if(segundo1<0){minuto1--;segundo1=segundo1+60;}
		if(segundo1<10){segundo1 = '0' + segundo1;}
		if(minuto1<0){hora1--; minuto1=minuto1+60;}
		if(minuto1<10){minuto1 = '0' + minuto1}
		if(hora1<10){hora1 = '0' + hora1}
	}
	falas2[1] = hora+':'+minuto+':'+segundo+','+milesimo+' --> '+hora1+':'+minuto1+':'+segundo1+','+milesimo1;
}