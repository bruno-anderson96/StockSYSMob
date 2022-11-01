import { useState, useCallback } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { BarCodeScanner, BarCodeScannerResult } from "expo-barcode-scanner";
import { Background } from "../../components/Background";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProdParams } from "../../@types/@navigation";
import {
  useRoute,
  useNavigation,
  useFocusEffect,
  useIsFocused,
} from "@react-navigation/native";

import { styles } from "./styles";

interface RouteParams {
  EAN13: string;
}
//37486
export function Camera() {
  const navigation = useNavigation();
  const route = useRoute();

  const isFocused = useIsFocused();

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const [EAN13, setEan13] = useState("");

  useFocusEffect(
    useCallback(() => {
      const getBarCodeScannerPermissions = async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === "granted");
      };
      getBarCodeScannerPermissions();
      return () => {
        setScanned(() => false);
        setEan13("");
      };
    }, [])
  );

  function handlePesProd(nome: string, EAN13: string) {
    // setScanned(() => false); //Para não renderizar várias vezes
    if (EAN13 !== "") {
      navigation.navigate("produtos", { nome, EAN13 });
    }
  }

  const handleBarCodeScanned = (scanningResult: BarCodeScannerResult) => {
    setScanned(() => true);
    setEan13(scanningResult.data);
  };

  if (hasPermission === null) {
    return <Text>Solicitando acesso ao uso da câmera</Text>;
  }
  if (hasPermission === false) {
    return <Text>Sem permissão a câmera</Text>;
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <>
          {isFocused ? (
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={StyleSheet.absoluteFillObject}
            />
          ) : null}
          {/* {scanned && <Button title={'Scanear novamente'} onPress={() => setScanned(false)} />} */}
          {scanned && handlePesProd("", EAN13)}
        </>
      </SafeAreaView>
    </Background>
  );
}
