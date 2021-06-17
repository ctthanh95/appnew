import React from 'react'
import { Text, View, Image, FlatList, TouchableOpacity, ImageBackground, Alert } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import styles from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector, useDispatch } from 'react-redux'
import { RemoveCart, IncreseQuantity, DecreseQuantity, SuccessCart } from '../../../redux/actions'
import CustomAlert from '../../../../components/alert/CustomAlert'

const Cart = ({ navigation }) => {
    const { Carts, numberCarts, totalPrice, login, phonenumber, addressuser } = useSelector(state => state.shoesReducer);
    const dispatch = useDispatch();
    const removefromCart = item => dispatch(RemoveCart(item));
    const increseQuantity = item => dispatch(IncreseQuantity(item));
    const decreseQuantity = item => dispatch(DecreseQuantity(item));
    const successCart = () => {
        dispatch(SuccessCart())
    }
    const RenderItemCard = ({ item, index }) => {
        return (

            <View key={index} style={styles.wrapItem}>
                <View style={styles.wrapImage}>
                    <Image style={styles.image} source={item.image} ></Image>
                </View>
                <View style={styles.wrapText}>
                    <View style={styles.wrapOn}>
                        <View>
                            <Text style={styles.textName}>{item.name}</Text>
                            {item.size ? <Text style={styles.textSize}>Size: {item.size}</Text> : <Text style={styles.textSize}>Free Size</Text>}
                        </View>
                        <View>
                            <TouchableOpacity
                                onPress={() => removefromCart(item)}
                            >
                                <MaterialIcons name="delete-outline" size={35} color="#ed7430" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.wrapOn}>
                        <Text style={styles.textPrice}>$ {item.price}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity
                                onPress={() => decreseQuantity(item)}
                            >
                                <Text style={styles.textAmount}>-</Text>
                            </TouchableOpacity>
                            <Text style={styles.textNumber}>{item.quantity}</Text>
                            <TouchableOpacity
                                onPress={() => increseQuantity(item)}
                            >
                                <Text style={styles.textAmount}>+</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </View>


        )
    }
    return (
        <SafeAreaView style={{ flex: 1, }}>
            <View style={styles.container}>
                <Text style={styles.textHeader}>My Cart</Text>
                {
                    Carts.length > 0
                        ? (
                            <FlatList
                                data={Carts}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item }) => {
                                    return (
                                        <RenderItemCard item={item}></RenderItemCard>
                                    )
                                }}
                            />
                        )
                        :
                        (
                            <ImageBackground
                                resizeMode='contain'
                                style={{ width: '100%', height: '100%' }}
                                source={require('../../../assets/images/empty-cart.png')}>
                            </ImageBackground>
                        )
                }
            </View>
            <View style={{ flex: 1 }}>
                <View style={styles.wrapPay}>
                    <View style={styles.wrapItemPrice}>
                        <Text style={[styles.textSize, { fontSize: 20 }]}>{numberCarts} Items</Text>
                        <Text style={[styles.textNumber, { marginHorizontal: 0 }]}>$ {totalPrice}</Text>
                    </View>
                    {
                        Carts.length > 0
                            ? (
                                 <TouchableOpacity
                                 style={styles.wrapPayment}
                                 onPress={() => {
                                    if(login === false) {
                                        Alert.alert(
                                            "Notification",
                                            "Please login",
                                            [
                                              { text: "Ok", onPress: () => navigation.navigate('Signin') }
                                            ]
                                          );

                                    } else if(phonenumber === null || addressuser  === null){
                                        Alert.alert(
                                            "Notification",
                                            "Please fill in the information",
                                            [
                                              { text: "Ok", onPress: () => navigation.navigate('Account') }
                                            ]
                                          );
                                    } else {
                                        successCart()
                                        Alert.alert('Order Success')
                                    }
                                 }}
                                 >
                                    <Text style={[styles.textNumber, {color:'#FFFFFF'}]}>Payment</Text>
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity
                                    style={styles.wrapPayment}
                                    onPress={() => {
                                        navigation.navigate('Home')
                                    }}
                                >
                                    <Text style={[styles.textNumber, { color: '#FFFFFF' }]}>Shopping now</Text>
                                </TouchableOpacity>
                            )

                    }
                </View>
            </View>

        </SafeAreaView>
    )
}

export default Cart

