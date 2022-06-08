import React from "react";
import { Text, View } from "react-native";

const CatProfile = ({ navigation, route}: any) => {
    return(
        <View>
            <Text>{route.params.name}</Text>
        </View>
    )
};

export default CatProfile;