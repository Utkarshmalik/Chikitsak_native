import React, { Component } from "react";
import {
    Container,
    Header,
    Content,
    Card,
    CardItem,
    Text,
    Body
} from "native-base";
import { StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { human } from "react-native-typography";

export default class CardItemButton extends Component {
    render() {
        return (
            <Container style={{ backgroundColor: "white", marginTop: 10 }}>
                <Content
                    style={{
                        marginTop: 0
                    }}
                    padder
                >
                    <LinearGradient
                        colors={["#00d2ff", "#928dab"]}
                        style={styles.linearGradient}
                    >
                        <Card
                            style={{
                                backgroundColor: "transparent",
                                borderColor: "transparent"
                                //marginTop: -20

                                //height: 200
                            }}
                        >
                            <CardItem
                                style={{ backgroundColor: "transparent" }}
                                header
                                button
                                onPress={() =>
                                    this.props.navigation.navigate("Logs")
                                }
                            />
                            <CardItem
                                style={{ backgroundColor: "transparent" }}
                                button
                                onPress={() =>
                                    this.props.navigation.navigate("Logs")
                                }
                            >
                                <Body
                                    style={{
                                        textAlign: "center",
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}
                                >
                                    <Text style={human.largeTitleWhite}>
                                        Add Food
                                    </Text>
                                </Body>
                            </CardItem>
                            <CardItem
                                style={{ backgroundColor: "transparent" }}
                                footer
                                button
                                onPress={() =>
                                    this.props.navigation.navigate("Logs")
                                }
                            />
                        </Card>
                    </LinearGradient>
                </Content>
                <Content style={{ marginTop: -80 }} padder>
                    <LinearGradient
                        colors={["#eecda3", "#ef629f"]}
                        style={styles.linearGradient}
                    >
                        <Card
                            style={{
                                backgroundColor: "transparent",
                                borderColor: "transparent"
                            }}
                        >
                            <CardItem
                                style={{ backgroundColor: "transparent" }}
                                header
                                button
                                onPress={() =>
                                    this.props.navigation.navigate(
                                        "CurrentMedicnes"
                                    )
                                }
                            />
                            <CardItem
                                style={{ backgroundColor: "transparent" }}
                                button
                                onPress={() =>
                                    this.props.navigation.navigate(
                                        "CurrentMedicnes"
                                    )
                                }
                            >
                                <Body
                                    style={{
                                        textAlign: "center",
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}
                                >
                                    <Text style={human.largeTitleWhite}>
                                        Running Medicines
                                    </Text>
                                </Body>
                            </CardItem>
                            <CardItem
                                style={{ backgroundColor: "transparent" }}
                                footer
                                button
                                onPress={() =>
                                    this.props.navigation.navigate(
                                        "CurrentMedicnes"
                                    )
                                }
                            />
                        </Card>
                    </LinearGradient>
                </Content>
                <Content style={{ marginTop: -80 }} padder>
                    <LinearGradient
                        colors={["#ff5f6d", "#ffc371"]}
                        style={styles.linearGradient}
                    >
                        <Card
                            style={{
                                backgroundColor: "transparent",
                                borderColor: "transparent"
                            }}
                        >
                            <CardItem
                                style={{ backgroundColor: "transparent" }}
                                header
                                button
                                onPress={() =>
                                    this.props.navigation.navigate(
                                        "Prescriptions"
                                    )
                                }
                            />
                            <CardItem
                                style={{ backgroundColor: "transparent" }}
                                button
                                onPress={() =>
                                    this.props.navigation.navigate(
                                        "Prescriptions"
                                    )
                                }
                            >
                                <Body
                                    style={{
                                        textAlign: "center",
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}
                                >
                                    <Text style={human.largeTitleWhite}>
                                        Prescriptions
                                    </Text>
                                </Body>
                            </CardItem>
                            <CardItem
                                style={{ backgroundColor: "transparent" }}
                                footer
                                button
                                onPress={() =>
                                    this.props.navigation.navigate(
                                        "Prescriptions"
                                    )
                                }
                            />
                        </Card>
                    </LinearGradient>
                </Content>
                <Content style={{ marginTop: -80 }} padder>
                    <LinearGradient
                        colors={["#c2e59c", "#64b3f4"]}
                        style={styles.linearGradient}
                    >
                        <Card
                            style={{
                                backgroundColor: "transparent",
                                borderColor: "transparent"
                            }}
                        >
                            <CardItem
                                style={{ backgroundColor: "transparent" }}
                                header
                                button
                                onPress={() =>
                                    this.props.navigation.navigate("Reports")
                                }
                            />
                            <CardItem
                                style={{ backgroundColor: "transparent" }}
                                button
                                onPress={() =>
                                    this.props.navigation.navigate("Reports")
                                }
                            >
                                <Body
                                    style={{
                                        textAlign: "center",
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}
                                >
                                    <Text style={human.largeTitleWhite}>
                                        Reports
                                    </Text>
                                </Body>
                            </CardItem>
                            <CardItem
                                style={{ backgroundColor: "transparent" }}
                                footer
                                button
                                onPress={() =>
                                    this.props.navigation.navigate("Reports")
                                }
                            />
                        </Card>
                    </LinearGradient>
                </Content>
            </Container>
        );
    }
}

var styles = StyleSheet.create({
    linearGradient: {
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 20
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
