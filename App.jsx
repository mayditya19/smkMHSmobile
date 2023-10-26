import { View, Text, Image } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View>
      <View style={{
        height: 52,
        backgroundColor: 'red',
        marginhorizontal: 16,
        borderRadius: 99,
        MarginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertikal: 16,
      }}>

        <Image source={require ('./src/assets/image2.png')}
        style={{ width:140, height: 32, marginRight: 16,}}/>

        <Image source={require ('./src/assets/menu.png')}
        style={{ width:24, height: 24, marginRight: 16,}}/>
       </View>
        <Text style={{
          marginTop: 32,
          marginLeft:16,
          fontSize: 15,
        }}>Selamat Datang di
         </Text>

         <Text style={{
          marginTop: 32,
          marginLeft:16,
          fontWeight: 'bold',
          color: 'black',
          fontSize: 32,
        }}>Kantin Multistudi
         </Text>
       
      </View>
   
  )
}

export default App