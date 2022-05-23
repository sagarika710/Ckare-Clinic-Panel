import { View, Text, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from "@react-navigation/native"
import Ionicons from 'react-native-vector-icons/Ionicons'
import EditorScreen from '../Component/Editorscreen'

const { height, width } = Dimensions.get("screen");

export default function Crtprescription() {
    const navigation = useNavigation();

    return (
        <View style={styles.mainContainer}>
            <ScrollView>

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
                            <View style={{ marginBottom: 10 }}>
                                <Text style={{ fontSize: 20, fontFamily: "Mulish" }}>Sagarika Mohanty</Text>
                            </View>
                            <View >
                                <Text style={{ fontSize: 14, color: "#009987" }}>23 Years old </Text>
                            </View>

                        </View>


                    </View>

                </View>
                <View style={{ justifyContent: "center", alignItems: "center", marginVertical: 20 }}>
                    <View style={{
                        width: "90%", height: 120, borderWidth: 1,
                        borderColor: "#E1E1E1", justifyContent: "center", alignItems: "center", borderRadius: 10,
                    }}>
                        <View style={{ marginBottom: 20 }}>
                            <Text style={{ fontSize: 14, fontFamily: "Mulish" }}>Please upload images of prescription</Text>
                        </View>
                        <View style={{ borderWidth: 1, width: "85%", justifyContent: "center", alignItems: "center", paddingHorizontal: 5, paddingVertical: 5, borderRadius: 7, borderColor: "#00E0C5", flexDirection: "row" }}>
                            <FontAwesome5Icons name="file-medical" size={15} color={"#00E0C5"} style=
                                {{ marginRight: 7 }}
                            />
                            <Text style={{ color: "#00E0C5", fontSize: 16, textTransform: "capitalize" }}>upload prescription</Text>
                        </View>

                    </View>
                </View>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Text>OR</Text>
                </View>
                <EditorScreen />
                <View style={{ alignItems: "center" }}>
                    <LinearGradient colors={['#00E0C5', '#009987',]} style={styles.previewbtndiv}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("Home", {

                                })
                            }}
                            style={styles.previewbtn}>
                            <Text style={{ color: "#ffff", fontSize: 18 }}>Preview Prescription</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>


            </ScrollView>
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
        height: 40,
        width: 40,
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
        height: Dimensions.get('window').height * 0.40,
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
    previewbtndiv: {
        width: 340,
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

})