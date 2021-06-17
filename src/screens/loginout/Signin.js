import React from 'react'
import { TouchableOpacity, Text, View, TextInput, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import styles from './styles'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager, Profile } from 'react-native-fbsdk-next'
import { StatusLogin, NameUser } from '../../redux/actions'
import { useSelector, useDispatch } from 'react-redux'

GoogleSignin.configure({});

const Signin = ({ navigation }) => {
  const dispatch = useDispatch()
  const statusLogin = () => {
    dispatch(StatusLogin())
  }
  const nameUser = (name) => {
    dispatch(NameUser(name))
  }
  loginGG = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      nameUser(userInfo.user.name)
      statusLogin()
      Alert.alert(
        "Notification",
        "Login successfully",
        [
          { text: "Continue", onPress: () => navigation.goBack() }
        ]
      );
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  
  const  loginFB = () => {
    LoginManager.logInWithPermissions(["public_profile"]).then(
      function (result) {
        if (result.isCancelled) {
          console.log("Login cancelled");
        } else {
          statusLogin()
          Alert.alert(
            "Notification",
            "Login successfully",
            [
              { text: "Continue", onPress: () => {
                const currentProfile = Profile.getCurrentProfile().then(
                  function(currentProfile) {
                    if (currentProfile) {
                      nameUser(currentProfile.name)
                    }
                  }
                );
              navigation.goBack()
              } }
            ]
          );
        }
      },
      function (error) {
        console.log("Login fail with error: " + error);
      }
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.textHeader}>LOGIN</Text>
        <View style={styles.wrapSocialNetwork}>
          <TouchableOpacity style={styles.wrapFacebook}
            onPress={() => loginFB()}
          >
            <AntDesign name='facebook-square' size={35} color='#FFFFFF' />
            <Text style={styles.textFacebook}>facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.wrapGoogle}
            onPress={() => loginGG()}
          >
            <AntDesign name='google' size={35} color='#FFFFFF' />
            <Text style={styles.textFacebook}>google</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.textOr}>OR</Text>
        <View style={styles.wrapAccount}>
          <Fontisto name='person' size={25} color='#000000' />
          <TextInput style={styles.textInput} placeholder='Your email'></TextInput>
        </View>
        <View style={styles.wrapAccount}>
          <Fontisto name='locked' size={25} color='#000000' />
          <TextInput style={styles.textInput} placeholder='Your password'></TextInput>
        </View>
        <TouchableOpacity>
          <Text style={styles.textOr}>Forget Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.wrapLogin}>
          <Text style={styles.textLogin}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.wrapSignup} onPress={() => navigation.navigate('Signup')}>
          <Text style={[styles.textOr, { fontFamily: 'SignikaNegative-Light' }]}>Don't have an account? </Text>
          <Text style={styles.textOr}>SIGN UP</Text>
        </TouchableOpacity>

      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.buttonBack}>
        <MaterialIcons name='arrow-back' size={25} color='#000000' />
      </TouchableOpacity>
      <View style={{ height: 80 }}>

      </View>
    </SafeAreaView>
  )
}

export default Signin

