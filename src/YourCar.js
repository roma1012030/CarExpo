import React from "react";
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export const YourCar = props => {
    return (
        <View style={styles.YourCar}>
            <ScrollView>
                 <Text style={styles.text}>Ваши автомобили</Text>
            </ScrollView>
        </View>
    )
};


const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: '#000',  
        paddingBottom: 50,
        paddingTop: 60,
        paddingLeft: 19
    }
})