import React, { useState } from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, Alert, ScrollView } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useDispatch, useSelector } from 'react-redux'
import { AddCart } from '../../redux/actions';
import styles from './styles'
const Detail = ({ route, navigation }) => {
    const { id, name, image, description, price, productType, color, size } = route.params
    const [sizeChoose, SetsizeChoose] = useState(null)
    const [modalVisible, setModalVisible] = useState(false);
    const ChooseSize = () => {
        if (size.length > 0) {
            return (
                <View>
                    <Text style={styles.textTitleSize}>Select Size</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}  >
                        {
                            size.map((item, index) => {
                                return (
                                    <TouchableOpacity
                                        key={index}
                                        style={[styles.wrapSize, sizeChoose === item && styles.wrapSizeActive]}
                                        onPress={() => {
                                            SetsizeChoose(item);
                                        }}
                                    >
                                        <Text style={[styles.textSize, sizeChoose === item && { color: '#FFFFFF' }]}>{item}</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </ScrollView>
                </View>

            )
        } else {
            return (null)
        }
    }
    const { autoId } = useSelector(state => state.shoesReducer);
    const dispatch = useDispatch();
    const addToCart = item => dispatch(AddCart(item));
    return (
        <View style={styles.container}>
            <View style={styles.wrapImage}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack();
                    }}
                    style={styles.buttonBack}>
                    <MaterialIcons name='arrow-back' size={25} color='#000000' />
                </TouchableOpacity>
                {/* <TouchableOpacity style={styles.buttonLike}>
                    <FontAwesome name={like ? 'heart' : 'heart-o'} size={20} color='#FF0000' />
                </TouchableOpacity> */}
                <View style={styles.wrapBackground}>
                    <View style={[styles.viewBackground, {
                        transform: [{ rotate: "-20deg" }], backgroundColor: `${color}`
                    }]}>
                    </View>
                </View>
                <Image style={styles.image} source={image}></Image>
            </View>
            <View style={styles.wrapText}>
                <Text numberOfLines={1} style={styles.textName}>{name}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.textType}>{productType}</Text>
                    <Text style={styles.textPrice}>$ {price}</Text>
                </View>
                <ChooseSize></ChooseSize>
                <Text style={styles.textTitleSize}>Description</Text>
                <Text numberOfLines={3} style={styles.textType}>{description}</Text>
            </View>
            <View style={{ flex: 1 }}>
                <View style={styles.wrapCart}>
                    <TouchableOpacity
                        onPress={() => {
                            if (size.length > 0) {
                                if (sizeChoose === null) {
                                    Alert.alert('Please choose a size')
                                } else {
                                    addToCart({
                                        idCart: autoId,
                                        id: id,
                                        image: image,
                                        name: name,
                                        price: price,
                                        size: sizeChoose,
                                        quantity: 1,
                                    })
                                    Alert.alert('Add to cart successfully')
                                }
                            } else {
                                addToCart({
                                    idCart: autoId,
                                    id: id,
                                    image: image,
                                    name: name,
                                    price: price,
                                    size: sizeChoose,
                                    quantity: 1,
                                })
                                Alert.alert('Add to cart successfully')
                            }
                        }
                        }
                    >
                        <View style={styles.backgroundCart}>
                            <FontAwesome5 name='cart-arrow-down' size={25} color='#FFFFFF' />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default Detail

