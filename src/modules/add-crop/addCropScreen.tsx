import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { useState, useEffect } from "react";
import styles from "@/src/modules/add-crop/addCropStyles";
import { LocationPinIcon } from "@/assets/svg";
import { router } from "expo-router";
import { createParcela } from "@/src/api/services/parcela.service";
import { useAppStore } from "@/src/store/useAppStore";
import { useLocation } from "@/scripts/useLocation";

const CROPS = [
  { id: "maiz", label: "Maíz", emoji: "🌽", dbId: "f8637541-00f2-4abe-88f2-02d576eb37e8" },
  { id: "tomate", label: "Jitomate", emoji: "🍅", dbId: "c09f1415-a9ac-47d2-96f2-fb2ceb1e0659" },
  { id: "agua", label: "Aguac.", emoji: "🥑", dbId: "8d9111a8-cc47-4163-8255-f13e0deb5725" },
];

export default function AddCropScreen() {
  const [selectedCrop, setSelectedCrop] = useState<string | null>(null);
  const [name, setName] = useState("");
  const { location, error, permissionDenied } = useLocation();
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [inputLocation, setInputLocation] = useState("");
  const user = useAppStore((s) => s.user);

  // 🆕 Lee coords desde el store cuando regresa del mapa
  const pickedLocation = useAppStore((s) => s.pickedLocation);
  const setPickedLocation = useAppStore((s) => s.setPickedLocation);

  useEffect(() => {
    if (pickedLocation) {
      setCoords({ lat: pickedLocation.lat, lng: pickedLocation.lng });
      setInputLocation(`${pickedLocation.lat.toFixed(5)}, ${pickedLocation.lng.toFixed(5)}`);
      setPickedLocation(null); // limpiar después de leer
    }
  }, [pickedLocation]);

  const handleSave = async () => {
    if (!selectedCrop || !name || !user) return;

    const lat = coords?.lat ?? 19.0;
    const lng = coords?.lng ?? -99.0;

    try {
      const cropSelected = CROPS.find((c) => c.id === selectedCrop);
      await createParcela({
        agricultor_id: user.id,
        tipo_cultivo_id: cropSelected?.dbId!,
        nombre_parcela: name,
        latitud: lat,
        longitud: lng,
      });
      router.back();
    } catch (error) {
      console.log("Error creando parcela", error);
    }
  };

  const handleUseCurrentLocation = () => {
    if (location) {
      setCoords({ lat: location.latitude, lng: location.longitude });
      setInputLocation(`${location.latitude.toFixed(5)}, ${location.longitude.toFixed(5)}`);
    }
  };

  const handleOpenMap = () => {
    router.push({
      pathname: "/map-picker",
      params: {
        initialLat: coords?.lat ?? location?.latitude ?? 19.0,
        initialLng: coords?.lng ?? location?.longitude ?? -99.0,
      },
    });
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.label}>Nombre de la parcela</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej: Parcela Norte"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Tipo de cultivo</Text>
        <View style={styles.cropGrid}>
          {CROPS.map((c) => {
            const active = selectedCrop === c.id;
            return (
              <TouchableOpacity
                key={c.id}
                style={[styles.cropItem, active && styles.cropItemActive]}
                onPress={() => setSelectedCrop(c.id)}
              >
                <Text style={styles.cropEmoji}>{c.emoji}</Text>
                <Text>{c.label}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <Text style={styles.label}>Ubicación</Text>

        <View style={styles.inputRow}>
          <TextInput
            style={[styles.input, styles.inputFlex]}
            placeholder="Ubicación"
            value={inputLocation}
            onChangeText={setInputLocation}
            editable={false}
          />

          <TouchableOpacity style={styles.pinBtn} onPress={handleUseCurrentLocation}>
            <LocationPinIcon width={22} height={22} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.pinBtn} onPress={handleOpenMap}>
            <Text style={{ fontSize: 20 }}>🗺️</Text>
          </TouchableOpacity>
        </View>

        {coords && (
          <Text style={{ color: "green", fontSize: 12, marginTop: 4 }}>
            ✅ Ubicación capturada
          </Text>
        )}

        {error && <Text style={{ color: "red", marginTop: 4 }}>{error}</Text>}

        {permissionDenied && (
          <Text style={{ color: "orange", marginTop: 4 }}>
            Activa permisos de ubicación en ajustes
          </Text>
        )}

        <View style={{ height: 100 }} />
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.button, (!selectedCrop || !name) && styles.buttonDisabled]}
          disabled={!selectedCrop || !name}
          onPress={handleSave}
        >
          <Text style={styles.buttonText}>Guardar cultivo</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}