import { View, Text, StyleSheet, TouchableOpacity, image } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'

export function FoodList({ data }){
    const navigation = useNavigation();

    function handleNavigate(){
        navigation.navigate("Detail", {data: data})
    }

    return(
        <TouchableOpacity activeOpacity={0.8} style={styles.container} onPress={handleNavigate}>
            <Image 
                source={{ uri: data.cover }}
                style={styles.cover}
            />
            <View style={styles.info}>
                <Text style={styles.name}>{data.name}</Text>
                <Text style={styles.description}>{data.total_ingredients} ingredientes | {data.time} </Text>
            </View>
            <LinearGradient 
                style={styles.gradient}
                colors={['tranparent', 'rgba(0,0,0, 0.70)', 'rgba(0,0,0, 0.95)']}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        marginBottom: 15,
    },
    cover:{
        width: '100%',
        height: 200,
        borderRadius: 15,
    },
    info:{
        position: 'absolute',
        bottom: 12,
        left: 12,
        zIndex: 99,
    },
    name:{
        fontSize: 18,
        color: "white",
        fontWeight: 'bold'
    },
    description:{
        color: "white"
    },
    gradient:{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: '55%',
        borderRadius: 15,
        zIndex: 1,
        backgroundColor: "transparent"
    }
})