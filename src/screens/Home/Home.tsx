import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Toolbar from './compponents/Toolbar'
import { InputCus } from '../../components/InputCus'
import Search from './compponents/Search'
import { style } from './Style'
import TopTrending from './compponents/TopTrending'




export default function Home() {
  return (
    <View style={style.home}>
      <Toolbar/>
      <ScrollView>
        <Search/>
        <TopTrending/>
      </ScrollView>

    </View>
  )
}