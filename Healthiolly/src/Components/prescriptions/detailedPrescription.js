import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
//import Pres_Component from "";
import { Title, Spinner } from "native-base";
import PresComponent from "./component";
import Header from "../../reusables/header";
class Prescriptions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            prescriptions: undefined
        };
    }

    renderItem(val) {
        console.log(val);
        const { doctorName, hospitalName, date, imagePres } = val.item;
        console.log(doctorName);
        return (
            <PresComponent
                doctorName={doctorName}
                hospitalName={hospitalName}
                date={date}
                imagePres={imagePres}
            />
        );
    }

    renderPrescriptions() {
        if (this.state.prescriptions === undefined) {
            return (
                <View>
                    <Spinner />
                    <Text> Loading Prescriptions</Text>
                </View>
            );
        } else {
            console.log(this.state.prescriptions);

            return (
                <View>
                    <FlatList
                        data={this.state.prescriptions}
                        renderItem={this.renderItem.bind(this)}
                    />
                </View>
            );
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
            //image
            //all other details
            
                
            </View>
        );
    }
}

export default Prescriptions;
