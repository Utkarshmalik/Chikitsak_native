import React from "react";
import { Text, View } from "react-native";

const DetailViewComponent = ({ field, value }) => {
    return (
        <View style={styles.mainComp}>
            <Text style={styles.textStyle}> {field} </Text>
            <Text style={styles.textStyle}> {value} </Text>
        </View>
    );
};

export default DetailViewComponent;

const styles = {
    mainComp: {
        backgroundColor: "#514A9D",
        flexDirection: "row",
        padding: 10,
        marginBottom: 10,
        borderRadius: 10
    },
    textStyle: {
        alignSelf: "center",
        color: "#fff",
        fontSize: 18,
        fontWeight: "600",
        paddingTop: 15,
        paddingBottom: 15
    }
};
