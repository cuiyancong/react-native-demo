//首页 页面

import React ,{Component} from 'react';
import {View,Text,TextInput,StyleSheet,Image,ListView,TouchableOpacity} from 'react-native';
import Article from './article'
import Search from './search'
import styles from './css/home'

export default class Home extends Component{
    constructor(props){
        super(props);
        let ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2})
        let data =[{id:1,title:"由一篇微博看出国内市场的现状",from:'游戏',content:'由一篇微博看出国内市场的现状由一篇微博看出国内市场的现状由一篇微博看出国内市场的现状由一篇微博看出国内市场的现状由一篇微博看出国内市场的现状由一篇微博看出国内市场的现状由一篇微博看出国内市场的现状由一篇微博看出国内市场的现状由一篇微博看出国内市场的现状'},
            {id:2,title:"你坚持过哪些细小的好习惯",from:'游戏',content:'由一篇微博看出国内市场的现状由一篇微博看出国内市场的现状由一篇微博看出国内市场的现状由一篇微博看出国内市场的现状由一篇微博看出国内市场的现状由一篇微博看出国内市场的现状由一篇微博看出国内市场的现状由一篇微博看出国内市场的现状由一篇微博看出国内市场的现状'},
            {id:3,title:"你坚持过哪些细小的好习惯",from:'游戏',content:'由一篇微博看出国内市场的现状由一篇微博看出国内市场的现状由一篇微博看出国内市场的现状由一篇微博看出国内市场的现状由一篇微博看出国内市场的现状由一篇微博看出国内市场的现状由一篇微博看出国内市场的现状由一篇微博看出国内市场的现状由一篇微博看出国内市场的现状'},
            {id:4,title:"你坚持过哪些细小的好习惯",from:'游戏',content:'由一篇微博看出国内市场的现状由一篇微博看出国内市场的现状由一篇微博看出国内市场的现状由一篇微博看出国内市场的现状由一篇微博看出国内市场的现状由一篇微博看出国内市场的现状由一篇微博看出国内市场的现状由一篇微博看出国内市场的现状由一篇微博看出国内市场的现状'},
            {id:5,title:"你坚持过哪些细小的好习惯",from:'游戏',content:'由一篇微博看出国内市场的现状由一篇微博看出国内市场的现状由一篇微博看出国内市场的现状由一篇微博看出国内市场的现状由一篇微博看出国内市场的现状由一篇微博看出国内市场的现状由一篇微博看出国内市场的现状由一篇微博看出国内市场的现状由一篇微博看出国内市场的现状'}
        ];
        this.state={
            dataSource:ds.cloneWithRows(data),
            id:null
        };
    }
    _onPress(id)  //点击事件
    {
        const {navigator} = this.props
        navigator.push({
            name:'Article',
            component:Article,
            params:{
                id:id
            }
        })

    }
    render(){
        return(
           <View style={{paddingTop:40}}>
               <Search placeholder="搜索" imgUrl={require('./img/lightning.png')} />
               <View style={styles.bar}>
                   <View style={styles.barItems}>
                       <Text style={{textAlign:'center'}}>提问</Text>
                   </View>
                   <View style={styles.barItems}>
                       <Text style={{textAlign:'center'}}>回答</Text>
                   </View>
                   <View style={[styles.barItems,styles.noBorder]}>
                       <Text style={{textAlign:'center'}}>分享</Text>
                   </View>
               </View>
               <ListView
                   style={{backgroundColor:'rgb(237,237,240)',marginBottom:80}}
                   dataSource={this.state.dataSource}
                   renderRow={
                       (rowData,rowHasChanged) =>  //传id值
                           <TouchableOpacity style={styles.listItem} onPress={()=>this._onPress(rowData.id)} >
                               <View style={styles.from}>
                                   <Image source={require('./img/smallLogo.png')} style={{width:20,height:20,marginRight:10}}></Image>
                                   <Text style={{color:'#999999'}}>来自话题：{rowData.from }</Text>
                               </View>
                               <Text style={styles.title}>{rowData.title }</Text>
                               <Text style={styles.content}>{rowData.content}</Text>
                           </TouchableOpacity>
                   }
               />
           </View>
        )
    }
}



module.exports=Home
