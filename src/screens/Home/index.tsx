import { Text, View } from 'react-native';
import { styles } from './styles';

export function Home(){
  return(
  <View style={styles.container}>
    <Text style={styles.eventName}>
      Arquiteto de Software
    </Text>

    <Text style={styles.eventDate}>
      Mobile(React Native & Ionic)
    </Text>
  </View>
  )
}