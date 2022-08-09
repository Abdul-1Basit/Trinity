// In App.js in a new project

import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FirstScreen from "./Components/FirstScreen";
import SecondScreen from "./Components/SecondScreen";
const Stack = createNativeStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen
					name="First"
					component={FirstScreen}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="Second"
					component={SecondScreen}
					options={{
						headerShown: false,
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
export default App;
