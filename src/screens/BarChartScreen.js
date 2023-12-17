import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import React, { useEffect, useState } from 'react'
import Cappedbars from "../components/Cappedbars";
import GroupedBars from "../components/GroupedBars";
import { useNavigation } from "@react-navigation/native";



const BarChartScreen = () => {



    const barData = [
        {
            value: 200,
            label: 'Jan',
            frontColor: '#4ABFF4',
            sideColor: '#23A7F3',
            topColor: '#92e6f6',
        },
        {
            value: 150,
            label: 'Feb',
            frontColor: '#79C3DB',
            sideColor: '#68BCD7',
            topColor: '#9FD4E5',
        },
        {
            value: 150,
            label: 'Mar',
            frontColor: '#28B2B3',
            sideColor: '#0FAAAB',
            topColor: '#66C9C9',
        },
        {
            value: 250,
            label: 'Apr',
            frontColor: '#4ADDBA',
            sideColor: '#36D9B2',
            topColor: '#7DE7CE',
        },
        {
            value: 100,
            label: 'May',
            frontColor: '#91E3E3',
            sideColor: '#85E0E0',
            topColor: '#B0EAEB',
        },
    ];
    const navigation = useNavigation();
    const [timesPressed, setTimesPressed] = useState(0);
    const [displayText, setDisplayText] = useState('go to Next');

    useEffect(() => {
        if (timesPressed > 0) {
            const timeoutId = setTimeout(() => {
                setDisplayText('Back');
            }, 3000);

            return () => clearTimeout(timeoutId); // Cleanup timeout on component unmount or re-render
        }
    }, [timesPressed]);




    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{}}>
            <View style={{ margin: 40 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                    <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}>Bar Chart</Text>
                </View>
                <BarChart
                    showFractionalValues
                    showYAxisIndices
                    hideRules
                    isAnimated
                    noOfSections={5}
                    data={barData}
                    onPress={(item) => console.log('item', item)}
                    frontColor={'#1B6BB0'}
                    isThreeD
                />
                <View style={{ height: 10 }} />
                <Cappedbars />
                <View style={{ height: 10 }} />
                <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold', textAlign: 'center', paddingBottom: 10 }}> Grouped Bars</Text>
                <GroupedBars />

            </View>
            <Pressable
                onPress={() => {
                    setTimesPressed((current) => current + 1);
                    navigation.navigate('line');
                }}
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
                    },
                    styles.wrapperCustom,
                ]}
            >
                {({ pressed }) => (
                    <Text style={styles.text}>
                        {pressed ? 'Back' : 'go to Next'}
                    </Text>
                )}
            </Pressable>
            <View style={{ height: 60 }} />
        </ScrollView>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center', fontSize: 18, color: 'gray', fontWeight: 'bold'
    },
    wrapperCustom: {
        borderRadius: 8,
        padding: 6,
    },

});

export default BarChartScreen