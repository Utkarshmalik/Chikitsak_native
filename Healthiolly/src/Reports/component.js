import React, { Component } from "react";
import { Image } from "react-native";
import {
    Container,
    Header,
    Content,
    Card,
    CardItem,
    Thumbnail,
    Text,
    Button,
    Icon,
    Left,
    Body,
    Right,
    List,
    ListItem
} from "native-base";
import { Overlay, overlayBackgroundColor } from "react-native-elements";
import { material } from "react-native-typography";

import { encode, decode } from "base64-arraybuffer";
export default class CardImageExample extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isVisible: false
        };
    }

    onViewDetails() {
        console.log(this.props.testType);
        this.props.navigation.navigate("pdf", {
            title: this.props.testType
        });
        this.setState({
            isVisible: true
        });
    }
    render() {
        console.log(this.props);

        const { id, date, pdf, testType } = this.props;

        return (
            <Container
                style={{
                    height: 160
                }}
            >
                <Content
                    style={{
                        marginBottom: 5
                    }}
                >
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail
                                    source={{
                                        uri:
                                            "https://cdn4.iconfinder.com/data/icons/professions-1-2/151/3-512.png"
                                    }}
                                />
                                <Body>
                                    <Text style={{ color: "#514A9D" }}>
                                        {testType}
                                    </Text>
                                    <Text style={{ color: "#514A9D" }}>
                                        {date}
                                    </Text>
                                    <Text style={{ color: "#514A9D" }}>
                                        {id}
                                    </Text>
                                </Body>
                            </Left>
                        </CardItem>
                        {/*
                        <CardItem cardBody>
                            <Image
                                source={{
                                    uri: `data:image/gif;base64,${imagePres}`
                                }}
                                style={{ height: 300, width: null, flex: 1 }}
                            />
                        </CardItem>
                              */}
                        <CardItem>
                            <Body>
                                <Right>
                                    <Button
                                        onPress={this.onViewDetails.bind(this)}
                                        transparent
                                    >
                                        <Icon
                                            style={{ color: "#514A9D" }}
                                            active
                                            name="bookmarks"
                                        />

                                        <Text
                                            style={{
                                                color: "#514A9D",
                                                marginLeft: -20
                                            }}
                                        >
                                            See pdf view
                                        </Text>
                                    </Button>
                                </Right>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}
