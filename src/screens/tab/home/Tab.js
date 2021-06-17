import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, ScrollView, FlatList, Image, Alert, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useDispatch, useSelector } from 'react-redux'
import { AddFavourite, RemoveFavourite } from '../../../redux/actions'
import styles from './styles'
import data from '../../../datas/data'
import tabData from '../../../datas/tabData'
const tabDefault = [
    { productType: 'All' },
];
const tabAll = tabDefault.concat(tabData);
const RenderItem = ({ item, index, navigation }) => {
    const { Favourites } = useSelector(state => state.shoesReducer)
    const dispatch = useDispatch()
    const addFavourite = item => dispatch(AddFavourite(item))
    const removeFavourite = item => dispatch(RemoveFavourite(item))
    const ifExists = item => {
        if (Favourites.filter(favouritesitem => favouritesitem.id === item.id).length > 0) {
            return true;
        }
        return false;
    };
    return (
        <View key={index} style={styles.wrapItem}>
            <View style={styles.wrapImage}>
                <View style={[styles.viewBackground, {
                    transform: [{ rotate: "-20deg" }], backgroundColor: `${item.color}`
                }]}>
                </View>
                <TouchableOpacity style={styles.wrapLike} onPress={() => {
                    ifExists(item) ? removeFavourite(item) : addFavourite(item)
                }}>
                    <FontAwesome name={ifExists(item) ? 'heart' : 'heart-o'} size={15} color='#FF0000' />
                </TouchableOpacity>
                <View style={styles.wrapShoesImage}>
                    <Image style={styles.imageShoes} source={item.image} ></Image>
                </View>
            </View>
            <View style={styles.wrapText}>
                <Text numberOfLines={1} style={styles.textName}>{item.name}</Text>
                <Text style={styles.textDescription}>by Nike</Text>
                <Text numberOfLines={2} style={[styles.textDescription, { paddingVertical: 15 }]}>{item.description}</Text>
                <View style={styles.wrapPriceButton}>
                    <Text style={[styles.textName, { justifyContent: 'center' }]}>$ {item.price}</Text>
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
                        <View style={styles.wrapButton}>
                            <Text style={styles.textButton}>Buy</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const Tab = ({ navigation }) => {
    const [nameTab, setNameTab] = useState('All');
    const [dataList, SetDataList] = useState(data);
    const setChangeNameTab = (nameTab) => {
        setNameTab(nameTab);
        if (nameTab == 'All') {
            SetDataList(data);
        } else {
            SetDataList([...data.filter(e => e.productType === nameTab)]);
        }
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={styles.listTab} horizontal showsHorizontalScrollIndicator={false} >
                {
                    tabAll.map((item, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                style={[styles.btnTab, nameTab === item.productType && styles.btnTabActive]}
                                onPress={() => setChangeNameTab(item.productType)}>
                                <Text style={[styles.textTab, nameTab === item.productType && styles.textTabActive]}>
                                    {item.productType}
                                </Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
            <FlatList
                data={dataList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    return (
                        <RenderItem item={item} navigation={navigation}></RenderItem>
                    )
                }}
            />
        </SafeAreaView>
    )
}

export default Tab