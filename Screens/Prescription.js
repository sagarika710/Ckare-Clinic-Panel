import { View, Text, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from "@react-navigation/native"
import Ionicons from 'react-native-vector-icons/Ionicons'

const { height, width } = Dimensions.get("screen");

export default function CrtPrescription() {
    const navigation = useNavigation();

    return (
        <View style={styles.mainContainer}>


            <View style={styles.firstMainDiv}>
                <View style={styles.firstwhiteDiv}>
                    <View style={styles.backIconView}>
                        <TouchableOpacity style={styles.clickBackIcon} onPress={() => {
                            navigation.goBack()
                        }} >
                            <Ionicons name="chevron-back-outline" color={"gray"} size={24} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.firstMainDiv}>
                        <LinearGradient colors={['#00E0C5', '#009987',]} style={styles.letterBackground}>
                            <Text style={{ fontSize: 30, color: "#ffffff", fontWeight: "700" }}>S</Text>

                        </LinearGradient>
                        <View style={{ marginBottom: 20 }}>
                            <Text style={{ fontSize: 20, fontFamily: "Mulish" }}>Sagarika Mohanty</Text>
                        </View>
                        <View >
                            <Text style={{ fontSize: 14, color: "#009987" }}>23 Years old </Text>
                        </View>

                    </View>


                </View>

            </View>


        </View>
    )
}
const styles = StyleSheet.create({
    mainContainer:
    {
        flex: 1,
        backgroundColor: "#ffffff",


    },
    clickBackIcon:
    {
        height: 50,
        width: 50,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f8f8f8"
    },
    firstMainDiv: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    firstwhiteDiv: {
        height: Dimensions.get('window').height * 0.45,
        width: Dimensions.get('window').width,
        backgroundColor: "#EFF3FA",
        borderBottomEndRadius: 40,
        borderBottomStartRadius: 40,
        paddingVertical: 30,
        paddingHorizontal: 15,

    },
    letterBackground:
    {
        marginVertical: 20,
        borderRadius: 35,
        width: 70,
        height: 70,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 5,
        elevation: 10,
    },
    inputBoxContainer: {
        width: Dimensions.get('window').width * 0.91,
        marginHorizontal: 15,
        marginVertical: 10,
        paddingHorizontal: 10,
        paddingVertical: 1,
        borderWidth: 1,
        borderColor: "#e1e1e1",
        borderRadius: 5,
    },


})