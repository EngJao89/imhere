import { 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity 
} from 'react-native';
import { styles } from './styles';

import { Participant } from '../../components/Participant';

export function Home(){
  function handleParticipantAdd(){ 
    console.log("Você clicou no botão de Adicionar!");
  }

  function handleParticipantRemove(name: string){ 
    console.log(`Você clicou em remover o participante ${name}!`);
  }
  return(
  <View style={styles.container}>
    <Text style={styles.eventName}>
      Nome do evento
    </Text>

    <Text style={styles.eventDate}>
      Terça, 31 de Janeiro de 2023.
    </Text>

    <View style={styles.form}>
      <TextInput 
        style={styles.input} 
        placeholder="Nome do participante"
        placeholderTextColor="#6B6B6B"
      />

      <TouchableOpacity 
        style={styles.button}
        onPress={handleParticipantAdd}
      >
        <Text style={styles.buttonText}>
          +
        </Text>
      </TouchableOpacity>
    </View>

    <Participant name="João Ricardo" onRemove={() => handleParticipantRemove("João Ricardo")}/>
    <Participant name="Henry" onRemove={() => handleParticipantRemove("Henry")}/>
    <Participant name="Rafaela" onRemove={() => handleParticipantRemove("Rafaela")}/>
    <Participant name="Miguel" onRemove={() => handleParticipantRemove("Miguel")}/>
  </View>
  )
}