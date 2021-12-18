// Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados
// y añade la propiedad isApproved a true o false en consecuencia. Una vez lo tengas compruébalo con un console.log.

const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Juan Miranda", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

// Bucle recorriendo el array.
for (var i = 0; i < alumns.length; i++) {
  // Ahora hay que definir si un alumno está aprobado con al menos 2 trimestres, o no.
  // Escribiremos un condicional de la propiedad T1 que sea true.

  if (alumns[i].T1 == true) {
    if (alumns[i].T2 == true || alumns[i].T3 == true) {
      alumns[i].isApproved = true;
    } else {
      alumns[i].isApproved = false;
    }
  } else {
    if (alumns[i].T2 == true && alumns[i].T3 == true){
        alumns[i].isApproved = true
    } else {
        alumns[i].isApproved = false
    }
  }

  console.log(alumns[i]);
}
