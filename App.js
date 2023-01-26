import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import Skeleton from './src/skeleton'

const {width} = Dimensions.get('window')

export default function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    setTimeout(() =>{setLoading(false)}, 3000)

  }, [])


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#121212' />
      <Skeleton visible={loading}>
        <View style={{margin: 10}}>
          <View style={styles.card}>
            <Image 
              source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Full_Moon_Luc_Viatour.jpg'}}
              style={{width: 100, height: 100, borderRadius: 50, marginRight: 15}}
            />
            <View style={{flex: 1, justifyContent: 'space-evenly'}}>
              <Text style={{fontSize: 23, fontWeight: 'bold', color: 'white'}} >Thiago Nunes</Text>            
              <Text style={{fontSize: 18, color: 'white'}}>@thiagos3600</Text>
            </View>
            
          </View>
            <Text style={{marginTop: 10, color: 'white', fontSize: 18}} >Testando o efeito skeleton</Text>
            <Text style={{marginTop: 10, color: 'white', fontSize: 18}} >Testando o efeito skeleton</Text>
            <Text style={{marginTop: 10, color: 'white', fontSize: 18}} >Testando o efeito skeleton</Text>
        </View>
      </Skeleton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    paddingTop: 15,
  },
  card:{
    width: width - 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});
