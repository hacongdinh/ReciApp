import { Text, TouchableOpacity } from "react-native";
import { style } from "./style";

type Props = {
    title: String
}

export const PrimaryBtn =(props:Props) =>(
    <TouchableOpacity  style={style.btn}>
        <Text style={style.TextWhite}>{props.title}</Text>
    </TouchableOpacity>
)

export const OutLineBtn =(props:Props) =>(
    <TouchableOpacity style={style.btnOutLine}>
        <Text style={style.TextWhite}>{props.title}</Text>
    </TouchableOpacity>
)