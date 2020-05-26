import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { Context } from "../context/AuthContext";

const SigninScreen = ({ navigation }) => {
  const { state, Signin } = useContext(Context);
  navigation.setOptions({
    header: () => null
  });
  return (
    <SafeAreaView forceInset={{ top: "always" }} style={styles.container}>
      <AuthForm
        headerText="Sign In to your Account"
        errorMessage={state.errorMessage}
        onSubmit={Signin}
        submitButtonText="Signin"
      />
      <NavLink
        text="'Don't have an Account? Sign up instead"
        routeName="Signup"
        navigate={navigation.navigate}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250
  }
});

export default SigninScreen;
