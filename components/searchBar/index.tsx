import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

type searchBarProps = {
    setData: string
}

const SearchBar: React.FC = (data: string) => {
    const [user, setUser] = useState(data)
    return (
        <View style={styles.container}>
            <TextInput placeholder="Search" clearButtonMode="always" style={styles.textArea}
            value={user}
            onChangeText={user => setUser(user)}
            
            />  
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