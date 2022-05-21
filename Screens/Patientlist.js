import { View, Text, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from "@react-navigation/native"
import Ionicons from 'react-native-vector-icons/Ionicons'

const { height, width } = Dimensions.get("screen");

export default function Patientlist() {
    const navigation = useNavigation();

    return (
        <View style={styles.mainContainer}>
            <View style={styles.mainclickbackicondiv}>
                <TouchableOpacity style={styles.clickBackIcon} onPress={() => {
                    navigation.goBack()
                }} >
                    <Ionicons name="chevron-back-outline" color={"gray"} size={20} />
                </TouchableOpacity>
                <Text style={styles.patientdetailstex}>Patient Details</Text>
            </View>
            <ScrollView>
                {/* location start*/}
                <View style={styles.locationmaindiv}>
                    <FontAwesome5Icons name="map-pin" size={15} color="#009987" />
                    <Text style={styles.locationaddresstext}>Patia, Bhubaneswar</Text>
                    <View style={styles.iconview}>
                        <Ionicons name="chevron-down-outline" color={"#009987"} size={15} />
                    </View>

                </View>
                {/*location end */}
                <TouchableOpacity style={styles.addressDiv}
                    onPress={() => {
                        navigation.navigate("Checkprescription", {

                        })
                    }}
                >
                    <View >
                        <LinearGradient colors={['#00E0C5', '#009987',]} style={styles.letterBackground}>
                            <Text style={{ fontSize: 28, color: "#ffffff", fontWeight: "700" }}>S</Text>
                        </LinearGradient>
                    </View>
                    <View>
                        <Text style={{ fontSize: 18, fontFamily: "Mulish", marginBottom: 2 }}>Sagarika Mohanty</Text>
                        <Text style={{ fontSize: 12, marginBottom: 3 }}>Slot Booked : 22.03.2022</Text>
                        <Text style={{ fontSize: 12, marginBottom: 3 }}>Slot Time : 10.00am</Text>
                    </View>
                    <View style={styles.phoneicondiv}>
                        <Ionicons name="call-outline" size={15} color={"#7ACEFA"} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.addressDiv}
                    onPress={() => {
                        navigation.navigate("Checkprescription", {

                        })
                    }}
                >
                    <View >
                        <LinearGradient colors={['#00E0C5', '#009987',]} style={styles.letterBackground}>
                            <Text style={{ fontSize: 28, color: "#ffffff", fontWeight: "700" }}>S</Text>
                        </LinearGradient>
                    </View>
                    <View>
                        <Text style={{ fontSize: 18, fontFamily: "Mulish", marginBottom: 2 }}>Sagarika Mohanty</Text>
                        <Text style={{ fontSize: 12, marginBottom: 3 }}>Slot Booked : 22.03.2022</Text>
                        <Text style={{ fontSize: 12, marginBottom: 3 }}>Slot Time : 10.00am</Text>
                    </View>
                    <View style={styles.phoneicondiv}>
                        <Ionicons name="call-outline" size={15} color={"#7ACEFA"} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.addressDiv}
                    onPress={() => {
                        navigation.navigate("Checkprescription", {

                        })
                    }}
                >
                    <View >
                        <LinearGradient colors={['#00E0C5', '#009987',]} style={styles.letterBackground}>
                            <Text style={{ fontSize: 28, color: "#ffffff", fontWeight: "700" }}>S</Text>
                        </LinearGradient>
                    </View>
                    <View>
                        <Text style={{ fontSize: 18, fontFamily: "Mulish", marginBottom: 2 }}>Sagarika Mohanty</Text>
                        <Text style={{ fontSize: 12, marginBottom: 3 }}>Slot Booked : 22.03.2022</Text>
                        <Text style={{ fontSize: 12, marginBottom: 3 }}>Slot Time : 10.00am</Text>
                    </View>
                    <View style={styles.phoneicondiv}>
                        <Ionicons name="call-outline" size={15} color={"#7ACEFA"} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.addressDiv}
                    onPress={() => {
                        navigation.navigate("Checkprescription", {

                        })
                    }}
                >
                    <View >
                        <LinearGradient colors={['#00E0C5', '#009987',]} style={styles.letterBackground}>
                            <Text style={{ fontSize: 28, color: "#ffffff", fontWeight: "700" }}>S</Text>
                        </LinearGradient>
                    </View>
                    <View>
                        <Text style={{ fontSize: 18, fontFamily: "Mulish", marginBottom: 2 }}>Sagarika Mohanty</Text>
                        <Text style={{ fontSize: 12, marginBottom: 3 }}>Slot Booked : 22.03.2022</Text>
                        <Text style={{ fontSize: 12, marginBottom: 3 }}>Slot Time : 10.00am</Text>
                    </View>
                    <View style={styles.phoneicondiv}>
                        <Ionicons name="call-outline" size={15} color={"#7ACEFA"} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.addressDiv}
                    onPress={() => {
                        navigation.navigate("Checkprescription", {

                        })
                    }}
                >
                    <View >
                        <LinearGradient colors={['#00E0C5', '#009987',]} style={styles.letterBackground}>
                            <Text style={{ fontSize: 28, color: "#ffffff", fontWeight: "700" }}>S</Text>
                        </LinearGradient>
                    </View>
                    <View>
                        <Text style={{ fontSize: 18, fontFamily: "Mulish", marginBottom: 2 }}>Sagarika Mohanty</Text>
                        <Text style={{ fontSize: 12, marginBottom: 3 }}>Slot Booked : 22.03.2022</Text>
                        <Text style={{ fontSize: 12, marginBottom: 3 }}>Slot Time : 10.00am</Text>
                    </View>
                    <View style={styles.phoneicondiv}>
                        <Ionicons name="call-outline" size={15} color={"#7ACEFA"} />
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View >

    )
}
const styles = StyleSheet.create({
    mainContainer:
    {
        flex: 1,
        backgroundColor: "#ffffff",


    },
    mainclickbackicondiv:
    {
        marginVertical: 25, flexDirection: "row", alignItems: "center", marginHorizontal: 20
    },
    clickBackIcon:
    {
        height: 40, width: 40, borderRadius: 50, alignItems: "center", justifyContent: "center", backgroundColor: "#EFF3FA",
    },
    patientdetailstex:
    {
        fontWeight: "bold", fontFamily: "Mulish", marginLeft: 12, fontSize: 18, letterSpacing: 0.3
    },
    locationmaindiv:
        { flexDirection: "row", justifyContent: "flex-start", alignItems: "center", marginHorizontal: 25 },
    locationaddresstext:
    {

        color: "#009987",
        marginLeft: 10,
        fontSize: 14,
        fontFamily: "Mulish",
        letterSpacing: 0.5

    },
    iconview:
    {
        alignItems: "center", justifyContent: "center", marginLeft: 10
    },
    letterBackground:
    {
        marginVertical: 20,
        borderRadius: 35,
        width: 50,
        height: 50,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 10,
        shadowRadius: 5,
        elevation: 10,
    },
    addressDiv:
    {
        // backgroundColor: "red",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        marginVertical: 10,
        //borderWidth: 0.1,
        borderRadius: 10,
        marginHorizontal: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 10,
        shadowRadius: 5,
        elevation: 2
    },
    phoneicondiv:
        { backgroundColor: "#7ACEFA26", width: 30, height: 30, alignItems: "center", justifyContent: "center", borderRadius: 20 }
})