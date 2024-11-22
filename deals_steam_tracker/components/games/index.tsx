import {useState, useEffect,} from 'react'
import {Text, FlatList, View, StyleSheet} from 'react-native'

import {GameCard} from '../gameCard/index'


interface gamesProps {
  title: string;
  gameID: string;
  salePrice: string;
  normalPrice: string;
  metacriticScore: string;
  thumb: string;
}

  interface Filters{
    search: string,
    lowPrice: string,
    highPrice: string,
    
  }




export function Games ({search, lowPrice, highPrice}: Filters){
  const [games, setGames] = useState<gamesProps[]>([])
  const [filteredGames, setFilteredGames] = useState<gamesProps[]>([]);


  useEffect(() => {

    async function getGames (){

      const response = await fetch('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15')

      const data = await response.json()
      console.log(data.length)
      setGames(data)
    }

    getGames()

  },[])


  useEffect(() => {
    filterGames();
  }, [search, lowPrice, highPrice, games]);

  const filterGames = () =>{

      

        const minPrice = lowPrice ? parseFloat(lowPrice) : 0;
        const maxPrice = highPrice ? parseFloat(highPrice): Number.MAX_VALUE;

        const filterData = games.filter((game) => {

          const titleMatch = search ? game.title.toLocaleLowerCase().trim().includes(search.toLowerCase().trim()) : true;

          const isLowPrice = lowPrice ? parseFloat(game.salePrice) >= minPrice : true

          const isHighPrice = highPrice ? parseFloat(game.salePrice) <= maxPrice : true

          return titleMatch && isLowPrice && isHighPrice

        }) 

        setFilteredGames(filterData)


  };

  return (

    <View style={style.flatlistContent}>
        {filteredGames.length > 0 ? (
        <FlatList
          data={filteredGames}
          renderItem={({ item }) => <GameCard

          titulo={item.title} 
          precoNormal={item.normalPrice} 
          precoPromo={item.salePrice} 
          score={item.metacriticScore} 
          img={item.thumb}  
          
          />}
          keyExtractor={item => item.gameID}
        />
        ) : <Text style={style.warning}> Nao foi possivel achar os items da lista </Text>}
    </View>    
    
  )




}

const style = StyleSheet.create({
  flatlistContent:{
    flex: 1
  },

  warning: {
    fontWeight: 'bold',
    alignItems: 'center',
    margin: 'auto'
  } 
})


