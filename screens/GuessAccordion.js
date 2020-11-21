import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableHighlight, Modal, TouchableWithoutFeedback, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
const styles = StyleSheet.create({
    openCard: {
        flexDirection: "column",
        marginVertical: 11,
        borderWidth: 1,
        borderColor: "#a3a3a3",
        borderRadius: 6,
    },

    closedCard: {
        flexDirection: "column",
        height: 72,
        marginVertical: 11,
        borderWidth: 1,
        borderColor: "#a3a3a3",
        borderRadius: 6
    },
    roundTitleText: {
        flex: 1, fontFamily: "RobotoSlab-Regular", fontSize: 22
    },
    buttonStyle: {
        marginVertical: 30,
        marginHorizontal: 50,
        backgroundColor: "#528C6E",
        paddingVertical: 25,
        borderRadius: 5
    },
    buttonLabelStyle: {
        textAlign: "center",
        fontSize: 16,
        fontFamily: "RobotoSlab-Bold",
        color: "white"
    },
    centeredView: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        flexDirection: "row"
    },
    modalView: {
        flex: 1,
        margin: 32,
        backgroundColor: "white",
        borderRadius: 5,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#528C6E",
        borderRadius: 5,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});
export default GuessAccordion = ({ openState, data }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [open, setOpen] = useState(openState);

    return (
        open ?
            (
                <>
                    <Modal animationType="fade"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            console.log("Closed")
                        }}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>Hello World!</Text>

                                <TouchableHighlight
                                    underlayColor="#85BFA1"
                                    style={{ ...styles.openButton }}
                                    onPress={() => {
                                        setModalVisible(!modalVisible);
                                    }}
                                >
                                    <Text style={styles.textStyle}>Hide Modal</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </Modal>
                    <View style={styles.openCard}>
                        <Pressable onPress={() => setOpen(false)}  >
                            <>
                                <View style={{ borderBottomWidth: 1, borderBottomColor: "#A4A4A4", margin: 20, flexDirection: "row" }}>
                                    <Text style={styles.roundTitleText}>Round: {data.round}</Text>
                                    <Icon name="angle-up" size={40} color="#000" />
                                </View>
                                <View style={{ marginHorizontal: 20, flexDirection: "row" }}>
                                    <Text style={{ fontFamily: "RobotoSlab-SemiBold", fontSize: 16, flex: 1 }}>Match</Text>
                                    <Text style={{ fontFamily: "RobotoSlab-SemiBold", fontSize: 16 }}>Guess</Text>
                                </View>
                                {data.matches.map((match) => {
                                    return (
                                        <Pressable onPress={() => setModalVisible(true)} style={{ marginHorizontal: 20 }} key={match.matchid}>
                                            <Text style={{ marginVertical: 16, fontFamily: "RobotoSlab-SemiBold", fontSize: 16, color: "#9E9E9E" }}>{match.teamAName} X {match.teamBName}</Text>
                                        </Pressable>
                                    )
                                })}
                            </>
                        </Pressable>
                    </View>
                </>
            )
            : (
                <View style={styles.closedCard}>
                    <TouchableWithoutFeedback onPress={() => setOpen(true)}>
                        <View style={{ margin: 20, flexDirection: "row" }}>
                            <Text style={styles.roundTitleText}>Round: {data.round}</Text>
                            <Icon name="angle-down" size={40} color="#000"></Icon>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            )

    )

}