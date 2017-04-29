'use strict';
import {
    StyleSheet,
    PixelRatio,
    Dimensions,
} from 'react-native';
var cell_w = Dimensions.get('window').width;
const styles = StyleSheet.create({
    listItem:{
        paddingLeft:15,
        paddingRight:15,
        backgroundColor:'#fff',
        marginBottom:10,
        marginTop:10,
        paddingBottom:10,
        height:160,
        overflow:'hidden'
    },
    title:{
        fontWeight:"700",
        fontSize:16,
        color:'#282828'
    },
    from:{
        marginTop:10,
        marginBottom:15,
        alignItems:'center',
        flexDirection:'row',
    },
    content:{
        fontSize:14,
        lineHeight:28,
        marginTop:10,
        color:'#464646'
    },
    bar:{
        flexDirection:'row',
        height:40,
        borderBottomWidth:1,
        borderColor:'rgb(230,230,230)',
        alignItems:'center',
    },
    barItems:{
        width:'33.3%',
        borderRightWidth:1,
        borderColor:'rgb(230,230,230)',
        justifyContent:'center'
    },
    noBorder:{
        borderRightWidth:0
    }
})
module.exports=styles