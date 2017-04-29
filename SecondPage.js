import React from 'react';
import {
    View,
    Navigator,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import FirstPage from './FirstPage'

export default class SecondPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    pressButton(){
        const {navigator}=this.props;
        let routers = navigator.getCurrentRoutes()
        console.log(routers,'~~~~~~~~~~')
        console.log(this.props,'++++++++')
        if(navigator){
            navigator.pop()
        }
    }
    render() {
        return (
            <View style={style.center}>
                <TouchableOpacity onPress={this.pressButton.bind(this)}>
                    <Text>点我跳转</Text>
                </TouchableOpacity>

            </View>
        );
    }
}
const style = StyleSheet.create({
    center:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"blue"
    }
})