import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Button, Pressable, StyleSheet, TextInput, View, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

const foto = require("../../assets/images/bolsomito.jpeg");

export default function Index() {
  const [image, setImage] = useState<string | null>(null);
  const [name, setName] = useState("Matheus Gabrielsom ");
  const [age, setAge] = useState("17 aninhos");
  const [email, setEmail] = useState("Matheus.cristo@escola.pr.gov.br");
  const [phone, setPhone] = useState("(43) 9986-6956");
  const [address, setAddress] = useState("Ponta Grossa / PR");

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({ 
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    console.log(result);
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={110}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        <View style={styles.containerImg}>
          <Pressable onPress={pickImage}>
            <Image source={image == null ? foto : image} style={styles.estiloFoto} />
          </Pressable>
          <Button title="Trocar imagem" onPress={pickImage} />
        </View>
        <View style={styles.containerConteudo}>
          <View style={styles.containerNome}>
            <TextInput
              style={styles.nome}
              value={name}
              onChangeText={setName}
              placeholder="Nome"
              placeholderTextColor="white"
            />
          </View>
          <View>
            <TextInput
              style={styles.linha}
              editable={false}
              value={"_______________________________________"}
              selectTextOnFocus={false}
            />
          </View>
          <View style={styles.containerDados}>
            <Ionicons name="person" size={24} color="#00CED1" />
            <TextInput
              style={styles.textoDados}
              value={age}
              onChangeText={setAge}
              placeholder="Idade"
              placeholderTextColor="#00CED1"
            />
          </View>
          <View style={styles.containerDados}>
            <Ionicons name="mail" size={24} color="#00CED1" />
            <TextInput
              style={styles.textoDados}
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              placeholderTextColor="white"
            />
          </View>
          <View style={styles.containerDados}>
            <Ionicons name="call" size={24} color="#00CED1" />
            <TextInput
              style={styles.textoDados}
              value={phone}
              onChangeText={setPhone}
              placeholder="Telefone"
              placeholderTextColor="white"
            />
          </View>
          <View style={styles.containerDados}>
            <Ionicons name="home" size={24} color="#00CED1" />
            <TextInput
              style={styles.textoDados}
              value={address}
              onChangeText={setAddress}
              placeholder="Endereço"
              placeholderTextColor="white"
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  containerImg: {
    paddingTop: 150,
    alignItems: "center",
  },
  estiloFoto: {
    width: 300,
    height: 280,
  },
  containerConteudo: {
    marginTop: 55,
    width: "90%",
  },
  containerNome: {
    alignItems: "center",
   
  },
  
  nome: {
    fontSize: 57,
    color: "#FFC0CB",
    fontWeight: "bold",
  },
  linha: {
    color: "#00CED1",
    fontSize: 28,
    marginBottom: 10,
    textAlign: "center",
  },
  containerDados: {
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  textoDados: {
    marginLeft: 10,
    color: "#00CED1",
    fontSize: 24,
    flex: 1,
  }
});

