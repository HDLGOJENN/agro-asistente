import { StyleSheet } from "react-native";

export default StyleSheet.create({
safe: { flex: 1, backgroundColor: '#fff' },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  backBtn: { padding: 4, marginRight: 10 },
  backArrow: { fontSize: 20, color: '#333' },
  headerText: { flex: 1 },
  headerTitle: { fontSize: 16, fontWeight: '700', color: '#1a1a1a' },
  headerSub: { fontSize: 12, color: '#999', marginTop: 1 },
  closeBtn: { padding: 4 },
  closeX: { fontSize: 16, color: '#888' },

  scroll: { flex: 1 },
  scrollContent: { paddingHorizontal: 20, paddingTop: 18 },

  intro: {
    fontSize: 13,
    color: '#777',
    lineHeight: 20,
    marginBottom: 22,
  },

  label: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  optional: {
    fontWeight: '400',
    color: '#aaa',
  },

  // Input
  input: {
    borderWidth: 1.5,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 13,
    fontSize: 14,
    color: '#222',
    backgroundColor: '#fff',
    marginBottom: 18,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 6,
  },
  inputFlex: { flex: 1, marginBottom: 0 },
  pinBtn: {
    width: 48,
    height: 48,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  pinIcon: { fontSize: 20 },
  inputHint: {
    fontSize: 11,
    color: '#aaa',
    marginBottom: 20,
    marginTop: 2,
  },

  // Crop grid
  cropGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    gap: 10,
  },
  cropItem: {
    width: '18%',
    aspectRatio: 1,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#E8E8E8',
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  },
  cropItemActive: {
    borderColor: '#2e7d32',
    backgroundColor: '#F0F7F0',
  },
  cropEmoji: { fontSize: 22 },
  cropLabel: {
    fontSize: 10,
    color: '#888',
    fontWeight: '500',
    textAlign: 'center',
  },
  cropLabelActive: {
    color: '#2e7d32',
    fontWeight: '700',
  },

  // Footer button
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    paddingBottom: 32,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  button: {
    backgroundColor: '#2e7d32',
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#A5C8A7',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.2,
  },

})