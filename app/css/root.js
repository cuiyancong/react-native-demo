'use strict';
import {
    StyleSheet,
    PixelRatio,
    Dimensions,
} from 'react-native';
var cell_w = Dimensions.get('window').width;
const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 14,
        fontWeight:'bold',
        color: '#fff'
    },
    tab: {
        height: 52,
        alignItems: 'center',
        backgroundColor: 'rgb(80, 142, 245)',
        paddingTop:5,
        paddingBottom:5
    },
    iconStyle: {
        width:  20 ,
        height:  20,
    },
    selectedTitleStyle: {
        color: 'orange'
    },
    navBar: {
        backgroundColor: '#03a9f4',
        height:  64
    },
    navBarLeftButton: {
        flex: 1,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 5
    },
    navBarRightButton: {
        marginRight: 5
    },
    navBarLeftTitle: {
        fontSize: 18,
        color: '#FFFFFF'
    },
    navBarTitleText: {
        fontWeight: '500',
        fontSize: 20,
        color: '#FFFFFF',
        marginTop: 10
    },
    icon: {
        width:  22 ,
        height:  20 ,
    },
    blue:{
        backgroundColor:'blue'
    }
});
module.exports=styles