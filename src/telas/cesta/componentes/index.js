import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";

import Topo from "../componentes/Topo";
import Detalhes from "../componentes/Detalhes";

const width = Dimensions.get("screen").width;

export default function Cesta({ topo, detalhes }) {
	return (
		<>
			<Topo {...topo} />
			<View style={estilos.cesta} />
			<Detalhes {...detalhes} />
		</>
	);
}

const estilos = StyleSheet.create({
	cesta: {
		paddingVertical: 8,
		paddingHorizontal: 16,
	},
});
