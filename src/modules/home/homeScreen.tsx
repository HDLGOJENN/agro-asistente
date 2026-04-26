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
import styles from './homeStyles';
import { WeatherCloudIcon, PlantStemIcon } from '@/assets/svg'
import { useParcelas } from '@/src/api/hooks/usesParcelas'
import ParcelCard from '@/components/Parcelas/ParcelCard'
import { useAppStore } from '@/src/store/useAppStore';

export default function HomeScreen() {
  const { parcelas } = useParcelas();
  const user = useAppStore((s) => s.user);
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
          <Text style={styles.greeting}>
            Hola, {user?.nombre_completo || 'Usuario'}
          </Text>
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
          {parcelas.map((item: any, index: number) => (
            <ParcelCard
              key={item.id}
              item={item}
            />
          ))}
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
            <WeatherCloudIcon />
            <PlantStemIcon />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}