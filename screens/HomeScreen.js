import { View, Text ,SafeAreaView,Image} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ChevronDownIcon, UserIcon, AdjustmentsIcon } from "react-native-heroicons/solid"


export const HomeScreen = () => {
  const navigation = useNavigation()  

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });

   }, [])
  return (
    <SafeAreaView>
      <Text className="text-red-500 font-bold flex">
        <View className="flex-row mx-4 space-x-3 items-center pb-4 ">
          <Image
            source={{
              uri: "https://www.pinclipart.com/picdir/big/547-5478238_caterer-clipart.png"
              }}
              className="w-7 h-7 bg-gray-400 p-4 rounded-full"
          /> 
          <View>
            <Text className="text-gray-300 text-sm font-bold">Deliver Now</Text>
            <Text className="text-lg font-bold">Current Location <ChevronDownIcon size={20} color="#EC830B"/> </Text>
          </View>
          <UserIcon size={35} color="#EC830B"/>
        </View>
      </Text>
    </SafeAreaView>
  )
}

export default HomeScreen
