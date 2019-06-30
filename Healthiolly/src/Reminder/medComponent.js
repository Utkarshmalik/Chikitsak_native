import React, { Component } from "react";
import {
    Container,
    Header,
    Content,
    List,
    ListItem,
    Left,
    Body,
    Right,
    Thumbnail,
    Text
} from "native-base";
export default class ListAvatarExample extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, dur, freq } = this.props;
        return (
            <Container style={{ height: 100 }}>
                <Content>
                    <List>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail
                                    source={{
                                        uri:
                                            "http://www.clker.com/cliparts/7/6/0/4/12918673831512302000pill-icon-hi.png"
                                    }}
                                />
                            </Left>
                            <Body>
                                <Text style={{ color: "#514A9D" }}>{name}</Text>
                                <Text style={{ color: "#514A9D" }}>
                                    {freq} times in a day
                                </Text>
                            </Body>
                            <Text style={{ color: "#514A9D", marginRight: 10 }}>
                                {dur} days
                            </Text>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}
