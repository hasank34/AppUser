import React, { useEffect } from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
} from "react-native-reanimated";

const ButterflyAnimation = () => {
  const { width, height } = Dimensions.get("window");

  // Kelebeğin yatay ve dikey hareketi için shared value'lar
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(height / 2);

  useEffect(() => {
    // Kelebeğin yatay hareketi (sağa doğru hareket)
    translateX.value = withRepeat(
      withTiming(width - 100, { duration: 5000, easing: Easing.linear }),
      -1,
      false
    );

    // Kelebeğin dikey hareketi (yukarı-aşağı hareket)
    translateY.value = withRepeat(
      withTiming(height - 100, { duration: 3000 }),
      -1,
      true
    );
  }, [translateX, translateY]);

  // Kelebeğin animasyonlu stilini tanımlıyoruz
  const butterflyStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.butterfly, butterflyStyle]}>
        {/* Kelebek resmi */}
        <Image
          source={require("../assets/bulut.png")} // Resminizi buraya ekleyin
          style={styles.butterflyImage}
        />
      </Animated.View>
    </View>
  );
};

export default ButterflyAnimation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute", // Ekranın tam ortasında gösterilsin
    zIndex: 10, // Kelebek arka planda değil, üstte olacak
    backgroundColor: "#FFF7F7", // Arka plan açık pembe
  },
  butterfly: {
    position: "absolute",
  },
  butterflyImage: {
    width: 80, // Kelebek resminizin genişliği
    height: 80, // Kelebek resminizin yüksekliği
  },
});
