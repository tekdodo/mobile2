import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function Profissional() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.containerConteudo} showsVerticalScrollIndicator={false}>
        <View style={styles.containerNome}>
          <Text style={styles.nome}>Dados</Text>
        </View>
        <Text style={styles.linha}>
          _______________________________________
        </Text>
        <View style={styles.containerDados}>
          <Ionicons name="person" size={22} color="#00CED1" />
          <Text style={styles.textoDados}>17 anos</Text>
        </View>
        <View style={styles.containerDados}>
          <Ionicons name="mail" size={22} color="#00CED1"/>
          <Text style={styles.textoDados}>Matheus.Cristo@escola.pr.gov.br</Text>
        </View>
        <View style={styles.containerDados}>
          <Ionicons name="call" size={22} color="#00CED1" />
          <Text style={styles.textoDados}>(43) 99866-9520</Text>
        </View>
        <View style={styles.containerDados}>
          <Ionicons name="home" size={22} color="#00CED1" />
          <Text style={styles.textoDados}>Ponta Grossa / PR</Text>
        </View>
        <Text style={styles.linha}>
          _______________________________________
        </Text>
        <Text style={styles.titulo}>Formação Profissional</Text>
        <View style={styles.containerDados}>
          <Ionicons name="school" size={22} color="#00CED1" />
          <Text style={styles.textoDados}>Ensino Médio Completo</Text>
        </View>
        <View style={styles.containerDados}>
          <Ionicons name="briefcase" size={22} color="#00CED1" />
          <Text style={styles.textoDados}>Estágio em Desenvolvimento de Software</Text>
        </View>
        <View style={styles.containerDados}>
          <Ionicons name="settings" size={22} color="#00CED1" />
          <Text style={styles.textoDados}>Certificado GERAR</Text>
        </View>
        <Text style={styles.linha}>
        <Ionicons name="information" size={22} color="#00CED1" />
        <Text style={styles.linha}>Ingles de nivel Intermediario</Text>_________________________
        </Text>
        <Text style={styles.titulo}>Habilidades</Text>
        <View style={styles.containerDados}>
          <Ionicons name="code-slash" size={22} color="#00CED1" />
          <Text style={styles.textoDados}>JavaScript, React Native</Text>
        </View>
        <View style={styles.containerDados}>
          <Ionicons name="checkmark-circle" size={22} color="#00CED1" />
          <Text style={styles.textoDados}>Trabalho em equipe</Text>
        </View>
        <View style={styles.containerDados}>
          <Ionicons name="rocket" size={22} color="#00CED1" />
          <Text style={styles.textoDados}>Pensamento rápido e resolução de problemas</Text>
        </View>
        <View style={styles.containerDados}>
          <Ionicons name="analytics" size={22} color="#00CED1" />
          <Text style={styles.textoDados}>Análise de dados e otimização</Text>
        </View>
        <View style={styles.containerDados}>
          <Ionicons name="cafe" size={22} color="#00CED1"/>
          <Text style={styles.textoDados}>Resistência a desafios extremos</Text>
        </View>
        <View style={styles.containerDados}>
        
         
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1C",
    padding: 15,
  },
  containerConteudo: {
    padding: 20,
    backgroundColor: "#1C1C1C",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#6A5ACD",
  },
  containerNome: {
    alignItems: "center",
    marginBottom: 10,
  },
  nome: {
    fontSize: 34,
    color:"#6A5ACD",
    fontWeight: "bold",
    textAlign: "center",
  },
  linha: {
    color:"#6A5ACD",
    fontSize: 18,
    marginVertical: 15,
    textAlign: "center",
  },
  containerDados: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  textoDados: {
    marginLeft: 10,
    color: "#FFC0CB",
    fontSize: 20,
    flexShrink: 1,
  },
  titulo: {
    fontSize: 24,
    color: "#6A5ACD",
    fontWeight: "bold",
    marginVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#6A5ACD",
    paddingBottom: 5,
  },
});

