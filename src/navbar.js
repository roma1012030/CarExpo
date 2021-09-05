import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';

export const Navbar = props => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>Назад</Text>
            <Image source={require('./img/logo.png')} style={styles.ImgLogo}/>
            <Image source={require('./img/Group.png')} />
        </View>
    )
};

const styles = StyleSheet.create({
    navbar: {
        maxWidth: 370,
        height: 70,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingBottom: 10,
        paddingTop: 70
    },
    text: {
        fontSize: 16,
        color: '#000',
        paddingLeft: 16
    },
    ImgLogo: {
        width:100,
        right: 7
    }
})