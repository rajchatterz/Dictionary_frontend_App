import { StyleSheet, Text, View,Image,ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'

export default function CardComp2() {
  return (
    <View style={styles.container}>
      <View style={{flex:0.9,alignItems:'center',justifyContent:'center',top:45}}>
       <Text style={{fontSize:24,right:90,fontWeight:'900',color:'#263238',opacity:0.7}}>Play and Progress</Text>
      <ScrollView horizontal contentContainerStyle={{margin:9}}>
        <TouchableOpacity>
        <View style={{backgroundColor:'#F3B69B',height:140,width:125,margin:10,borderRadius:10}}>
          <View style={{flex:1,alignItems:'center',justifyContent:'center',top:10}}>
          <Image style={{width:81,height:77}} source={require('../../assets/Rectangle2.png')}/>
          <Text style={{color:'#F24E1E',fontSize:20,fontWeight:'900',top:5,left:5}}>Guess</Text>
          <Image style={{height:20,width:20,right:40,bottom:17}} source={require('../../assets/Vector2.png')}/>
          </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={{backgroundColor:'#ADB4E8',height:140,width:125,margin:10,borderRadius:10}}>
        <View style={{flex:1,alignItems:'center',justifyContent:'center',top:10}}>
          <Image style={{width:81,height:77}} source={require('../../assets/Rectangle1.png')}/>
          <Text style={{color:'#7781D4',fontSize:20,fontWeight:'900',top:5,left:5}}>Writee</Text>
          <Image style={{height:20,width:20,right:40,bottom:17}} source={require('../../assets/Vector1.png')}/>
          </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={{backgroundColor:'#F3B69B',height:140,width:125,margin:10,borderRadius:10}}>
        <View style={{flex:1,alignItems:'center',justifyContent:'center',top:10}}>
          <Image style={{width:81,height:77}} source={require('../../assets/Rectangle2.png')}/>
          <Text style={{color:'#F24E1E',fontSize:20,fontWeight:'900',top:5,left:5}}>Guess</Text>
          <Image style={{height:20,width:20,right:40,bottom:17}} source={require('../../assets/Vector2.png')}/>
          </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={{backgroundColor:'#ADB4E8',height:140,width:125,margin:10,borderRadius:10}}>
        <View style={{flex:1,alignItems:'center',justifyContent:'center',top:10}}>
          <Image style={{width:81,height:77}} source={require('../../assets/Rectangle1.png')}/>
          <Text style={{color:'#7781D4',fontSize:20,fontWeight:'900',top:5,left:5}}>Writee</Text>
          <Image style={{height:20,width:20,right:40,bottom:17}} source={require('../../assets/Vector1.png')}/>
          </View>
        </View>
        </TouchableOpacity>
      </ScrollView>
      </View>

      <View style={{flex:0.4,alignItems:'center',justifyContent:'center',top:45}}>
      <Text style={{fontSize:24,right:60,fontWeight:'900',color:'#263238',opacity:0.7}}>Continue your Learning</Text>
      <ScrollView horizontal contentContainerStyle={{margin:9}}>
        <TouchableOpacity>
        <View style={{backgroundColor:'#F3B69B',height:140,width:125,margin:10,borderRadius:10}}>
          <View style={{flex:1,alignItems:'center',justifyContent:'center',top:10}}>
          <Image style={{width:81,height:77}} source={require('../../assets/Rectangle2.png')}/>
          <Text style={{color:'#F24E1E',fontSize:20,fontWeight:'900',top:5,left:5}}>Guess</Text>
          <Image style={{height:20,width:20,right:40,bottom:17}} source={require('../../assets/Vector2.png')}/>
          </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={{backgroundColor:'#ADB4E8',height:140,width:125,margin:10,borderRadius:10}}>
        <View style={{flex:1,alignItems:'center',justifyContent:'center',top:10}}>
          <Image style={{width:81,height:77}} source={require('../../assets/Rectangle1.png')}/>
          <Text style={{color:'#7781D4',fontSize:20,fontWeight:'900',top:5,left:5}}>Writee</Text>
          <Image style={{height:20,width:20,right:40,bottom:17}} source={require('../../assets/Vector1.png')}/>
          </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={{backgroundColor:'#F3B69B',height:140,width:125,margin:10,borderRadius:10}}>
        <View style={{flex:1,alignItems:'center',justifyContent:'center',top:10}}>
          <Image style={{width:81,height:77}} source={require('../../assets/Rectangle2.png')}/>
          <Text style={{color:'#F24E1E',fontSize:20,fontWeight:'900',top:5,left:5}}>Guess</Text>
          <Image style={{height:20,width:20,right:40,bottom:17}} source={require('../../assets/Vector2.png')}/>
          </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={{backgroundColor:'#ADB4E8',height:140,width:125,margin:10,borderRadius:10}}>
        <View style={{flex:1,alignItems:'center',justifyContent:'center',top:10}}>
          <Image style={{width:81,height:77}} source={require('../../assets/Rectangle1.png')}/>
          <Text style={{color:'#7781D4',fontSize:20,fontWeight:'900',top:5,left:5}}>Writee</Text>
          <Image style={{height:20,width:20,right:40,bottom:17}} source={require('../../assets/Vector1.png')}/>
          </View>
        </View>
        </TouchableOpacity>
      </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  }
})