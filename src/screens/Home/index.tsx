import { useEffect, useState } from "react";
import {
  Image,
  FlatList,
  Text,
  View,
  TextInput,
  ViewPagerAndroidBase,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Background } from "../../components/Background";
import { Feather, Ionicons } from "@expo/vector-icons";

import logoemp from "../../assets/logoemp2.png";

import { styles } from "./styles";
import { ProdParams } from "../../@types/@navigation";

interface RouteParams {
  nome: string;
}

export function Home() {
  const navigation = useNavigation();

  const [vendas, setVendas] = useState([]);
  const [nome, setNome] = useState("");

  function handlePesProd(nome: string) {
    navigation.navigate("produtos", { nome });
  }

  useEffect(() => {
    fetch("http://192.168.1.114:3000/vendas")
      .then((response) => response.json())
      .then((data) => setVendas(data));
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <SafeAreaView style={styles.searchBar}>
          <Feather name="search" size={24} color="black" />
          <TextInput
            style={styles.input}
            defaultValue={""}
            onChangeText={(nome) => setNome(nome)}
            placeholder={"Pesquise o produto . . ."}
            onEndEditing={() => handlePesProd(nome)}
          />
        </SafeAreaView>

        <TouchableOpacity onPress={() => navigation.navigate("camera")}>
          <Ionicons
            name="barcode-outline"
            size={36}
            color="black"
            style={styles.barcodeIcon}
          />
        </TouchableOpacity>

        <Image style={styles.img} source={logoemp} />
        <Text style={styles.texto}>Vendas hoje:</Text>

        {vendas.map((item) => (
          <Text style={styles.txtValor} key={0}>
            {" "}
            R$ {item.SUM.toFixed(2)}{" "}
          </Text>
        ))}
      </SafeAreaView>
    </Background>
  );
}
