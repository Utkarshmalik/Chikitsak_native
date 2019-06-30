import ImagePicker from "react-native-image-picker";
import React, { Component } from "React";
import { Image, View, Text, TouchableOpacity } from "react-native";
import { Spinner } from "native-base";
import Header from "../reusables/header";

const createFormData = photo => {
    const data = new FormData();

    data.append("image", {
        name: photo.fileName,
        uri: photo.uri,
        type: photo.type
    });
    //console.log(data);
    return data;
};

export default class ImageComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photo: null
            //isLoading:true
        };
    }

    componentWillMount() {
        console.log(this.props.navigation.state.params.mealType);
        this.setState({
            photo: this.props.navigation.state.params.photo,
            isLoading: false
        });
    }

    renderSpinnerOrUpload() {
        if (this.state.isLoading) {
            return (
                <View style={{ marginTop: 20 }}>
                    <Spinner />
                    <Text style={[styles.textStyle, { marginTop: 20 }]}>
                        Upload in Progress
                    </Text>
                </View>
            );
        } else {
            return (
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={this.handleUploadPhoto.bind(this)}
                >
                    <Text style={[styles.textStyle]}>Upload Photo</Text>
                </TouchableOpacity>
            );
        }
    }

    handleUploadPhoto = () => {
        this.setState({
            isLoading: true
        });

        fetch("https://visionapu.herokuapp.com/imgupload", {
            method: "POST",
            headers: {
                "Content-Type": "multipart/form-data",
                Accept: "*/*"
            },
            body: createFormData(this.state.photo)
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                this.setState({
                    isLoading: false
                });
                console.log(response);
                //alert("Upload success!");
                this.props.navigation.navigate("confirmFood", {
                    foodItems: response.responses[0].labelAnnotations,
                    imagePath: this.state.photo.uri,
                    mealType: this.props.navigation.state.params.mealType
                });

                this.setState({ photo: null });
            })
            .catch(error => {
                console.log("upload error", error);
                alert("Upload failed!");
                this.setState({
                    isLoading: false
                });
            });
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header style={{ flex: 5 }} title="Tasty Food" />
                <View style={{ flex: 10, marginTop: 180 }}>
                    <View style={styles.imageBox}>
                        <Image
                            source={this.state.photo}
                            style={{
                                borderWidth: 3,
                                borderColor: "#514A9D",
                                height: 350,
                                width: 350
                            }}
                        />
                    </View>
                    <View style={styles.firstButtonBox}>
                        {this.renderSpinnerOrUpload()}
                    </View>
                </View>
            </View>
        );
    }
}

const styles = {
    textStyle: {
        alignSelf: "center",
        color: "#514A9D",
        fontSize: 16,
        fontWeight: "600",
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        alignSelf: "stretch",
        backgroundColor: "#fff",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#514A9D",
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 10,
        marginTop: 10,
        padding: 10
    },
    imageBox: {
        //flex:2,
        flexDirection: "row",
        justifyContent: "center"
        //marginTop: -500
    },
    firstButtonBox: {
        //flex:1,
        flexDirection: "row",
        justifyContent: "center"
    },
    secondButtonBox: {
        flexDirection: "row",
        justifyContent: "center"
    }
};
