// 

// ===== INTRO =====
let nome = prompt("Bem-vindo aventureiro! Qual é o seu nome?");
alert("Olá, " + nome + "! Sua jornada começa agora!");

let vida = 100;
let pontos = 0;
let dano = 0;
let defesa = 0;

// ===== ARMA =====
let escolhaArma = prompt(
    nome + ", escolha sua arma:\n" +
    "1- Espada (15 dano)\n" +
    "2- Arco (12 dano)\n" +
    "3- Adaga (10 dano)"
);

if (escolhaArma == "1") {
    dano = 15;
} else if (escolhaArma == "2") {
    dano = 12;
} else {
    dano = 10;
}

// ===== ARMADURA =====
let escolhaArmadura = prompt(
    nome + ", escolha sua armadura:\n" +
    "1- Ferro (+10 defesa)\n" +
    "2- Couro (+7 defesa)\n" +
    "3- Mago (+5 defesa)"
);

if (escolhaArmadura == "1") defesa = 10;
else if (escolhaArmadura == "2") defesa = 7;
else defesa = 5;

// ===== FUNÇÃO DE BATALHA =====
function batalha(nomeInimigo, vidaInimigo, danoInimigo, defesaInimigo) {

    alert("⚔️ Um " + nomeInimigo + " apareceu!");

    while (vida > 0 && vidaInimigo > 0) {

        let defesaTurnoJogador = 0;
        let defesaTurnoInimigo = 0;

        let escolha = prompt(
            nome + ", o que deseja fazer?\n" +
            "1- Atacar\n" +
            "2- Defender"
        );

        // ===== JOGADOR =====
        if (escolha == "1") {

            let danoFinal = dano - (defesaInimigo + defesaTurnoInimigo);
            if (danoFinal < 0) danoFinal = 0;

            vidaInimigo -= danoFinal;
            if (vidaInimigo < 0) vidaInimigo = 0;

            alert("Você atacou e causou " + danoFinal + " de dano!\nVida do inimigo: " + vidaInimigo);

        } else {
            defesaTurnoJogador = 4;
            alert("🛡️ Você aumentou sua defesa neste turno!");
        }

        // ===== INIMIGO =====
        if (vidaInimigo > 0) {

            let rolagem = Math.floor(Math.random() * 100) + 1;

            alert("🎲 Rolagem do inimigo: " + rolagem);

            if (rolagem <= 30) {
                alert("❌ O inimigo errou o ataque!");

            } else if (rolagem <= 70) {

                let danoRecebido = danoInimigo - (defesa + defesaTurnoJogador);
                if (danoRecebido < 0) danoRecebido = 0;

                vida -= danoRecebido;
                if (vida < 0) vida = 0;

                alert("💥 O inimigo atacou!\nVocê recebeu " + danoRecebido + " de dano.\nSua vida: " + vida);

            } else {
                defesaTurnoInimigo = 4;
                alert("🛡️ O inimigo se defendeu e aumentou a defesa!");
            }
        }

        // ===== STATUS =====
        if (vida <= 0) {
            alert("☠️ Você foi derrotado...");
            return false;
        }

        if (vidaInimigo <= 0) {
            alert("🏆 Você derrotou o " + nomeInimigo + "!");
            pontos += 20;
            alert("⭐ Você ganhou 20 pontos! Total: " + pontos);
            return true;
        }
    }
}

// ===== FASE 1 =====
if (!batalha("Goblin", 50, 10, 5)) {
    throw new Error("Game Over");
}

// ===== FASE 2 =====
if (!batalha("Guerreiro Sombrio", 80, 15, 8)) {
    throw new Error("Game Over");
}

// ===== LOJA =====
alert("🛒 Loja aberta! Você pode melhorar seu personagem.");

let opcaoLoja = prompt(
    "Você tem " + pontos + " pontos:\n" +
    "1- +30 Vida (20 pontos)\n" +
    "2- +10 Dano (25 pontos)\n" +
    "3- +7 Defesa (25 pontos)\n" +
    "4- Sair"
);

if (opcaoLoja == "1" && pontos >= 20) {
    vida += 30;
    pontos -= 20;
    alert("❤️ Vida aumentada! Vida atual: " + vida);
}

else if (opcaoLoja == "2" && pontos >= 25) {
    dano += 10;
    pontos -= 25;
    alert("⚔️ Dano aumentado! Dano atual: " + dano);
}

else if (opcaoLoja == "3" && pontos >= 25) {
    defesa += 7;
    pontos -= 25;
    alert("🛡️ Defesa aumentada! Defesa atual: " + defesa);
}

// ===== BOSS FINAL =====
alert("🔥 Você encontrou o líder inimigo!");

if (!batalha("Líder Supremo", 150, 20, 10)) {
    throw new Error("Game Over");
}

// ===== FINAL =====
if (vida > 0) {
    alert("🎉 Parabéns " + nome + "! Você salvou a vila!");
}