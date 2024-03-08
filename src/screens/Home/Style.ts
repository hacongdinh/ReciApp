import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constant/constant";

export const style = StyleSheet.create({
    home:{
        flex:1,
        backgroundColor:COLORS.white
    },
    toolBar:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:SIZES.paddingSml
    },
    avata:{
        height:42,
        width: 42,
        borderRadius:21
    },
    toolBarTitle:{
        fontSize: FONTS.fontMed,
        color: COLORS.primary,
        fontWeight: "600"
    
    },
    tbSubTit:{
        color:COLORS.blackGray
    },
    ctHinRecipe:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:COLORS.greenLight,
        borderRadius:10,
        padding:SIZES.paddingMin,
        marginTop:SIZES.maginSm
    },
    cHintRecTit:{
        fontWeight: '700',
        color:COLORS.primary,
        marginTop: SIZES.maginSm
    },
    search:{
        padding:SIZES.paddingMin
    },
    iconSushi:{
        height:80,
        width: 80
    },
    //trending
    cTrending:{
        padding:SIZES.paddingSml
    },
    cTrendingTit:{
        fontSize: 20,
        fontWeight: '700',
        color:COLORS.black
    }
})