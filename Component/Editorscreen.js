import React from "react";
import { View, Text, Platform, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { actions, RichEditor, RichToolbar } from "react-native-pell-rich-editor";

const TempScreen = () => {
    const richText = React.useRef();
    return (
        <View>
            <ScrollView>
                <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
                    <RichEditor
                        ref={richText}
                        disabled={false}
                        containerStyle={styles.editor}
                        //ref={RichText}
                        style={styles.rich}
                        placeholder={"Please Write Here"}
                        onChange={descriptionText => {
                            console.log("descriptionText:", descriptionText);
                        }}
                    />
                </KeyboardAvoidingView>


                <RichToolbar
                    editor={richText}
                    style={[styles.richBar]}
                    iconTint={"purple"}
                    selectedIconTint={"pink"}
                    disabledIconTint={"purple"}
                    actions={[actions.insertBulletsList, actions.setBold, actions.setItalic, actions.setUnderline, actions.insertOrderedList, actions.insertLink]}
                    iconMap={{ [actions.heading1]: ({ tintColor }) => (<Text style={[{ color: tintColor }]}>H1</Text>), }}
                />
            </ScrollView>

        </View>
    );
};
const styles = StyleSheet.create({
    /********************************/
    /* styles for html tags */
    a: {
        fontWeight: "bold",
        color: "purple",
    },
    p: {
        fontSize: 30,
    },
    /*******************************/
    editor: {
        borderColor: "#E1E1E1",
        borderWidth: 0.7,
        borderRadius: 10,
        marginTop: 5,
        marginHorizontal: 15,
        width: "92%",
        justifyContent: "center",
        paddingHorizontal: 5,
        // backgroundColor: "red"

    },
    rich: {
        minHeight: 300,
        flex: 1,

    },
    richBar: {
        height: 50,
        backgroundColor: "#F5FCFF",
        //borderColor: "#E1E1E1",
        borderTopWidth: 1,
        borderWidth: 0.2,
        borderRadius: 3,
        marginTop: 5,
        width: "92%",
        marginHorizontal: 15,
        paddingHorizontal: 5,

    },
    text: {
        fontWeight: "bold",
        fontSize: 20,
    },
    tib: {
        textAlign: "center",
        color: "#515156",
    },
});

export default TempScreen;