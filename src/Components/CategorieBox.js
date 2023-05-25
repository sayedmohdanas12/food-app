import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react';
import { colors } from '../global/style'



const CategorieBox = ({name,iconName,Icon}) => {
  return (
    <TouchableOpacity  style={styles.itemContainer}>
    <Icon name={iconName} size={24} color="orange" />
    <Text style={styles.itemText}> {name}</Text>
    </TouchableOpacity>
  )
}

export default CategorieBox

const styles = StyleSheet.create({
    itemContainer:{
        padding:10,
        elevation:30,
        flexDirection:'row',
        alignItems:'center',
        margin:3,
        justifyContent:'center',
        backgroundColor:colors.col1,
        borderRadius:15,
       
    },
    itemText:{
        fontWeight:'bold',
        marginTop:3
    }
})