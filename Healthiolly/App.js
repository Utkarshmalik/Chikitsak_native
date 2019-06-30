/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import Profile from "./src/Components/profile";
import Login from "./src/Components/Login";
import signUp from "./src/Components/SignUp";
import { Platform, StyleSheet, Text, View } from "react-native";
import Prescriptions from "./src/Components/prescriptions/prescriptions";
import {
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator,
    createSwitchNavigator,
    createDrawerNavigator
} from "react-navigation";
import runMed from "./src/Reminder/runningMed";

import Reports from "./src/Reports/reports";
import pdfView from "./src/Reports/pdfview";
import logscreen from "./src/Food/logscreen";
import foodUpload from "./src/Food/uploadPhoto";
import mealComponent from "./src/Food/MealComponent";
import ConfirmFoodScreen from "./src/Food/confirmFoodScreen";
import FoodInformation from "./src/Food/FoodInformation";
import Dashboard from "./src/dashboard/main";
import AddPrescription from "./src/Components/prescriptions/form";
import AddMed from "./src/Reminder/form";
import Logout from "./src/reusables/logout";
const instructions = Platform.select({
    ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
    android:
        "Double tap R on your keyboard to reload,\n" +
        "Shake or press menu button for dev menu"
});

class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>
                    To get started, edit App.js
                </Text>
                <Text style={styles.instructions}>{instructions}</Text>
            </View>
        );
    }
}

const AuthNavigator = createStackNavigator(
    {
        login: Login,
        signUp: signUp
    },
    {
        headerMode: "none",
        navigationOptions: {
            headerVisible: false
        }
    }
);

const RunMedNavigator = createBottomTabNavigator(
    {
        runMed: runMed,
        add: AddMed
    },

    {
        headerMode: "none",
        navigationOptions: {
            headerVisible: false
        }
    }
);

const FoodNavigator = createStackNavigator(
    {
        main: logscreen,
        mealComponent: mealComponent,
        foodUpload: foodUpload,
        confirmFood: ConfirmFoodScreen,
        foodInfo: FoodInformation
    },

    {
        headerMode: "none",
        navigationOptions: {
            headerVisible: false
        }
    }
);

const ReportsNavigator = createStackNavigator(
    {
        main: Reports,
        pdf: pdfView
    },

    {
        headerMode: "none",
        navigationOptions: {
            headerVisible: false
        }
    }
);

const PrescriptionNavigator = createBottomTabNavigator(
    {
        main: Prescriptions,
        add: AddPrescription
    },

    {
        headerMode: "none",
        navigationOptions: {
            headerVisible: false
        }
    }
);

const MainNavigator = createDrawerNavigator(
    {
        profile: Dashboard,
        Prescriptions: PrescriptionNavigator,
        Reports: ReportsNavigator,
        Logs: FoodNavigator,
        CurrentMedicnes: RunMedNavigator
        //temp: pdf
    },

    {
        drawerBackgroundColor: "#EBF5FB"
    }
    /*
    {
        headerMode: "none",
        navigationOptions: {
            headerVisible: false
        }
    }
    */
);

const AppNavigator = createSwitchNavigator(
    {
        Home: {
            screen: AuthNavigator
        },
        dashBoard: MainNavigator
    },
    {
        headerMode: "none",
        navigationOptions: {
            headerVisible: false
        }
    }
);

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#6C162B"
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
    }
});
