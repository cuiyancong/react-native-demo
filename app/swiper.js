import React , {Component} from 'react'
import {View,Image,Text} from 'react-native'
import Swiper from 'react-native-swiper'

class RNswiper extends Component {

    render(){
        return(
            <View>
                <Swiper height={132}
                        loop={true}
                    // showsButtons={true}
                        index={0}
                        autoplay={true}
                        horizontal={true}
                        showsPagination={false}
                >
                    {this.renderImg()}
                </Swiper>
            </View>

        );
    }
    renderImg(){
        let imageViews=[];
        let images = [require('./img/banner1.png'),require('./img/banner2.png')]
        for(var i=0;i<images.length;i++){
            imageViews.push(
                <Image
                    key={i}
                    style={[{flex:1,width:'100%',height:100}]}
                    source={images[i]}
                />
            );
        }
        return imageViews;
    }
}
module.exports=RNswiper