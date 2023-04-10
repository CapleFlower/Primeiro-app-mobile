import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../pages/home'
import { Detail } from '../pages/detail'
import { Search } from '../pages/search'

const Stack = createNativeStackNavigator();

export function StackRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false,}}></Stack.Screen>
            <Stack.Screen name="Detail" component={Detail} options={{teste}}></Stack.Screen>
            <Stack.Screen name="Search" component={Search} options={{teste}}></Stack.Screen>
        </Stack.Navigator>
    )
}