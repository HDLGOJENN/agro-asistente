import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';
import Svg, { Path } from 'react-native-svg';

function LeafIcon() {
  return (
    <Svg width={68} height={68} viewBox="0 0 36 36">
      <Path
        d="M18 4 C18 4 8 10 8 20 C8 27 13 32 18 33 C23 32 28 27 28 20 C28 10 18 4 18 4Z"
        fill="#43a843"
      />
      <Path
        d="M18 33 L18 18"
        stroke="#2e7d32"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        d="M18 24 C18 24 13 20 10 18"
        stroke="#2e7d32"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default function LoginScreen() {
  const [phone, setPhone] = useState('');

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Hero image con logo y texto superpuestos */}
      <ImageBackground
        source={require('@/assets/images/hero-field.png')}
        style={styles.heroImage}
        resizeMode="cover"
      >
        <View style={styles.logoOverlay}>
          <LeafIcon />
          <Text style={styles.brandName}>AgroAlerta</Text>
          <Text style={styles.brandSub}>
            Sistema de Alerta Temprana{'\n'}para Cultivos
          </Text>
        </View>
      </ImageBackground>

      <View style={styles.content}>
        <Text style={styles.tagline}>
          Protege tu cultivo,{'\n'}nosotros te avisamos.
        </Text>

        <View style={styles.inputWrap}>
          <View style={styles.flagPrefix}>
            <Text style={styles.flagEmoji}>🇲🇽</Text>
            <Text style={styles.prefixText}>+52 ·</Text>
          </View>
          <TextInput
            placeholder="55 1234 5678"
            placeholderTextColor="#bbb"
            value={phone}
            onChangeText={setPhone}
            style={styles.phoneInput}
            keyboardType="phone-pad"
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.85}
          onPress={() => router.replace('/(tabs)')}
        >
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>
          Te enviaremos alertas por WhatsApp y SMS.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heroImage: {
    width: '100%',
    height: 500,
    justifyContent: 'flex-start',
  },
  logoOverlay: {
    alignItems: 'center',
    paddingTop: 90,
    paddingBottom: 12,
    paddingHorizontal: 24,
  },
  brandName: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1e6b0e',
    letterSpacing: -0.5,
    marginTop: 4,
  },
  brandSub: {
    fontSize: 13,
    color: '#555',
    textAlign: 'center',
    marginTop: 2,
    lineHeight: 18,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  tagline: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1a1a1a',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 20,
  },
  inputWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#d0d0d0',
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#fff',
    marginBottom: 14,
    height: 52,
  },
  flagPrefix: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 12,
    height: '100%',
    borderRightWidth: 1.5,
    borderRightColor: '#e0e0e0',
    backgroundColor: '#fafafa',
  },
  flagEmoji: {
    fontSize: 20,
  },
  prefixText: {
    fontSize: 14,
    color: '#444',
    fontWeight: '600',
  },
  phoneInput: {
    flex: 1,
    paddingHorizontal: 12,
    fontSize: 15,
    color: '#222',
  },
  button: {
    backgroundColor: '#2e7d32',
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 14,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  footer: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
    lineHeight: 18,
  },
});