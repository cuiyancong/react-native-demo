import React ,{Component} from 'react';
import {View,Text} from 'react-native';
import Search from './search'
class Private extends Component{
    render(){
        return(
            <View>
                <Search placeholder="搜索" imgUrl={require('./img/lightning.png')}/>
                <Text>private</Text>
            </View>
        )
    }
}
module.exports=Private