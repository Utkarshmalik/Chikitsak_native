import React, { Component } from "react";
import { Text, View, TouchableOpacity, AsyncStorage } from "react-native";
import MealComponent from "./MealComponent";
import Header1 from "../reusables/header";
import FoodTrack from "./FoodTrack";
import { Overlay, overlayBackgroundColor } from "react-native-elements";

import {
    Container,
    Header,
    Content,
    List,
    ListItem,
    Left,
    Body,
    Right,
    Thumbnail,
    Item,
    Icon,
    Input,
    Label,
    Card,
    Button,
    CardItem
} from "native-base";

class LogScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            foodDetails: undefined
        };
    }
    componentDidMount() {
        AsyncStorage.getItem("user")
            .then(res => {
                fetch(
                    `https://async-healthify.herokuapp.com/foodDetails/${res}`
                )
                    .then(res => res.json())
                    .then(res => {
                        console.log(res);
                        this.setState({ foodDetails: res });
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    }

    renderDetails() {
        if (this.state.foodDetails) {
            return (
                <Overlay
                    isVisible={this.state.isVisible}
                    windowBackgroundColor="rgba(255, 255, 255, .5)"
                    overlayBackgroundColor="#514A9D"
                    width={350}
                    height={600}
                    onBackdropPress={() => this.setState({ isVisible: false })}
                >
                    <Container>
                        <Content padder>
                            <Card>
                                <CardItem header bordered>
                                    <Text
                                        style={{
                                            color: "#514A9D",
                                            fontSize: 17
                                        }}
                                    >
                                        Breakfast
                                    </Text>
                                </CardItem>

                                <CardItem bordered>
                                    <Body>
                                        <Text
                                            style={{
                                                color: "#24C6DC",
                                                fontSize: 14
                                            }}
                                        >
                                            Calories:
                                        </Text>
                                        <Text
                                            style={{
                                                color: "#514A9D",
                                                fontSize: 16
                                            }}
                                        >
                                            {
                                                this.state.foodDetails.breakfast
                                                    .calories
                                            }
                                        </Text>
                                        <Text
                                            style={{
                                                color: "#24C6DC",
                                                fontSize: 14
                                            }}
                                        >
                                            Carbohydrates:
                                        </Text>
                                        <Text
                                            style={{
                                                color: "#514A9D",
                                                fontSize: 16
                                            }}
                                        >
                                            {
                                                this.state.foodDetails.breakfast
                                                    .carbohydrates
                                            }
                                        </Text>
                                        <Text
                                            style={{
                                                color: "#24C6DC",
                                                fontSize: 14
                                            }}
                                        >
                                            proteins:
                                        </Text>
                                        <Text
                                            style={{
                                                color: "#514A9D",
                                                fontSize: 16
                                            }}
                                        >
                                            {
                                                this.state.foodDetails.breakfast
                                                    .proteins
                                            }
                                        </Text>
                                        <Text
                                            style={{
                                                color: "#24C6DC",
                                                fontSize: 14
                                            }}
                                        >
                                            Fats:
                                        </Text>
                                        <Text
                                            style={{
                                                color: "#514A9D",
                                                fontSize: 16
                                            }}
                                        >
                                            {
                                                this.state.foodDetails.breakfast
                                                    .vitamins
                                            }
                                        </Text>
                                    </Body>
                                </CardItem>
                                <CardItem footer bordered />
                            </Card>
                            <Card>
                                <CardItem header bordered>
                                    <Text
                                        style={{
                                            color: "#514A9D",
                                            fontSize: 17
                                        }}
                                    >
                                        Lunch
                                    </Text>
                                </CardItem>
                                <CardItem bordered>
                                    <Body>
                                        <Text
                                            style={{
                                                color: "#24C6DC",
                                                fontSize: 14
                                            }}
                                        >
                                            Calories:
                                        </Text>
                                        <Text
                                            style={{
                                                color: "#514A9D",
                                                fontSize: 16
                                            }}
                                        >
                                            {
                                                this.state.foodDetails.lunch
                                                    .calories
                                            }
                                        </Text>
                                        <Text
                                            style={{
                                                color: "#24C6DC",
                                                fontSize: 14
                                            }}
                                        >
                                            Carbohydrates:
                                        </Text>
                                        <Text
                                            style={{
                                                color: "#514A9D",
                                                fontSize: 16
                                            }}
                                        >
                                            {
                                                this.state.foodDetails.lunch
                                                    .carbohydrates
                                            }
                                        </Text>
                                        <Text
                                            style={{
                                                color: "#24C6DC",
                                                fontSize: 14
                                            }}
                                        >
                                            proteins:
                                        </Text>
                                        <Text
                                            style={{
                                                color: "#514A9D",
                                                fontSize: 16
                                            }}
                                        >
                                            {
                                                this.state.foodDetails.lunch
                                                    .proteins
                                            }
                                        </Text>
                                        <Text
                                            style={{
                                                color: "#24C6DC",
                                                fontSize: 14
                                            }}
                                        >
                                            Fats:
                                        </Text>
                                        <Text
                                            style={{
                                                color: "#514A9D",
                                                fontSize: 16
                                            }}
                                        >
                                            {
                                                this.state.foodDetails.lunch
                                                    .vitamins
                                            }
                                        </Text>
                                    </Body>
                                </CardItem>
                            </Card>
                            <Card>
                                <CardItem header bordered>
                                    <Text
                                        style={{
                                            color: "#514A9D",
                                            fontSize: 17
                                        }}
                                    >
                                        Snacks
                                    </Text>
                                </CardItem>
                                <CardItem bordered>
                                    <Body>
                                        <Text
                                            style={{
                                                color: "#24C6DC",
                                                fontSize: 14
                                            }}
                                        >
                                            Calories:
                                        </Text>
                                        <Text
                                            style={{
                                                color: "#514A9D",
                                                fontSize: 16
                                            }}
                                        >
                                            {
                                                this.state.foodDetails.snacks
                                                    .calories
                                            }
                                        </Text>
                                        <Text
                                            style={{
                                                color: "#24C6DC",
                                                fontSize: 14
                                            }}
                                        >
                                            Carbohydrates:
                                        </Text>
                                        <Text
                                            style={{
                                                color: "#514A9D",
                                                fontSize: 16
                                            }}
                                        >
                                            {
                                                this.state.foodDetails.snacks
                                                    .carbohydrates
                                            }
                                        </Text>
                                        <Text
                                            style={{
                                                color: "#24C6DC",
                                                fontSize: 14
                                            }}
                                        >
                                            proteins:
                                        </Text>
                                        <Text
                                            style={{
                                                color: "#514A9D",
                                                fontSize: 16
                                            }}
                                        >
                                            {
                                                this.state.foodDetails.snacks
                                                    .proteins
                                            }
                                        </Text>
                                        <Text
                                            style={{
                                                color: "#24C6DC",
                                                fontSize: 14
                                            }}
                                        >
                                            Fats:
                                        </Text>
                                        <Text
                                            style={{
                                                color: "#514A9D",
                                                fontSize: 16
                                            }}
                                        >
                                            {
                                                this.state.foodDetails.snacks
                                                    .vitamins
                                            }
                                        </Text>
                                    </Body>
                                </CardItem>
                            </Card>
                            <Card>
                                <CardItem header bordered>
                                    <Text
                                        style={{
                                            color: "#514A9D",
                                            fontSize: 17
                                        }}
                                    >
                                        Dinner
                                    </Text>
                                </CardItem>
                                <CardItem bordered>
                                    <Body>
                                        <Text
                                            style={{
                                                color: "#24C6DC",
                                                fontSize: 14
                                            }}
                                        >
                                            Calories:
                                        </Text>
                                        <Text
                                            style={{
                                                color: "#514A9D",
                                                fontSize: 16
                                            }}
                                        >
                                            {
                                                this.state.foodDetails.dinner
                                                    .calories
                                            }
                                        </Text>
                                        <Text
                                            style={{
                                                color: "#24C6DC",
                                                fontSize: 14
                                            }}
                                        >
                                            Carbohydrates:
                                        </Text>
                                        <Text
                                            style={{
                                                color: "#514A9D",
                                                fontSize: 16
                                            }}
                                        >
                                            {
                                                this.state.foodDetails.dinner
                                                    .carbohydrates
                                            }
                                        </Text>
                                        <Text
                                            style={{
                                                color: "#24C6DC",
                                                fontSize: 14
                                            }}
                                        >
                                            proteins:
                                        </Text>
                                        <Text
                                            style={{
                                                color: "#514A9D",
                                                fontSize: 16
                                            }}
                                        >
                                            {
                                                this.state.foodDetails.dinner
                                                    .proteins
                                            }
                                        </Text>
                                        <Text
                                            style={{
                                                color: "#24C6DC",
                                                fontSize: 14
                                            }}
                                        >
                                            Fats:
                                        </Text>
                                        <Text
                                            style={{
                                                color: "#514A9D",
                                                fontSize: 16
                                            }}
                                        >
                                            {
                                                this.state.foodDetails.dinner
                                                    .vitamins
                                            }
                                        </Text>
                                    </Body>
                                </CardItem>
                            </Card>
                        </Content>
                    </Container>
                </Overlay>
            );
        }
    }

    seeDetailsClick() {
        console.log("clicked");
        //Actions.fooddetailpage();
        this.props.navigation.navigate("foodUpload", {
            apple: "true"
        });
    }

    render() {
        return (
            <View style={styles.LogScreen}>
                <Header1 title="Add Your Food" />

                <View
                    style={{
                        height: 300,
                        width: 300,
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: 50,
                        marginTop: 100
                    }}
                >
                    <Thumbnail
                        square
                        large
                        source={{
                            uri: "https://www.fda.gov/media/116808/download"
                        }}
                        style={{
                            height: 230,
                            width: 230
                        }}
                    />
                </View>

                <View style={styles.componentBox}>
                    <MealComponent
                        mealType={"Breakfast"}
                        navigation={this.props.navigation}
                    />
                    <MealComponent
                        mealType={"Lunch"}
                        navigation={this.props.navigation}
                    />
                    <MealComponent
                        mealType={"Snacks"}
                        navigation={this.props.navigation}
                    />
                    <MealComponent
                        mealType={"Dinner"}
                        navigation={this.props.navigation}
                    />
                </View>
                <View style={styles.buttonBox}>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={() => {
                            this.setState({ isVisible: true });
                        }}
                    >
                        <Text style={styles.textStyle}>Track Live Details</Text>
                    </TouchableOpacity>
                </View>
                {this.renderDetails()}
            </View>
        );
    }
}

export default LogScreen;

const styles = {
    LogScreen: {
        flex: 1,
        justifyContent: "space-around"
    },
    componentBox: {
        flex: 7,
        //justifyContent: "center"
        marginTop: -40
    },
    buttonBox: {
        flex: 3,
        marginTop: -200,
        justifyContent: "center"
    },
    textStyle: {
        color: "#514A9D",
        fontSize: 20,
        textAlign: "center"
    }
};
