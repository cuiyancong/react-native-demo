import React from 'react';
import {
    View,
    Navigator,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import SecondPage from './SecondPage'

export default class FirstPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id:2
        };
    }
    pressButton(){
        const {navigator}=this.props;
        console.log(this.props,'========')
        if(navigator){
            navigator.push({
                name:'SecondPage',
                component:SecondPage,
                id:this.state.id
            })
        }
    }
    render() {
        return (
            <View style={style.center}>
                <TouchableOpacity onPress={this.pressButton.bind(this)}>
                    <Text>点我点我点我点我</Text>
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
        backgroundColor:'red'
    }
})