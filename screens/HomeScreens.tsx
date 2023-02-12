import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'

const HomeScreens = () => {
  return (
    <SafeAreaView>

      <TouchableOpacity>
        <Ionicons name='person-circle' size={24} color="black"/>
        <Text>Home</Text>
      </TouchableOpacity>

      <Image
        source={{ uri: 'https://www.freenamedesigns.com/boy-names/calligraphic-stylish-name-tattoo-designs/eldridge-name-design.jpg' }}
        className="w-full h-64"
      />
    </SafeAreaView>
  )
}

export default HomeScreens