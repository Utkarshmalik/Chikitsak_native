import React, { Component } from "react";
import { Text, View, FlatList, ScrollView, AsyncStorage } from "react-native";
//import Pres_Component from "";
import { Title, Spinner } from "native-base";
import PresComponent from "./component";
import Header from "../../reusables/header";
//import { ScrollView } from "react-native-gesture-handler";
class Prescriptions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            prescriptions: undefined
        };
    }

    componentWillMount() {
        AsyncStorage.getItem("user")
            .then(res => {
                fetch(
                    `https://async-healthify.herokuapp.com/prescriptions/${res}`
                )
                    .then(res => res.json())
                    .then(res => {
                        console.log(res);
                        this.setState({
                            prescriptions: res
                        });
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    }

    renderItem(val) {
        console.log(val);
        const {
            doctorName,
            hospitalName,
            date,
            imagePres,
            medicine,
            diseaseType,
            comments
        } = val.item;
        console.log(doctorName);
        return (
            <PresComponent
                doctorName={doctorName}
                hospitalName={hospitalName}
                date={date}
                imagePres={imagePres}
                medicine={medicine}
                diseaseType={diseaseType}
                comments={comments}
            />
        );
    }

    renderPrescriptions() {
        if (this.state.prescriptions === undefined) {
            return (
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Spinner style={{ color: "#24C6DC" }} />
                    <Text style={{ color: "#514A9D", fontSize: 27 }}>
                        Loading Prescriptions
                    </Text>
                </View>
            );
        } else {
            console.log(this.state.prescriptions);

            return (
                <View>
                    <FlatList
                        data={this.state.prescriptions.reverse()}
                        renderItem={this.renderItem.bind(this)}
                    />
                </View>
            );
        }
    }

    render() {
        return (
            <View style={{ backgroundColor: "red", flex: 1 }}>
                <View style={{ flexDirection: "row", height: 150 }}>
                    <Header title="Prescriptions" />
                </View>
                <ScrollView>{this.renderPrescriptions()}</ScrollView>
            </View>
        );
    }
}

export default Prescriptions;
