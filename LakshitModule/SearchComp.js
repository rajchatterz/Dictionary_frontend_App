import { Dimensions, StyleSheet, TextInput, View } from 'react-native'
import React from 'react'

export default function SearchComp() {
  return (
    <View style={styles.container}>
       <TextInput 
       placeholder='Search for Words......'
       style={styles.searchbar}
       />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-start',
        top:100
    },
    searchbar:{
        backgroundColor:'white',
        width:Dimensions.get('screen').width*0.65,
        height:43,
        borderWidth:0.4,
        borderRadius:10,
        paddingLeft:50
    }
})