import React, { Component } from "react";
import { View } from "react-native";
import Header from "../reusables/header1";
import {
    Container,
    Content,
    List,
    ListItem,
    Left,
    Body,
    Right,
    Thumbnail,
    Text
} from "native-base";
import TileComponent from "./component";

export default class ListAvatarExample extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header
                    navigation={this.props.navigation}
                    style={{ flex: 1 }}
                    title="Welcome!"
                />
                <View style={{ flex: 4 }}>
                    <TileComponent navigation={this.props.navigation} />
                </View>
            </View>
        );
    }
}
