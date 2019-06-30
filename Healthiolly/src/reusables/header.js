import React, { Component } from "react";
import {
    Container,
    Header,
    Title,
    Button,
    Icon,
    Left,
    Right,
    Body,
    Text,
    View
} from "native-base";
import LinearGradient from "react-native-linear-gradient";
import { StyleSheet } from "react-native";

import { material } from "react-native-typography";
import { sanFranciscoWeights } from "react-native-typography";
import { human } from "react-native-typography";
import { iOSUIKit } from "react-native-typography";

export default class HeaderSpan extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <LinearGradient
                    colors={["#24C6DC", "#514A9D"]}
                    style={styles.linearGradient}
                >
                    <Header style={{ backgroundColor: "transparent" }} span>
                        {/*
                        <Button transparent>
                            <Icon name="arrow-back" />
                        </Button>
                    */}

                        <View
                            style={{
                                flexDirection: "column",
                                justifyContent: "flex-end",
                                marginBottom: 15
                            }}
                        >
                            <Text style={material.display2White}>
                                {this.props.title}
                            </Text>
                        </View>

                        <Right />
                    </Header>
                </LinearGradient>
            </Container>
        );
    }
}

var styles = StyleSheet.create({
    linearGradient: {
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 18,
        fontFamily: "Gill Sans",
        textAlign: "center",
        margin: 10,
        color: "#ffffff",
        backgroundColor: "transparent"
    }
});
