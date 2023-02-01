import {View, Text, TouchableOpacity} from 'react-native';

import { styles } from './style';

export function Participant() {
  function handleParticipantDelete(){ 
    console.log("Você clicou no botão de Deletar!");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        João Ricardo(Mobile Architect)
      </Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={handleParticipantDelete}
      >
        <Text style={styles.buttonText}>
          -
        </Text>
      </TouchableOpacity>
    </View>
  )
}