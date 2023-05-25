import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons'; 
import {colors} from '../global/style'



const HomeHead = () => {
  return (
    <View style={styles.continer}>
        <FontAwesome name="th-list" size={24} color={colors.text1}/>
        <View style={{flexDirection:'row',alignSelf:'center'}}>
            <Text style={{color:colors.text1,fontSize:24}}>Foodie </Text>
            <MaterialCommunityIcons name="food" size={28} color={colors.text1} />
        </View>
        <EvilIcons name="user" size={24} color={colors.text1} />


    </View>
  )
}

export default HomeHead

const styles = StyleSheet.create({
    continer:{
    flexDirection:'row',
    widht:"100%",
    elevation:20,
    justifyContent:'space-between',
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    padding:10,
    backgroundColor:colors.col1,

    

    


    }
})