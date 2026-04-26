import { useEffect, useState } from 'react';
import { getParcelasByUser } from '@/src/api/services/parcela.service';
import { useAppStore } from '@/src/store/useAppStore';

export function useParcelas() {
  const [parcelas, setParcelas] = useState([]);
  const user = useAppStore((s) => s.user);

  useEffect(() => {
    if (!user) return;

    load();
  }, [user]);

  const load = async () => {
    const data = await getParcelasByUser(user.id);
    setParcelas(data);
  };

  return { parcelas };
}