import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  Container: {
    padding: 10,
    width: 'auto',
    backgroundColor: '#262626',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
  },

  name:{
    flex: 1,
    color: '#ffffff',
    fontSize: 14,
    marginLeft: 16,
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 24,
  },

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
    marginLeft: 20,
    marginTop: 8,
    padding: 15,
    justifyContent: 'space-between',
    backgroundColor: '#262626',
    borderRadius: 8,
  },


  taskText: {
    fontSize: 16,
  },
  completedText: {
    fontSize: 16,
    color: 'green',
  },
})