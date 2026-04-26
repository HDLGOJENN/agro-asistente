import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

interface LocationCoords {
  latitude: number;
  longitude: number;
}

export function useLocation() {
  const [location, setLocation] = useState<LocationCoords | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [permissionDenied, setPermissionDenied] = useState(false);

  useEffect(() => {
    async function init() {
      try {
        // 1. Pedir permiso
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
          setPermissionDenied(true);
          setError('Necesitamos tu ubicación para mostrar tiendas cercanas');
          return;
        }

        // 2. Obtener ubicación
        const position = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.High,
        });

        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });

        console.log('useLocation', 'Location obtained successfully');
      } catch (err: any) {
        console.log('useLocation', 'Error getting location', err);
        setError(err.message || 'Error obteniendo ubicación');
      }
    }

    init();
  }, []);

  return { location, error, permissionDenied };
}