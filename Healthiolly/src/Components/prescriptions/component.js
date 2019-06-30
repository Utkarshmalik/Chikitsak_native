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
        console.log("fefe");

        this.setState({
            isVisible: true
        });
    }
    render() {
        console.log(this.props);

        const {
            doctorName,
            hospitalName,
            date,
            imagePres,
            diseaseType,
            medicine,
            comments
        } = this.props;
        console.log(imagePres);

        return (
            <Container
                style={{
                    height: 460
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
                                        {doctorName}
                                    </Text>
                                    <Text style={{ color: "#514A9D" }}>
                                        {date}
                                    </Text>
                                    <Text style={{ color: "#514A9D" }}>
                                        {hospitalName}
                                    </Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image
                                source={{
                                    uri: `data:image/gif;base64,${imagePres}`
                                }}
                                style={{ height: 300, width: null, flex: 1 }}
                            />
                        </CardItem>
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
                                            See complete Details
                                        </Text>
                                    </Button>
                                </Right>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
                <Overlay
                    isVisible={this.state.isVisible}
                    windowBackgroundColor="rgba(255, 255, 255, .5)"
                    overlayBackgroundColor="#514A9D"
                    width={300}
                    height={420}
                    onBackdropPress={() => this.setState({ isVisible: false })}
                >
                    <Container>
                        <Content>
                            <List>
                                <ListItem avatar>
                                    <Body>
                                        <Text>Doctor</Text>
                                        <Text note>{doctorName}</Text>
                                    </Body>
                                </ListItem>
                                <ListItem avatar>
                                    <Body>
                                        <Text>Hospital</Text>
                                        <Text note>{hospitalName}</Text>
                                    </Body>
                                </ListItem>
                                <ListItem avatar>
                                    <Body>
                                        <Text>date</Text>
                                        <Text note>{date}</Text>
                                    </Body>
                                </ListItem>
                                <ListItem avatar>
                                    <Body>
                                        <Text>concern/disease</Text>
                                        <Text note>{diseaseType}</Text>
                                    </Body>
                                </ListItem>
                                <ListItem avatar>
                                    <Body>
                                        <Text>Medicine</Text>
                                        <Text note>{medicine[0].name}</Text>
                                        <Right>
                                            <Text note>
                                                {medicine[0].freq}times/
                                                {medicine[0].dur}days
                                            </Text>
                                        </Right>
                                    </Body>
                                </ListItem>
                                <ListItem avatar>
                                    <Body>
                                        <Text>comments</Text>
                                        <Text note>{comments}</Text>
                                    </Body>
                                </ListItem>
                            </List>
                        </Content>
                    </Container>
                </Overlay>
            </Container>
        );
    }
}
