import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { useState } from 'react';
import styles from '@/src/modules/add-crop/addCropStyles';
import { LocationPinIcon } from '@/assets/svg';
import { router } from 'expo-router';
import { createParcela } from '@/src/api/services/parcela.service';
import { useAppStore } from '@/src/store/useAppStore';

// ⚠️ IMPORTANTE: usa IDs reales de tu DB
const CROPS = [
  { id: 'maiz', label: 'Maíz', emoji: '🌽', dbId: 'f8637541-00f2-4abe-88f2-02d576eb37e8' },
  { id: 'tomate', label: 'Jitomate', emoji: '🍅', dbId: 'c09f1415-a9ac-47d2-96f2-fb2ceb1e0659' },
  { id: 'agua', label: 'Aguac.', emoji: '🥑', dbId: '8d9111a8-cc47-4163-8255-f13e0deb5725' },
];

export default function AddCropScreen() {
  const [selectedCrop, setSelectedCrop] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  const user = useAppStore((s) => s.user);

  const handleSave = async () => {
    if (!selectedCrop || !name || !user) return;

    try {
      const cropSelected = CROPS.find(c => c.id === selectedCrop);

      await createParcela({
        agricultor_id: user.id,
        tipo_cultivo_id: cropSelected?.dbId!,
        nombre_parcela: name,
        latitud: 19.0,   // temporal
        longitud: -99.0, // temporal
      });

      router.back(); // 🔥 regresa y refresca home

    } catch (error) {
      console.log('Error creando parcela', error);
    }
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
            value={location}
            onChangeText={setLocation}
          />
          <TouchableOpacity style={styles.pinBtn}>
            <LocationPinIcon width={22} height={22} />
          </TouchableOpacity>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[
            styles.button,
            (!selectedCrop || !name) && styles.buttonDisabled,
          ]}
          disabled={!selectedCrop || !name}
          onPress={handleSave}
        >
          <Text style={styles.buttonText}>Guardar cultivo</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}