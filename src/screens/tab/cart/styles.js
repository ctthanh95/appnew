import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        height: '70%'
    },
    textHeader: {
        fontSize: 30,
        fontFamily: 'SignikaNegative-Bold',
        color: '#3F353D',
        lineHeight: 40,
        textAlign: 'center',
        marginVertical: 5,
    },
    wrapItem: {
        backgroundColor: '#0000FF10',
        minHeight: 150,
        marginHorizontal: 15,
        marginVertical: 5,
        borderRadius: 20,
        padding: 10,
        flexDirection: 'row',
    },
    wrapImage: {
        flex: 0.9,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        marginRight: 10
    },
    image: {
        width: 80,
        height: 100,
        resizeMode: 'center'
    },
    wrapText: {
        flex: 2,
    },
    wrapOn: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    textName: {
        fontSize: 18,
        fontFamily: 'SignikaNegative-Bold',
        color: '#3F353D',
        lineHeight: 30
    },
    textSize: {
        fontSize: 16,
        fontFamily: 'SignikaNegative-Light',
        color: '#8E7D85',
        lineHeight: 25
    },
    textPrice: {
        fontSize: 26,
        fontFamily: 'SignikaNegative-Bold',
        color: '#ed7430',
    },
    textAmount: {
        fontSize: 26,
        fontFamily: 'SignikaNegative-Bold',
        color: '#8E7D85',
        textAlignVertical: 'center',
    },
    textNumber: {
        fontSize: 26,
        fontFamily: 'SignikaNegative-Bold',
        color: '#3F353D',
        marginHorizontal: 25,
        textAlign: 'center',
    },
    wrapPay:{
        padding: 10,
        backgroundColor: '#FFFFFF',
        marginTop: 1,
        paddingHorizontal: 25,
        flex: 1,
    },
    wrapItemPrice:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    wrapPayment:{
        backgroundColor: '#ed7430',
        width: '100%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        borderRadius: 20,
    }
})

export default styles