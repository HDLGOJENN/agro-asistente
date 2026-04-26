import { StyleSheet } from 'react-native';

export default StyleSheet.create({
 safe: { flex: 1, backgroundColor: '#F7F8F5' },
  scroll: { flex: 1 },
  scrollContent: { paddingHorizontal: 20, paddingTop: 30, paddingBottom: 32 },

  // Header
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 22 },
  menuBtn: { gap: 4, padding: 4, marginRight: 12 },
  menuLine: { width: 22, height: 2, backgroundColor: '#333', borderRadius: 2 },
  greeting: { flex: 1, fontSize: 20, fontWeight: '700', color: '#1a1a1a' },
  bellBtn: { padding: 4 },

  sectionTitle: { fontSize: 15, fontWeight: '700', color: '#1a1a1a', marginBottom: 10 },

  // Alert
  alertCard: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: '#FFF0F0', borderRadius: 16,
    padding: 16, marginBottom: 24,
    borderWidth: 1, borderColor: '#FFCDD2', gap: 12,
  },
  alertIcon: {
    width: 44, height: 44, borderRadius: 10,
    backgroundColor: '#FFEBEE', alignItems: 'center', justifyContent: 'center',
  },
  alertBody: { flex: 1 },
  alertLabel: { fontSize: 12, fontWeight: '700', color: '#E53935', textTransform: 'uppercase', letterSpacing: 0.4 },
  alertTitle: { fontSize: 16, fontWeight: '800', color: '#C62828', marginTop: 1 },
  alertSub: { fontSize: 12, color: '#E57373', marginTop: 2 },

  // Crops container
  cropsContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E8EDE5',
    marginBottom: 16,
    overflow: 'hidden',
  },
  cropCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    gap: 12,
  },
  cropCardBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  cropEmoji: { fontSize: 36, width: 44, textAlign: 'center' },
  cropBody: { flex: 1 },
  cropParcela: { fontSize: 11, color: '#999', fontWeight: '500', marginBottom: 1 },
  cropNombre: { fontSize: 15, fontWeight: '700', color: '#1a1a1a' },
  cropUbicacion: { fontSize: 11, color: '#aaa', marginTop: 1 },
  cropAlerta: { fontSize: 12, fontWeight: '600', marginTop: 3 },
  cropRight: { alignItems: 'flex-end', gap: 8 },
  riesgoBadge: {
    paddingHorizontal: 10, paddingVertical: 4,
    borderRadius: 8,
  },
  riesgoText: { fontSize: 12, fontWeight: '700', letterSpacing: 0.3 },

  // Add card (standalone)
  addCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#E8EDE5',
    borderStyle: 'dashed',
    marginBottom: 16,
  },
  plusCircle: {
    width: 44, height: 44, borderRadius: 22,
    backgroundColor: '#2e7d32',
    alignItems: 'center', justifyContent: 'center',
  },
  plusText: { fontSize: 26, color: '#fff', lineHeight: 30, fontWeight: '400' },
  addTitle: { fontSize: 15, fontWeight: '700', color: '#2e7d32', marginBottom: 4 },
  addSub: { fontSize: 13, color: '#888', textAlign: 'center', lineHeight: 18 },

  // Info card
  infoCard: {
    backgroundColor: '#F0F4EE', borderRadius: 16,
    padding: 18, flexDirection: 'row',
    alignItems: 'flex-end', overflow: 'hidden',
  },
  infoText: { flex: 1 },
  infoTitle: { fontSize: 14, fontWeight: '700', color: '#1a1a1a', marginBottom: 6 },
  infoBody: { fontSize: 12, color: '#555', lineHeight: 18 },
  infoIcons: { flexDirection: 'row', alignItems: 'flex-end' },
});