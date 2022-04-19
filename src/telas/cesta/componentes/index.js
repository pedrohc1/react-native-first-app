import React from "react";
import {
	FlatList,
	View,
	StyleSheet,
	Dimensions,
	StatusBar,
} from "react-native";

import Topo from "../componentes/Topo";
import Detalhes from "../componentes/Detalhes";
import Item from "./Item";
import Texto from "../../../componentes/Texto";

const width = Dimensions.get("screen").width;

export default function Cesta({ topo, detalhes, itens }) {
	return (
		<>
			<StatusBar barStyle="dark-content" backgroundColor="#34398db" />
			<FlatList
				data={itens.lista}
				renderItem={Item}
				keyExtractor={({ nome }) => nome}
				ListHeaderComponent={() => {
					return (
						<>
							<Topo {...topo} />
							<View style={estilos.cesta}>
								<Detalhes {...detalhes} />
								<Texto style={estilos.titulo}>{itens.titulo} </Texto>
							</View>
						</>
					);
				}}
			/>
		</>
	);
}

const estilos = StyleSheet.create({
	cesta: {
		paddingVertical: 8,
		paddingHorizontal: 16,
	},
	titulo: {
		color: "#464646",
		fontWeight: "bold",
		marginTop: 32,
		marginBottom: 5,
		fontSize: 20,
		lineHeight: 32,
	},
});
