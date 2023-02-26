import { View, Text ,SafeAreaView,Image, TextInput} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ChevronDownIcon,MagnifyingGlassIcon, UserIcon, AdjustmentsHorizontalIcon } from "react-native-heroicons/solid"
import Categories from '../components/Categories'
import { ScrollView } from 'react-native'
import Featured from '../components/Featured'


export const HomeScreen = () => {
  const navigation = useNavigation()  

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });

   }, [])
  return (
    <SafeAreaView className="bg-white mx-4 px-3">
    
        {/* Header */}
        <View className="flex-row mx-4 space-x-3 items-center pb-3 ">
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
      <View  className="flex-row items-center space-x-2 px-3 pb-3">
          <View className="flex-row space-x-3 flex-1 bg-gray-300 p-2  item-center ">
            <MagnifyingGlassIcon  color="#EC830B"/>
            <TextInput  placeholder="Search for restaurants or cuisines" className="text-sm font-bold w-100"/>
          </View>
         <AdjustmentsHorizontalIcon color="#EC830B"/>
      </View>
      
      {/* Body */}
       <ScrollView className=" bg-gray-100">
        {/* Categories */}
        <Categories />
        {/* Featured */}
        <Featured
          id="1"
          title="Featured"
          description="Paid placements for our partners"
          
        />
           <Featured
          title="Taste of the week"
          description="Everyone is talking about this"
         
        />
           <Featured
          title="Offer near you"
          description=" Why not try something new"
        
        />
      </ScrollView>
     
    </SafeAreaView>
  )
}

export default HomeScreen
