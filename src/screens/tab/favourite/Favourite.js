import React from 'react'
import { StyleSheet, Text, View, FlatList, ImageBackground, Dimensions, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useSelector, useDispatch } from 'react-redux'
import { RemoveFavourite } from '../../../redux/actions'
import styles from './styles'
const Favourite = ({ navigation}) => {
    const { Favourites } = useSelector(state => state.shoesReducer)
    const dispatch = useDispatch()
    const removeFavourite = item => dispatch(RemoveFavourite(item))

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.textHeader}>My Favourite</Text>
            {
                Favourites.length > 0
                    ? (
                        <FlatList
                            numColumns={2}
                            data={Favourites}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => {
                                return (
                                    <View style={{ flex: 1, alignItems: 'baseline' }}>
                                        <View style={styles.wrapItem}>
                                            <TouchableOpacity onPress={() => {
                                                navigation.navigate('Detail', {
                                                    id: item.id,
                                                    name: item.name,
                                                    image: item.image,
                                                    description: item.description,
                                                    price: item.price,
                                                    productType: item.productType,
                                                    color: item.color,
                                                    size: item.size,
                                                })
                                            }}>
                                                <View style={styles.wrapImage}>
                                                    <Image style={styles.images} resizeMode='center' source={item.image} ></Image>
                                                </View>
                                                <View style={styles.wrapText}>
                                                    <Text numberOfLines={1} style={styles.textName}>{item.name}</Text>
                                                    <Text style={styles.textPrice}>$ {item.price}</Text>
                                                </View>
                                            </TouchableOpacity>

                                            <TouchableOpacity
                                                style={styles.wrapLike}
                                                onPress={() => removeFavourite(item)}
                                            >
                                                <FontAwesome name='heart' size={15} color='#FF0000' />
                                            </TouchableOpacity>

                                        </View>
                                    </View>
                                )
                            }}
                        />

                    )
                    :
                    (
                        <ImageBackground
                            resizeMode='contain'
                            style={{ width: '100%', height: '100%' }}
                            source={require('../../../assets/images/noitem.png')}>
                        </ImageBackground>
                    )
            }
            <View style={{ height: 80 }}>
            </View>
        </SafeAreaView>
    )
}

export default Favourite


