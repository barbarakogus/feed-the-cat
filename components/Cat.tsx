import React, { useState } from "react";
import { Button, Text, Image, View, Pressable, StyleSheet } from "react-native";

interface CatProps {
    cat: Cat
    navigation: any
};

const Cat = ({ cat, navigation }: CatProps) => {

    const [isHungry, setIsHungry] = useState(true);

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Hello, I am {cat.name}, the Cat!</Text>
                <Text style={styles.description}>I am {isHungry ? 'hungry' : 'full'}</Text>
                <Pressable
                    style={styles.feedButton}
                    onPress={() => {
                        setIsHungry(!isHungry);
                    }}
                    /*disabled={!isHungry}*/>
                    <Text>{isHungry ? 'Pour me some milk, please!' : 'Thank you!'}</Text>
                </Pressable>
                <Button
                    title="Go to Cat Profile"
                    onPress={() => navigation.navigate('Profile', { name: cat.name })} />
            </View>
            <Image style={styles.image} source={{ uri: "https://cataas.com/cat?type=sq" }}></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginVertical: 10,
    },
    title: {
        fontSize: 18,
    },
    description: {
        fontSize: 16,
        margin: 5,
    },
    image: {
        height: 100,
        margin: 6,
        width: 100,
    },
    feedButton: {
        alignItems: 'center',
        backgroundColor: '#F9A487',
        borderRadius: 8,
        padding: 5,
    }
})

export default Cat; 