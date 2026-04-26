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
import styles from '@/src/modules/login/loginStyles'
import { LeaftIcon } from '@/assets/svg';


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
         <LeaftIcon/>
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