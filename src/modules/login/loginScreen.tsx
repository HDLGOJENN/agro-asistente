import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';
import styles from '@/src/modules/login/loginStyles';
import { LeaftIcon } from '@/assets/svg';
import { loginWithPhone } from '@/src/api/services/auth.service';
import { useAppStore } from '@/src/store/useAppStore';

export default function LoginScreen() {
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const setUser = useAppStore((s) => s.setUser);

  const handleLogin = async () => {
    if (!phone) return;

    try {
      setLoading(true);
      setErrorMsg('');

      const user = await loginWithPhone(phone);

      setUser(user);

      router.replace('/(tabs)');
    } catch (error) {
      setErrorMsg('Número no registrado');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* 🌄 HERO IMAGE */}
      <ImageBackground
        source={require('@/assets/images/hero-field.png')}
        style={styles.heroImage}
        resizeMode="cover"
      >
        <View style={styles.logoOverlay}>
          <LeaftIcon />
          <Text style={styles.brandName}>AgroAlerta</Text>
          <Text style={styles.brandSub}>
            Sistema de Alerta Temprana{'\n'}para Cultivos
          </Text>
        </View>
      </ImageBackground>

      {/* 📦 CONTENIDO */}
      <View style={styles.content}>
        <Text style={styles.tagline}>
          Protege tu cultivo,{'\n'}nosotros te avisamos.
        </Text>

        <View style={styles.inputWrap}>
          <TextInput
            placeholder="+52 55 1234 5678"
            value={phone}
            onChangeText={setPhone}
            style={styles.phoneInput}
            keyboardType="phone-pad"
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Continuar</Text>
          )}
        </TouchableOpacity>

        {errorMsg && (
          <Text style={{ color: 'red', marginTop: 10 }}>
            {errorMsg}
          </Text>
        )}

        <Text style={styles.footer}>
          Te enviaremos alertas por WhatsApp y SMS.
        </Text>
      </View>
    </SafeAreaView>
  );
}