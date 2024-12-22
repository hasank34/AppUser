import React, { useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import {
  ArrowCircleRight,
  ChartCircle,
  Clock,
  CloseCircle,
  TickCircle,
} from "iconsax-react-native";
import ButterflyAnimation from "../../theme/KelebekAnimation"; // Butterfly animasyonunu import ediyoruz.

const HeaderComponent = ({ ongoing, pending, complated, cancel }) => {
  const tasks = [
    {
      id: 1,
      title: "Ongoing",
      color: "#FFB6C1", // Pembe
      icon: <ChartCircle size="32" color="#FFFFFF" />,
      count: ongoing,
    },
    {
      id: 2,
      title: "Pending",
      color: "#FF6347", // Turuncu
      icon: <Clock size="32" color="#FFFFFF" />,
      count: pending,
    },
    {
      id: 3,
      title: "Complated",
      color: "#4682B4", // Mavi
      icon: <TickCircle size="32" color="#FFFFFF" />,
      count: complated,
    },
    {
      id: 4,
      title: "Cancel",
      color: "#800000", // Bordo
      icon: <CloseCircle size="32" color="#FFFFFF" />,
      count: cancel,
    },
  ];

  const Task = ({ item }) => (
    <Pressable style={[styles.taskCard, { backgroundColor: item.color }]}>
      {item.icon}
      <View style={styles.taskDetails}>
        <View>
          <Text style={styles.taskTitle}>{item.title}</Text>
          <Text style={styles.taskCount}>{item.count} Task</Text>
        </View>
        <ArrowCircleRight size="24" color="#FFFFFF" />
      </View>
    </Pressable>
  );

  return (
    <View style={{ flex: 1 }}>
      {/* Butterfly Animasyonunu Arka Planda Render Et */}
      <View style={styles.animationContainer}>
        <ButterflyAnimation />
      </View>

      <View style={styles.container}>
        <FlatList
          numColumns={2}
          data={tasks}
          renderItem={({ item }) => <Task item={item} />}
        />
        <Text style={styles.allTaskText}>All Task</Text>
      </View>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  taskCard: {
    width: "45%",
    padding: 15,
    margin: 10,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  taskDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
  },
  taskTitle: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 14,
  },
  taskCount: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 16,
    marginTop: 5,
  },
  allTaskText: {
    fontSize: 18,
    fontWeight: "500",
    margin: 10,
    marginHorizontal: 20,
  },
  animationContainer: {
    ...StyleSheet.absoluteFillObject, // Animasyonu tüm ekranı kaplayacak şekilde yerleştirir
    zIndex: -1, // Arka planda olması için
  },
});
