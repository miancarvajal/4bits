function mostrarCasillas(activado){
	if (activado.checked) {
            element.style.display='block';
        }
        else {
            element.style.display='none';
        }
	}

function showComp() {
        element = document.getElementById("comp");
        check = document.getElementById("chkComp");
        mostrarCasillas(check);
    }
    
function showAsesoria() {
        element = document.getElementById("asesor");
        check = document.getElementById("chkAsesoria");
        mostrarCasillas(check);
    }

function showRedesSociales() {
        element = document.getElementById("redSocial");
        check = document.getElementById("chkRedesSociales");
        mostrarCasillas(check);
    }
    
function showRedes() {
        element = document.getElementById("red");
        check = document.getElementById("chkRedes");
        mostrarCasillas(check);
    }
    
function showPagWeb() {
        element = document.getElementById("pagWeb");
        check = document.getElementById("chkPagWeb");
        mostrarCasillas(check);
    }
    
function showCyberSeg() {
        element = document.getElementById("cyberSeg");
        check = document.getElementById("chkCyberSeg");
        mostrarCasillas(check);
    }

function showCel() {
        element = document.getElementById("cel");
        check = document.getElementById("chkCel");
        mostrarCasillas(check);
    }

	function blqnum(e) 
	{
		evt = e ? e : event;
		tecla = (window.Event) ? evt.which : evt.keyCode;
		if ((tecla < 97 || tecla >122)&& (tecla < 65 || tecla >90) && (tecla != 8 && tecla != 0 && tecla != 46 && tecla != 241 && tecla != 32  && tecla != 209  && tecla != 193 && tecla != 225 && tecla != 201 && tecla != 233 && tecla != 205 && tecla != 237 && tecla != 211 && tecla != 243 && tecla != 208 && tecla != 250))
		{
		  return false;
		 }
		 return true;
	}
	/*
    Elaborado por: Miguel Angel Carvajal Copyright © 2017  
 */ 		
	function blqlet(e) 
	{
		evt = e ? e : event;
		tecla = (window.Event) ? evt.which : evt.keyCode;
		if ((tecla < 48 || tecla > 57) && (tecla != 8 && tecla != 0 && tecla != 46))
		{
		  return false;
		}
		return true;
	}
/*
    Elaborado por: Miguel Angel Carvajal Copyright © 2017  
 */ 

	$(function() {
		$('#txtDate').datepicker({ 
		beforeShowDay: $.datepicker.noWeekends 
		});
	});
