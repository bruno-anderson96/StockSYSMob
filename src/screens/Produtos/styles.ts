import { StyleSheet } from "react-native";
import { red100 } from "react-native-paper/lib/typescript/styles/colors";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  prod: {
    marginLeft: 10,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: 15,
    color: "white",
  },
  est: {
    marginLeft: 15,
    paddingBottom: 15,
  },
  list: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: 30,
  },
  titulo: {
    alignSelf: "center",
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: 20,
    marginTop: 22,
  },
});
