let ostokset = ["keksiä" , "karkkia" , "suklaata"];
let määrät = [4, 10, 4];
console.log("osta " + ostokset[0], määrät[1]);

//TAI SITTEN (`osta  ${ostokset[0]}  ${määrät[0]});//
// ctrl +k+c->// poissulkeva
// ctrl + k + u// takaisin

for(let i=0; i< ostokset.length; i++){
    console.log(`osta  ${ostokset[i]}  ${määrät[i]}`);
}
//console.log(henkilö.nimi, henkilö.ikä, henkilö.luonne);

let henkilö1 = {nimi: "Ida", ikä: 27, luonne: "ihana"};
let henkilö2 = {nimi: "Mikko", ikä: 30, luonne: "laiska"};
let henkilö3 = {nimi: "Juhani", ikä: 50, luonne: "rohkea"};
let henkilöt = [henkilö1, henkilö2, henkilö3];

henkilöt.forEach(function(henkilö){
    console.log(henkilö);
})

ostokset.push("roskapusseja");
console.log(ostokset);
ostokset.pop();
console.log(ostokset);


