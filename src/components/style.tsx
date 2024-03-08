import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constant/constant";

export const style = StyleSheet.create({
    //icon
    icon:{
        height:24,
        width:24
    },
    btn:{
        borderRadius:8,
        padding: SIZES.paddingSml,
        backgroundColor:COLORS.primary,
        marginTop:SIZES.maginSm
    },
    TextWhite:{
        color:COLORS.white,
        textAlign:'center',
        fontWeight:'600'
    },
    btnOutLine:{
        padding: SIZES.paddingSml,
        marginTop:SIZES.maginSm,
        borderRadius:8,
        borderWidth:1,
        borderColor:COLORS.primary

    },
    tabIconContainer:{
        width:50,
        height: 50,
        justifyContent:'center',
        alignItems:'center'
    },
    tabIconSelected:{
        tintColor:COLORS.primary
    },
    tabIconUnSelected:{
        tintColor:COLORS.grey
    },
    tabIconLine:{
        position: 'absolute',
        bottom: 2,
        height:3,
        width:'100%',
        backgroundColor:COLORS.primary,
        borderTopLeftRadius:8,
        borderTopRightRadius:8
    },
    // input cus
    Containerinput:{
        height: 42,
        backgroundColor:COLORS.lightGrey,
        paddingLeft:10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems:'center'
    },
    input:{
        width:'100%'
    },
    item:{
        borderRadius:10,
        width:250,
        height:300
    },
    itemContent:{
        position:'absolute',
        width: '100%',
        height:"100%"
    },
    itemTextColor:{
        color:COLORS.white
    }
})