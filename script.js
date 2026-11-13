const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function exibirCabecalho() {
    console.log("==================================================");
    console.log("       SISTEMA DESENVOLVIDO POR: FELIPE");
    console.log("==================================================");
    console.log("          BEM-VINDO AO SHOW DO MILHÃO!          ");
    console.log("==================================================");
}

function exibirRodape() {
    console.log("\n==================================================");
    console.log(" JOGO CONCLUÍDO! Obrigado por jogar.");
    console.log(" DESENVOLVEDOR CLIENTE: FELIPE");
    console.log("==================================================");
    rl.close();
}

// Tabela de prêmios por pergunta acertada
const premios = {
    1: "1 mil reais",
    2: "2 mil reais",
    3: "3 mil reais",
    4: "4 mil reais",
    5: "5 mil reais",
    6: "10 mil reais",
    7: "20 mil reais",
    8: "30 mil reais",
    9: "40 mil reais",
    10: "50 mil reais",
    11: "100 mil reais",
    12: "200 mil reais",
    13: "300 mil reais",
    14: "400 mil reais",
    15: "500 mil reais",
    16: "1 MILHÃO DE REAIS!"
};

// ⚠️ CORREÇÃO: Adicionadas as 16 perguntas para corresponder à tabela de prêmios
const perguntas = [
    {
        pergunta: "Qual é a capital do Brasil?",
        opcoes: ["A) Rio de Janeiro", "B) São Paulo", "C) Brasília", "D) Salvador"],
        correta: "C"
    },
    {
        pergunta: "Quantos dias tem um ano bissexto?",
        opcoes: ["A) 364", "B) 365", "C) 366", "D) 367"],
        correta: "C"
    },
    {
        pergunta: "Qual planeta é conhecido como o Planeta Vermelho?",
        opcoes: ["A) Marte", "B) Júpiter", "C) Saturno", "D) Vênus"],
        correta: "A"
    },
    {
        pergunta: "Qual é o maior oceano do planeta?",
        opcoes: ["A) Atlântico", "B) Pacífico", "C) Índico", "D) Ártico"],
        correta: "B"
    },
    {
        pergunta: "Quem pintou a famosa obra 'Mona Lisa'?",
        opcoes: ["A) Vincent van Gogh", "B) Pablo Picasso", "C) Leonardo da Vinci", "D) Michelangelo"],
        correta: "C"
    },
    {
        pergunta: "Qual o livro mais vendido no mundo a seguir à Bíblia?",
        opcoes: ["A) O Senhor dos Anéis", "B) Dom Quixote", "C) O Pequeno Príncipe", "D) Um Conto de Duas Cidades"],
        correta: "B"
    },
    {
        pergunta: "De onde é a invenção do chuveiro elétrico?",
        opcoes: ["A) França", "B) Inglaterra", "C) Brasil", "D) Austrália"],
        correta: "C"
    },
    {
        pergunta: "Qual o nome do presidente do Brasil que ficou conhecido como Jango?",
        opcoes: ["A) Jânio Quadros", "B) Jacinto Anjos", "C) João Goulart", "D) João Figueiredo"],
        correta: "C"
    },
    {
        pergunta: "Qual elemento químico tem o símbolo 'O'?",
        opcoes: ["A) Ouro", "B) Oxigênio", "C) Osmio", "D) Ozônio"],
        correta: "B"
    },
    {
        pergunta: "Qual é o maior animal terrestre do planeta?",
        opcoes: ["A) Baleia Azul", "B) Elefante Africano", "C) Girafa", "D) Rinoceronte"],
        correta: "B"
    },
    {
        pergunta: "Em qual país nasceram os Jogos Olímpicos?",
        opcoes: ["A) Roma", "B) Grécia", "C) Egito", "D) Itália"],
        correta: "B"
    },
    {
        pergunta: "Quantos lados tem um heptágono?",
        opcoes: ["A) 6", "B) 7", "C) 8", "D) 9"],
        correta: "B"
    },
    {
        pergunta: "Qual é a velocidade da luz aproximadamente?",
        opcoes: ["A) 300.000 km/s", "B) 150.000 km/s", "C) 1.000.000 km/s", "D) 30.000 km/s"],
        correta: "A"
    },
    {
        pergunta: "Qual país doou a Estátua da Liberdade para os Estados Unidos?",
        opcoes: ["A) Inglaterra", "B) França", "C) Alemanha", "D) Espanha"],
        correta: "B"
    },
    {
        pergunta: "Qual o menor país do mundo?",
        opcoes: ["A) Mônaco", "B) Malta", "C) Vaticano", "D) San Marino"],
        correta: "C"
    },
    {
        pergunta: "Quantos elementos químicos a tabela periódica possui atualmente?",
        opcoes: ["A) 114", "B) 116", "C) 118", "D) 120"],
        correta: "C"
    }
];

let indicePergunta = 0;
let premioAtual = "0 reais";

function perguntar() {
    // Agora perguntas.length vale 16, então o jogo só acaba no milhão!
    if (indicePergunta >= perguntas.length) {
        console.log(`\n🏆 PARABÉNS FELIPE! VOCÊ GANHOU O PRÊMIO MÁXIMO DE ${premioAtual}! 🏆`);
        exibirRodape();
        return;
    }

    const p = perguntas[indicePergunta];
    const numeroPergunta = indicePergunta + 1;

    console.log(`\n--- PERGUNTA VALENDO ${premios[numeroPergunta]} ---`);
    console.log(p.pergunta);
    p.opcoes.forEach(opcao => console.log(opcao));

    rl.question("Sua resposta (A, B, C ou D): ", (resposta) => {
        const respostaFormatada = resposta.trim().toUpperCase();

        if (respostaFormatada === p.correta) {
            premioAtual = premios[numeroPergunta];
            console.log(`🎉 CORRETO! Você ganhou ${premioAtual}!`);
            indicePergunta++;
            perguntar(); 
        } else {
            console.log(`❌ ERROU! A resposta correta era a alternativa ${p.correta}.`);
            console.log("Fim de jogo para você!");
            console.log(`\n💰 Placar Final: Você ganhou ${premioAtual}!`);
            exibirRodape();
        }
    });
}

exibirCabecalho();
perguntar();