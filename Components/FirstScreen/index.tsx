import React from "react";
import {
	View,
	Text,
	TouchableOpacity,
	SafeAreaView,
	ScrollView,
	Dimensions,
	StatusBar,
	RefreshControl,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

const screenWidth = Dimensions.get("screen").width;
const wait = (timeout) => {
	return new Promise((resolve) => setTimeout(resolve, timeout));
};
export default function FirstScreen(props: any) {
	const list: any = useSelector((state) => state.list.list);
	const [refreshing, setRefreshing] = React.useState(false);

	const onRefresh = React.useCallback(() => {
		setRefreshing(true);
		wait(2000).then(() => setRefreshing(false));
	}, []);
	return (
		<SafeAreaView>
			<ScrollView
				refreshControl={
					<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
				}
			>
				<View style={{ flex: 1, backgroundColor: "#f9f9f9" }}>
					<StatusBar />
					<View
						style={{
							//backgroundColor: "#f9f9f9",
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
							paddingVertical: 15,
							paddingHorizontal: 20,
							borderBottomWidth: 1,
							borderBottomColor: "#e2e1e4",
						}}
					>
						<AntDesign name="search1" size={30} color="#ff8c00" />
						<Text style={{ fontSize: 22, fontWeight: "500" }}>Contacts</Text>
						<Ionicons name="md-add" size={37} color="#ff8c00" />
					</View>
					<View style={{ alignItems: "flex-end", justifyContent: "flex-end" }}>
						{list.map((item, index) => {
							return (
								<TouchableOpacity
									key={index}
									style={{
										flexDirection: "row",
										alignItems: "center",
										justifyContent: "flex-start",
										width: "100%",
										maxWidth: screenWidth / 1.05,
										borderBottomWidth: 1,
										borderBottomColor: "#e2e1e4",
										padding: 10,
									}}
									onPress={() => {
										props.navigation.navigate("Second", {
											id: item.id,
											firstName: item.firstName,
											lastName: item.lastName,
											email: item.email,
											phone: item.phone,
										});
									}}
								>
									<View
										style={{
											width: 60,
											height: 60,
											borderRadius: 60 / 2,
											backgroundColor: "#ff8c00",
										}}
									></View>
									<Text style={{ paddingLeft: 15, fontSize: 15 }}>
										{item.firstName} {item.lastName}
									</Text>
								</TouchableOpacity>
							);
						})}
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
