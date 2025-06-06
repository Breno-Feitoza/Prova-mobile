import React, { useState } from 'react';
import { Button, View } from 'react-native';
import CardPiada from '../../Components/Cardpiada/cardpiada';
import { styles } from './styles';

const Home = () => {
  const [mostrarPiada, setMostrarPiada] = useState(false);

  const handlejoke = () => {
    setMostrarPiada(!mostrarPiada);
  };

  return (
    <View style= {styles.container}>
      <Button title={mostrarPiada ? "Ocultar Piada" : "Mostrar Piada"} onPress={handlejoke} />
      {mostrarPiada && <CardPiada />}
    </View>
  );
};

export default Home;
