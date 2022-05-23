import { View, Text, Image, ImageBackground, StyleSheet, Dimensions, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from "@react-navigation/native"
import Ionicons from 'react-native-vector-icons/Ionicons'
import bgImage from '../assets/1.jpeg';
const { height, width } = Dimensions.get("screen");

export default function Memberahipfreetrail() {
    const navigation = useNavigation();

    return (

        <ImageBackground source={bgImage} style={styles.container}>
            <View style={styles.mainDiv}>
                <Text style={styles.premiumtxt}>Go Premium</Text>
            </View>
            <View style={styles.textDiv}>
                <View style={styles.text}>
                    <Text style={styles.txt}>Get a verified badge</Text>
                    <Text style={styles.txt}>Come to the top suggestions list </Text>
                    <Text style={[styles.txt, { marginHorizontal: 2, letterSpacing: 0.3, lineHeight: 23 }]}>know about your competitor present near by you and about their services
                    </Text>
                </View>
            </View>
            <View style={{ alignItems: "center" }}>
                <LinearGradient colors={['#00E0C5', '#009987',]} style={styles.previewbtndiv}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Prescription", {

                            })
                        }}
                        style={styles.previewbtn}>
                        <Text style={{ color: "#ffff", fontSize: 18 }}>Take a free Trail</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
    },
    mainDiv: {
        height: Dimensions.get('window').height * 0.15,
        justifyContent: 'flex-end',
        marginBottom: 10
    },
    premiumtxt: {
        color: '#fff',
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textDiv: {
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('window').height * 0.6,
    },
    text: {
        width: 320,
        height: 330,
        borderRadius: 20,
        backgroundColor: '#fafafa54',
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    txt: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#fff',
        marginVertical: 20,
    },
    previewbtndiv: {
        width: 320,
        padding: 5,
        marginVertical: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.39,
        shadowRadius: 1.41,
        elevation: 2,


    },
    previewbtn:
    {
        height: 42,
        justifyContent: "center",
        alignItems: "center"
    }


});


