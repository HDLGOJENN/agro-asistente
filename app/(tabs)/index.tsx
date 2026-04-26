import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { router } from 'expo-router';
import Svg, { Path, Circle, Line } from 'react-native-svg';

function WeatherIcon() {
  return (
    <Svg width={64} height={48} viewBox="0 0 64 48">
      <Circle cx={44} cy={18} r={10} fill="#FFD54F" />
      <Line x1={44} y1={4} x2={44} y2={8} stroke="#FFD54F" strokeWidth={2} strokeLinecap="round" />
      <Line x1={44} y1={28} x2={44} y2={32} stroke="#FFD54F" strokeWidth={2} strokeLinecap="round" />
      <Line x1={30} y1={18} x2={34} y2={18} stroke="#FFD54F" strokeWidth={2} strokeLinecap="round" />
      <Line x1={54} y1={18} x2={58} y2={18} stroke="#FFD54F" strokeWidth={2} strokeLinecap="round" />
      <Path d="M8 38 C8 38 6 36 6 33 C6 29 9 27 12 27 C13 24 16 22 20 22 C25 22 28 26 28 26 C30 26 34 28 34 32 C34 36 30 38 28 38 Z" fill="#B0BEC5" />
    </Svg>
  );
}

function PlantIcon() {
  return (
    <Svg width={40} height={48} viewBox="0 0 40 48">
      <Line x1={20} y1={48} x2={20} y2={20} stroke="#4CAF50" strokeWidth={2.5} strokeLinecap="round" />
      <Path d="M20 32 C20 32 10 28 8 18 C14 16 22 22 20 32Z" fill="#66BB6A" />
      <Path d="M20 26 C20 26 30 22 32 12 C26 10 18 16 20 26Z" fill="#4CAF50" />
    </Svg>
  );
}

const CROPS = [
  {
    id: '1',
    parcela: 'Parcela 1',
    nombre: 'Maíz',
    ubicacion: 'Los Reyes, Michoacán',
    alerta: 'Helada en 8 horas',
    riesgo: 'ALTO',
    emoji: '🌽',
  },
  {
    id: '2',
    parcela: 'Parcela 2',
    nombre: 'Frijol',
    ubicacion: 'Zamora, Michoacán',
    alerta: 'Lluvia intensa mañana',
    riesgo: 'MEDIO',
    emoji: '🌿',
  },
  {
    id: '3',
    parcela: 'Parcela 3',
    nombre: 'Tomate',
    ubicacion: 'Sahuayo, Michoacán',
    alerta: 'Condiciones favorables',
    riesgo: 'BAJO',
    emoji: '🍅',
  },
];

