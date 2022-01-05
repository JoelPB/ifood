import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import {Text, View, SafeAreaView, Alert, ActivityIndicator} from 'react-native';
import {  } from './style';

// import banner from '../../assets/img/banner.png';
// import Button  from '../../components/Button';

export default function Principal() {

  const [banners, setBanner] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [restaurantes, setRestaurantes] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {

    async function buscaDados(){

      try{

        const response = await fetch('https://my-json-server.typicode.com/pablohdev/app-ifood-clone/db');
        const data = await response.json();

        setLoaded = True;

        setBanner(data.banner_principal);
        setBanner(data.categorias);
        setBanner(data.restaurantes);

      }catch(e){
        Alert.alert('Erro ao consultar'+e);
      }
    }

    buscaDados();
  }, [])

  const ViewHome = (props) => { 
    return (
      <Text>Principal</Text>
    )
  }

  return (
    <>
      <StatusBar style='theme-dark' />
      <SafeAreaView>
        {loaded ? (
          <ViewHome />
        ):
        (
          <View>
            <ActivityIndicator color='F0001A' size='large'/>
          </View>
        )}
      </SafeAreaView>
    </>
  );
}
