import React ,{Component} from 'react';
import {View,Text,ListView} from 'react-native';
import Search from './search'
class More extends Component{
    render() {
        return (
            <Search placeholder="搜索" imgUrl={require('./img/lightning.png')}/>
        );
    }
}
module.exports=More