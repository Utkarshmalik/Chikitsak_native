import React, { Component } from "react";
import { View, Text, ImageBackground, Image, AsyncStorage } from "react-native";
import {
    Container,
    Content,
    Form,
    Item,
    Input,
    Label,
    Button,
    Thumbnail,
    Icon
} from "native-base";
let { StyleSheet } = React;
import Header from "../../reusables/header";
import { Overlay, overlayBackgroundColor } from "react-native-elements";
import LinearGradient from "react-native-linear-gradient";
import ImagePicker from "react-native-image-picker";
import ImgToBase64 from "react-native-image-base64";

/*

{
 	"date":"09/09/2017",
 	"doctorName":"Aman singh",
 	"doctorId":"qwert124",
 	"diseaseType":"cancer",
 	"hospitalName":"Oyo hospitals",
 	"medicine":"[{ name:iodex,freq:3,dur:30} ]",
 	"comments":"third stage cancer",
*/

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "",
            doctorName: "",
            diseaseType: "",
            hospitalName: "",
            comments: "",
            image: undefined,
            medicine: [],
            isVisible: false,
            medicineName: "",
            duration: "",
            frequency: ""
        };
    }

    onChangeDate(value) {
        this.setState({
            date: value
        });
    }
    onChangeDoctorName(value) {
        this.setState({
            doctorName: value
        });
    }
    onChangeHospitalName(value) {
        this.setState({
            hospitalName: value
        });
    }
    onChangeDiseaseType(value) {
        this.setState({
            diseaseType: value
        });
    }
    onChangeComments(value) {
        this.setState({
            comments: value
        });
    }

    onChangeMedicineName(value) {
        this.setState({
            medicineName: value
        });
    }

    onChangeFrequency(value) {
        this.setState({
            frequency: value
        });
    }

    onChangeDuration(value) {
        this.setState({
            duration: value
        });
    }

    onAddMedicine() {
        /*
       	"medicine":[{ "name":"prcoefine","freq":"2","dur":"11"},{ "name":"botrine","freq":"5","dur":"21"}],


      */

        const obj = {
            name: this.state.medicineName,
            freq: this.state.frequency,
            dur: this.state.duration
        };

        console.log(this.state.medicine);

        this.state.medicine.push(obj);

        console.log(this.state.medicine);
    }

    onSubmitMedicine() {
        this.setState({
            isVisible: true,
            currentUser: null
        });
    }

    onAddPrescription() {
        console.log("geef");
        const options = {
            noData: true
        };
        ImagePicker.showImagePicker(options, response => {
            if (response.uri) {
                /* Actions.uploadscreen({
                photo: response,
                mealType: this.props.mealType
            });
            */
                console.log(response.uri);

                ImgToBase64.getBase64String(response.uri)
                    .then(res => this.setState({ image: res }))
                    .catch(err => doSomethingWith(err));
            }
        });
    }

    componentWillMount() {
        AsyncStorage.getItem("user")
            .then(res => this.setState({ currentUser: res }))
            .catch(err => console.log(err));
    }

    onFinalSubmit() {
        const obj = {
            date: this.state.date,
            doctorName: this.state.doctorName,
            doctorId: "qwert124",
            diseaseType: this.state.diseaseType,
            hospitalName: this.state.hospitalName,
            medicine: this.state.medicine,
            comments: this.state.comments,
            imagePres: this.state.image
        };

        fetch(
            `https://async-healthify.herokuapp.com/prescriptions/${
                this.state.currentUser
            }`,
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(obj)
            }
        )
            .then(res => {
                console.log(res);
                this.props.navigation.navigate("profile");
            })
            .catch(err => console.log(err));

        console.log(obj);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header title="Add Prescription" />
                <View style={{ flex: 3 }}>
                    <Container
                        style={{
                            flex: 1,
                            justifyContent: "center"
                            // marginTop: 100
                        }}
                    >
                        <Form
                            style={{
                                //flex: 1,
                                //justifyContent: "center",
                                alignItems: "center"
                                //marginTop: -90
                            }}
                        >
                            <Item floatingLabel>
                                <Label style={{ color: "#1b436d" }}>
                                    Doctor Name
                                </Label>
                                <Input
                                    style={{ color: "#014287" }}
                                    onChangeText={this.onChangeDoctorName.bind(
                                        this
                                    )}
                                    value={this.state.doctorName}
                                />
                            </Item>
                            <Item floatingLabel last>
                                <Label style={{ color: "#1b436d" }}>
                                    Hospital Name
                                </Label>
                                <Input
                                    style={{ color: "#014287" }}
                                    onChangeText={this.onChangeHospitalName.bind(
                                        this
                                    )}
                                    value={this.state.hospitalName}
                                />
                            </Item>
                            <Item floatingLabel last>
                                <Label style={{ color: "#1b436d" }}>Date</Label>
                                <Input
                                    style={{ color: "#014287" }}
                                    onChangeText={this.onChangeDate.bind(this)}
                                    value={this.state.date}
                                />
                            </Item>
                            <Item floatingLabel last>
                                <Label style={{ color: "#1b436d" }}>
                                    Concern
                                </Label>
                                <Input
                                    style={{ color: "#014287" }}
                                    onChangeText={this.onChangeDiseaseType.bind(
                                        this
                                    )}
                                    value={this.state.diseaseType}
                                />
                            </Item>
                            <Item floatingLabel last>
                                <Label style={{ color: "#1b436d" }}>
                                    Comments
                                </Label>
                                <Input
                                    style={{ color: "#014287" }}
                                    onChangeText={this.onChangeComments.bind(
                                        this
                                    )}
                                    value={this.state.comments}
                                />
                            </Item>
                        </Form>

                        <Button
                            onPress={this.onAddPrescription.bind(this)}
                            //onPress={this.onViewDetails.bind(this)}
                            transparent
                            style={{
                                marginLeft: 100
                            }}
                        >
                            <Icon
                                style={{ color: "#514A9D" }}
                                active
                                name="bookmarks"
                            />

                            <Text
                                style={{
                                    color: "#514A9D"
                                    //marginLeft: -20
                                }}
                            >
                                Add Prescription
                            </Text>
                        </Button>
                        <Button
                            style={{
                                marginLeft: 100
                            }}
                            onPress={this.onSubmitMedicine.bind(this)}
                            // onPress={this.onAddPrescription.bind(this)}
                            transparent
                        >
                            <Icon
                                style={{ color: "#514A9D" }}
                                active
                                name="flask"
                            />

                            <Text
                                style={{
                                    color: "#514A9D"
                                    //marginLeft: -20
                                }}
                            >
                                Add Medicines
                            </Text>
                        </Button>
                    </Container>
                </View>

                <Overlay
                    isVisible={this.state.isVisible}
                    windowBackgroundColor="rgba(255, 255, 255, .5)"
                    overlayBackgroundColor="#514A9D"
                    width={300}
                    height={300}
                    onBackdropPress={() => this.setState({ isVisible: false })}
                >
                    <Container
                        style={{
                            flex: 1,
                            justifyContent: "center"
                        }}
                    >
                        <Content style={{ marginTop: 50 }}>
                            <Item>
                                <Icon
                                    style={{ color: "#24C6DC" }}
                                    active
                                    name="flask"
                                />
                                <Input
                                    onChangeText={this.onChangeMedicineName.bind(
                                        this
                                    )}
                                    placeholder="Medicine Name"
                                />
                            </Item>
                            <Item>
                                <Icon
                                    style={{ color: "#24C6DC" }}
                                    active
                                    name="star-half"
                                />

                                <Input
                                    onChangeText={this.onChangeFrequency.bind(
                                        this
                                    )}
                                    placeholder="frequency(times)"
                                />
                            </Item>
                            <Item>
                                <Icon
                                    style={{ color: "#24C6DC" }}
                                    active
                                    name="pint"
                                />

                                <Input
                                    onChangeText={this.onChangeDuration.bind(
                                        this
                                    )}
                                    placeholder="Duration(days)"
                                />
                            </Item>
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: "row",
                                    justifyContent: "center"
                                }}
                            >
                                <Button
                                    onPress={this.onAddMedicine.bind(this)}
                                    style={{
                                        backgroundColor: "#24C6DC",
                                        paddingLeft: 20,
                                        paddingRight: 20,
                                        marginTop: 30
                                    }}
                                >
                                    <Text style={{ color: "white" }}> Add</Text>
                                </Button>
                            </View>
                        </Content>
                    </Container>
                </Overlay>
                <View
                    style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "center"
                    }}
                >
                    <Button
                        onPress={this.onFinalSubmit.bind(this)}
                        style={{
                            backgroundColor: "#24C6DC",
                            paddingLeft: 20,
                            paddingRight: 20,
                            marginTop: 30
                        }}
                    >
                        <Text style={{ color: "white" }}> Submit</Text>
                    </Button>
                </View>
            </View>
        );
    }
}
