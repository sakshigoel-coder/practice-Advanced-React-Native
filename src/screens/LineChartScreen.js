import { View, Text } from 'react-native'
import React from 'react'
import { LineChart } from "react-native-gifted-charts"

const LineChartScreen = () => {



    const lineData = [
        { value: 0, dataPointText: '0' },
        { value: 20, dataPointText: '20' },
        { value: 18, dataPointText: '18' },
        { value: 40, dataPointText: '40' },
        { value: 36, dataPointText: '36' },
        { value: 60, dataPointText: '60' },
        { value: 54, dataPointText: '54' },
        { value: 85, dataPointText: '85' }
    ];
    return (
        <View style={{ backgroundColor: 'gray', flex: 1, justifyContent: 'center', paddingLeft: 50 }}>
            <LineChart
                initialSpacing={0}
                data={lineData}
                spacing={30}
                textColor1="yellow"
                textShiftY={-8}
                textShiftX={-10}
                textFontSize={13}
                thickness={5}
                hideRules
                hideYAxisText
                yAxisColor="red"
                showVerticalLines
                verticalLinesColor="rgba(14,16,90,0.5)"
                xAxisColor="red"

            />
        </View>
    );
};

export default LineChartScreen;