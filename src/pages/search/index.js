import { View, Text, StyleSheet} from 'react-native'

export function Search(){
  return(
    <View style={styles.container}>
      <Text>Pagina busca !!!</Text>
    </View> 
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'green',
    }
})