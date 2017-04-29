import React ,{Component} from 'react';
import {View,Text,TextInput,StyleSheet,Image,ListView} from 'react-native';


class Search extends Component{
    render(){
        return(
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',borderBottomWidth:1,borderColor:'#dbdbdb',paddingBottom:10,zIndex:100}}>
                <View style={styles.flexbox1}>
                    <TextInput placeholder={this.props.placeholder} style={styles.search}/>
                </View>
                <View style={styles.flexbox2}>
                    <Image source={this.props.imgUrl} style={{height:30,width:30,alignItems:'center'}}></Image>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    search:{
        height:30,
        marginRight:0,
        width:'100%',
        borderRadius:5,
        borderWidth:1,
        borderColor:'rgb(230,230,230)',
        textAlign:'center',
        fontSize:14,
        backgroundColor:'rgb(230,230,230)'
    },
    flexbox1:{
        width:"75%",
        justifyContent:'center',
        alignItems:'center'
    },
    flexbox2:{
        width:"15%",
        justifyContent:'center',
        alignItems:'center'
    }
})
module.exports=Search