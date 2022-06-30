import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useState, useEffect } from "react";
import axios from 'axios';

export default function App() {
  const [alumnos, setAlumnos] = useState([])
  useEffect(() => {
    async function getAllAlumnos() {
      try {
        console.log('hola' + '6')
        const alumnos = await axios.get('http://10.0.2.2:8000/api/related/')
        console.log(alumnos.data)
        setAlumnos(alumnos.data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllAlumnos()
  }, [])
  return (
    <View style={styles.container}>
      <Text>Forros</Text>
      <FlatList
        data={alumnos}
        renderItem={({item})=><Text>{item.estado}, {item.legajoalumno.nombre}</Text>}
      /> 

      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
