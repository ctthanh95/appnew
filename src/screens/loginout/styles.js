import {StyleSheet} from 'react-native'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 10
    },
    textHeader: {
        fontSize: 40,
        fontFamily: 'SignikaNegative-Bold',
        color: '#3F353D',
        lineHeight: 40,
        textAlign: 'center',
        marginVertical: 30,
    },
    wrapSocialNetwork: {
        width: '100%',
        padding: 10,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    wrapFacebook: {
        height: 50,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0878e9',
        borderRadius: 25,
        marginRight: 15
    },
    wrapGoogle: {
        height: 50,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ea4335',
        borderRadius: 25
    },
    textFacebook: {
        fontSize: 20,
        fontFamily: 'SignikaNegative-Bold',
        color: '#FFFFFF',
        textAlign: 'center',
        paddingLeft: 10
    },
    textOr: {
        fontSize: 18,
        fontFamily: 'SignikaNegative-Bold',
        color: '#3F353D',
        textAlign: 'center',
        marginVertical: 15
    },
    wrapAccount: {
        padding: 10,
        backgroundColor: 'red',
        flexDirection: 'row',
        backgroundColor: '#0000FF10',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
    },
    textInput: {
        fontSize: 20,
        fontFamily: 'SignikaNegative-Light',
        width: '90%',
        paddingLeft: 25,
        textAlignVertical: 'center',
        height: 40,
    },
    textLogin:{
        fontSize: 20,
        fontFamily: 'SignikaNegative-Bold',
        color: '#FFFFFF',
        textAlign: 'center',
        paddingLeft: 10,
    },
    wrapLogin:{
        backgroundColor: '#ed7430',
        borderRadius: 25,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    wrapSignup:{
        flexDirection: 'row',
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapCheckbox:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    textAccept:{
        fontSize: 18,
        fontFamily: 'SignikaNegative-Light',
        color: '#3F353D',
        textAlign: 'center',
        marginVertical: 15
    },
    textPolicy:{
        fontSize: 20,
        fontFamily: 'SignikaNegative-Light',
        color: '#0000FF',
        textAlign: 'center',
        marginVertical: 15
    },
    buttonBack: {
        position: 'absolute',
        padding: 0,
        top: 0,
        left: 0
    },
})
export default styles