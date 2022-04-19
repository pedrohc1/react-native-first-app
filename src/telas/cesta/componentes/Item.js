import React from "react";
import Texto from "../../../componentes/Texto";
import { View, Image, StyleSheet, FlatList } from "react-native";

export default function Item({ item: { nome, imagem } }) {
	return (
		<View style={estilos.item}>
			<Image source={imagem} style={estilos.imagem} />
			<Texto style={estilos.nome}>{nome} </Texto>
		</View>
	);
}

const estilos = StyleSheet.create({
	titulo: {
		color: "#464646",
		fontWeight: "bold",
		marginTop: 32,
		marginBottom: 5,
		fontSize: 20,
		lineHeight: 32,
	},
	item: {
		flexDirection: "row",
		borderBottomWidth: 1,
		borderBottomColor: "#ECECEC",
		paddingVertical: 0.5,
		alignItems: "center",
	},
	imagem: {
		width: 76,
		height: 76,
	},
	nome: {
		fontSize: 16,
		lineHeight: 26,
		color: "#464646",
	},
});
