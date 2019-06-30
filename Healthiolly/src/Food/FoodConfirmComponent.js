import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

const FoodConfirmComponent = ({
    foodDescription,
    imagePath,
    mealType,
    navigation
}) => {
    onConfirmingFood = () => {
        console.log("hello");
        console.log(mealType);
        console.log(foodDescription);

        navigation.navigate("foodInfo", {
            foodItem: foodDescription,
            imagePath: imagePath,
            mealType: mealType
        });

        /*
        Actions.foodinformationscreen({
            foodItem: foodDescription,
            imagePath: imagePath,
            mealType: mealType
        });
        */
    };

    return (
        <View>
            <TouchableOpacity
                style={styles.FoodConfirmComponent}
                onPress={onConfirmingFood.bind(this)}
            >
                <Text style={styles.TextStyle}>{foodDescription}</Text>
            </TouchableOpacity>
        </View>
    );
};

styles = {
    FoodConfirmComponent: {
        flexDirection: "row",
        justifyContent: "center",
        padding: 10,
        marginTop: 1,
        marginBottom: 5,
        backgroundColor: "#514A9D",
        marginleft: 10,
        //marginRight:5,
        justifyContent: "space-around",
        borderRadius: 15
    },
    TextStyle: {
        fontSize: 20,
        color: "white"
    }
};

export default FoodConfirmComponent;
