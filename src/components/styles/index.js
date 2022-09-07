import { StyleSheet } from "react-native";

const BTN_COLOR = '#990099';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
    marginRight: 8
  },
  testing: { opacity: 0 },
  screenTitle: { fontSize: 22, textAlign: 'center', marginBottom: 16 },
  textMedium: { fontSize: 18 },
  error: { color: 'red', fontWeight: 'bold', fontSize: 10, marginTop: -4 },
  formLabel: { fontWeight: 'bold', fontSize: 16 },
  formButton: {
    container: { padding: 12, width: '100%', backgroundColor: BTN_COLOR, marginTop: '5%' },
    text: { color: 'white', textAlign: 'center' },
  },
  input: {
    text: { padding: 12, borderColor: 'black', borderWidth: 1, borderStyle: 'solid', marginBottom: 8 },
    textArea: {
      padding: 12,
      height: 160,
      borderColor: 'black',
      borderWidth: 1,
      borderStyle: 'solid',
      textAlignVertical: 'top'
    }
  },
  listItem: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
    width: '100%',
    flex: 1,
    marginVertical: 2
  }
});