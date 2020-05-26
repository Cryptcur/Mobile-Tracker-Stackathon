import React, { useContext } from "react";
import { Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = () => {
  const { Signout } = useContext(AuthContext);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text style={{ fontSize: 48 }}>Account</Text>
      <Spacer>
        <Button title="Sign out" onPress={Signout} />
      </Spacer>
    </SafeAreaView>
  );
};

// AccountScreen.navigationOptions = {
//   header: () => {
//     return {
//       title: "Account"
//     };
//   }
// };

const styles = StyleSheet.create({});

export default AccountScreen;
