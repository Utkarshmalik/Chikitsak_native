import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    AsyncStorage,
    Image
} from "react-native";
import { Actions } from "react-native-router-flux";
import ImagePicker from "react-native-image-picker";
import Icon from "react-native-vector-icons/FontAwesome5";
import CameraImage from "./images/cameraicon.jpg";
import DropdownImage from "./images/dropdown.jpg";

class MealComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            present: false
        };
    }

    componentWillMount() {
        AsyncStorage.getItem(this.props.mealType).then(value => {
            if (value !== null) {
                this.setState({
                    present: true
                });
            }
        });
    }

    renderDisableOrActive() {
        if (this.state.present)
            return (
                <View>
                    <Icon
                        name="dot-circle"
                        size={15}
                        color="#93114b"
                        style={{ alignItems: "center" }}
                    />
                    <Text style={[Styles.MealComponentLeft, Styles.RightText]}>
                        {this.props.mealType}
                    </Text>
                    <TouchableOpacity
                        style={Styles.MealComponentRight}
                        onPress={this.onAddFoodClick.bind(this)}
                    >
                        <View
                            style={{
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            <Icon name="camera" size={18} color="#93114b" />
                        </View>
                    </TouchableOpacity>
                </View>
            );

        return (
            <View style={Styles.MealComponent}>
                <Icon
                    name="circle"
                    size={15}
                    color="#93114b"
                    style={{ alignItems: "center" }}
                />

                <Text style={[Styles.MealComponentLeft, Styles.RightText]}>
                    {this.props.mealType}
                </Text>
                <TouchableOpacity
                    style={Styles.MealComponentRight}
                    onPress={this.onAddFoodClick.bind(this)}
                >
                    <View
                        style={{
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <Icon name="camera" size={18} color="#93114b" />
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    onAddFoodClick() {
        const options = {
            noData: true
        };
        ImagePicker.showImagePicker(options, response => {
            if (response.uri) {
                Actions.uploadscreen({
                    photo: response,
                    mealType: this.props.mealType
                });
            }
        });
    }

    render() {
        return <View>{this.renderDisableOrActive()}</View>;
    }
}

export default MealComponent;

const Styles = {
    MealComponent: {
        flexDirection: "row",
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 5
    },

    MealComponentLeft: {
        flex: 10,
        fontSize: 18
    },
    MealComponentRight: {
        flex: 1,
        //backgroundColor:'black',
        fontSize: 30
    },
    RightText: {
        fontSize: 20,
        textAlign: "center",
        color: "#000"
    }
};
