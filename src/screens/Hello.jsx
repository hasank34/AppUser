import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  Animated,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

export default function WelcomeWithImage() {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Görünürlük animasyonu
  const translateYAnim = useRef(new Animated.Value(-100)).current; // Hareket animasyonu
  const navigation = useNavigation();

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1, // Tam görünürlük
        duration: 2000, // 2 saniye
        useNativeDriver: true,
      }),
      Animated.timing(translateYAnim, {
        toValue: 0, // Ortada duracak
        duration: 2000, // 2 saniye
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, translateYAnim]);

  return (
    <View style={styles.container}>
      {/* Animasyonlu Görsel */}
      <Animated.Image
        source={require("../assets/images.png")} // Doğru kullanım
        style={[
          styles.image,
          {
            opacity: fadeAnim, // Görünürlük animasyonu
            transform: [{ translateY: translateYAnim }], // Hareket animasyonu
          },
        ]}
      />
      {/* Animasyonlu Metin */}
      <Animated.Text
        style={[
          styles.text,
          {
            opacity: fadeAnim, // Görünürlük animasyonu
            transform: [{ translateY: translateYAnim }], // Hareket animasyonu
          },
        ]}
      >
        Hoş Geldiniz!
      </Animated.Text>
      <TouchableOpacity
        style={styles.button}
        title="Sayfayı Geç"
        onPress={() => navigation.navigate("UserList")}
      >
        <Text style={styles.buttonText}>Sayfayı Geç</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF", // Arka plan rengi
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20, // Yazıyla aradaki boşluk
    borderRadius: 10,
  },
  text: {
    fontSize: 28,
    fontWeight: "bold",
    color: "black",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "black",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    elevation: 5, // Android için gölge
    marginBottom: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
