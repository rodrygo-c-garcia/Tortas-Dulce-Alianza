const giro = document.querySelector('#header');

giro.addEventListener('click', () => {
  giro.classList.toggle('activo');
});


function mostrarPaginaInicio(pagina){
	var ajax=new XMLHttpRequest();
	ajax.open("GET", pagina + "?nocache=Math.random()", true);
	ajax.onreadystatechange=function ()
	{
		if (ajax.readyState==4)
		{
			document.getElementById('main').innerHTML=ajax.responseText;
		}
	}
	ajax.send();
}

function mostrarPagina(pagina){
	var ajax=new XMLHttpRequest();
	ajax.open("GET", pagina + "?nocache=Math.random()", true);
	ajax.onreadystatechange=function ()
	{
		if (ajax.readyState==4)
		{
			document.getElementById('main').innerHTML=ajax.responseText;
		}
	}
	ajax.send();
}

