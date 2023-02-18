import { Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import ActionRow from '../components/ActionRow';

const HomeScreens = () => {
  return (
    <SafeAreaView className='flex-1 bg-gray-400 relative'>
      <ScrollView>

        <TouchableOpacity className='absolute z-50 top-5 right-10 items-center'>
          <Ionicons name='person-circle' size={24} color="black" />
          <Text className='text-center text-[#E59620]'>Home</Text>
        </TouchableOpacity>

        <Image
          source={{ uri: 'https://i.ingur.com/e14NE49.png' }}
          className="w-full h-64"
        />

        <ActionRow
          title="Track Workout"
          screens="Demo"
          color="#E59620"
          icon="fitness"
          vertical
        />

        <ActionRow
          title="Browse Workout"
          screens="Demo"
          color="#1982C4"
          icon="fitness"
          vertical
        />

        <ActionRow
          title="Connect with Friends"
          screens="Demo"
          color="#F44174"
          icon="share-social"

        />

        <ActionRow
          title="Add workout"
          screens="Demo"
          color="#8AC926"
          icon="add-circle"
          vertical
        />

        <ActionRow
          title="Create Routine"
          screens="Demo"
          color="#C03221"
          icon="md-time"
          
        />

        <ActionRow
          title="Join Challenges"
          screens="Demo"
          color="#2396F7"
          icon="trophy"
          requiresPro
        />

      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreens