import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as firebase from "firebase";
import { View, Text, ImageBackground, Dimensions, Image } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";
import { getAllCharactersAction } from "../../../store/actions/charactersActions/charactersActions";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import authStyles from "../authStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import marvelBackground from "../../../assets/marvelBackground.jpg";
import marvel_Logo from "../../../assets/marvel_Logo.png";
import {
  getUserLoggedAction,
  getUserLoggedOutAction
} from "../../../store/actions/userActions/userActions";
import loginBtn from "../../../assets/uiComponents/loginBtn.png";
import facebookBtn from "../../../assets/uiComponents/facebookBtn.png";
import googleBtn from "../../../assets/uiComponents/googleBtn.png";

const { width, height } = Dimensions.get("window");

type LoginProps = {
  navigation: NavigationStackProp;
  getUserLogged;
};

const Login: React.FC<LoginProps> = ({ navigation, getUserLogged }) => {
  const styles = authStyles;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLogin = () => {
    email.length > 0 && password.length > 0 ?
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(getUserLogged)
      .then(navigation.navigate('App'))
      .catch(error => setErrorMessage(error.message)) :
      setErrorMessage("The email or password is invalid.")
  };

  return (
    <View style={{ backgroundColor: "#444444" }}>
      <ImageBackground
        source={marvelBackground}
        style={{ width: width, height: height }}
        imageStyle={{ opacity: 0.2 }}
      >
        <SafeAreaView>
          <View style={{ alignItems: "center", marginVertical: "10%" }}>
            <Image source={marvel_Logo} style={{ width: 114, height: 86 }} />
          </View>
          <View style={styles.i}>
            <Text style={styles.inputTitle}> Email Address </Text>
            <TextInput
              clearButtonMode="always"
              style={styles.input}
              autoCapitalize="none"
              value={email}
              onChangeText={emailValue => setEmail(emailValue)}
            />
          </View>
          <View style={styles.i}>
            <Text style={styles.inputTitle}> Password </Text>
            <TextInput
              clearButtonMode="always"
              style={styles.input}
              secureTextEntry
              autoCapitalize="none"
              value={password}
              onChangeText={passwordValue => setPassword(passwordValue)}
            />
          </View>
          <View style={styles.errorMessage}>
            {errorMessage && <Text style={styles.error}> {errorMessage} </Text>}
          </View>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              style={{ marginVertical: "2%" }}
              onPress={handleLogin}
            >
              <Image source={loginBtn} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginVertical: "2%" }}
              onPress={handleLogin}
            >
              <Image source={facebookBtn} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginVertical: "2%" }}
              onPress={handleLogin}
            >
              <Image source={googleBtn} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              alignSelf: "center",
              marginTop: 32
            }}
            onPress={() => navigation.navigate("Registration")}
          >
            <Text style={{ color: "#fefefe", fontSize: 13 }}>
              Don’t have an account?{" "}
              <Text
                style={{ color: "#c9082a", fontSize: 15, fontWeight: "bold" }}
              >
                Sign Up
              </Text>
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

const mapStateToProps = state => ({
  userLogged: state.user.loggedIn,
  allCharacters: state.characters.allCharacters
});

const mapDispatchToProps = dispatch => ({
  getUserLogged: () => dispatch(getUserLoggedAction()),
  getUserLoggedOut: () => dispatch(getUserLoggedOutAction()),
  getAllCharacters: () => dispatch(getAllCharactersAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
