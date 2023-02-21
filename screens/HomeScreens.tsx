import { Text, SafeAreaView, Image, TouchableOpacity, ScrollView, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import ActionRow from '../components/ActionRow';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { useNavigation } from '@react-navigation/native';

export type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

const HomeScreens = () => {
 const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView className='flex-1 bg-gray-400 relative'>
      <ScrollView>

        <TouchableOpacity 
        onPress={() => navigation.navigate("Paywall")}
        className='absolute z-50 top-5 right-10 items-center'>
          <Ionicons name='person-circle' size={24} color="black" />
          <Text className='text-center text-[#E59620]'>Home</Text>
        </TouchableOpacity>

        <Image
          source={{ uri: 'https://i.ingur.com/e14NE49.png' }}
          className="w-full h-64"
        />
        <View className='mx-5'>

          <View className='flex-row justify-between space-x-2'>
            <ActionRow
              title="Track Workout"
              screen="Demo"
              color="#E59620"
              icon="fitness"
              vertical
            />

            <ActionRow
              title="Browse Workout"
              screen="Demo"
              color="#1982C4"
              icon="fitness"
              vertical
            />
          </View>

          <ActionRow
            title="Connect with Friends"
            screen="Demo"
            color="#F44174"
            icon="share-social"

          />

          <ActionRow
            title="Add workout"
            screen="Demo"
            color="#8AC926"
            icon="add-circle"
            vertical
          />

          <ActionRow
            title="Create Routine"
            screen="Demo"
            color="#C03221"
            icon="md-time"

          />

          <ActionRow
            title="Join Challenges"
            screen="Demo"
            color="#2396F7"
            icon="trophy"
            requiresPro
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreens;