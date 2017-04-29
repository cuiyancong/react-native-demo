import React, { Component } from 'react';
import {
    AppRegistry,
    Navigator,
    Platform,
    View,
Text,
TouchableOpacity
} from 'react-native';
import Search from './search'
import Root from './root';

const defaultRoute = {
    component: Root,
};
var NavigationBarRouteMapper = {
    // 左键
    LeftButton(route, navigator, index, navState) {
        if (index > 0) {
            return (
                <View >
                    <TouchableOpacity
                        underlayColor='transparent'
                        onPress={() => {if (index > 0) {navigator.pop()}}}>
                        <Text >
                            后退
                        </Text>
                    </TouchableOpacity>
                </View>
            );
        } else {
            return null;
        }
    },
    // 右键
    RightButton(route, navigator, index, navState) {

    },
    // 标题
    Title(route, navigator, index, navState) {
       // if(index>0){
       //     return(
       //           <Search placeholder="搜索" style={{marginTop:0}}/>
       //     )
       // }else return null

    }
};
export default class Setup extends Component {
    _renderScene(route, navigator) {
        let Component = route.component;
        return (
            <Component {...route.params} navigator={navigator} />
        );
    }
    render() {
        return (
            <Navigator
                initialRoute={defaultRoute}
                renderScene={this._renderScene}
                configureScene={(route) => {
                    return Navigator.SceneConfigs.PushFromRight;
                }}
                navigationBar={
                    <Navigator.NavigationBar
                        routeMapper={NavigationBarRouteMapper}/>}
            />
        );
    }
}

module.exports=Setup