const RIESGO_STYLES: Record<string, { bg: string; text: string }> = {
  ALTO:  { bg: '#FFEBEE', text: '#E53935' },
  MEDIO: { bg: '#FFF8E1', text: '#F9A825' },
  BAJO:  { bg: '#E8F5E9', text: '#2E7D32' },
};

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#F7F8F5" />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Hola, Juan</Text>
        </View>

        {/* Alerta */}
        <Text style={styles.sectionTitle}>Resumen de hoy</Text>
        <TouchableOpacity style={styles.alertCard} activeOpacity={0.85}>
          <View style={styles.alertIcon}>
            <Svg width={28} height={28} viewBox="0 0 24 24">
              <Path d="M1 21L12 2L23 21H1Z" fill="#F44336" />
              <Path d="M11 9H13V14H11V9ZM11 15H13V17H11V15Z" fill="#fff" />
            </Svg>
          </View>
          <View style={styles.alertBody}>
            <Text style={styles.alertLabel}>Riesgo ALTO</Text>
            <Text style={styles.alertTitle}>Helada en 8 horas</Text>
            <Text style={styles.alertSub}>Afectará tu cultivo de Maíz</Text>
          </View>
          <Svg width={20} height={20} viewBox="0 0 24 24">
            <Path d="M9 18L15 12L9 6" stroke="#F44336" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </Svg>
        </TouchableOpacity>

        {/* Mis cultivos */}
        <Text style={styles.sectionTitle}>Mis cultivos</Text>

        <View style={styles.cropsContainer}>
          {CROPS.map((crop, index) => {
            const rs = RIESGO_STYLES[crop.riesgo];
            return (
              <TouchableOpacity
                key={crop.id}
                style={[
                  styles.cropCard,
                  index < CROPS.length - 1 && styles.cropCardBorder,
                ]}
                activeOpacity={0.75}
              >
                <Text style={styles.cropEmoji}>{crop.emoji}</Text>
                <View style={styles.cropBody}>
                  <Text style={styles.cropParcela}>{crop.parcela}</Text>
                  <Text style={styles.cropNombre}>{crop.nombre}</Text>
                  <Text style={styles.cropUbicacion}>{crop.ubicacion}</Text>
                  <Text style={[styles.cropAlerta, { color: rs.text }]}>
                    {crop.alerta}
                  </Text>
                </View>
                <View style={styles.cropRight}>
                  <View style={[styles.riesgoBadge, { backgroundColor: rs.bg }]}>
                    <Text style={[styles.riesgoText, { color: rs.text }]}>
                      {crop.riesgo}
                    </Text>
                  </View>
                  <Svg width={16} height={16} viewBox="0 0 24 24" style={{ marginTop: 'auto' }}>
                    <Path d="M9 18L15 12L9 6" stroke="#bbb" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </Svg>
                </View>
              </TouchableOpacity>
            );
          })}

        </View>

        <TouchableOpacity
          style={styles.addCard}
          activeOpacity={0.8}
          onPress={() => router.push('/add-crop')}
        >
          <View style={styles.plusCircle}>
            <Text style={styles.plusText}>+</Text>
          </View>
          <Text style={styles.addTitle}>Agregar cultivo</Text>
          <Text style={styles.addSub}>
            Registra tu cultivo y parcela{'\n'}para monitorearlo
          </Text>
        </TouchableOpacity>

        {/* ¿Cómo funciona? */}
        <View style={styles.infoCard}>
          <View style={styles.infoText}>
            <Text style={styles.infoTitle}>¿Cómo funciona?</Text>
            <Text style={styles.infoBody}>
              AgroAlerta monitorea el clima{'\n'}y te avisa para que tomes{'\n'}acción a tiempo.
            </Text>
          </View>
          <View style={styles.infoIcons}>
            <WeatherIcon />
            <PlantIcon />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F7F8F5' },
  scroll: { flex: 1 },
  scrollContent: { paddingHorizontal: 20, paddingTop: 30, paddingBottom: 32 },

  // Header
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 22 },
  menuBtn: { gap: 4, padding: 4, marginRight: 12 },
  menuLine: { width: 22, height: 2, backgroundColor: '#333', borderRadius: 2 },
  greeting: { flex: 1, fontSize: 20, fontWeight: '700', color: '#1a1a1a' },
  bellBtn: { padding: 4 },

  sectionTitle: { fontSize: 15, fontWeight: '700', color: '#1a1a1a', marginBottom: 10 },

  // Alert
  alertCard: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: '#FFF0F0', borderRadius: 16,
    padding: 16, marginBottom: 24,
    borderWidth: 1, borderColor: '#FFCDD2', gap: 12,
  },
  alertIcon: {
    width: 44, height: 44, borderRadius: 10,
    backgroundColor: '#FFEBEE', alignItems: 'center', justifyContent: 'center',
  },
  alertBody: { flex: 1 },
  alertLabel: { fontSize: 12, fontWeight: '700', color: '#E53935', textTransform: 'uppercase', letterSpacing: 0.4 },
  alertTitle: { fontSize: 16, fontWeight: '800', color: '#C62828', marginTop: 1 },
  alertSub: { fontSize: 12, color: '#E57373', marginTop: 2 },

  // Crops container
  cropsContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E8EDE5',
    marginBottom: 16,
    overflow: 'hidden',
  },
  cropCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    gap: 12,
  },
  cropCardBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  cropEmoji: { fontSize: 36, width: 44, textAlign: 'center' },
  cropBody: { flex: 1 },
  cropParcela: { fontSize: 11, color: '#999', fontWeight: '500', marginBottom: 1 },
  cropNombre: { fontSize: 15, fontWeight: '700', color: '#1a1a1a' },
  cropUbicacion: { fontSize: 11, color: '#aaa', marginTop: 1 },
  cropAlerta: { fontSize: 12, fontWeight: '600', marginTop: 3 },
  cropRight: { alignItems: 'flex-end', gap: 8 },
  riesgoBadge: {
    paddingHorizontal: 10, paddingVertical: 4,
    borderRadius: 8,
  },
  riesgoText: { fontSize: 12, fontWeight: '700', letterSpacing: 0.3 },

  // Add card (standalone)
  addCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#E8EDE5',
    borderStyle: 'dashed',
    marginBottom: 16,
  },
  plusCircle: {
    width: 44, height: 44, borderRadius: 22,
    backgroundColor: '#2e7d32',
    alignItems: 'center', justifyContent: 'center',
  },
  plusText: { fontSize: 26, color: '#fff', lineHeight: 30, fontWeight: '400' },
  addTitle: { fontSize: 15, fontWeight: '700', color: '#2e7d32', marginBottom: 4 },
  addSub: { fontSize: 13, color: '#888', textAlign: 'center', lineHeight: 18 },

  // Info card
  infoCard: {
    backgroundColor: '#F0F4EE', borderRadius: 16,
    padding: 18, flexDirection: 'row',
    alignItems: 'flex-end', overflow: 'hidden',
  },
  infoText: { flex: 1 },
  infoTitle: { fontSize: 14, fontWeight: '700', color: '#1a1a1a', marginBottom: 6 },
  infoBody: { fontSize: 12, color: '#555', lineHeight: 18 },
  infoIcons: { flexDirection: 'row', alignItems: 'flex-end' },
});