import {Text, FlatList, View, StyleSheet, Image} from 'react-native'

interface gameProps{
  titulo: string;
  precoNormal: string;
  precoPromo: string;
  score: string;
  img: string
}


export function GameCard({titulo, precoNormal, precoPromo, score, img}: gameProps){

  const backgroundColorScore = parseInt(score) >= 75 ? 'green' : parseInt(score) >= 50 ? 'orange' : 'red';


    return (

    <View style={style.gameCardContainer}>
      <View style={style.imageandTitle}>

        <Image
          style={style.imageStyle}
          source={{ uri: img }}
          resizeMode="cover"
        />

        <View style={style.titleAndScore}>

          <Text style={style.titleText}>{titulo}</Text>
          <View style={[style.scoreContainer, { backgroundColor: backgroundColorScore }]}>
            <Text style={style.scoreText}>{score}</Text>
          </View>

        </View>
      </View>

      <View style={style.priceContainer}>
      
        <Text style={style.precoNormal}>${precoNormal}</Text>
        <Text style={style.precoPromo}>${precoPromo}</Text>
      </View>

    </View>


    )

}


const style = StyleSheet.create({

  gameCardContainer: {
    flexDirection: 'column',
    borderWidth: 1,
    padding: 8,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,

  },

  imageandTitle:{
    flexDirection: "row",
    justifyContent: "center"
  },

  imageStyle:{
    height: 60,
    width: 100,
    marginRight: 10,
    borderRadius: 5,
  },

    titleAndScore: {
    flex: 1,
    justifyContent: 'space-between',
  },

  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  scoreContainer: {
    marginTop: 5,
    paddingVertical: 3,
    
    paddingHorizontal: 8,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },

  scoreText: {
    color: '#fff',
    fontWeight: 'bold',



  },

  priceContainer: {


    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 8,
  },

  precoNormal: {


    fontSize: 14,
    color: '#888',
    textDecorationLine: 'line-through',
    marginRight: 8,


    
  },

  precoPromo: {

    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',




  },

})