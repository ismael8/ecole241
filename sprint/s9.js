//exercice s9: un programme qui demande successivement 5 nombres à l’utilisateur, et qui lui dise ensuite quel était le plus grand parmi ces 5 nombres.
let leNombre1 = prompt("Enter le premier nombre");
let leNombre2 = prompt("Enter le deuxieme nombre");
let leNombre3 = prompt("Enter le troisieme nombre");
let leNombre4 = prompt("Enter le quatrieme nombre");
let leNombre5 = prompt("Enter le cinquieme nombre");
let lePlusGrandNombre = Math.max(leNombre1,leNombre2,leNombre3,leNombre4,leNombre5);
console.log(`Le plus grand de ces nombres est :`+ lePlusGrandNombre);