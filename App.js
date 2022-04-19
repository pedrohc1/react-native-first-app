import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import AppLoading from "expo-app-loading";

import {
	useFonts,
	Montserrat_400Regular,
	Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

import Cesta from "./src/telas/cesta/componentes/index";
import mock from "./src/mocks/cesta";

export default function App() {
	const [fonteCarregada] = useFonts({
		MontserratRegular: Montserrat_400Regular,
		MontserratBold: Montserrat_700Bold,
	});

	if (!fonteCarregada) {
		return <AppLoading />;
	}
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Cesta {...mock} />
			<StatusBar style="auto" />
		</SafeAreaView>
	);
}
