import React ,{Component} from 'react';
import {View,Text} from 'react-native';
import Search from './search'
class Notification extends Component{
    render(){
        return(
            <View>
                <Search placeholder="搜索" imgUrl={require('./img/lightning.png')}/>
                <Text>Notification</Text>
            </View>
        )
    }
}
module.exports=Notification