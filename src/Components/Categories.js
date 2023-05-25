import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import CategorieBox from './CategorieBox';
import { Feather } from '@expo/vector-icons'; 
import { colors } from '../global/style'




const Categories = () => {
  return (
    <View style={styles.container}>
        
        <Text style={{borderBottomWidth:1,fontSize:24,color:colors.text1,marginBottom:5}}>Categories</Text>

       
   <ScrollView horizontal showsHorizontalScrollIndicator={false}> 
    <CategorieBox name="Burger" iconName="hamburger" Icon={FontAwesome5}/>
    <CategorieBox name="Pizza" iconName="pizza-slice" Icon={FontAwesome5}/>
    <CategorieBox name="Noodles" iconName="noodles" Icon={MaterialCommunityIcons}/>
    <CategorieBox name="Coffee" iconName="coffee" Icon={Feather}/>






    </ScrollView>




    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    container:{
        marginTop:10,
        flexDirection:"column",
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        backgroundColor:'red',
        padding:15,
        borderRadius:10,
        backgroundColor:colors.col1,
        borderBottomWidth:1,
        paddingTop:5
    },
    
  
})