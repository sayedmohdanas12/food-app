import { StyleSheet, Text, View,StatusBar, TextInput } from 'react-native'
import React from 'react'
import HomeHead from '../Components/HomeHead'
import { FontAwesome5 } from '@expo/vector-icons'; 
import { colors } from '../global/style';
import Categories from '../Components/Categories';
import OfferSlider from '../Components/OfferSlider';


const HomePage = () => {
  return (
    <View style={styles.container} >
      <StatusBar/>
      <HomeHead/>
      <View style={styles.inputContainer}>
      <FontAwesome5 name="search" size={24} color="black" />
      <TextInput  style ={styles.Input}placeholder='search'/>
      </View>
      <Categories/>
      <OfferSlider/>

    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
  container:{
    width:'100%',
    justifyContent:'center',
  },
  Input:{ 
 fontSize:16,
  width:"90%",
 marginLeft:10

},
inputContainer:{
flexDirection:'row',
borderRadius:10,
padding:10,
backgroundColor:colors.col1,
marginTop:10,
elevation:20,
alignItems:'center',

}


})