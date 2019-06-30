import React, { Component } from "react";
import { Text, View, FlatList, ScrollView, AsyncStorage } from "react-native";
import { Title, Spinner } from "native-base";
import PresComponent from "./component";
import Header from "../reusables/header";
import { material } from "react-native-typography";

class Reports extends Component {
    constructor(props) {
        super(props);

        this.state = {
            reports: undefined
        };
    }

    componentWillMount() {
        AsyncStorage.getItem("user")
            .then(res => {
                fetch(`https://async-healthify.herokuapp.com/reports/${res}`)
                    .then(res => res.json())
                    .then(res => {
                        console.log(res);
                        this.setState({
                            reports: res
                        });
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    }

    renderItem(val) {
        console.log(val);

        const { id, date, testType, pdf } = val.item;
        return (
            <PresComponent
                id={id}
                date={date}
                pdf={pdf}
                testType={testType}
                navigation={this.props.navigation}
            />
        );
    }

    renderReports() {
        if (this.state.reports === undefined) {
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
                        Loading Reports
                    </Text>
                </View>
            );
        } else {
            console.log(this.state.reports);

            return (
                <View>
                    <FlatList
                        data={this.state.reports}
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
                    <Header title="Reports" />
                </View>
                <ScrollView>{this.renderReports()}</ScrollView>
            </View>
        );
    }
}

export default Reports;
