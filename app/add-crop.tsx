import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';

const CROPS = [
  { id: 'maiz',   label: 'Maíz',    emoji: '🌽' },
  { id: 'cafe',   label: 'Café',    emoji: '☕' },
  { id: 'frijol', label: 'Frijol',  emoji: '🫘' },
  { id: 'tomate', label: 'Tomate',  emoji: '🍅' },
  { id: 'chile',  label: 'Chile',   emoji: '🌶️' },
  { id: 'agua',   label: 'Aguac.',  emoji: '🥑' },
  { id: 'mango',  label: 'Mango',   emoji: '🥭' },
  { id: 'arroz',  label: 'Arroz',   emoji: '🌾' },
  { id: 'papa',   label: 'Papa',    emoji: '🥔' },
  { id: 'cebolla',label: 'Cebolla', emoji: '🧅' },
];

export default function AddCropScreen() {
  const [selectedCrop, setSelectedCrop] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [size, setSize] = useState('');

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >

        {/* Nombre de la parcela */}
        <Text style={styles.label}>Nombre de la parcela</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej: Parcela Norte"
          placeholderTextColor="#bbb"
          value={name}
          onChangeText={setName}
        />

        {/* Tipo de cultivo */}
        <Text style={styles.label}>Tipo de cultivo</Text>
        <View style={styles.cropGrid}>
          {CROPS.map((c) => {
            const active = selectedCrop === c.id;
            return (
              <TouchableOpacity
                key={c.id}
                style={[styles.cropItem, active && styles.cropItemActive]}
                onPress={() => setSelectedCrop(c.id)}
                activeOpacity={0.75}
              >
                <Text style={styles.cropEmoji}>{c.emoji}</Text>
                <Text style={[styles.cropLabel, active && styles.cropLabelActive]}>
                  {c.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Ubicación */}
        <Text style={styles.label}>Ubicación de la parcela</Text>
        <View style={styles.inputRow}>
          <TextInput
            style={[styles.input, styles.inputFlex]}
            placeholder="Ingresa ubicación"
            placeholderTextColor="#bbb"
            value={location}
            onChangeText={setLocation}
          />
          <TouchableOpacity style={styles.pinBtn}>
            <Text style={styles.pinIcon}>📍</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.inputHint}>
          Usamos tu ubicación para monitorear el clima local
        </Text>

        {/* Tamaño */}
        <Text style={styles.label}>
          Tamaño <Text style={styles.optional}>(opcional)</Text>
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Ej: 2.5 hectáreas"
          placeholderTextColor="#bbb"
          value={size}
          onChangeText={setSize}
          keyboardType="decimal-pad"
        />

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Botón fijo */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}
        //   style={[
        //     styles.button,
        //     (!selectedCrop || !name) && styles.buttonDisabled,
        //   ]}
        //   activeOpacity={0.85}
        //   disabled={!selectedCrop || !name}
        >
          <Text style={styles.buttonText}>Guardar cultivo</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  backBtn: { padding: 4, marginRight: 10 },
  backArrow: { fontSize: 20, color: '#333' },
  headerText: { flex: 1 },
  headerTitle: { fontSize: 16, fontWeight: '700', color: '#1a1a1a' },
  headerSub: { fontSize: 12, color: '#999', marginTop: 1 },
  closeBtn: { padding: 4 },
  closeX: { fontSize: 16, color: '#888' },

  scroll: { flex: 1 },
  scrollContent: { paddingHorizontal: 20, paddingTop: 18 },

  intro: {
    fontSize: 13,
    color: '#777',
    lineHeight: 20,
    marginBottom: 22,
  },

  label: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  optional: {
    fontWeight: '400',
    color: '#aaa',
  },

  // Input
  input: {
    borderWidth: 1.5,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 13,
    fontSize: 14,
    color: '#222',
    backgroundColor: '#fff',
    marginBottom: 18,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 6,
  },
  inputFlex: { flex: 1, marginBottom: 0 },
  pinBtn: {
    width: 48,
    height: 48,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  pinIcon: { fontSize: 20 },
  inputHint: {
    fontSize: 11,
    color: '#aaa',
    marginBottom: 20,
    marginTop: 2,
  },

  // Crop grid
  cropGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 22,
  },
  cropItem: {
    width: '18%',
    aspectRatio: 1,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#E8E8E8',
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  },
  cropItemActive: {
    borderColor: '#2e7d32',
    backgroundColor: '#F0F7F0',
  },
  cropEmoji: { fontSize: 22 },
  cropLabel: {
    fontSize: 10,
    color: '#888',
    fontWeight: '500',
    textAlign: 'center',
  },
  cropLabelActive: {
    color: '#2e7d32',
    fontWeight: '700',
  },

  // Footer button
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    paddingBottom: 32,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  button: {
    backgroundColor: '#2e7d32',
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#A5C8A7',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
});