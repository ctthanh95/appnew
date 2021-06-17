import { StyleSheet, Dimensions } from 'react-native';
const styles = StyleSheet.create({
    wrap: {
        paddingTop: 5,
    },
    textHeader: {
        fontSize: 30,
        fontFamily: 'SignikaNegative-Bold',
        color: '#3F353D',
        lineHeight: 40,
    },
    textTitle: {
        fontSize: 20,
        fontFamily: 'SignikaNegative-Light',
        color: '#3F353D',
        lineHeight: 30,
    },
    wrapSearchFilter: {
        flexDirection: 'row',
        paddingVertical: 10,
    },
    wrapSearch: {
        flexDirection: 'row',
        backgroundColor: '#0000FF10',
        flex: 6,
        alignItems: 'center',
        paddingHorizontal: 15,
        borderRadius: 15,
        marginRight: 15,
    },
    wrapFilter: {
        backgroundColor: '#0000FF10',
        flex: 1,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textSearch: {
        fontSize: 18,
        paddingLeft: 15,
        fontFamily: 'SignikaNegative-Light',
    },
    ///
    listTab: {
        height: 70,
    },
    btnTab: {
        width: Dimensions.get('window').width / 4.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        borderRadius: 50,
    },
    textTab: {
        fontSize: 16,
        fontFamily: 'SignikaNegative-SemiBold',
        color: '#3F353D',
        alignItems: 'center',
    },
    btnTabActive: {
        backgroundColor: '#ed7430',
    },
    textTabActive: {
        color: '#FFFFFF',
    },
    wrapItem: {
        backgroundColor: '#0000FF10',
        margin: 10,
        borderRadius: 25,
        padding: 15,
        flex: 1,
        flexDirection: 'row',
        minHeight: Dimensions.get('window').height / 4,
    },
    wrapImage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapText: {
        flex: 1,
        padding: 20
    },
    viewBackground: {
        width: 105,
        height: 115,
        borderRadius: 15,
    },
    wrapLike: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
    },
    imageShoes: {
        width: 100,
        height: 100,
        resizeMode: 'center',
    },
    wrapShoesImage: {
        position: 'absolute',
    },
    textName: {
        fontSize: 20,
        fontFamily: 'SignikaNegative-Bold',
        color: '#3F353D',
        lineHeight: 20,
    },
    textDescription: {
        fontSize: 16,
        fontFamily: 'SignikaNegative-Light',
        color: '#8E7D85',
    },
    wrapPriceButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    wrapButton: {
        width: 75,
        height: 35,
        backgroundColor: '#3F353D',
        borderRadius: 15,
        justifyContent: 'center',
    },
    textButton: {
        fontSize: 20,
        fontFamily: 'SignikaNegative-Bold',
        textAlign: 'center',
        color: '#FFFFFF',
    }
})
export default styles