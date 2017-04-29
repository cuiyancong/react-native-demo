'use strict';
import {
    StyleSheet,
    PixelRatio,
    Dimensions,
} from 'react-native';
var cell_w = Dimensions.get('window').width;
const styles = StyleSheet.create({
    image:{
        width:50,
        height:50
    },
    bar:{
        paddingTop:10,
        paddingBottom:10,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:"#fff",
    },
    text:{
        textAlign:'center',
        marginTop:5
    },
    titleRight:{
        flexDirection:'row',
        alignItems:'center'
    },
    hotTopicTitle:{
        paddingLeft:15,
        paddingRight:35,
        justifyContent:'space-between',
        backgroundColor:'#fff',
        paddingVertical:10,
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth:1,
        borderColor:'#e7e7e7'
    },
    scroll:{
        backgroundColor:'#fff',
    },
    scrollItem:{
        flexDirection:"row",
        marginHorizontal:10,
        marginVertical:20,
        shadowOffset:{width:4,height:4},
        shadowColor:'#e7e7e7',
        height:100,
        width:250,
        borderWidth:1,
        borderColor:'#e7e7e7',
        shadowRadius:10,
        shadowOpacity:1
    },
    itemTitle:{
        width:110,
        fontWeight:'600',
        fontSize:18,
        color:'#464646',
        lineHeight:24
    },
    desc:{
        width:110,
        color:'#9a9a9a',
        fontSize:14
    },
    contentItem:{
        borderBottomWidth:1,
        borderTopWidth:1,
        borderColor:'#e7e7e7',
        backgroundColor:'#fff',
        paddingVertical:10,
        paddingHorizontal:20,
        marginVertical:10,
        width:'100%'
    },
    author:{
        flexDirection:'row',
        alignItems:'center'
    },
    contentTitle:{
        fontWeight:"700",
        fontSize:16,
        color:'#282828',
        marginVertical:5,
        lineHeight:24
    },
    content:{
        color:'#616161',
        fontSize:14,
        lineHeight:20,
        overflow:'hidden',
        height:60
    },
    foot:{
        flexDirection:"row",
        marginVertical:5,
    }
})
module.exports=styles