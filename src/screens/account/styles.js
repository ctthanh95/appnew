import {StyleSheet} from 'react-native'
const styles = StyleSheet.create({
    buttonBack: {
        position: 'absolute',
        top: 0,
        left: 0
    },
    wrapButton: {
        backgroundColor: '#ed7430',
        borderRadius: 25,
        height: 50,
        marginVertical: 30,
        justifyContent: 'center',
    },
    textButton: {
        color: '#FFFFFF',
        fontFamily: 'SignikaNegative-Bold',
        textAlign: 'center',
        fontSize: 25
    },
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
        marginVertical: 10,
    },
    wrapText: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },
    textName: {
        fontSize: 16,
        fontFamily: 'SignikaNegative-Light',
        color: '#3F353D',
        paddingRight: 5
    },
    textStar: {
        fontSize: 16,
        fontFamily: 'SignikaNegative-Bold',
        color: 'red',
    },
    textInput: {
        backgroundColor: '#0000FF10',
        borderRadius: 10,
        fontSize: 20,
        fontFamily: 'SignikaNegative-SemiBold',
        paddingHorizontal: 10,
        color: '#3F353Dff'
    },
    textCheckbox: {
        fontSize: 20,
        fontFamily: 'SignikaNegative-Bold',
        color: '#3F353D',
        paddingLeft: 5,
    }
})
export default styles
