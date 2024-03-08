import { Image, View } from "react-native";
import { ICONS } from "../constant/constant";
import { style } from "./style";

type Props ={
    focused : boolean,
    icon:any
}
export const TabIcon = ({focused,icon}:Props) =>(
    <View  style={style.tabIconContainer}>
        <Image style={focused ? style.tabIconSelected : style.tabIconUnSelected} source={icon}/>
       {focused && <View style={style.tabIconLine}/>}
    </View>
)