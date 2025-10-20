import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <ScrollView className='bg-[#ffff]'>
      <View className='p-4 flex justify-start items-start '>
        <Text className='text-2xl text-black pt-5 font-semibold'  >Let's Resume Learning</Text>
      </View>
      <Text className='pl-4 text-4xl font-extrabold text-[#f08d37]' >Atish Shinde!</Text>
      <View className='flex justify-end items-end -mt-20 pr-10'>
        <Image source={require('../assets/logo.webp')} className='rounded-full w-[70] h-[70] border'  ></Image>
      </View>
      <View className='flex flex-row p-5 gap-4 mt-5'>
        <View
          className="
    w-[130] h-44 p-5 rounded-2xl 
    bg-white
    shadow-md shadow-black/30
    elevation-4
  "
          style={{
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 6 },
            shadowOpacity: 0.25,
            shadowRadius: 8,
            elevation: 8,
          }}
        >
          <Text className="text-xl font-semibold text-gray-800">
            Electronics
          </Text>
        </View>
        <View
          className="w-[110] h-44 p-5 rounded-2xl  bg-white shadow-md shadow-black/30 elevation-4" 
          style={{
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 6 },
            shadowOpacity: 0.25,
            shadowRadius: 8,
            elevation: 8,
          }}
        >
          <Text className="text-xl font-semibold text-gray-800">
            Electronics
          </Text>
        </View>
        <View
          className="w-[110] h-44 p-5 rounded-2xl  bg-white shadow-md shadow-black/30 elevation-4" 
          style={{
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 6 },
            shadowOpacity: 0.25,
            shadowRadius: 8,
            elevation: 8,
          }}
        >
          <Text className="text-xl font-semibold text-gray-800">
            
          </Text>
        </View>

      </View>
    </ScrollView>
  )
}

export default Home