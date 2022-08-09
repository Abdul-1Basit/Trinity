import React, { useRef } from "react";
import {
	View,
	KeyboardAvoidingView,
	SafeAreaView,
	ScrollView,
	StatusBar,
	Text,
	TouchableOpacity,
	Dimensions,
	TextInput,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
const screenWidth = Dimensions.get("screen").width;

const screenHeight = Dimensions.get("screen").height;
export default function SecondScreen(props: any) {
	const { id, firstName, lastName, email, phone } = props.route.params;
	const dispatch = useDispatch();
	const ref_input1 = useRef();
	const ref_input2 = useRef();
	const ref_input3 = useRef();
	const ref_input4 = useRef();

	const [uFirstName, setUFirstName] = React.useState(firstName);
	const [ulasttName, setULastName] = React.useState(lastName);
	const [uemail, setUEmail] = React.useState(email);
	const [uPhone, setUPhone] = React.useState(phone);

	return (
		<SafeAreaView>
			<ScrollView>
				<View
					style={{ flex: 1, height: screenHeight, backgroundColor: "#ffffff" }}
				>
					<StatusBar />
					<View
						style={{
							backgroundColor: "#f9f9f9",
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
							paddingVertical: 15,
							paddingHorizontal: 20,
							borderBottomWidth: 1,
							borderBottomColor: "#e2e1e4",
						}}
					>
						<TouchableOpacity
							onPress={() => {
								props.navigation.goBack();
							}}
						>
							<Text
								style={{ fontSize: 22, fontWeight: "400", color: "#ff8c00" }}
							>
								Cancel
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => {
								dispatch({
									type: "EDIT_DETAILS",
									payload: {
										id: id,
										firstName: uFirstName,
										lastName: ulasttName,
										lastName: ulasttName,
										email: uemail,
										phone: uPhone,
									},
								});
								props.navigation.navigate("First");
							}}
						>
							<Text
								style={{ fontSize: 22, fontWeight: "400", color: "#ff8c00" }}
							>
								Save
							</Text>
						</TouchableOpacity>
					</View>
					<KeyboardAvoidingView>
						<View>
							<View
								style={{
									alignItems: "center",
									justifyContent: "center",
									paddingVertical: 15,
								}}
							>
								<View
									style={{
										width: 120,
										height: 120,
										borderRadius: 120 / 2,
										backgroundColor: "#ff8c00",
									}}
								></View>
							</View>

							<View
								style={{
									paddingVertical: 10,
									paddingHorizontal: 15,
									borderBottomColor: "#e2e1e4",
									backgroundColor: "#f9f9f9",
								}}
							>
								<Text style={{ fontSize: 20, fontWeight: "500" }}>
									Main Information
								</Text>
							</View>
							<View
								style={{
									alignItems: "center",
									justifyContent: "flex-end",
									marginLeft: 15,
								}}
							>
								<View
									style={{
										paddingVertical: 5,
										width: "100%",
										//	maxWidth: screenWidth / 1.075,
										borderBottomWidth: 1,
										borderBottomColor: "#e2e1e4",
										flexDirection: "row",
										alignItems: "center",
										justifyContent: "space-between",
										paddingRight: 20,
									}}
								>
									<Text style={{ fontSize: 15, paddingRight: 15 }}>
										First Name
									</Text>
									<TextInput
										style={{
											padding: 5,
											borderRadius: 6,
											borderColor: "#e2e1e4",
											borderWidth: 1,
											width: "100%",
											maxWidth: screenWidth / 1.5,
										}}
										ref={ref_input1}
										onSubmitEditing={() => ref_input2.current.focus()}
										blurOnSubmit={false}
										value={uFirstName}
										onChangeText={(text) => setUFirstName(text)}
									/>
								</View>

								<View
									style={{
										paddingVertical: 5,
										width: "100%",
										//	maxWidth: screenWidth / 1.075,
										borderBottomWidth: 1,
										borderBottomColor: "#e2e1e4",
										flexDirection: "row",
										alignItems: "center",
										justifyContent: "space-between",
										paddingRight: 20,
									}}
								>
									<Text style={{ fontSize: 15, paddingRight: 15 }}>
										Last Name
									</Text>
									<TextInput
										style={{
											padding: 5,
											borderRadius: 6,
											borderColor: "#e2e1e4",
											borderWidth: 1,
											width: "100%",
											maxWidth: screenWidth / 1.5,
										}}
										autoFocus={true}
										ref={ref_input2}
										onSubmitEditing={() => ref_input2.current.focus()}
										blurOnSubmit={false}
										value={ulasttName}
										onChangeText={(text) => setULastName(text)}
									/>
								</View>
							</View>
							<View
								style={{
									paddingVertical: 10,
									paddingHorizontal: 15,
									borderBottomColor: "#e2e1e4",
									backgroundColor: "#f9f9f9",
								}}
							>
								<Text style={{ fontSize: 20, fontWeight: "500" }}>
									Sub Information
								</Text>
							</View>
							<View
								style={{
									alignItems: "center",
									justifyContent: "flex-end",
									marginLeft: 15,
								}}
							>
								<View
									style={{
										paddingVertical: 5,
										width: "100%",
										//	maxWidth: screenWidth / 1.075,
										borderBottomWidth: 1,
										borderBottomColor: "#e2e1e4",
										flexDirection: "row",
										alignItems: "center",
										justifyContent: "space-between",
										paddingRight: 20,
									}}
								>
									<Text style={{ fontSize: 15, paddingRight: 15 }}>Phone</Text>
									<TextInput
										style={{
											padding: 5,
											borderRadius: 6,
											borderColor: "#e2e1e4",
											borderWidth: 1,
											width: "100%",
											maxWidth: screenWidth / 1.5,
										}}
										autoFocus={true}
										ref={ref_input3}
										onSubmitEditing={() => ref_input3.current.focus()}
										blurOnSubmit={false}
										value={uemail}
										onChangeText={(text) => setUEmail(text)}
									/>
								</View>
								<View
									style={{
										paddingVertical: 5,
										width: "100%",
										//	maxWidth: screenWidth / 1.075,
										borderBottomWidth: 1,
										borderBottomColor: "#e2e1e4",
										flexDirection: "row",
										alignItems: "center",
										justifyContent: "space-between",
										paddingRight: 20,
									}}
								>
									<Text style={{ fontSize: 15, paddingRight: 15 }}>Phone</Text>
									<TextInput
										style={{
											padding: 5,
											borderRadius: 6,
											borderColor: "#e2e1e4",
											borderWidth: 1,
											width: "100%",
											maxWidth: screenWidth / 1.5,
										}}
										value={uPhone}
										autoFocus={true}
										ref={ref_input4}
										onSubmitEditing={() => ref_input4.current.focus()}
										blurOnSubmit={false}
										onChangeText={(text) => setUPhone(text)}
									/>
								</View>
							</View>
						</View>
					</KeyboardAvoidingView>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
