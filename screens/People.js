import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native'
import { Ionicons } from '@expo/vector-icons';


const Rating = ({ value }) => {
  let color;
  if (value < 2) {
    color = 'red';
  } else if (value >= 2 && value <= 3) {
    color = '#FFD300';
  } else {
    color = 'green';
  }
  
  const styles = StyleSheet.create({
   
    text: {
      fontSize:12,
      color: color,
      fontWeight: 'bold',
    },
  });

  return (
    
      <Text style={styles.text}>{value}/5</Text>
   
  );
};

export default Comments = ({}) => {

  


  const data = [
    {
      id: 1,
      image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
      name: 'Frank Odalthh',
        rating:1,
        expertise:'Physics',
        location:'Delhi',
    },
    {
      id: 2,
      image: 'https://bootdey.com/img/Content/avatar/avatar6.png',
      name: 'John DoeLink',
        rating:3,
        expertise:'Mathematics',
        location:'Kolkata',
    },
    {
      id: 3,
      image: 'https://bootdey.com/img/Content/avatar/avatar7.png',
      name: 'March SoulLaComa',
        rating:3.5,
        expertise:'Biology',
        location:'Delhi',

    },
    {
      id: 4,
      image: 'https://bootdey.com/img/Content/avatar/avatar2.png',
      name: 'Finn DoRemiFaso',
        rating:2.5,
        expertise:'Physics',
        location:'Delhi',
    },
    {
      id: 5,
      image: 'https://bootdey.com/img/Content/avatar/avatar3.png',
      name: 'Maria More More',
        rating:5,
        expertise:'Mathematics',
        location:'Kolkata',

    },
    {
      id: 6,
      image: 'https://bootdey.com/img/Content/avatar/avatar4.png',
      name: 'Clark June Boom!',
        rating:4.5,
        expertise:'Physics',
        location:'Delhi',
    },
    {
      id: 7,
      image: 'https://bootdey.com/img/Content/avatar/avatar5.png',
      name: 'The googler',
        rating:3.4,
        expertise:'Physics',
        location:'Delhi',
    },
  ]

  const [comments, setComments] = useState(data)

  return (
    <FlatList
      style={styles.root}
      data={comments}
      extraData={this.state}
      ItemSeparatorComponent={() => {
        return <View style={styles.separator} />
      }}
      keyExtractor={item => {
        return item.id
      }}
      renderItem={item => {
        const Notification = item.item
        return (
          <TouchableOpacity onPress={() => {}}>
          <View style={styles.container}>
            
              <Image style={styles.image} source={{ uri: Notification.image }} />
           
            <View style={styles.content}>
              <View style={styles.contentHeader}>
                <Text style={styles.name}>{Notification.name}</Text>
                <Rating value={Notification.rating} />
              </View>
              
              
              <View style={styles.badge}>
              <Text rkType="primary3 mediumLine">{Notification.expertise}</Text>
                
                 </View>
              <Text rkType="primary3 mediumLine"><Ionicons  name="location-outline" size={14} color="orange" />  {Notification.location}</Text>
             
            </View>
          </View>
          </TouchableOpacity>
        )
      }}
    />
  )
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#ffffff',
    marginTop: 10,
  },
  badge: {
    backgroundColor: '#c7d2fe',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom:5,
   
   
  },
  container: {
    paddingLeft: 19,
    paddingRight: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 22,
    marginLeft: 10,
  },
  star: {
    fontSize: 11,
    color: 'green',
    fontWeight: 'bold'
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
})