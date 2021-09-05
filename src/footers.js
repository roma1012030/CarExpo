import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export const Footers = props => {
    return (
        <View style={styles.Footers}>
            <ScrollView>
                <Image source={require('./img/logo.png')} style={styles.ImgLogo}/>
                <Text style={styles.text}>О нас</Text>
                <Text style={styles.text}>Аукцион автомобилей</Text>
                <Text style={styles.text}>Продажа авто</Text>
                <Text style={styles.text}>Контактная информация</Text>
                <Text style={styles.text}>Адрес: Толе би 69</Text>
                <Text style={styles.text}>Телефон: + 7 700 836 75 29</Text> 
                <Image source={require('./img/Society.png')} style={styles.imgSoc}/>
                <Text style={styles.text2}>© 2021 · Все права защищены</Text> 
                <Text style={styles.text2}>FastBot гарантирует безопасную сделку</Text> 
            </ScrollView>
        </View>
    )
};


const styles = StyleSheet.create({
    Footers: {
        marginTop:100,
        padding: 35,
        maxWidth: 390,
        backgroundColor: '#E7ECF3'
    },
    text: {
        marginTop: 22,
        paddingTop: 2
    },
    text2: {
        marginTop: 15,
        paddingTop: 5,
        textAlign: "center"
    },
    imgSoc:{
        top: 15,
        left: 135
    }
})