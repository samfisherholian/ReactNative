import * as React from 'react';
import {useState, useEffect} from 'react'
import { Text, View, StyleSheet, TextInput, Pressable, } from 'react-native';
import Constants from 'expo-constants';


// You can import from local files
import { SearchBar } from './components/searchBar/index';
// or any pure javascript modules available in npm

import { Games } from './components/games/index';
 
const statusBar = Constants.statusBarHeight

export default function App() {
  const [search, setSearch] = useState("");
  const [lowPrice, setLowPrice] = useState("");
  const [highPrice, setHiprice] = useState("")
  const [filters, setFilters] = useState({search: '', lowPrice: '', highPrice: ''})
 

  function isNumeric(value: string): boolean {
    return  /^-?\d*\.?\d*$/.test(value);
  }

  //fill filter when clicked and validate fields
  function handleFilters(){

    if(lowPrice.includes(',') || highPrice.includes(',')){
      alert('Err price must be numeric')
      return 
    }

    if ((lowPrice && !isNumeric(lowPrice)) || (highPrice && !isNumeric(highPrice))) {
      alert('Err price must be numeric');
      return;
    }

    const lowPriceFloat = lowPrice? parseFloat(lowPrice) : null;
    const highPriceFloat = highPrice? parseFloat(highPrice) : null;

    
    setFilters({search, lowPrice: lowPriceFloat !== null ? lowPriceFloat.toString() : "",

    highPrice: highPriceFloat !== null ? highPriceFloat.toString() : ""
    })
  
  }


 
  return (
    <View style={style.container}>
      <View style={{ width: '100%', marginBottom: 8, marginTop: statusBar+ 25 }}>
       <SearchBar onSearch={setSearch}/>
      </View>

      


      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 10
          
        }}>
        <View style={style.inputContainer}>
          <View>
            <Text style={style.labels} >Low Price</Text>
          </View>
          
            <TextInput style={style.labelinput} 
              value={lowPrice}
              keyboardType='numeric'
              onChangeText={(text) => setLowPrice(text.replace(',','.'))}
             />
        
        </View>

        <View style={style.inputContainer}>
          <View>
            <Text style={style.labels}>High Price</Text>
          </View>
          
            <TextInput style={style.labelinput}
              value={highPrice}
              keyboardType='numeric'
              onChangeText={(text) => setHiprice(text.replace(',','.'))}
              

             />
         
        </View>
      </View>

      <View style={style.buttonArea}>
        <Pressable style={style.mostraResultadoSyle} onPress={handleFilters}>
          <Text style={style.buttonTextStyle}>Show results</Text>

        </Pressable>

      </View>
      
        <Games search={filters.search} lowPrice={filters.lowPrice} highPrice={filters.highPrice}/>
            
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#FFFF'
  },

  labelinput: {
    borderWidth: 1,
    padding: 8,
    borderRadius: 5,
  

    justifyContent: 'center',
  },
  buttonArea: {
    justifyContent: 'center',
    backgroundColor: '#107c10',
    height: '10%',
    marginRight: '2%',
    marginLeft: '2%',
    marginBottom: 16,
    borderRadius: 8
  },
  mostraResultadoSyle: {
    justifyContent: 'center',
    textAlign: 'center',
    

    flex: 1
    
  },

  labels: {
  
    fontWeight: 'bold'
  },

  inputContainer:{
    flex: 1,
    marginHorizontal: 8
  },

  buttonTextStyle:{
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white'
  }



});
