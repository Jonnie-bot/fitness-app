import { StyleSheet ,View, Text } from 'react-native'
import React from 'react'

type ValueProps = {
    label: string
    value: string
}


const Value = ({label, value}: ValueProps) => {
  return (
    <View>  
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
  </View>
  )
}

const styles = StyleSheet.create({
      label: {
        color: 'white',
        fontSize: 20,
      },
      value:{
        fontSize: 35,
        color: '#AFB3BE', 
        fontWeight: '500',
      } 
    
})
export default Value