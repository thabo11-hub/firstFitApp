import { Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'

const HomeScreens = () => {
  return (
    <SafeAreaView className='flex-1 bg-gray-400 relative'>
      <ScrollView>

        <TouchableOpacity className='absolute z-50 top-5 right-10 items-center'>
          <Ionicons name='person-circle' size={24} color="black" />
          <Text className='text-center text-[#E59620]'>Home</Text>
        </TouchableOpacity>

        <Image
          source={{ uri: 'https://www.freenamedesigns.com/boy-names/calligraphic-stylish-name-tattoo-designs/eldridge-name-design.jpg' }}
          className="w-full h-64"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreens