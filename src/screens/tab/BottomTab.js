import React from 'react'
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Home from './home/Home'
import Favourite from './favourite/Favourite'
import Cart from './cart/Cart'
import Personal from './personal/Personal'
import { useSelector } from 'react-redux'

const Tab = createBottomTabNavigator()

const BottomTab = ({ navigation }) => {
    const { Favourites, numberCarts } = useSelector(state => state.shoesReducer);
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'Cart') {
                        iconName = 'shopping-cart';
                    } else if (route.name === 'Favourite') {
                        iconName = 'star';
                    } else if (route.name === 'Personal') {
                        iconName = 'user';
                    }
                    return <FontAwesome5 name={iconName} size={size} color={color} />
                },
            })}
            tabBarOptions={{
                activeTintColor: '#FFFFFF',
                showLabel: false,
                activeBackgroundColor: '#ed7430',
                style: {
                    position: 'absolute',
                    bottom: 10,
                    left: 10,
                    right: 10,
                    elevation: 0,
                    backgroundColor: '#E6E6FA',
                    borderRadius: 15,
                    height: 70,
                    ...styles.shadow,
                },
                tabStyle: {
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 80,
                    borderBottomLeftRadius: 80,
                    borderBottomRightRadius: 20,
                    margin: 10,
                },
            }}>
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Favourite' component={Favourite} />
            <Tab.Screen name='Cart' component={Cart} options={{ tabBarBadge: numberCarts }} />
            <Tab.Screen name='Personal' component={Personal} />

        </Tab.Navigator>
    )
}

export default BottomTab

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#ed7430',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowRadius: 3.5,
        shadowOpacity: 0.25,
        elevation: 5,
    }
})
