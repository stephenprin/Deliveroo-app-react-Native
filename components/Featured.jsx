import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import {   ChevronDoubleRightIcon} from "react-native-heroicons/solid"
import ResturantCard from './ResturantCard'

const Featured = ({description, title}) => {
  return (
    <View>
          <View className="flex-row mt-5 items-center justify-between">
              <Text className="text-xl font-bold">{title}</Text>
              <ChevronDoubleRightIcon size={15} color="#EC830B" />
          </View>
          <Text className="text-sm text-gray-400">{description}</Text>

          <ScrollView
              contentContainerStyle={{paddingHorizontal: 10, paddingTop: 10}}
                showsHorizontalScrollIndicator={false}
              horizontal 
              className="mt-5">
              {/* Restutrant card */}
              <ResturantCard
              id={1}
              imgUrl="https://images6.alphacoders.com/938/938921.jpg"
              title= "Burger King"
              genre= "Burgers"
              address="Burger King, 5th Avenue, Lagos" 
              short_description="Burger King is an American global chain of hamburger fast food restaurants."
              rating= {4.5}
              dishes= {[]}
              lat= {40.72}
            lng={74.0060}
            deliveryFee={2.99}
              />
               <ResturantCard
              id={1}
              imgUrl="https://images6.alphacoders.com/938/938921.jpg"
              title= "Burger King"
              genre= "Burgers"
              address="Burger King, 5th Avenue, Lagos" 
              short_description="Burger King is an American global chain of hamburger fast food restaurants."
              rating= {4.5}
              dishes= {[]}
              lat= {40.72}
            lng={74.0060}
            deliveryFee={2.99}
              />
               <ResturantCard
              id={1}
              imgUrl="https://images6.alphacoders.com/938/938921.jpg"
              title= "Burger King"
              genre= "Burgers"
              address="Burger King, 5th Avenue, Lagos" 
              short_description="Burger King is an American global chain of hamburger fast food restaurants."
              rating= {4.5}
              dishes= {[]}
              lat= {40.72}
            lng={74.0060}
            deliveryFee={2.99}
            />

          </ScrollView>

    </View>
  )
}

export default Featured