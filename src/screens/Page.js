import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';

const ColdWarPage = () => {
  return (
    <View>
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>
        A Guerra Fria foi um período de tensão política e militar entre os Estados Unidos e seus aliados da OTAN e a União Soviética e seus aliados do Pacto de Varsóvia, após a Segunda Guerra Mundial. As duas superpotências competiam pelo domínio global, mas evitavam o conflito direto, resultando em uma série de conflitos indiretos e na corrida armamentista. A Guerra Fria teve um impacto significativo nas relações internacionais, moldando o mundo moderno.
      </Text>
      <Image
        source={{ uri: 'https://example.com/sua-imagem.jpg' }}
        style={styles.image}
      />
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'justify',
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'cover',
  },
});

export default ColdWarPage;
