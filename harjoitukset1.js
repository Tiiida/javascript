//Harjoitukset1
//Tehtävä1 Merkkijonojen yhdistäminen
function tervehdi (nimi)
{
    let tervehdys = "moi " + nimi + " miten menee"
    return tervehdys
}

console.log (tervehdi ("kille ja kalle"))

function moikkaa (nimi)
{
    let moikkaus = "moro " + nimi + " mitä kuuluu"
    return moikkaus
}

console.log (moikkaa ("Tiina ja Miina"))

//Tehtävä2 Neliöön korottaminen
function neliö(p1) 
{
    return p1 * p1;
}

console.log (neliö (2))

function potenssiin(p2)
{
    return p2 * p2;
}

console.log (potenssiin(3))

//Tehtävä3 Täysi-ikäisyys

function ikä(a) 
{
if (a >= 18) { 
    return "täysi-ikäinen"
} else {
    return "alaikäinen"
}
}

console.log (ikä(18))
console.log (ikä(12))

//Tehtävä4 Suurempi luku

function numerot(x, y)
{
    if (x >= y){
      return  `Annetuista luvuista x ja y suurempi on ${x}`
    } else {
        return `Annetuista luvuista x ja y suurempi on ${y}`
    }

}

console.log (numerot(5, 10))
console.log (numerot(-3, 8))
console.log (numerot(7, 2))

//Tehtävä5 Kolmion pinta-ala

function kolmionpintaala(kanta, korkeus)
    {
        let vastaus = kanta * korkeus / 2
        return Math.floor(vastaus * 10)/10
    }

console.log (kolmionpintaala(13, 15))

//Tehtävä6 Osamäärä

function osamäärä(jaettava, jakaja)
{
     if (jakaja == 0) {
    return `Nollalla ei voi jakaa`
    }
    let vastaus = jaettava / jakaja
    return vastaus
}

console.log (osamäärä(5, 0))
console.log (osamäärä(4, 2))

//Tehtävä7 Robotin värianalyysi


function analyysi(aallonpituus)
{
    if (aallonpituus >= 380 && aallonpituus < 450){
    return "violetti"
} else if  (aallonpituus >= 450 && aallonpituus < 490){
    return "sininen"
} else if (aallonpituus >= 490 && aallonpituus < 560){
    return "vihreä"
} else if (aallonpituus >= 560 && aallonpituus < 590){
    return "keltainen"
} else if (aallonpituus >= 590 && aallonpituus < 630){
    return "oranssi"
} else if (aallonpituus >= 630 && aallonpituus < 760){
    return "punainen"
} else {
    return null
}
}

console.log (analyysi(800))
console.log (analyysi(400))
console.log (analyysi(610))

//Tehtävä8 Taksimatka

function taksi(henkilöt, km) 
{
    let hinta = null;
    if (henkilöt == 1 || henkilöt == 2){
        hinta = 1.6
    } else if (henkilöt == 3 || henkilöt == 4 ){
        hinta = 1.9 
    } else if (henkilöt == 5 || henkilöt == 6 ){
        hinta = 2 
    } else if (henkilöt > 6) {
        hinta = 2.2
    } else {
        return "Tarkista tiedot"
    }
    let lasku = (hinta * km) + 5.40
    return lasku
}

console.log(taksi(3, 12)) 
console.log(taksi(4, 40))
console.log(taksi(8, 4))

//Tehtävä9 Pyöristys

function












