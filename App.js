import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

// Pages Link
import Home from './pages/home';


export default function App() {

  let [fontLoaded] = useFonts({
    'sfBold': require('./assets/fonts/SFUIText-Bold.otf'),
    'sfBoldItalic': require('./assets/fonts/SFUIText-BoldItalic.otf'),
    'sfHeavy': require('./assets/fonts/SFUIText-Heavy.otf'),
    'sfHeavyItalic': require('./assets/fonts/SFUIText-HeavyItalic.otf'),
    'sfItalic': require('./assets/fonts/SFUIText-Italic.otf'),
    'sfLight': require('./assets/fonts/SFUIText-Light.otf'),
    'sfLightItalic': require('./assets/fonts/SFUIText-LightItalic.otf'),
    'sfMedium': require('./assets/fonts/SFUIText-Medium.otf'),
    'sfMediumItalic': require('./assets/fonts/SFUIText-MediumItalic.otf'),
    'sfRegular': require('./assets/fonts/SFUIText-Regular.otf'),
    'sfSemibold': require('./assets/fonts/SFUIText-Semibold.otf'),
    'sfSemiboldItalic': require('./assets/fonts/SFUIText-SemiboldItalic.otf'),
  });

  if(!fontLoaded){
    <AppLoading />
  }else{
    return (
      <Home />
    );
  }
}