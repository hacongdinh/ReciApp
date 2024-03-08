import { View, Text, Image } from 'react-native'
import React from 'react'
import { InputCus } from '../../../components/InputCus'
import { IMAGES } from '../../../constant/constant'
import { style } from '../Style'

export default function Search() {
  return (
    <View  style={style.search}>
        <InputCus/>
        <View style={style.ctHinRecipe}>
          <Image style={style.iconSushi} source={IMAGES.recipBookMark} />
          <View style={{flex:1}}>
            <Text >You have 12 reciptes that you haven't tried yet</Text>
            <Text style={style.cHintRecTit}>See recipes</Text>
          </View>
        </View>
    </View>
  )
}