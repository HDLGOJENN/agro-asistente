import { supabase } from '../client/supabase';

export async function getParcelas() {
const { data, error } = await supabase
  .from('parcelas')
  .select(`
    *,
    tipos_cultivo(nombre)
  `);

  if (error) {
    console.log('ERROR:', error);
    throw error;
  }

  console.log('PARCELAS:', data);
  return data;
}

export async function getParcelasByUser(userId: string) {
  const { data, error } = await supabase
    .from('parcelas')
    .select(`
      *,
      tipos_cultivo(nombre)
    `)
    .eq('agricultor_id', userId);

  if (error) {
    console.log('ERROR parcelas:', error);
    throw error;
  }

  return data;
}

export async function createParcela(payload: {
  agricultor_id: string;
  tipo_cultivo_id: string;
  nombre_parcela: string;
  latitud: number;
  longitud: number;
}) {
  const { error } = await supabase
    .from('parcelas')
    .insert([payload]);

  if (error) {
    console.log('ERROR createParcela:', error);
    throw error;
  }
}