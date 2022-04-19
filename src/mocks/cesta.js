import logo from "../../assets/logo.png";

import tomate from "../../assets/Tomate.png";
import brocolis from "../../assets/Brócolis.png";
import batata from "../../assets/Batata.png";
import pepino from "../../assets/Pepino.png";
import abobora from "../../assets/Abóbora.png";

const cesta = {
	topo: {
		titulo: "Detalhes da cesta",
	},
	detalhes: {
		nome: "Cesta de Verduras",
		logoFazenda: logo,
		nomeFazenda: "Jenny Jack Farm",
		descricao:
			"Uma cesta com produtos selecionados cuidadosamente da fazenda direto pra cozinha",
		preco: "R$ 40,00",
		botao: "Comprar",
	},
	itens: {
		titulo: "Itens da cesta",
		lista: [
			{
				nome: "Tomate",
				imagem: tomate,
			},
			{
				nome: "Brocolis",
				imagem: brocolis,
			},
			{
				nome: "Batata",
				imagem: batata,
			},
			{
				nome: "Pepino",
				imagem: pepino,
			},
			{
				nome: "Abóbora",
				imagem: abobora,
			},
		],
	},
};

export default cesta;
