import { supabase } from '../client/supabase';

export async function loginWithPhone(phone: string) {
  const cleanPhone = phone.replace(/\D/g, ''); // quita espacios, +, etc

  const { data, error } = await supabase
    .from('agricultores')
    .select('*')
    .eq('telefono_whatsapp', cleanPhone) // 👈 CORRECTO
    .single();

  if (error || !data) {
    throw new Error('Número no registrado');
  }

  return data;
}