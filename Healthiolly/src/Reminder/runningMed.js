import React, { Component } from "react";
import { Text, View, FlatList, ScrollView, AsyncStorage } from "react-native";
import { Title, Spinner } from "native-base";
import Header from "../reusables/header";
import { material } from "react-native-typography";
import MedComponent from "./medComponent";

class Reports extends Component {
    constructor(props) {
        super(props);

        this.state = {
            runMed: undefined
        };
    }

    componentWillMount() {
        AsyncStorage.getItem("user")
            .then(res => {
                fetch(`https://async-healthify.herokuapp.com/runMed/${res}`)
                    .then(res => res.json())
                    .then(res => {
                        console.log(res);
                        this.setState({
                            runMed: res
                        });
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    }

    renderItem(val) {
        console.log(val);

        const { name, freq, dur } = val.item;
        return <MedComponent name={name} freq={freq} dur={dur} />;
    }

    renderMedicines() {
        if (this.state.runMed === undefined) {
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
                        Loading Medicines
                    </Text>
                </View>
            );
        } else {
            console.log(this.state.runMed);

            return (
                <View>
                    <FlatList
                        data={this.state.runMed}
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
                    <Header title="Running Meds" />
                </View>
                <ScrollView>{this.renderMedicines()}</ScrollView>
            </View>
        );
    }
}

export default Reports;
