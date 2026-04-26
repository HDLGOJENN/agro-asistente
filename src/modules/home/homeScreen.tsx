import {   View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar, } from 'react-native';
import { router } from 'expo-router';
import Svg, { Path, Circle, Line } from 'react-native-svg';
import styles from './homeStyles';
import {WeatherCloudIcon, PlantStemIcon } from '@/assets/svg'

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
            <WeatherCloudIcon/>
            <PlantStemIcon/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}