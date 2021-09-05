import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image, ScrollView } from 'react-native';

export const Client = props => {
    return (
        <SafeAreaView style={styles.Container}>
        <View style={styles.Main }>
            <View>
                <Text style={styles.text}>Марка:</Text>
                <Text style={styles.text}>Дата добавления:</Text>
                <Text style={styles.text}>Ваша цена:</Text>
                <Text style={styles.text}>Текущая цена:</Text>
                <Text style={styles.text}>Cтавок :</Text>
                <Text style={styles.text}>Просмотров:</Text>
            </View>

            <View style={styles.MainPod}>
                <Text style={styles.text}>Hyundai Tucson , 2019 года</Text>
                <Text style={styles.text}>                                  18.07.21</Text>
                <Text style={styles.text}>                          7 890 000    T</Text>
                <Text style={styles.text}>                          8 000 000    T</Text>
                <Text style={styles.text}>                                             13</Text>
                <Text style={styles.text}>                                           120</Text>
            </View>
        </View>
            <View style={styles.info}>
                <TouchableOpacity style={styles.btns}>
                    <Image source={require('./img/carbon_time.png')} />
                    <Text style={styles.btnColor}>На модерации</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btns}>
                    <Text style={styles.btnColorBlue}>Показать покупателей</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#F7FAFF',
        padding: 25,
        maxWidth : 390,
        justifyContent: "center",
        
    },
    text: {
        fontSize: 16,
        color: '#151515',
        paddingBottom: 10,   
    },
    btns: {
        top: 16,
        flexDirection: "row"
    },
    info:{
        flexDirection: "row"
    },
    btnColor: {
        color: '#CDA823',
        left: 9,
        fontSize: 16
    },
    btnColorBlue: {
        color: "#004DBE",
        fontSize: 16,
        left: 35
    },
    Main:{
        flexDirection: 'row'
    },
    MainPod:{
        marginLeft: 13
    }
})