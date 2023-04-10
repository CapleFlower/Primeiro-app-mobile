import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, FlatList } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Logo } from '../../components/logo'

import api from '../../servises/api'
import { FoodList } from '../../components/foodlist'

export function Home(){

  const [inputValue, setInputValue] = useState("")
  const [foods, setFoods] = useState([])

  useEffect(() => {
    
    async function fatchApi(){
      const response = await api.get("/foods")
      setFoods(response,data)
    }

  }, [])

  function handleSearch(){
    console.log("Você digitou:")
    console.log(inputValue)
  }
  
  return(
    <SafeAreaView style={styles.container}>
      <Logo />
      <Text style={styles.title}>Encontre a receita</Text>
      <Text style={styles.title2}>Que combine com você</Text>

      <View style={styles.form}>

        <TextInput 
          placeholder="Digire o nome da comida"
          style={styles.input}
          value={inputValue}
          onChangeText={ (text) => setInputValue(text) }
        />
        <TouchableOpacity onPress={handleSearch}>
          <Ionicons name="search" size={28} color="#52499c"/>
        </TouchableOpacity>

      </View>

      <FlatList 
        data={foods}
        keyExtractor={ (item) => String (item.id)}
        renderItem={ ({ item }) => <FoodList data={item}/> }
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView> 
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F3F9FF',
        paddingTop: 50,
        paddingStart: 14,
        paddingEnd: 14,
    },
    title:{
      fontSize: 26,
      fontWeight: "bold",
      color: "#0e0e0e",
    },
    title2:{
      fontSize: 26,
      fontWeight: "bold",
      color: "#0e0e0e",
      marginBottom: 15,
    },
    form:{
      backgroundColor: "#white",
      width: '100%',
      borderRadius: 8,
      borderTop: 20,
      marginBottom: 20,
      borderWidth: 1,
      borderColor: "#ECECEC",
      paddingLeft: 8,
      paddingRight: 8,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    input:{
      width: '90%',
      maxWidth: '90%',
      height: 54,
    }
})