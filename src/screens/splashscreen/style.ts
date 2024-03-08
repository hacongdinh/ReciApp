
import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constant/constant";

export const style = StyleSheet.create({
    container:{
        flex: 1
    },
    absolute:{
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    containerContent:{
        height: 400,
        bottom: 0,
        padding: SIZES.paddingLar,

    },
    title:{
        fontSize: FONTS.fontLar,
        color:COLORS.white,
        fontWeight:"700"
    },
    subTitle:{
        color:COLORS.grey,
        marginTop: SIZES.marginLar
    }
})