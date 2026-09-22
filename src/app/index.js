//   ETAPA 1 - INICIO DO PROJETO: TELA INICIAL   //

  // tela do app para rotas //


import { View, Text, ScrollView, FlatList, Pressable, StyleSheet } from "react-native";

     //  View = conteiner  //
     //  Text = texto  //
     //  ScrollView = rolagem vertical  //
     //  FlatList = lista com rolagem  //
     //  Pressable = detalhes no botao  //
     //  StyleSheet = defibne estilos  //


import { useRoute, useRouter } from "expo-router";
// (acesso aos objetos router, função de navegação dos arquivos) // 

import GameCard from "../components/GameCard";
// (reutiliza os componentes, nao duplica código)

import {jogos} from "../data/jogos";
// (importa uma array de objetos do arquivo data/jogos.js)  //

import {cores} from "../data/tema";
// (importa paleta de cores) //

//   ===============================================================================================  //


export default function Inicio (){
    const router = useRouter();
     //objeto de navegação//    
    const destaques = jogos.filter((jogog) => jogo.destaque)
    //percorre a array jogos e cria uma com objetos de destaque seja true//
    const populares = [...jogos].sort((a, b) => b.nota - a.nota).slice(0, 5);
    //...jogos -> copia da array original //
    // sort (a, b).... -> ordena cópia sa maior nota para menor //
    //.slice (0, 5) -> extrai 5 primeiras da array //




    
    // =====================================//
         //ESTRUTURA DA TELA - bloco 2//
    // =====================================//


    return(
        //inicio do JSX retorna pelo componente//
        <ScrollView style={style.container} contentContainerStyle={styles.conteudo}>
            {/* scrollview: container com rolagem vertical*/}
         ]   <text style={styles.titulo}>GameHub</text>
            {/* Exibe o "GameHub" como titulo */}
            <text style ={style.subtitulo}>Seu universo de jogos em um só lugar</text>

            
    // =====================================//
         //SEÇÃO JOGOS - bloco 2.1//
    // =====================================//

     {/* Faça o commit */}
     <text style={styles.secaoTitulo}> Jogos em destaque</text>
     {/* Mostra o titulo da seção, usando "secaotitulo" */}
     <FlatList
     data={destaques}
     //fonte de dados- array "destaques"//
     keyExtractor={(item) => item.id}
     // retorna a uma chave unica //
     horizontal
     //faz lista rolar//
     showsHorizontalScrollIndicator ={false}
     //oculta barra de rolagem horizonal, interface limpa//
     renderItem={({item}) => <GameCard jogo ={item}/>}
     //cada elemento da array "data"
     />

    // =====================================//
         //SEÇÃO MAIS POLULARES - bloco 2.2//
    // =====================================//

    <text style={styles.secaoTitulo}>Mais Populares</text>
    {/* Titulo da segunda seção, reaproveitando o estilo  */}
    <FlatList
    data={populares}

    keyExtractor={(item) => item.id}
    //Mesma logica de chave única no id do jogo
    horizontal
    //lista hrizontal
    showsHorizontalScrollIndicator={false}
    //Esconder indicador de rolagem
    renderItem={({item}) => <GameCard jogo={item} />}
    //reutiliza o mesmo componente Gamecard, provando que ele funciona parea qualquer tipo de jogo


        />



    //===================================================
    //BLOCO 2.3 - botao "ver todos os jogos"
    //===================================================
    {/* Pressable oferece mais controle sobre o estilo e feedback visual */}
    <pressable
    //aplicar o estilo visual no botão 

    style={styles.botao}
    onPress={() => router.push("./jogos")}
    //onPress função executada quando o usuario pressionar o botão 

    // router.push("/jogos ")navega pela rota jogos */}
        
    >
    <text style={styles.textbotao}>Ver todos os jogos</text>

    </pressable>

    </ScrollView>


       
    );
    

}


// Bloco 3 estilos
//===========================================

//porque

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: cores.fundo,
    },
    conteudo:{
        padding:20,
        paddingBottom:40,
    },
    titulo:{
        fontSize:32,
        fontWeight: bold,
        color: cores.textoPrincipal,
    },

    subtitulo:{
        fontSize: 15,
        color: cores.textoSecundario,
        marginTop: 4,
        marginBottom:24,
    },
    secaoTitulo:{
        fontSize: 18,
        fontWeight:"bold",
        color: cores.textoPrimario,
        marginTop: 8,
        marginBottom:12,
    },
})
