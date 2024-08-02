
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#1A1A1A',
    padding: 0,
  },

  header: {
    height: 173,
    padding: 24,
    backgroundColor: '#0d0d0d',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    height: 56,
    backgroundColor: '#262626',
    marginTop: 8,
    borderRadius: 5,
    color: '#f2f2f2',
    padding: 16,
    fontSize: 16,
    flex: 1,
    marginRight: 7,
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#4EA8DE',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 24,
  },

  form: {
    marginTop: -35,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 42,
    width: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  listEmptyText: {
    color: '#808080',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold'
  },
  listEmptyText2: {
    color: '#808080',
    fontSize: 14,
    textAlign: 'center',
  },

  imageEmptyText: {
    margin: 20,
    color: '#fff',
    fontSize: 14,
    alignItems: 'center',
  }
})