import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { StarIcon ,MapPinIcon} from "react-native-heroicons/solid";
import { Image } from 'react-native';
const ResturantCard = ({
    id,
    imgUrl,
    title,
    genre,
    address,
    short_description,
    rating,
    dishes,
    lat,
    lng,
    deliveryFee,
}) => {
  return (
      <TouchableOpacity className="bg-white shadow-md mr-3">
          <Image source={{
              uri: imgUrl
          }} className="w-72 h-36 rounded-sm" />
          <View className="px-3 pb-3">
              <Text className="text-l font-bold pt-2">{title}</Text>
              <View className="flex-row space-x-1 items-center pb-1">
                  <StarIcon size={20} opacity={0.5} color="#EC830B" />
                  <Text className="text-xs text-gray-400">
                      <Text className="text-green-400">{ rating}</Text> . {genre}
                  </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                  <MapPinIcon color="grey" size={15} />
                  <Text className="text-xs text-gray-500">Nearby . { address}</Text>
              </View>
          </View>
    </TouchableOpacity>
  )
}

export default ResturantCard

