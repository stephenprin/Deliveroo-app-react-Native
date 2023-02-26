import React, { Component } from 'react'
import { ScrollView, Text, View } from 'react-native'
import CategoryCard from './CategoryCard'

export class Categories extends Component {
  render() {
    return (
        <ScrollView contentContainerStyle={{paddingTop:10, paddingHorizontal:15}}
            horizontal showsHorizontalScrollIndicator={false }>
            {/* CatgoryCard */}
            <CategoryCard imgUrl="https://media.istockphoto.com/photos/food-delivering-picture-id1214541379?k=6&m=1214541379&s=170667a&w=0&h=4kHr8dGqCreknvcDiUvl6GlCaePAfLEXjIXNYJTqC4M=" title="Bake"/>
            <CategoryCard imgUrl="https://media.istockphoto.com/photos/food-delivering-picture-id1214541379?k=6&m=1214541379&s=170667a&w=0&h=4kHr8dGqCreknvcDiUvl6GlCaePAfLEXjIXNYJTqC4M=" title="Bake"/>
            <CategoryCard imgUrl="https://media.istockphoto.com/photos/food-delivering-picture-id1214541379?k=6&m=1214541379&s=170667a&w=0&h=4kHr8dGqCreknvcDiUvl6GlCaePAfLEXjIXNYJTqC4M=" title="Bake" />
            <CategoryCard imgUrl="https://media.istockphoto.com/photos/food-delivering-picture-id1214541379?k=6&m=1214541379&s=170667a&w=0&h=4kHr8dGqCreknvcDiUvl6GlCaePAfLEXjIXNYJTqC4M=" title="Bake"/>
            <CategoryCard imgUrl="https://media.istockphoto.com/photos/food-delivering-picture-id1214541379?k=6&m=1214541379&s=170667a&w=0&h=4kHr8dGqCreknvcDiUvl6GlCaePAfLEXjIXNYJTqC4M=" title="Bake"/>
            <CategoryCard imgUrl="https://media.istockphoto.com/photos/food-delivering-picture-id1214541379?k=6&m=1214541379&s=170667a&w=0&h=4kHr8dGqCreknvcDiUvl6GlCaePAfLEXjIXNYJTqC4M=" title="Bake"/>
            
     </ScrollView>
    )
  }
}

export default Categories
