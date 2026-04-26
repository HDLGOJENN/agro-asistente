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
import styles from '@/src/modules/add-crop/addCropStyles'
import { LocationPinIcon } from '@/assets/svg';
import { router } from 'expo-router';

const CROPS = [
    { id: 'maiz', label: 'Maíz', emoji: '🌽' },
    //   { id: 'cafe',   label: 'Café',    emoji: '☕' },
    //   { id: 'frijol', label: 'Frijol',  emoji: '🫘' },
    { id: 'tomate', label: 'Jitomate', emoji: '🍅' },
    //   { id: 'chile',  label: 'Chile',   emoji: '🌶️' },
    { id: 'agua', label: 'Aguac.', emoji: '🥑' },
    //   { id: 'mango',  label: 'Mango',   emoji: '🥭' },
    //   { id: 'arroz',  label: 'Arroz',   emoji: '🌾' },
    //   { id: 'papa',   label: 'Papa',    emoji: '🥔' },
    //   { id: 'cebolla',label: 'Cebolla', emoji: '🧅' },
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
                        <LocationPinIcon width={22} height={22} />
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
