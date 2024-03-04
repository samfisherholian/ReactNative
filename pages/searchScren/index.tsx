import React from "react";
import { useEffect, useState } from "react";
import { View,Text,StyleSheet } from "react-native";
import SearchBar from "../../components/searchBar";

type SearchScrenProps = {}

const SearchScreen: React.FC = () => {

    const [data, setData] = useState("")
    //teste
    const perfil = 'samfisherholian'

    useEffect(( )=> {
        async function getData(){
            fetch(`https://api.github.com/users/${perfil}/followers`)
            .then(response => response.json())   
            .then(res => setData(res.slice(0,15)))

            console.log(data)
        }

        getData()
    },[])

    return (

        <View style={styles.container}>
            <SearchBar/>

            <View style={styles.body}>
               <Text> aqui vai mostra os Items um abaixo do outro</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'gray',
        width: '100%',
        
    },
    body:{
        display: 'flex',
        flex: 11,
        alignContent: 'center',
        alignItems: 'center'

    }
})

export default SearchScreen