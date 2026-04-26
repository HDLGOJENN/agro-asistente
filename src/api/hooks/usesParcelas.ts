import { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { getParcelasByUser } from '@/src/api/services/parcela.service';
import { useAppStore } from '@/src/store/useAppStore';

export function useParcelas() {
  const [parcelas, setParcelas] = useState<any[]>([]);
  const user = useAppStore((state) => state.user);

  const load = async () => {
    try {
      if (!user?.id) {
        console.log('⚠️ No user yet');
        return;
      }

      console.log('🔄 Loading parcelas for:', user.id);

      const data = await getParcelasByUser(user.id);

      console.log('✅ Parcelas:', data);

      setParcelas(data || []);
    } catch (error) {
      console.log('❌ Error loading parcelas:', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      load();
    }, [user?.id])
  );

  return { parcelas, reload: load };
}