import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as firebase from "firebase";
import { View, Text } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";
import { getAllCharactersAction } from "../../../store/actions/charactersActions/charactersActions";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import loginStyle from "./loginStyle";

type LoginProps = {
  navigation: NavigationStackProp;
  getUserLogged;
};

const Login: React.FC<LoginProps> = ({ navigation, getUserLogged }) => {
  const styles = loginStyle;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const HandleLogin = () => {
    try {
      return firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(getUserLogged);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <View>
      <View>
        <Text style={styles.inputTitle}> Email Address </Text>
        <TextInput
          clearButtonMode="always"
          style={styles.input}
          autoCapitalize="none"
          value={email}
          onChangeText={emailValue => setEmail(emailValue)}
        />
      </View>

      <View style={{ marginTop: 65 }}>
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

      <TouchableOpacity style={styles.button} onPress={HandleLogin}>
        <Text style={styles.buttonText}> Sign In </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          alignSelf: "center",
          marginTop: 32
        }}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={{ color: "#fefefe", fontSize: 13 }}>
          New to NBA LiveScore Manager?
          <Text style={{ color: "#c9082a", fontSize: 15, fontWeight: "bold" }}>
            Sign Up
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = state => ({
  allCharacters: state.characters.allCharacters
});

const mapDispatchToProps = dispatch => ({
  getAllCharacters: () => dispatch(getAllCharactersAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
