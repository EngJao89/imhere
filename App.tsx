import { Text, View } from 'react-native';

export default function App(){
  return(
  <View style={{
    flex: 1,
    backgroundColor: '#131016',
    padding: 24
  }}
  >
    <Text
      style={{
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48
      }}
    >
      Arquiteto de Software
    </Text>
    <Text
      style={{
        color: '#6B6B6B',
        fontSize: 16
      }}
    >
      Mobile(React Native & Ionic)
    </Text>
  </View>
  )
}