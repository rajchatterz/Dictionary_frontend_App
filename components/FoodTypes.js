import { StyleSheet, Text, View, ScrollView, Image, Pressable, Dimensions } from 'react-native'
import React from 'react'

const numColumns = 3;
const screenWidth = Dimensions.get('window').width;
const imageWidth = screenWidth / numColumns;

const FoodTypes = () => {


  const types = [
    {
      id: "0",
      image: "https://res.cloudinary.com/education4ol/image/upload/v1679778200/Laundry%20Icons/3.png",
      name: "Washing and Fold",
    },
    {
      id: "1",
      image: "https://res.cloudinary.com/education4ol/image/upload/v1679778200/Laundry%20Icons/5.png",
      name: "Washing"
    },
    {
      id: "2",
      image: "https://res.cloudinary.com/education4ol/image/upload/v1679778200/Laundry%20Icons/1.png",
      name: "Washing and Ironed"
    },
    {
      id: "3",
      image: "https://res.cloudinary.com/education4ol/image/upload/v1679778200/Laundry%20Icons/4.png",
      name: "Dry Cleaning",

    },
    {
      id: "4",
      image: "https://res.cloudinary.com/education4ol/image/upload/v1679778200/Laundry%20Icons/2.png",
      name: "Ironed"
    },
    {
      id: "4",
      image: "https://res.cloudinary.com/education4ol/image/upload/v1679778200/Laundry%20Icons/4.png",
      name: "Cleaning"
    },


  ]

  return (
    <View style={{ marginTop: 10 , marginLeft:5 }}>
      
      <Text style={{ fontSize: 16, fontWeight: "700",marginLeft: 10 , color:"#09458C" }}>Our Services</Text>

          <View style={styles.container}>
            {types.map((item, index) => (

              <View style={{ margin: 6, width: "21%", alignItems: "center" }} key={index}>
                <Pressable android_ripple={{ color: "#ccc", radius: 28, }} >
                  <Image source={{ uri: item.image }} style={{ width: 50, height: 50, borderRadius: 5, transform: [{ scale: 1.1 }] }} />
                </Pressable>
                <Text style={{ marginTop: 6, textAlign: "center" }}>{item.name}</Text>

              </View>

            ))}
          </View>
       
   

    </View>


  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop:10
  },
  image: {
    width: imageWidth,
    height: imageWidth,
  },
});

export default FoodTypes