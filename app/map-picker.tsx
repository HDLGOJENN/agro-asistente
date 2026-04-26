import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import MapView, { Marker, MapPressEvent } from "react-native-maps";
import { router, useLocalSearchParams } from "expo-router";
import { useAppStore } from "@/src/store/useAppStore";

export default function MapPickerScreen() {
  const params = useLocalSearchParams();
  const setPickedLocation = useAppStore((s) => s.setPickedLocation);

  const initialLat = parseFloat(params.initialLat as string) || 19.0;
  const initialLng = parseFloat(params.initialLng as string) || -99.0;

  const [marker, setMarker] = useState({
    latitude: initialLat,
    longitude: initialLng,
  });

  const handleMapPress = (e: MapPressEvent) => {
    setMarker(e.nativeEvent.coordinate);
  };

  const handleConfirm = () => {
    // 🔥 Guarda en store y regresa
    setPickedLocation({ lat: marker.latitude, lng: marker.longitude });
    router.back();
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: initialLat,
          longitude: initialLng,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        onPress={handleMapPress}
      >
        <Marker coordinate={marker} />
      </MapView>

      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          📍 {marker.latitude.toFixed(5)}, {marker.longitude.toFixed(5)}
        </Text>
        <Text style={styles.hint}>Toca el mapa para mover el pin</Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.cancelBtn} onPress={() => router.back()}>
          <Text style={styles.cancelText}>Cancelar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.confirmBtn} onPress={handleConfirm}>
          <Text style={styles.confirmText}>Confirmar ubicación</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
  infoBox: {
    position: "absolute",
    top: 16,
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
    alignItems: "center",
  },
  infoText: { fontSize: 14, fontWeight: "600", color: "#333" },
  hint: { fontSize: 11, color: "#888", marginTop: 2 },
  footer: {
    flexDirection: "row",
    padding: 16,
    gap: 12,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  cancelBtn: {
    flex: 1,
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    alignItems: "center",
  },
  cancelText: { color: "#666", fontWeight: "600" },
  confirmBtn: {
    flex: 2,
    padding: 14,
    borderRadius: 12,
    backgroundColor: "#2e7d32",
    alignItems: "center",
  },
  confirmText: { color: "white", fontWeight: "700", fontSize: 15 },
});