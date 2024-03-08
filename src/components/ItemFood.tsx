import { View, Text, Image } from 'react-native'
import React from 'react'
import { ICONS, IMAGES } from '../constant/constant'

import { style } from './style'
import { BlurView } from '@react-native-community/blur'

export default function ItemFood() {
  return (
    <View style ={style.item}>
        <Image resizeMode='cover' style={style.item} source={IMAGES.backgroundSlashScreen}  />
          <View style={style.itemContent}>
              <BlurView blurType="light">
                <Text style={style.itemTextColor}>Pasta</Text>
              </BlurView>

              <BlurView blurType="dark">
                <React.Fragment>
                  <Text style={style.itemTextColor}>Spaghetti with shrimp Sauce</Text>
                  <Text style={style.itemTextColor}>30 min/1 serving</Text>
                </React.Fragment>
              </BlurView>

              <Image source={ICONS.bookmark} />
        </View>
    </View>
  )
}