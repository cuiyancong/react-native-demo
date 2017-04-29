// 根组件

import React,{Component} from 'react';
import {
    StyleSheet,
    Image,
    Navigator,
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import styles from './css/root'
import TabNavigator from 'react-native-tab-navigator'
import Home from './home';
import Find from './find';
import Notification from './notification';
import More from './more';
import Private from './private-letter';
export default class Root extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedTab : 'home'
        }
    }
    renderTabBarItem(title, iconName, iconSelectName, selectedTab, componentName, component){
                console.log(componentName,component,'=========')
            return(
                <TabNavigator.Item
                    title={title}
                    renderIcon={() => <Image
                        source={ iconName}
                        style={styles.iconStyle}
                    />}
                    renderSelectedIcon={() => <Image
                        source={ iconSelectName}
                        style={styles.iconStyle}
                    />}
                    selected={this.state.selectedTab === selectedTab}
                    onPress={()=>{this.setState({selectedTab:selectedTab})}}
                    titleStyle={styles.titleStyle}
                    selectedTitleStyle={styles.selectedTitleStyle}
                >
                    <Navigator
                        initialRoute={{name: componentName, title: title, component: component}}
                        configureScene={(route) => {
                            return Navigator.SceneConfigs.PushFromRight;
                        }}
                        renderScene={(route, navigator) => {

                            let Component = route.component;
                            return <Component {...route.params} navigator={this.props.navigator}/>; //navigator--->Home ; this.props.navigator ---->root
                        }}

                    />
                </TabNavigator.Item>
            )

    }

    render(){
        return(
            <TabNavigator tabBarStyle={styles.tab}>
                {this.renderTabBarItem('首页',require("./img/tab_icon_find.png"),require("./img/tab_icon_find.png"),'home','home',Home)}
                {this.renderTabBarItem('发现',require("./img/tab_icon_find.png"),require("./img/tab_icon_find.png"),'find','find',Find)}
                {this.renderTabBarItem('通知',require("./img/tab_icon_find.png"),require("./img/tab_icon_find.png"),'Notification','Notification',Notification)}
                {this.renderTabBarItem('私信',require("./img/tab_icon_find.png"),require("./img/tab_icon_find.png"),'Private','Private',Private)}
                {this.renderTabBarItem('更多',require("./img/tab_icon_find.png"),require("./img/tab_icon_find.png"),'More','More',More)}
            </TabNavigator>

            )
    }
}
