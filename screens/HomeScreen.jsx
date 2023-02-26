import { View, Text ,SafeAreaView,Image, TextInput} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ChevronDownIcon,MagnifyingGlassIcon, UserIcon, AdjustmentsHorizontalIcon } from "react-native-heroicons/solid"


export const HomeScreen = () => {
  const navigation = useNavigation()  

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });

   }, [])
  return (
    <SafeAreaView className="bg-gray-200 ">
    
        {/* Header */}
        <View className="flex-row mx-4 space-x-3 items-center pb-5 ">
          <Image
            source={{
              uri: "https://www.pinclipart.com/picdir/big/547-5478238_caterer-clipart.png"
              }}
              className="w-7 h-7 bg-gray-400 p-4 rounded-full"
          /> 
          <View className="flex-1">
            <Text className="text-gray-300 text-sm font-bold">Deliver Now</Text>
            <Text className="text-lg font-bold">Current Location <ChevronDownIcon size={20} color="#EC830B"/> </Text>
          </View>
          <UserIcon size={35} color="#EC830B"/>
        </View>

        {/* Search */}
      <View  className="flex-row items-center space-x-8">
          <View className="flex-row space-x-3 flex-1 bg-gray-300 p-2 rounded-lg item-center ">
            <MagnifyingGlassIcon  color="#EC830B"/>
            <TextInput  placeholder="Search for restaurants or cuisines" className="text-white text-sm font-bold w-100"/>
          </View>
         <AdjustmentsHorizontalIcon color="#EC830B"/>
        </View>
     
    </SafeAreaView>
  )
}

export default HomeScreen
