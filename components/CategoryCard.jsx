import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'

const CategoryCard = ({imgUrl, title}) => {
  return (
      <TouchableOpacity className="mr-2 relative ">
          <Image
              source={{ uri: imgUrl }}
              className="w-20 h-20 rounded-sm"
          />
          <Text className="absolute bottom-1 left-2 text-white font-bold">{ title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard