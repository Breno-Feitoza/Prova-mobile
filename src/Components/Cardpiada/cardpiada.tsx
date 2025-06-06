import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { styles } from './styles';

interface Joke {
  category: string;
  type: string;
  piada?: string;
  setup?: string;
  delivery?: string;
}

const CardPiada = () => {
  const [piada, setPiada] = useState<Joke | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPiada = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://v2.jokeapi.dev/joke/Any?lang=pt');
      const data = await response.json();
      setPiada(data);
      setError(null);
    } catch (err) {
      setError('Erro ao carregar a piada.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPiada();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Piada</Text>
      {piada?.type === 'single' && <Text>{piada.piada}</Text>}
      {piada?.type === 'twopart' && (
        <>
          <Text>{piada.setup}</Text>
          <Text>{piada.delivery}</Text>
        </>
      )}
    </View>
  );
};

export default CardPiada;
