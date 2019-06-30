import React, { Component } from "react";
import { Text, View } from "react-native";
import FoodConfirmComponent from "./FoodConfirmComponent";
import Header from "../reusables/header";

class ConfirmFoodScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    renderFoodComponents() {
        return this.props.navigation.state.params.foodItems.map(Item => {
            return (
                <FoodConfirmComponent
                    foodDescription={Item.description}
                    imagePath={this.props.navigation.state.params.imagePath}
                    mealType={this.props.navigation.state.params.mealType}
                    navigation={this.props.navigation}
                />
            );
        });
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: "column" }}>
                <View style={{ flex: 2 }}>
                    <Header title="What was it?" />
                </View>
                <View style={{ flex: 6 }}>{this.renderFoodComponents()}</View>
            </View>
        );
    }
}

export default ConfirmFoodScreen;
