import React from "react";
import { ScrollView, Text, View } from "react-native";

const CatProfile = ({ route }: any) => {

    const { cat } = route.params;

    return (
        <>
            <View style={{ backgroundColor: 'pink', height: 30 }}>
                <Text>header here</Text>
            </View>
            <ScrollView>
                <View>
                    <Text>{cat.name}</Text>
                    <Text>{cat.age}</Text>
                    <Text>{cat.color}</Text>
                    <Text>{cat.breed}</Text>
                </View>
                <View>
                    <Text>{cat.name}</Text>
                    <Text>{cat.age}</Text>
                    <Text>{cat.color}</Text>
                    <Text>{cat.breed}</Text>
                </View>
                <View>
                    <Text>{cat.name}</Text>
                    <Text>{cat.age}</Text>
                    <Text>{cat.color}</Text>
                    <Text>{cat.breed}</Text>
                </View>
                <View>
                    <Text>{cat.name}</Text>
                    <Text>{cat.age}</Text>
                    <Text>{cat.color}</Text>
                    <Text>{cat.breed}</Text>
                </View>
                <View>
                    <Text>{cat.name}</Text>
                    <Text>{cat.age}</Text>
                    <Text>{cat.color}</Text>
                    <Text>{cat.breed}</Text>
                </View>
                <View>
                    <Text>{cat.name}</Text>
                    <Text>{cat.age}</Text>
                    <Text>{cat.color}</Text>
                    <Text>{cat.breed}</Text>
                </View>
                <View>
                    <Text>{cat.name}</Text>
                    <Text>{cat.age}</Text>
                    <Text>{cat.color}</Text>
                    <Text>{cat.breed}</Text>
                </View>
                <View>
                    <Text>{cat.name}</Text>
                    <Text>{cat.age}</Text>
                    <Text>{cat.color}</Text>
                    <Text>{cat.breed}</Text>
                </View>
                <View>
                    <Text>{cat.name}</Text>
                    <Text>{cat.age}</Text>
                    <Text>{cat.color}</Text>
                    <Text>{cat.breed}</Text>
                </View>
                <View>
                    <Text>{cat.name}</Text>
                    <Text>{cat.age}</Text>
                    <Text>{cat.color}</Text>
                    <Text>{cat.breed}</Text>
                </View>
                <View>
                    <Text>{cat.name}</Text>
                    <Text>{cat.age}</Text>
                    <Text>{cat.color}</Text>
                    <Text>{cat.breed}</Text>
                </View>
                <View>
                    <Text>{cat.name}</Text>
                    <Text>{cat.age}</Text>
                    <Text>{cat.color}</Text>
                    <Text>{cat.breed}</Text>
                </View>
                <View>
                    <Text>{cat.name}</Text>
                    <Text>{cat.age}</Text>
                    <Text>{cat.color}</Text>
                    <Text>{cat.breed}</Text>
                </View>
                <View>
                    <Text>{cat.name}</Text>
                    <Text>{cat.age}</Text>
                    <Text>{cat.color}</Text>
                    <Text>{cat.breed}</Text>
                </View>
                <View>
                    <Text>{cat.name}</Text>
                    <Text>{cat.age}</Text>
                    <Text>{cat.color}</Text>
                    <Text>{cat.breed}</Text>
                </View>
            </ScrollView>
        </>
    )
};

export default CatProfile;