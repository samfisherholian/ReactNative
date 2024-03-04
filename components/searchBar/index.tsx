import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const SearchBar: React.FC = () => {

    return (
        <View style={styles.container}>
            <TextInput placeholder="Search" clearButtonMode="always" style={styles.textArea}/>  
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        
        marginRight: 5,
        marginLeft: 5,
        borderRadius: 8,
        marginTop: 28,
        marginBottom: 10,
        
       
        
    },
    textArea:{
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: 'white',
        borderRadius: 8,
        borderColor: "#ccc",
        borderWidth: 1
        
    }
})

export default SearchBar