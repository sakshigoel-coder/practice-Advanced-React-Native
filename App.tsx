
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BarChartScreen from './src/screens/BarChartScreen';

import LineChartScreen from './src/screens/LineChartScreen';

const App = () => {


  const Stack = createNativeStackNavigator();
  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={BarChartScreen} />
        <Stack.Screen name="line" component={LineChartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;