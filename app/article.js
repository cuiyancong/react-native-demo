//文章详情
//没有写具体的页面，只是练习将id传入

import React ,{Component} from 'react';
import {View,Text,Navigator} from 'react-native';
import Search from './search'

class Article extends Component{
    constructor(props){
        super(props);
        }
    render(){
        return(
            <View>
                {/*<Search placeholder="搜索" imgUrl={require('./img/lightning.png')}/>*/}
                <Text>{this.props.id}</Text>
            </View>
        )
    }
}

module.exports=Article