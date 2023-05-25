import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { colors } from '../global/style'
import Swiper from 'react-native-swiper'


const OfferSlider = () => {
  return (
    
        <View style={styles.container}>

            <Swiper autoplay={true} autoplayTimeout={5}  showsButtons={true}
            dotColor={colors.text2} activeDotColor={colors.text1}
            
            nextButton={<Text style={styles.buttonText}>›</Text>}
            prevButton={<Text style={styles.buttonText}>‹</Text>}>
                
                <View style={styles.slide}>
                <Image  source={require('../../assets/OfferSliderImages/img1.png')} style={styles.img}/>

                </View>
                <View style={styles.slide}>
                <Image  source={require('../../assets/OfferSliderImages/img2.png')} style={styles.img}/>

                </View>
                <View style={styles.slide}>
                <Image  source={require('../../assets/OfferSliderImages/img3.png')} style={styles.img}/>

                </View>
            

            </Swiper>

        </View>
   
  )
}

export default OfferSlider

const styles = StyleSheet.create({
    container:{
        width:'100%',
        elevation:5,
        borderRadius:10,
        backgroundColor:colors.text1,
        height:200,
        justifyContent:'center',
        alignItems:'center'
        },
    slide:{
        width:'100%',
        backgroundColor:colors.col1,
        height:200
    },
    img:{
        width:'100%',
        height:'100%',
        borderRadius:10
    },

    buttonText: {
        color: colors.text1,
        borderRadius: 20,
        height: 40,
        width: 40, 
        fontWeight: 'bold', 
        textAlign: 'center',
        fontSize: 40,
        backgroundColor: 'white',
        lineHeight:40
      }
      
   
})