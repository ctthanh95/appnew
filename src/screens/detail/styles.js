import { StyleSheet, Dimensions} from 'react-native'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 15,
    },
    wrapImage: {
        backgroundColor: '#0000FF15',
        height: Dimensions.get('window').height / 2.5,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonBack: {
        position: 'absolute',
        padding: 15,
        top: 0,
        left: 0
    },
    buttonLike: {
        position: 'absolute',
        right: 0,
        padding: 15,
        top: 0,
    },
    wrapBackground: {
        position: 'absolute',
    },
    viewBackground: {
        width: 200,
        height: 200,
        borderRadius: 30,
        backgroundColor: '#0000FF50'
    },
    image: {
        height: 200,
        width: 200,
        resizeMode: 'center'
    },
    wrapText: {
        paddingHorizontal: 10,
    },
    textName: {
        fontSize: 30,
        fontFamily: 'SignikaNegative-Bold',
        color: '#3F353D',
        paddingTop: 20,
        lineHeight: 25
    },
    textType: {
        fontSize: 20,
        fontFamily: 'SignikaNegative-Light',
        color: '#3F353D',
        lineHeight: 25,
        textAlign: 'justify'
    },
    textPrice: {
        fontSize: 30,
        fontFamily: 'SignikaNegative-Bold',
        color: '#ed7430',
        textAlign: 'center',
    },
    textTitleSize: {
        fontSize: 20,
        fontFamily: 'SignikaNegative-Bold',
        color: '#3F353D',
        paddingVertical: 15,
    },
    wrapSize: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        marginRight: 20,
        borderColor: '#8E7D85',
        borderWidth: 1,
    },
    wrapSizeActive: {
        borderWidth: 0,
        backgroundColor: '#ed7430'
    },
    textSize: {
        color: '#8E7D85',
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'SignikaNegative-Bold',
    },
    backgroundCart: {
        backgroundColor: '#ed7430',
        height: 50,
        width: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapCart: {
        alignItems: 'flex-end',
        position: 'absolute',
        bottom: 0,
        right: 0
    }
})

export default styles