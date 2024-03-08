import { Image, TextInput, View } from "react-native";
import { style } from "./style";
import { ICONS } from "../constant/constant";

export const InputCus =()=>(
    <View style={style.Containerinput}>
        <Image source={ICONS.search} style={style.icon}/>
        <TextInput style={style.input} />
    </View>
)