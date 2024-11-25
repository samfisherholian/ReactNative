import React from "react";
import { useEffect, useState } from "react";
import { View,Text,StyleSheet, FlatList,ActivityIndicator, Image,TextInput } from "react-native";
import SearchBar from "../../components/searchBar";
import Constants from 'expo-constants';

type SearchScrenProps = {}

const statusBar = Constants.statusBarHeight


const SearchScreen: React.FC = () => {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [input, setInput] = useState("")

    const perfil = 'samfisherholian'


            function getData(){

                 setIsLoading(true)
    
                console.log("nao tem nada aqui bicho")

                fetch(`https://api.github.com/users/${input}/followers`)
                .then(response => response.json())   
                .then(res => setData(res.slice(0,15)))

                console.log(data)

                setIsLoading(false)


        
            
        }

 
    if(isLoading){
        return (

            <View style={{justifyContent: "center", alignItems: 'center'}}>
                <ActivityIndicator size='large' color='green'/>
            </View>
        )

    }

    return (

        

        <View style={styles.container}>


            <View style={styles.containerBar}>
                    <SearchBar onSearch={setInput} onSubmit={getData}/>
            
                />  
             </View>           
            <View style={styles.body}>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.login}
                    renderItem={({item}) => (
                        <View style={styles.containerItem}>

                            <Image style={styles.image}
                                source={{uri: item.avatar_url}}
                            />

                            <View>
                                <Text style={styles.textItem}> {item.login}</Text>
                            </View>
                             
                        </View>
                           
                    )}
                />
            </View>
                
   

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        
        width: '100%',
        
    },
    body:{
        display: 'flex',
        flex: 11,
       
        

    },
    containerItem:{
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        marginTop: 10
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50

    },
    textItem: {
        fontSize: 18,
        fontWeight:'600',
        marginLeft: 10
    },
      textArea:{
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: 'white',
        borderRadius: 8,
        borderColor: "#ccc",
        borderWidth: 1
        
    },
        containerBar: {
        flex: 1,
        display: 'flex',
        
        marginRight: 5,
        marginLeft: 5,
        borderRadius: 8,
        marginTop: statusBar +15,
        marginBottom: 10,
    }
})

export default SearchScreen