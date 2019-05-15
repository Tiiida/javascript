//Tehtävä1

let muistilista = ["sipsiä", "siipiä", "maitoa", "leipää", "juustoa"];
let määrät = [2, 5, 8, 12, 14];

for(let i=0; i< muistilista.length; i++){
    console.log(`osta  ${muistilista[i]}  ${määrät[i]}`); }

    muistilista.forEach(function(muistilista){
        console.log(muistilista);
    })

//Tehtävä2

muistilista.push("karkkia", "jätksiä");
console.log(muistilista);
muistilista.pop("jätskiä");
console.log(muistilista);