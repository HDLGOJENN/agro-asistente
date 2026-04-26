import { View, Text } from 'react-native';
import styles from '@/src/modules/home/homeStyles';

// 🔤 Normalizar texto (quita acentos)
const normalize = (text?: string) =>
  text?.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() || "";

// 🌱 Mapa de cultivos → emoji
const cropIcons: Record<string, string> = {
  maiz: '🌽',
  jitomate: '🍅',
  tomate: '🍅',
  frijol: '🌱',
  aguacate: '🥑',
};

// 🎯 Obtener emoji
const getEmoji = (tipo?: string) => {
  if (!tipo) return '🌿';

  const t = normalize(tipo);

  for (const key in cropIcons) {
    if (t.includes(key)) return cropIcons[key];
  }

  return '🌿';
};

// 🎨 Colores por riesgo
const getColor = (riesgo: string) => {
  if (riesgo === 'ALTO') return { bg: '#FFEBEE', text: '#E53935' };
  if (riesgo === 'MEDIO') return { bg: '#FFF8E1', text: '#FB8C00' };
  return { bg: '#E8F5E9', text: '#2E7D32' };
};

// 🎲 Simulación de riesgo (temporal)
const getFakeRisk = (id?: string) => {
  if (!id) return 'BAJO';

  const num = id.charCodeAt(0);

  if (num % 3 === 0) return 'ALTO';
  if (num % 2 === 0) return 'MEDIO';
  return 'BAJO';
};

// 💬 Mensaje según riesgo
const getFakeMessage = (riesgo: string) => {
  if (riesgo === 'ALTO') return 'Helada en 8 horas';
  if (riesgo === 'MEDIO') return 'Lluvia intensa mañana';
  return 'Condiciones favorables';
};

export default function ParcelCard({ item }: any) {
  // 🧠 datos seguros
  const tipo = item?.tipos_cultivo?.nombre || '';
  const nombre = item?.nombre_parcela || 'Parcela';
  const lat = item?.latitud;
  const lon = item?.longitud;

  const riesgo = getFakeRisk(item?.id);
  const alerta = getFakeMessage(riesgo);

  const color = getColor(riesgo);

  return (
    <View style={[styles.cropCard, styles.cropCardBorder]}>

      {/* 🌱 ICONO */}
      <Text style={styles.cropEmoji}>
        {getEmoji(tipo)}
      </Text>

      {/* 📄 INFO */}
      <View style={styles.cropBody}>
        <Text style={styles.cropParcela}>
          {nombre}
        </Text>

        <Text style={styles.cropNombre}>
          {tipo || 'Cultivo'}
        </Text>

        <Text style={styles.cropUbicacion}>
          Lat: {lat?.toFixed?.(2) ?? '--'} | Lon: {lon?.toFixed?.(2) ?? '--'}
        </Text>

        <Text style={[styles.cropAlerta, { color: color.text }]}>
          {alerta}
        </Text>
      </View>

      {/* 🚨 BADGE */}
      <View style={styles.cropRight}>
        <View style={[styles.riesgoBadge, { backgroundColor: color.bg }]}>
          <Text style={[styles.riesgoText, { color: color.text }]}>
            {riesgo}
          </Text>
        </View>
      </View>

    </View>
  );
}