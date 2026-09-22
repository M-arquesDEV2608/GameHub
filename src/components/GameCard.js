//=========================================
//Etapa 4 - Criar componentes
//=========================================
//nós vamos reutilizar os componentes em 3 telas diferentes 

import {view, text, Imagemage, Pressable, StyleSheet} from "react-native";

import { useRouter } from "expo-rauter";

//navegação programatica

import { cores } from "../data/tema";

export default function GameCard ({jogo}){

    const router =useRouter();

    return (
        <Pressable
        style={style.card}
        onPress={() => router.push(`/jogos/${jogo.id}`)}
        >
            <image source={jogo.imagem} style={style.image}/>
            <view style={style.info}>
                <text style={styles.nome} numberOfLines={1}>

                    {jogo.nome}
                </text>
                <text style={styles.genero}>{jogo.genero}</text>
                <text style={styles.nota}>⭐{jogo.genero}</text>

            </view>
        </Pressable>
    )
}
const styles = StyleSheet.create({

    
})
