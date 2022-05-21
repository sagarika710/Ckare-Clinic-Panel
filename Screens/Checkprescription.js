import { View, Text, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity, TextInput, Modal } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from "@react-navigation/native"
import Ionicons from 'react-native-vector-icons/Ionicons'

const { height, width } = Dimensions.get("screen");

export default function Checkprescription() {
    const [modalVisible, setModalVisible] = React.useState(false);
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
                        {/* ribbon start */}
                        <View style={styles.CardContainer}>
                            <View>
                                <Text style={{ fontSize: 16 }}>Prescriptions</Text>
                            </View>
                            <View style={styles.detailsCardContainer}>
                                <Ionicons name="document-outline" color="#7ACEFA" size={30} />
                            </View>
                        </View>
                        {/* {ribbon end} */}

                    </View>

                </View>
                <View>
                    <View style={{ marginHorizontal: 15, marginVertical: 10 }}>
                        <Text style={{ fontSize: 18 }}>Patient Health Problem</Text>
                    </View>
                    <View style={{ marginHorizontal: 15, marginVertical: 2 }}>
                        <Text style={{ fontSize: 14, letterSpacing: 0.23, lineHeight: 20 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur ante turpis, a sodales dolor rutrum ut. Mauris sed lectus a nunc dictum cursus. Praesent aliquam leo sit amet elit.
                        </Text>
                    </View>
                    <View style={{ marginHorizontal: 15, marginVertical: 5 }} >
                        <Text style={{ fontSize: 18, letterSpacing: 0.4 }}>Timing</Text>
                    </View>
                    <View style={{ marginHorizontal: 15 }}>
                        <Text style={{ fontSize: 14, letterSpacing: 0.23, lineHeight: 20 }}>22 March , Tuesday at (08:30 AM - 09:00 PM)                        </Text>
                    </View>
                    <View style={{ marginVertical: 15, padding: 12, }}>
                        <TouchableOpacity style={{ flexDirection: "row" }}>
                            <View style={styles.servicesIconContainer}>
                                <Ionicons name="call" color="#7ACEFA" size={30} />
                            </View>
                            <View style={{ justifyContent: "center", marginHorizontal: 7 }}>
                                <Text style={{ fontSize: 16, fontFamily: "Mulish" }}>Call a doctor at home</Text>
                                <Text style={{ fontSize: 12 }}>Get diagnosed in the comfort of your Home</Text>
                            </View>

                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ alignItems: "center" }}>
                    <LinearGradient colors={['#00E0C5', '#009987',]} style={styles.previewbtndiv}>
                        <TouchableOpacity
                            onPress={() => setModalVisible(true)} style={styles.previewbtn}>
                            <Text style={{ color: "#ffff", fontSize: 18 }}>Out For Checkup</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
                {/* modal */}


                <View>
                    <Modal transparent={true}
                        visible={modalVisible}
                        onPress={() => { setModalVisible(!modalVisible) }}>
                        <View style={[styles.centeredView, { backgroundColor: '#000000aa', height: Dimensions.get('window').height }]}>
                            <View style={styles.modalView}>

                                <View style={{ alignItems: "center" }} >
                                    <Text style={styles.timeTxt}>Time</Text>
                                </View>

                                <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                    <View style={{ marginVertical: 2, width: "50%" }}>
                                        <Text style={{ marginLeft: 5 }}>Start Time</Text>
                                        <View style={styles.inputBoxContainer1}>
                                            {/* look here first one is icon then input box and then again icon */}
                                            <TextInput style={{ fontFamily: "Mulish" }}></TextInput>

                                        </View>

                                    </View>
                                    <View style={{ marginVertical: 2, width: "50%" }}>
                                        <Text style={{ marginLeft: 5 }}>End Time</Text>
                                        <View style={styles.inputBoxContainer1}>
                                            {/* look here first one is icon then input box and then again icon */}
                                            <TextInput style={{ fontFamily: "Mulish" }}></TextInput>
                                        </View>

                                    </View>

                                </View>
                                <View style={{ marginLeft: 7 }}>
                                    <Text style={{ color: "#009987" }}>Add More Timing</Text>
                                </View>
                                <View style={{ alignItems: "center" }}>
                                    <LinearGradient colors={['#00E0C5', '#009987',]} style={{ paddingHorizontal: 10, paddingVertical: 10, marginVertical: 20, borderRadius: 20 }}>
                                        <TouchableOpacity
                                            onPress={() => {
                                                navigation.navigate("Home", {

                                                })
                                            }}
                                            style={styles.btn}>
                                            <Text style={{ color: "#ffff", fontSize: 18 }}>Take a free Trail</Text>
                                        </TouchableOpacity>
                                    </LinearGradient>
                                </View>

                            </View>
                        </View>
                    </Modal>
                </View>
                {/* modal end */}


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
        height: Dimensions.get('window').height * 0.60,
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
    },
    iconsRighesidediv:
    {
        flexDirection: "row", alignItems: "flex-end", justifyContent: "flex-end", margin: 5
    },
    servicesIconContainer:
    {
        width: 60,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        marginRight: 10,
        backgroundColor: "#7ACEFA26",
        borderColor: "#7ACEFA"
    },
    activeService: {
        borderColor: "#00E0C5", borderRadius: 5, borderWidth: 1,
    },
    iconsRigheside:
        { width: 25, height: 25, borderColor: "#000000", backgroundColor: "red", alignItems: "center", justifyContent: "center", margin: 5, borderRadius: 1, backgroundColor: "white", borderWidth: 0.1 }
    ,
    CardContainer: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#ffffff",
        borderRadius: 20,
        marginVertical: 20,
        alignItems: "center",
        justifyContent: "space-between",
        padding: 30

    },
    detailsCardContainer: {
        backgroundColor: "#7ACEFA26",
        height: 70,
        width: 49,
        justifyContent: "center",
        alignItems: "center",
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        paddingVertical: 2
    },
    //modal
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        width: Dimensions.get('window').width * 0.8,
        height: Dimensions.get('window').height * 0.45,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 10,
        //alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    inputBoxContainer1: {
        marginHorizontal: 5,
        marginVertical: 10,
        borderWidth: 0.5,
        backgroundColor: "#fff",
        borderRadius: 5,
        borderColor: "#00E0C5"

    },
    timeTxt:
    {
        fontSize: 18, marginVertical: 30, fontFamily: "Mulish", fontWeight: "bold", letterSpacing: 1
    }
})