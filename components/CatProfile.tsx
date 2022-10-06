import React from "react";
import { Text, View } from "react-native";

const CatProfile = ({ route }: any) => {

    const { cat } = route.params;

    return (
        <>
            <View style={{ backgroundColor: 'pink', height: 30 }}>
                <Text>header here</Text>
            </View>
            <View>
                <Text>{cat.name}</Text>
                <Text>{cat.age}</Text>
                <Text>{cat.color}</Text>
                <Text>{cat.breed}</Text>
            </View>
        </>
    )
};

export default CatProfile;