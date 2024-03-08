import { View, Text, Image } from 'react-native'
import React from 'react'
import { IMAGES } from '../../../constant/constant'
import { style } from '../Style'


export default function Toolbar() {
  return (
    <View style={style.toolBar}>
        <View>
            <Text style={style.toolBarTitle}>Hello ByProgrammers</Text>
            <Text style={style.tbSubTit}>What you want to cook today</Text>
        </View>
        <Image source={IMAGES.avatar} style={style.avata}/>
    </View>
  )
}