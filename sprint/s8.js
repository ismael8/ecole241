//exercice s8:un programme qui demande un nombre et affiche sa table de multiplication jusqu'à 10.

let nombre = Number(prompt("donnez un nombre"));
for(i = 0; i < 11; i++){
	console.log(nombre + " * " + i + " = " + nombre*i);
}