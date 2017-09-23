firstInput.onclick = function (){

	var firstDiv = document.getElementById("secondInput");

//Crea div individual + textarea + button
	var newTarea = document.createElement("DIV");
	newTarea.setAttribute("id", "individual");

//Crea el titulo grupal
	var firstInput = document.getElementById("firstInput")
	var divAñadir = document.createElement("DIV");
	divAñadir.setAttribute("id", "titleGrupal");
	divAñadir.appendChild(firstInput);
	newTarea.appendChild(divAñadir);
	firstDiv.appendChild(newTarea)

//Creacion del textarea
	var createInput = document.createElement("textarea");
	createInput.setAttribute("id", "input2")
	createInput.setAttribute("placeholder", "Añadir una tarjeta...");
	
	newTarea.appendChild(createInput);
	firstDiv.appendChild(newTarea);

//creacion del button
	var createButton = document.createElement("BUTTON");
	createButton.setAttribute("id", "añadir");
	var save = document.createTextNode("Añadir");
	createButton.appendChild(save);

	newTarea.appendChild(createButton);
}