let playerName = prompt("Digite seu nome aqui");
let playerXp = prompt("Qual seu nivel de experiencia?");
const playerLevel = [
    "Ferro",
    "Bronze",
    "Prata",
    "Ouro",
    "Platina",
    "Ascendente",
    "Imortal",
    "Radiante"
]

playerXp = parseInt(playerXp);

if (playerXp == 1000) {
    console.log(`Olá ${ playerName }, seu nivel de herói é ${ playerLevel[0]}`);
}
else if (playerXp >= 1001 && playerXp <= 2000) {
    console.log(`Olá ${ playerName }, seu nivel de herói é ${ playerLevel[1]}`);
}
else if (playerXp >= 2001 && playerXp <= 3000) {
    console.log(`Olá ${ playerName }, seu nivel de herói é ${ playerLevel[2]}`);
}
else if (playerXp >= 3001 && playerXp <= 4000) {
    console.log(`Olá ${ playerName }, seu nivel de herói é ${ playerLevel[3]}`);
}
else if (playerXp >= 4001 && playerXp <= 5000) {
    console.log(`Olá ${ playerName }, seu nivel de herói é ${ playerLevel[4]}`);
}
else if (playerXp >= 5001 && playerXp <= 7000) {
    console.log(`Olá ${ playerName }, seu nivel de herói é ${ playerLevel[5]}`);
}
else if (playerXp >= 7001 && playerXp <= 8500) {
    console.log(`Olá ${ playerName }, seu nivel de herói é ${ playerLevel[6]}`);
}
else if (playerXp >= 8501 && playerXp <= 10000) {
    console.log(`Olá ${ playerName }, seu nivel de herói é ${ playerLevel[7]}`);
}
else {
    console.log(`Olá ${ playerName }, seu nivel de herói é ${ playerLevel[7]}`)
}