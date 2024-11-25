import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

type SearchProps = {
    onSearch: (query: string) => void;
    onSubmit: () => void;
}

const SearchBar: React.FC = ({onSearch, onSubmit}: SearchProps) => {

    function handleInput(data: string){
        onSearch(data)
    }

    function handleSubmit(){
        onSubmit()
    }

    return (
        
            <TextInput placeholder="Search" clearButtonMode="always" style={styles.textArea}
            onChangeText={handleInput}
            onSubmitEditing={handleSubmit}            
            />  
        
    )
}

const styles = StyleSheet.create({

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