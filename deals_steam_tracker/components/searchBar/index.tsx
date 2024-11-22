import * as React from 'react';
import { ActivityIndicator, Text, View, TextInput, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

interface searchBarProps{
  onSearch: (query: string) => void;
}


export function SearchBar({onSearch}: searchBarProps) {
  
  function handleInputChange(data:string){
    onSearch(data)
  }

  return (
    <View style={style.searchContent}>

      <TextInput
      style={style.InputStyle}
      placeholder="Search by tittle"
      onChangeText={handleInputChange}
      autoCorrect={false}
      
      / >


    </View>


  );
}

const style =  StyleSheet.create({

  searchContent: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    marginLeft: '2%',
    marginRight: '2%',
    marginBottom: 10
  },
  InputStyle:{
    flex: 1,
    marginLeft: '2%',
    marginRight: '2%'
  }

})