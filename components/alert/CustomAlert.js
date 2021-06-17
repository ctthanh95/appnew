import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const CustomAlert = (props) => {
    return (
            <Modal
                visible={props.status}
                transparent={true}
                animationType={"fade"}>
                <View style={styles.mainOuterComponent}>
                <View style={styles.mainContainer}>
                    {/* First ROw - Alert Icon and Title */}
                    <View style={styles.topPart}>
                        <MaterialIcons name="notifications-active" size={25} color="#FFFFFF" />
                        <Text style={styles.alertTitleTextStyle}>
                            Notification
                        </Text>
                    </View>
                    {/* Second Row - Alert Message Text */}
                    <View style={styles.middlePart}>
                        <Text style={styles.alertMessageTextStyle}>
                            Please login
                        </Text>
                    </View>
                    {/* Third Row - Positive and Negative Button */}
                    <View style={styles.bottomPart}>
                        <TouchableOpacity
                            onPress={() => props.clickSignin()}
                            style={styles.alertMessageButtonStyle}>
                            <Text style={styles.alertMessageButtonTextStyle}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </View>
            </Modal>

    )
}

export default CustomAlert

const styles = StyleSheet.create({
    topPart: {
        flex: 0.5,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 2,
        paddingVertical: 4,
    },
    middlePart: {
        flex: 1,
        width: '100%',
        padding: 4,
        color: '#FFFFFF',
        fontSize: 16,
        marginVertical: 2
    },
    bottomPart: {
        flex: 0.5,
        width: '100%',
        flexDirection: 'row',
        padding: 4,
        justifyContent: 'space-evenly'
    },
    alertTitleTextStyle: {
        flex: 1,
        textAlign: 'justify',
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: 'bold',
        padding: 2,
        marginHorizontal: 2
    },
    alertMessageTextStyle: {
        color: '#FFFFFF',
        textAlign: 'justify',
        fontSize: 16,
        paddingHorizontal: 6,
        paddingVertical: 2,
    },
    alertMessageButtonStyle: {
        width: '30%',
        paddingHorizontal: 6,
        marginVertical: 4,
        borderRadius: 10,
        backgroundColor: '#80BFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    alertMessageButtonTextStyle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
});
