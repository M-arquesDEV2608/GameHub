//==============================================
//Etapa 3 Cadastro de jogos
//==============================================

export const jogos = [
    {
        id: "1",
        nome: "minecraft",
        genero:"sandbox",
        nota: 4.8,
        plataforma: "PC, Console, Mobile",
        Descrição: "Um mundo de blocos",
        imagem: require("../../assets/games/minecraft.jpg")
    },

    


    {
        id: "2",
        nome: "Fortnite",
        genero:"battle",
        nota: 4.5,
        plataforma: "PC, Console, Mobile",
        Descrição: "Uma ilha e um objetivo, sobreviver!",
        imagem: require("../../assets/games/fortnite.jpg"),
        destaque:true,
    },




    {
        id: "3",
        nome: "Bendy and the Ink Machine",
        genero: "Terror / Survivor Horror",
        nota: 4.5,
        plataforma: "PC, Console, Mobile",
        Descricao: "Terror em um estúdio de animação dos anos 30 domado por monstros de tinta.",
        imagem: require("../../assets/games/bendyandtheinkmachine.jpg"),
        destaque:true,
    },




    {
        id: "4",
        nome: "Roblox",
        genero:"sandbox",
        nota: 4.3,
        plataforma: "PC, Console, Mobile",
        Descrição: "Varios jogos dentro de um",
        imagem: require("../../assets/games/roblox.jpg"),
        destaque:true,
    },




    {
        id: "5",
        nome: "Cyberpunk 2077",
        genero: "RPG de Ação",
        nota: 4.4,
        plataforma: "PC, Console",
        Descricao: "Mercenário com um chip na cabeça lutando para sobreviver em uma cidade futurista.",
        imagem: require("../../assets/games/cyberpunk2077.jpg"),
        destaque:true,
    },




    {
        id: "6",
        nome: "Overwatch",
        genero: "Hero Shooter",
        nota: 4.0,
        plataforma: "PC, Console",
        Descricao: "Batalhas futuristas em equipe com heróis de habilidades únicas.",
        imagem: require("../../assets/games/overwatch.jpg"),
        destaque:true,
    },




    {
        id: "7",
        nome: "Lies of P",
        genero: "Soulslike / RPG de Ação",
        nota: 4.7,
        plataforma: "PC, Console",
        descricao: "Pinóquio sombrio enfrentando robôs assassinos e escolhendo se vai mentir.",
        imagem: require("../../assets/games/liesofp.jpg"),
        destaque:false,
    },




    {
        id: "8",
        nome: "Among us",
        genero:"detetive",
        nota: 4.2,
        plataforma: "PC, Console, Mobile",
        Descrição: "Descubra quem é o impostor",
        imagem: require("../../assets/games/among-us.jpg"),
        destaque:false,
    },
]