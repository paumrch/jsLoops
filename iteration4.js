const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (var key in alien){

    console.log("Alien tiene " + key + " con valor: " + alien[key])

}