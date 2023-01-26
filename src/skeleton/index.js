import React, {useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Animated } from 'react-native';


const {width} = Dimensions.get('window')
const cor = '#ECEFF1'

export default function Skeleton({visible, children}) {

    const AnimatedValue = new Animated.Value(0)
    const translateX = AnimatedValue.interpolate({
        inputRange:[0,1],
        outputRange:[-10,width]
    })

    useEffect(() => {
        circleAnimated()
        return () => circleAnimated()
    },[])

    const circleAnimated = () => {
        AnimatedValue.setValue(0)
        Animated.timing(
            AnimatedValue,
            {
                toValue: 1,
                duration: 500,
                useNativeDriver: false
            }
        ).start(() => {
            setTimeout(() =>{
                circleAnimated()
            }, 1000)
        })
    }

    if(visible){
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#121212' />
                <View style={{margin: 10}}>
                    <View style={styles.card}>
                            <View style={{overflow: 'hidden', backgroundColor: cor, width: 100, height: 100, borderRadius: 50, marginRight: 15}}>
                                <Animated.View
                                    style={{
                                        width: '30%',
                                        height: '100%',
                                        opacity: 0.5,
                                        backgroundColor: '#FFF',
                                        transform: [{translateX: translateX}]
                                    }}
                                >
        
                                </Animated.View>
                            </View>
                            <View style={{flex: 1, justifyContent: 'space-evenly'}}>
                                <View style={{overflow: 'hidden', backgroundColor: cor, height: 32, borderRadius: 5}}>
                                    <Animated.View
                                        style={{
                                            width: '30%',
                                            height: '100%',
                                            opacity: 0.5,
                                            backgroundColor: '#FFF',
                                            transform: [{translateX: translateX}]
                                        }}
                                    ></Animated.View>    
                                </View>            
                                <View style={{overflow: 'hidden', backgroundColor: cor, height: 22, borderRadius: 5}}>
                                <Animated.View
                                        style={{
                                            width: '30%',
                                            height: '100%',
                                            opacity: 0.5,
                                            backgroundColor: '#FFF',
                                            transform: [{translateX: translateX}]
                                        }}
                                    ></Animated.View> 
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{flex: 0}}>
                        <View style={{overflow: 'hidden', backgroundColor: cor, height: 22, borderRadius: 5}}>
                            <Animated.View
                                style={{
                                    width: '30%',
                                    height: '100%',
                                    opacity: 0.5,
                                    backgroundColor: '#FFF',
                                    transform: [{translateX: translateX}]
                                }}
                            ></Animated.View> 
                        </View>            
                        <View style={{overflow: 'hidden', backgroundColor: cor, height: 22, borderRadius: 5}}>
                            <Animated.View
                                style={{
                                    width: '30%',
                                    height: '100%',
                                    opacity: 0.5,
                                    backgroundColor: '#FFF',
                                    transform: [{translateX: translateX}]
                                }}
                            ></Animated.View> 
                        </View>
                    </View>
            </View>
          )
    }else{
        return (
            <>
                {children}
            </>
        )
    }

  
}

const styles = StyleSheet.create({
    container: {
      margin: 10,
    },
    card:{
      width: width - 20,
      flexDirection: 'row',
      justifyContent: 'space-around',
    }
  });