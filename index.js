console.log("Desafio Classificador de nível de Herói");
console.log("")
let name = "digite seu nome";

console.log(name)
name = "Thor"
console.log("Bem Vindo " + name)

let nivelHeroi = "6"

let XP1 = ((nivelHeroi >= 0) && (nivelHeroi <= 1000))
let XP2 = ((nivelHeroi >= 1001) && (nivelHeroi <= 2000))
let XP3 = ((nivelHeroi >= 2001) && (nivelHeroi <= 5000))
let XP4 = ((nivelHeroi >= 5001) && (nivelHeroi <= 7000))
let XP5 = ((nivelHeroi >= 7001) && (nivelHeroi <= 8000))
let XP6 = ((nivelHeroi >= 8001) && (nivelHeroi <= 9000))
let XP7 = ((nivelHeroi >= 9001) && (nivelHeroi <= 10000))
let XP8 = ((nivelHeroi >=10001))

if(XP1){
    console.log("O Herói " + name + " está no nível" + " Ferro" + " XP " + nivelHeroi)
}
else if(XP2){
    console.log("O Herói " + name + " está no nível" + " Bronze" + " XP " + nivelHeroi )
}
if(XP3){
    console.log("O Herói " + name + " está no nível" + " Prata" + " XP " + nivelHeroi)
}
if(XP4){
    console.log("O Herói " + name + " está no nível" + " Ouro" + " XP " + nivelHeroi)
}
else if(XP5){
    console.log("O Herói " + name + " está no nível" + " Platina" + " XP " + nivelHeroi)
}
if(XP6){
    console.log("O Herói " + name + " está no nível" + " Ascendente" + " XP " + nivelHeroi)
}
else if(XP7) {
    console.log("O Herói " + name + " está no nível" + " Imortal" + " XP " + nivelHeroi)
}
if(XP8){
    console.log("O Herói " + name + " está no nível" + " Radiante" + " XP " + nivelHeroi)
}