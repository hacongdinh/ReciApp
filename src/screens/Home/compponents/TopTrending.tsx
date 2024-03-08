import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ItemFood from '../../../components/ItemFood'
import { style } from '../Style'
export default function TopTrending() {
  return (
    <View style={style.cTrending}>
      <Text style={style.cTrendingTit}>trending</Text>
      <FlatList 
      horizontal
      data={["a"]}
      renderItem={({item}) =><ItemFood/> }/>
    </View>
  )
}
