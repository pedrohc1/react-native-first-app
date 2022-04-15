import React from "react";
import { View, StatusBar, SafeAreaView } from "react-native";
import {
	useFonts,
	Montserrat_400Regular,
	Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

import Cesta from "./src/telas/cesta";

export default function App() {
	const [fonteCarregada] = useFonts({
		MontserratRegular: Montserrat_400Regular,
		MontserratBold: Montserrat_700Bold,
	});

	if (!fonteCarregada) {
		return <View />;
	}
	return (
		<SafeAreaView>
			<Cesta />
			<StatusBar style="auto" />
		</SafeAreaView>
	);
}
