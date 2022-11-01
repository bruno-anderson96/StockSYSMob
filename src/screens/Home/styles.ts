import {
  Inter_600SemiBold,
  Inter_800ExtraBold,
} from "@expo-google-fonts/inter";
import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  texto: {
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: 20,
  },
  txtValor: {
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: 15,
  },
  img: {
    justifyContent: "center",
    width: "30%",
    height: "30%",
    resizeMode: "center",
    marginBottom: 50,
  },
  input: {
    backgroundColor: "white",
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: 15,
    width: 300,
    height: 30,
    borderRadius: 10,
    paddingLeft: 10,
    marginLeft: 3,
  },
  searchBar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  barcodeIcon: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "flex-end",
  },
});
