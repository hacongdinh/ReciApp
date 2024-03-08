import { View, Text, Image } from 'react-native'
import React from 'react'
import {  COLORS, IMAGES, TEXT } from '../../constant/constant'
import LinearGradient from 'react-native-linear-gradient'
import { style } from './style'
import { OutLineBtn, PrimaryBtn } from '../../components/customBtn'

export default function Splashscreen() {
  return (
    <View style={style.container}>
      <Image source={IMAGES.backgroundSlashScreen} resizeMode='cover'/>
      <LinearGradient style={[style.absolute]} colors={[COLORS.transparent,COLORS.black]}>
        <View style={[style.absolute,style.containerContent]}>
          <Text style={style.title}>Cooking A Delicious Food Easily</Text>
          <Text style={style.subTitle}>Discover more than 1200 food recipes in your hands and cooking it easily!</Text>
          <PrimaryBtn title={TEXT.LOGIN} />
          <OutLineBtn title={TEXT.SIGN}/>
        </View>
      </LinearGradient>
    </View>
  )
}