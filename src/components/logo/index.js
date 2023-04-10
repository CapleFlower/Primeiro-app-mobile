import { View, Text, StyleSheet} from 'react-native'

export function Logo(){
  return(
    <View style={styles.logoArea}>
        <Text style={styles.logo}>
            Receita Fácil
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    logoArea:{
        backgroundColor: "#52499c",//"#4CBE6C" 
        alignSelf: "flex-start",
        padding: 8,
        paddingRight: 20,
        paddingLeft: 16,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        borderTopLeftRadius: 8,
        borderBottomRightRadius: 32,
        marginBottom: 15
    },
    logo:{
        fontSize: 18,
        fontWeight: "bold",
        color: "white" 
    }
})