import React, { useState } from "react";
import { Text, Image, View, Pressable, StyleSheet } from "react-native";

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
                <Pressable
                    style={styles.catProfileButton}
                    onPress={() => navigation.navigate('Profile', { cat: cat } )}>
                    <Text>Go to Cat Profile</Text>
                </Pressable>
            </View>
            <Image style={styles.image} source={{ uri: "https://cataas.com/cat?type=sq" }}></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    title: {
        fontSize: 18,
    },
    description: {
        fontSize: 16,
        margin: 5,
    },
    feedButton: {
        alignItems: 'center',
        backgroundColor: '#F9A487',
        borderRadius: 8,
        padding: 5,
    },
    catProfileButton: {
        alignItems: 'center',
        backgroundColor: '#C8E8F5',
        borderRadius: 8,
        marginTop: 4,
        padding: 5,
    },
    image: {
        height: 100,
        margin: 6,
        width: 100,
    },
})

export default Cat; 