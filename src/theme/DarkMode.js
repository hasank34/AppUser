import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Sun1, Moon } from "iconsax-react-native"; // Iconsax'tan gerekli ikonlar
import { useColorScheme } from "react-native";

const DarkLightMode = ({ children }) => {
  const systemTheme = useColorScheme(); // Sistemdeki tema (Light/Dark)
  const [isDarkMode, setIsDarkMode] = useState(systemTheme === "dark");

  // Sistem temasına göre dark mode'ı ayarlama
  useEffect(() => {
    setIsDarkMode(systemTheme === "dark");
  }, [systemTheme]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <View style={isDarkMode ? styles.darkContainer : styles.lightContainer}>
      {children}
      {/* Tema değiştirme ikonu */}
      <View style={styles.iconContainer} onTouchEnd={toggleTheme}>
        {isDarkMode ? (
          <Sun1 size={30} color="#FFF" /> // Dark moddaysanız güneş ikonu
        ) : (
          <Moon size={30} color="#000" /> // Light moddaysanız ay ikonu
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lightContainer: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  darkContainer: {
    backgroundColor: "#121212",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    position: "absolute",
    top: 40,
    right: 20,
    backgroundColor: "#D3D3D3",
    borderRadius: 30,
    padding: 10,
    zIndex: 1, // Ikonların ön planda olması için
  },
});

export default DarkLightMode;
