import { RouteProp } from '@react-navigation/native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SCREENS } from '../constant/constant'

type MainStackParams = {
    Home: undefined,
    Splashscreen:undefined
}
export type PropPush = NativeStackScreenProps<MainStackParams,SCREENS.Home>
export type PropsRoute = RouteProp<MainStackParams,SCREENS.Home>