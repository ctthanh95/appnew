import {StyleSheet} from 'react-native'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 10,
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
        borderRadius: 15,
        margin: 10,
    },
    wrapImage: {
        alignItems: 'center',
    },
    wrapText: {
        padding: 10,
    },
    images: {
        width: 150,
        height: 125,
    },
    textPrice: {
        fontSize: 25,
        fontFamily: 'SignikaNegative-Bold',
        color: '#ed7430',
    },
    textName: {
        fontSize: 20,
        fontFamily: 'SignikaNegative-Bold',
        color: '#3F353D',
        lineHeight: 30,
    },
    wrapLike: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 5,
        left: 5,
    },
})
export default styles