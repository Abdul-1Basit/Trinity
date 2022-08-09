import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
export default function FirstScreen(props: any) {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>Home Screen</Text>
			<TouchableOpacity
				style={{
					backgroundColor: "red",
					padding: 20,
				}}
				onPress={() => {
					props.navigation.navigate("Second");
				}}
			>
				<Text>navigate</Text>
			</TouchableOpacity>
		</View>
	);
}
