import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

// npm install expo-image (usar este código no terminal)

const foto = require("../../assets/images/bolsomito.avif")

export default function Index() {
  return (
    <View style={styles.container} >
      <View style = {styles.containerImg}>
        <Image source = {foto} style={styles.estiloFoto}></Image>
      </View>
      <View style = {styles.containerConteudo}>
        <View style = {styles.containerNome}>
          <Text style={styles.nome}>Matheus Gabriel Cristo de Moraes</Text>
        </View>
        <Text style = {styles.linha}>
          _______________________________________
        </Text>
        <View style = {styles.containerDados}>
          <Ionicons name="person" size={24} color="white" />
          <Text style = {styles.textoDados}>19 anos</Text>
        </View>
        <View style = {styles.containerDados}>
          <Ionicons name="mail" size={24} color="white" />
          <Text style = {styles.textoDados}>Matheus.Cristo.Moraes@escola.pr.gov.br</Text>
        </View>
        <View style = {styles.containerDados}>
          <Ionicons name="call" size={24} color="white" />
          <Text style = {styles.textoDados}>(43) 99866-9520</Text>
        </View>
        <View style = {styles.containerDados}>
          <Ionicons name="home" size={24} color="white" />
          <Text style = {styles.textoDados}>Ponta Grossa / PR</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "Cyan"
  },
  containerImg: {
    
    flex: 1,
    paddingTop: 60,
    
  },
  estiloFoto: {
    width: 300,
    height: 300,
  },
  containerConteudo: {
    flex: 1
  },
  containerNome:{
    alignItems:"center",
  },
  nome: {
    fontSize: 40,
    color: "white",
    fontWeight: "bold",
  },
  linha:{
    color: "white",
    fontSize: 20,
    marginBottom: 20
  },
  containerDados: {
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  textoDados: {
    marginLeft: 10,
    color: "white",
    fontSize: 24,
  }
})