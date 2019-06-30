import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    AsyncStorage
} from "react-native";
import { Spinner } from "native-base";
import Header from "..//reusables/header";
import DetailViewComponent from "./DetailViewComponent";

class FoodInformation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            FoodDetails: null,
            foodDetails1: null,
            currentUser: null
        };
    }

    componentDidMount() {
        fetch("https://visionapu.herokuapp.com/foodsearch", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                foodname: this.props.navigation.state.params.foodItem
            })
        })
            .then(response => response.json())
            .then(
                response => {
                    console.log(response);

                    this.setState({
                        isLoading: false,
                        FoodDetails: response
                    });
                }

                /*
                AsyncStorage.getItem(this.props.mealType).then(value => {
                    console.log(value);
                    let obj = {};

                    if (value) {
                        console.log("true");
                        var tempObj = JSON.parse(value);

                        var newData = tempObj.data;
                        console.log(newData);
                        newData.push({
                            calories: this.state.FoodDetails.calories.value,
                            carbs: this.state.FoodDetails.carbs.value,
                            fats: this.state.FoodDetails.fat.value,
                            proteins: this.state.FoodDetails.protein.value,
                            imagePath: this.props.imagePath,
                            foodItem: this.props.foodItem
                        });

                        console.log("wwfwfwf");

                        obj = {
                            calories:
                                this.state.FoodDetails.calories.value +
                                tempObj.calories,
                            carbs:
                                this.state.FoodDetails.carbs.value +
                                tempObj.carbs,
                            fats:
                                this.state.FoodDetails.fat.value + tempObj.fats,
                            proteins:
                                this.state.FoodDetails.protein.value +
                                tempObj.proteins,
                            imagePath: this.props.imagePath,
                            foodItem: this.props.foodItem,
                            data: newData
                        };

                        console.log(obj);
                    } else {
                        console.log("fq");
                        const newObj = {
                            calories: this.state.FoodDetails.calories.value,
                            carbs: this.state.FoodDetails.carbs.value,
                            fats: this.state.FoodDetails.fat.value,
                            proteins: this.state.FoodDetails.protein.value,
                            imagePath: this.props.imagePath,
                            foodItem: this.props.foodItem
                        };
                        const newData = [];
                        newData.push(newObj);

                        obj = {
                            calories: this.state.FoodDetails.calories.value,
                            carbs: this.state.FoodDetails.carbs.value,
                            fats: this.state.FoodDetails.fat.value,
                            proteins: this.state.FoodDetails.protein.value,
                            imagePath: this.props.imagePath,
                            foodItem: this.props.foodItem,
                            data: newData
                        };

                        console.log(obj);
                    }

                    AsyncStorage.setItem(
                        this.props.mealType,
                        JSON.stringify(obj)
                    );
                });

                console.log(response);

                this.setState({
                    isLoading: false,
                    FoodDetails: response
                });
            }
          */
            );
    }

    renderDetailsOrSpinner() {
        if (this.state.isLoading) {
            return (
                <View style={{ marginTop: 20 }}>
                    <Spinner />
                    <Text style={[styles.textStyle, { color: "#bc05d3" }]}>
                        Loading Details
                    </Text>
                </View>
            );
        } else {
            return (
                <View>
                    <DetailViewComponent
                        field={"Calories"}
                        value={this.state.FoodDetails.calories.value}
                    />
                    <DetailViewComponent
                        field={"Carbohydrates"}
                        value={this.state.FoodDetails.carbs.value}
                    />
                    <DetailViewComponent
                        field={"Fats"}
                        value={this.state.FoodDetails.fat.value}
                    />
                    <DetailViewComponent
                        field={"Proteins"}
                        value={this.state.FoodDetails.protein.value}
                    />
                </View>
            );
        }
    }
    componentWillMount() {
        AsyncStorage.getItem("user")
            .then(res => this.setState({ currentUser: res }))
            .catch(err => console.log(err));
    }

    onDoneClick() {
        fetch(
            `https://async-healthify.herokuapp.com/foodDetails/${
                this.state.currentUser
            }`
        )
            .then(res => res.json())
            .then(res => {
                console.log(res);
                this.setState({ foodDetails1: res });

                const mealType = this.props.navigation.state.params.mealType.toLowerCase();
                console.log(mealType);

                const obj = {
                    calories: this.state.FoodDetails.calories.value,
                    proteins: this.state.FoodDetails.protein.value,
                    carbohydrates: this.state.FoodDetails.carbs.value,
                    vitamins: this.state.FoodDetails.fat.value
                };
                console.log((this.state.foodDetails1[mealType] = obj));

                fetch(
                    `https://async-healthify.herokuapp.com/foodDetails/${
                        this.state.currentUser
                    }`,
                    {
                        method: "POST",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(this.state.foodDetails1)
                    }
                )
                    .then(res => {
                        console.log(res);
                        this.props.navigation.navigate("profile");
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <View style={styles.mainComp}>
                <Header title="Track it! " />
                <View style={styles.comp1}>
                    <View>
                        <Text style={[styles.textStyle, { color: "#514A9D" }]}>
                            Meal Type:
                        </Text>
                        <Text style={[styles.textStyle, { color: "#514A9D" }]}>
                            {this.props.navigation.state.params.mealType}{" "}
                        </Text>
                        <Text style={[styles.textStyle, { color: "#514A9D" }]}>
                            Meal item:
                        </Text>
                        <Text style={[styles.textStyle, { color: "#514A9D" }]}>
                            {this.props.navigation.state.params.foodItem}{" "}
                        </Text>
                    </View>

                    <View>
                        <Image
                            source={{
                                uri: this.props.navigation.state.params
                                    .imagePath
                            }}
                            style={{
                                borderWidth: 1.5,
                                height: 160,
                                width: 160,
                                borderColor: "#514A9D"
                            }}
                        />
                    </View>
                </View>

                <View style={styles.comp2}>
                    {this.renderDetailsOrSpinner()}
                </View>
                <View style={styles.comp3}>
                    <TouchableOpacity
                        style={[styles.buttonStyle]}
                        onPress={this.onDoneClick.bind(this)}
                    >
                        <Text style={styles.textStyle}>Done</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default FoodInformation;

const styles = {
    mainComp: {
        flex: 1
    },
    comp1: {
        flex: 6,
        //backgroundColor:'red',
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: 130
    },
    comp2: {
        flex: 10,
        //backgroundColor:'green',
        justifyContent: "center",
        marginTop: 30
    },
    comp3: {
        flex: 5,
        //backgroundColor:'blue'
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    textStyle: {
        alignSelf: "center",
        color: "white",
        fontSize: 18,
        fontWeight: "600",
        paddingTop: 15,
        paddingBottom: 15
    },
    buttonStyle: {
        backgroundColor: "#514A9D",
        borderRadius: 10,
        borderWidth: 0,
        borderColor: "#692D7D",
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft: 30,
        paddingRight: 30
    }
};
