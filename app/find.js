//发现 页面

import React ,{Component} from 'react';
import {View,
    Text,Image,StyleSheet,ScrollView,ListView,Navigator,TouchableOpacity} from 'react-native';
import Search from './search'
import RNswiper from './swiper'
import styles from './css/find'




class HotTopic extends Component{
    constructor(props){
        super(props);
        let ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2})
        let data = [
            {
                imgUrl:require('./img/hotTopic1.png'),
                title:'看车展·看未来',
                yz:'圆桌',
                Mb:'436k'
            },
            {
                imgUrl:require('./img/hotTopic2.png'),
                title:'困境中的心理咨询2',
                yz:'圆桌',
                Mb:'193k'
            },
            {
                imgUrl:require('./img/hotTopic2.png'),
                title:'金融科技浪潮',
                yz:'圆桌',
                Mb:'193k'
            },
        ];
        this.state={
            dataSource:ds.cloneWithRows(data)
        }
    }
    render(){
        return(
            <ListView
                style={styles.scroll}
                horizontal={true}
                dataSource={this.state.dataSource}
                renderRow={
                    (rowData,rowHasChanged)=>
                        <View style={styles.scrollItem}>
                            <Image source={rowData.imgUrl} style={{width:100,height:'100%'}}></Image>
                            <View style={{marginHorizontal:20,marginVertical:10,justifyContent:'space-between',width:150}}>
                                <Text style={styles.itemTitle}>{rowData.title}</Text>
                                <Text style={styles.desc}>{rowData.yz}|{rowData.Mb}</Text>
                            </View>
                        </View>
                }
            />
        )

}}
class Hot extends Component{
    constructor(props){
        super(props);
        let ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2})
        let data = [
            {
                auth:'张小凡',
                title:'如何评价余承东四月二十日凌晨对华为手机疏油层和闪存问题做出的回应？',
                imgUrl:require('./img/imgUrl.png'),
                content:'如何评价余承东四月二十日凌晨对华为手机疏油层和闪存问题做出的回应？如何评价余承东四月二十日凌晨对华为手机疏油层和闪存问题做出的回应？如何评价余承东四月二十日凌晨对华为手机疏油层和闪存问题做出的回应？如何评价余承东四月二十日凌晨对华为手机疏油层和闪存问题做出的回应？如何评价余承东四月二十日凌晨对华为手机疏油层和闪存问题做出的回应？',
                authPic:require('./img/authPic1.png'),
                approvalNum:'61',
                commentNum:'13'

            },{
                auth:'张小凡',
                title:'如何评价余承东四月二十日凌晨对华为手机疏油层和闪存问题做出的回应？',
                imgUrl:require('./img/imgUrl.png'),
                content:'如何评价余承东四月二十日凌晨对华为手机疏油层和闪存问题做出的回应？如何评价余承东四月二十日凌晨对华为手机疏油层和闪存问题做出的回应？如何评价余承东四月二十日凌晨对华为手机疏油层和闪存问题做出的回应？如何评价余承东四月二十日凌晨对华为手机疏油层和闪存问题做出的回应？如何评价余承东四月二十日凌晨对华为手机疏油层和闪存问题做出的回应？',
                authPic:require('./img/authPic1.png'),
                approvalNum:'61',
                commentNum:'13'
            },
            {
                auth:'张小凡',
                title:'如何评价余承东四月二十日凌晨对华为手机疏油层和闪存问题做出的回应？',
                imgUrl:require('./img/imgUrl.png'),
                content:'如何评价余承东四月二十日凌晨对华为手机疏油层和闪存问题做出的回应？如何评价余承东四月二十日凌晨对华为手机疏油层和闪存问题做出的回应？如何评价余承东四月二十日凌晨对华为手机疏油层和闪存问题做出的回应？如何评价余承东四月二十日凌晨对华为手机疏油层和闪存问题做出的回应？如何评价余承东四月二十日凌晨对华为手机疏油层和闪存问题做出的回应？',
                authPic:require('./img/authPic1.png'),
                approvalNum:'61',
                commentNum:'13'
            }
        ];
        this.state={
            dataSource:ds.cloneWithRows(data)
        }
    }
    render(){
        return(
            <ListView
                style={{marginBottom:80}}
                dataSource={this.state.dataSource}
                renderRow={
                    (rowData,rowHasChanged)=>
                        <View style={styles.contentItem}>
                            <View style={styles.author}>
                                <Image source={rowData.authPic} style={{width:25,height:25}}></Image>
                                <Text style={{fontSize:16,fontWeight:'600',color:"#999999",marginLeft:10}}>{rowData.auth}</Text>
                            </View>
                            <Image source={rowData.imgUrl?rowData.imgUrl:''} style={{width:'100%'}}></Image>
                            <Text style={styles.contentTitle}>{rowData.title}</Text>
                            <Text style={styles.content}>{rowData.content}</Text>
                            <View style={styles.foot}>
                                <Text style={{color:'#999999'}}>{rowData.approvalNum} 赞同</Text>
                                <Text style={{color:'#999999'}}>·{rowData.commentNum} 评论 ·关注回答</Text>
                            </View>
                        </View>
                }
            />
        )
    }
}
class Find extends Component{
    render(){
        return(
            <View style={{paddingBottom:0,paddingTop:40}}>
                <Search placeholder="搜索" imgUrl={require('./img/lightning.png')}/>
                <ScrollView style={{backgroundColor:'#edeef0',paddingTop:0,}}>
                    <RNswiper />
                    <View style={styles.bar}>
                        <View>
                            <Image source={require('./img/find_icon1.png')} style={styles.image}></Image>
                            <Text style={styles.text}>专栏</Text>
                        </View>
                        <View>
                            <Image source={require('./img/find_icon2.png')} style={styles.image}></Image>
                            <Text style={styles.text}>Live</Text>
                        </View>
                        <View>
                            <Image source={require('./img/find_icon3.png')} style={styles.image}></Image>
                            <Text style={styles.text}>书店</Text>
                        </View>
                        <View>
                            <Image source={require('./img/find_icon4.png')} style={styles.image}></Image>
                            <Text style={styles.text}>收藏夹</Text>
                        </View>
                        <View>
                            <Image source={require('./img/find_icon5.png')} style={styles.image}></Image>
                            <Text style={styles.text}>圆桌</Text>
                        </View>
                    </View>
                    <View style={{paddingVertical:10,backgroundColor:'#edeef0'}}>
                        <View style={styles.hotTopicTitle}>
                            <View style={styles.titleRight}>
                                <Image source={require('./img/hotTopic_icon.png')} style={{marginRight:5}}></Image>
                                <Text>热门话题</Text>
                            </View>
                            <View>
                                <Text style={{color:'#a3a3a3'}}>查看热门话题></Text>
                            </View>
                        </View>
                        <HotTopic/>
                    </View>
                    <Hot/>
                </ScrollView>
            </View>
        )
    }
}
module.exports=Find