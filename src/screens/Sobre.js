import * as react from 'react';
import { useCallback } from 'react';
import { Text, Button, View, Image } from 'react-native';
import style from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import ImgFoto from '../../assets/eu.png';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


export default function PageTree ({ navigation }) {
  const [fontsLoaded] = useFonts({
    'Fabulous': require('../../assets/fonts/Fabulous.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={style.container}>
    <LinearGradient
        // Background Linear Gradient
        colors={['#F8EDE1', 'transparent']}
        style={style.background}
      />
      <View style={style.content}>
      <Text style={{fontFamily: "Fabulous", lineHeight: 18, fontSize:20, paddingLeft:8, paddingRight: 8, paddingTop: 10, alignItems: "center"}}> Sobre mim </Text>
        <Image source={ImgFoto} style={style.img4}/>
        <Text style={{fontFamily: "Fabulous", lineHeight: 18, fontSize:18, paddingLeft:8, paddingRight: 8, paddingTop: 10, alignItems: "center"}}>Mirian Oliveira</Text>
        <Text style={{fontFamily: "Fabulous", lineHeight: 18, fontSize:18, paddingLeft:8, paddingRight: 8, paddingTop: 10, alignItems: "center"}}>Email: mo727783@gmail.com </Text>
        <Text style={{fontFamily: "Fabulous", lineHeight: 18, fontSize:18, paddingLeft:8, paddingRight: 8, paddingTop: 10, alignItems: "center"}}> Número: (18) 991431262</Text>
        <Text style={{fontFamily: "Fabulous", lineHeight: 18, fontSize:18, paddingLeft:8, paddingRight: 8, paddingTop: 10, alignItems: "center"}}> RM: 07676</Text>
        <Text> </Text>
        <Text> </Text>
        <Button
          title="Voltar"
          onPress={() => navigation.goBack()}
          color="#341d08"
        />
      </View>
    </View>
  );
}
