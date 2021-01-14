import { white } from 'ansi-colors'
import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'

export default function Recommended({ cover, house, offer }) {
  return(
    <ImageBackground
    source={cover}
    style={styles.container}
    blurRadius={3}
    >
      <Text style={[styles.house, styles.shadow]}>
        {house}
      </Text>
      <Text style={[styles.description, styles.shadow]}>
        {offer} OFF
      </Text>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container:{
    height: 130,
    width: 230,
    marginRight: 20,
    marginBottom: 40,
    opacity: 0.8,
    backgroundColor: '#000',
    marginLeft: 3,
    padding: 12,
    marginTop: 20
  },
  house:{
    color: 'white',
    fontFamily: 'Montserrat_700Bold',
    fontSize: 15
  },
  description:{
    fontFamily: 'Montserrat_500Medium',
    color: 'white',
    fontSize: 12
  },
  shadow:{
    textShadowOffset: { width: 1, height: 2},
    textShadowRadius: 3,
    textShadowColor: 'black'
  }
})