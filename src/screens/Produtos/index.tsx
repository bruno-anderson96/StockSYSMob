import React from "react";
import { useEffect, useState } from "react";
import { TouchableOpacity, FlatList, Text, BackHandler } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Background } from "../../components/Background";
import { useRoute, useNavigation } from "@react-navigation/native";
import { ProdParams } from "../../@types/@navigation";
import { styles } from "./styles";
import { Item } from "react-native-paper/lib/typescript/components/List/List";

interface RouteParams {
  nome: string;
  EAN13: string;
}

interface ProdutosInterface {
  ID: number;
  NOME: string;
  EAN13: string;
  VALOR: number;
  ESTOQUE: number;
}

export function Produtos() {
  const navigation = useNavigation();
  const route = useRoute();

  const prod = route.params as ProdParams;

  const [produtos, setProdutos] = useState<ProdutosInterface[]>([]);

  useEffect(() => {
    if (`${prod.EAN13}` != "undefined") {
      fetch(`http://192.168.1.114:3000/produtos?EAN13=${prod.EAN13}`)
        .then((response) => response.json())
        .then((data) => setProdutos(data));
    } else if (`${prod.nome}` != "undefined") {
      fetch(`http://192.168.1.114:3000/produtos?nome=${prod.nome}`)
        .then((response) => response.json())
        .then((data) => setProdutos(data));
    }
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Text style={styles.titulo}>Lista de Produtos</Text>
        {/* {produtos.map(item => (
                    <TouchableOpacity>
                        <Text style={styles.prod} key={item.ID} > {item.NOME} R$ {(item.VALOR).toFixed(2)} </Text>
                        <Text style={styles.est} key={item.ID} > {item.ESTOQUE} </Text>
                    </TouchableOpacity>
                ))} */}
        <FlatList
          data={produtos}
          keyExtractor={(item) => String(item.ID)}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Text style={styles.prod}>
                {" "}
                {item.NOME} R$ {item.VALOR.toFixed(2)}{" "}
              </Text>
              <Text style={styles.est}>Quantidade: {item.ESTOQUE} </Text>
            </TouchableOpacity>
          )}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
        />
      </SafeAreaView>
    </Background>
  );
}
