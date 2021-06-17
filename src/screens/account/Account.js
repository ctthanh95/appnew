import React, { useState, useEffect } from 'react'
import { ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import { RadioButton } from 'react-native-paper'
import { Picker } from '@react-native-picker/picker'
import axios from 'axios'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import styles from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { PhoneUser, AddressUser, NameUser, ProvinceUser, DistrictUser, WardsUser } from '../../redux/actions'
const Account = ({ navigation }) => {
    //
    const [address, SetAddress] = useState(null);
    const [phone, SetPhone] = useState(null);
    const [name, SetName] = useState(null);
    //
    const [province, SetProvince] = useState([])
    const [district, SetDistrict] = useState([])
    const [commune, SetCommune] = useState([])
    //
    const [checked, setChecked] = React.useState('first')
    //
    const [sltP, SetSltP] = useState()
    const [sltD, SetSltD] = useState()
    const [sltC, SetSltC] = useState()
    //
    const [userP, SetUserP] = useState(null)
    const [userD, SetUserD] = useState(null)
    const [userC, SetUserC] = useState(null)
    const { phonenumber, nameuser, addressuser, provinceuser, districtuser, wardsuser } = useSelector(state => state.shoesReducer)


    const dispatch = useDispatch()

    const phoneUser = (item) => {
        dispatch(PhoneUser(item))
    }
    const addressUser = (item) => {
        dispatch(AddressUser(item))
    }
    const nameUser = (item) => {
        dispatch(NameUser(item))
    }

    const provinceUser = (item) => {
        dispatch(ProvinceUser(item))
    }
    const districtUser = (item) => {
        dispatch(DistrictUser(item))
    }
    const wardseUser = (item) => {
        dispatch(WardsUser(item))
    }

    useEffect(() => {
        if (phonenumber !== null) {
            SetPhone(phonenumber)
        }
        if (addressuser !== null) {
            SetAddress(addressuser)
        }
        if (nameuser !== null) {
            SetName(nameuser)
        }
        if (provinceuser !== null) {
            SetSltP(provinceuser)
        }
        if (districtuser !== null) {
            SetSltD(districtuser)
        }
        if (wardsuser !== null) {
            SetSltC(wardsuser)
        }
        axios.get('https://sheltered-anchorage-60344.herokuapp.com/province')
            .then(function (response) {
                // handle success
                SetProvince(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.textHeader}>Information</Text>
            <ScrollView>
                <View style={{ marginBottom: 10 }}>
                    <View style={styles.wrapText}>
                        <Text style={styles.textName}>Full name</Text>
                        <Text style={styles.textStar}>*</Text>
                    </View>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={SetName}
                        value={name}
                    />
                </View>
                <View style={{ backgroundColor: '#C0C0C0', height: 1 }}></View>
                <View style={{ marginBottom: 10 }}>
                    <View style={styles.wrapText}>
                        <Text style={styles.textName}>Phone number</Text>
                        <Text style={styles.textStar}>*</Text>
                    </View>
                    <TextInput
                        onChangeText={SetPhone}
                        value={phone}
                        maxLength={10}
                        keyboardType='numeric'
                        style={styles.textInput}
                        placeholder='Your phone number'
                    />
                </View>
                <View style={{ backgroundColor: '#C0C0C0', height: 1 }}></View>
                <View style={{ marginBottom: 10 }}>
                    <View style={styles.wrapText}>
                        <Text style={styles.textName}>Gender</Text>
                        <Text style={styles.textStar}>*</Text>
                    </View>
                    <View style={[styles.wrapText, { justifyContent: 'space-around' }]}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <RadioButton
                                value="first"
                                status={checked === 'first' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('first')}
                            />
                            <Text style={styles.textCheckbox}>Male</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <RadioButton
                                value="second"
                                status={checked === 'second' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('second')}
                            />
                            <Text style={styles.textCheckbox}>Female</Text>
                        </View>
                    </View>
                </View>
                <View style={{ backgroundColor: '#C0C0C0', height: 1 }}></View>
                <View style={{ marginBottom: 10 }}>
                    <View style={styles.wrapText}>
                        <Text style={styles.textName}>Province/City</Text>
                        <Text style={styles.textStar}>*</Text>
                    </View>
                    <Picker
                        selectedValue={sltP}
                        onValueChange={(itemValue) => {
                            if (itemValue !== '0') {
                                province.map((item) => {
                                    if (item.idProvince === itemValue) {
                                        SetUserP(item.name)
                                    }
                                })
                                SetSltP(itemValue)
                                axios.get('https://sheltered-anchorage-60344.herokuapp.com/district/?idProvince=' + itemValue)
                                    .then(function (response) {
                                        // handle success
                                        SetDistrict(response.data)
                                    })
                                    .catch(function (error) {
                                        // handle error
                                        console.log(error);
                                    })
                                    .then(function () {
                                        // always executed
                                    });
                            }
                        }
                        }>
                        <Picker.Item label='Please select an option...' value='0' />
                        {
                            province.map((item, index) => {
                                return (
                                    <Picker.Item label={item.name} value={item.idProvince} key={index.toString()} />
                                )
                            })
                        }
                    </Picker>
                </View>
                <View style={{ backgroundColor: '#C0C0C0', height: 1 }}></View>
                <View style={{ marginBottom: 10 }}>
                    <View style={styles.wrapText}>
                        <Text style={styles.textName}>District</Text>
                        <Text style={styles.textStar}>*</Text>
                    </View>
                    <Picker
                        selectedValue={sltD}
                        onValueChange={(itemValue) => {
                            if (itemValue !== '0') {
                                district.map((item) => {
                                    if (item.idDistrict === itemValue) {
                                        SetUserD(item.name)
                                    }
                                })
                                SetSltD(itemValue)
                                axios.get('https://sheltered-anchorage-60344.herokuapp.com/commune/?idDistrict=' + itemValue)
                                    .then(function (response) {
                                        // handle success

                                        SetCommune(response.data)
                                    })
                                    .catch(function (error) {
                                        // handle error
                                        console.log(error);
                                    })
                                    .then(function () {
                                        // always executed
                                    });
                            }
                        }
                        }>
                        <Picker.Item label='Please select an option...' value='0' />
                        {
                            district.map((item, index) => {
                                return (
                                    <Picker.Item label={item.name} value={item.idDistrict} key={index.toString()} />
                                )
                            })
                        }
                    </Picker>
                </View>
                <View style={{ backgroundColor: '#C0C0C0', height: 1 }}></View>
                <View style={{ marginBottom: 10 }}>
                    <View style={styles.wrapText}>
                        <Text style={styles.textName}>Wards</Text>
                        <Text style={styles.textStar}>*</Text>
                    </View>
                    <Picker
                        selectedValue={sltC}
                        onValueChange={(itemValue) => {
                            if (itemValue !== '0') {
                                commune.map((item) => {
                                    if (item.idCoummune === itemValue) {
                                        SetUserC(item.name)
                                    }
                                })
                                SetSltC(itemValue)
                            }
                        }
                        }>
                        <Picker.Item label='Please select an option...' value='0' />
                        {
                            commune.map((item, index) => {
                                return (
                                    <Picker.Item label={item.name} value={item.idCoummune} key={index.toString()} />
                                )
                            })
                        }
                    </Picker>
                </View>
                <View style={{ backgroundColor: '#C0C0C0', height: 1 }}></View>
                <View style={{ marginBottom: 10 }}>
                    <View style={styles.wrapText}>
                        <Text style={styles.textName}>Detail</Text>
                        <Text style={styles.textStar}>*</Text>
                    </View>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Detail address'
                        onChangeText={SetAddress}
                        value={address} />
                </View>
                <View style={{ backgroundColor: '#C0C0C0', height: 1 }}></View>
                <TouchableOpacity style={styles.wrapButton} onPress={() => {
                    if (
                        phone !== null && address !== null && name !== null &&
                        sltP !== null && sltD !== null && sltC !== null
                    ) {
                        phoneUser(phone)
                        addressUser(address)
                        nameUser(name)
                        provinceUser(sltP)
                        districtUser(sltD)
                        wardseUser(sltC)
                        navigation.goBack();
                    } else {
                        Alert.alert('Please fill full the information')
                    }

                }}>
                    <Text style={styles.textButton}>Save</Text>
                </TouchableOpacity>
            </ScrollView>
            <TouchableOpacity
                onPress={() => {
                    navigation.goBack();
                }}
                style={styles.buttonBack}>
                <MaterialIcons name='arrow-back' size={25} color='#000000' />
            </TouchableOpacity>
        </View >
    )
}

export default Account

