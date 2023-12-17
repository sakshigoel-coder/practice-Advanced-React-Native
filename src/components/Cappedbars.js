import { Text, View } from "react-native";
import { BarChart } from "react-native-gifted-charts";
const Cappedbars = () => {
    const barData = [
        { value: 15, label: 'Jan' },
        { value: 40, label: 'Feb' },
        { value: 10, label: 'Mar' },
        { value: 30, label: 'Apr' },
    ];
    return (
        <View>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}> Capped Bars</Text>
            </View>
            <BarChart
                data={barData}
                barWidth={35}
                cappedBars
                capColor={'red'}
                capThickness={4}
                showGradient
                gradientColor={'rgba(200, 100, 244,0.8)'}
                frontColor={'rgba(219, 182, 249,0.2)'}
            />
        </View>
    );
};

export default Cappedbars;