import { 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  FlatList,
  Alert
} from 'react-native';
import { styles } from './styles';

import { Participant } from '../../components/Participant';

export function Home(){
  const participants = [
    'Joao Ricardo', 
    'Rafaela', 
    'Henry', 
    'Miguel', 
    'Carmelita', 
    'Crystiano', 
    'Vinycius', 
    'Jeff', 
    'Renato', 
    'Guilherme',
    'Matheus',
    'Glauber',
    'Tauan'
];

  function handleParticipantAdd(){ 
    if(participants.includes("Joao")){
      return Alert.alert("Participante existente","O nome do participante já está sendo usado.");
    }
    Alert.alert("Você adicionou um novo participante!");
  }

  function handleParticipantRemove(name: string){ 
    Alert.alert("Remover", `Remover o participante ${name}`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert("Deletado!")
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
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

    <FlatList 
      data={participants}
      keyExtractor={item => item}
      renderItem={({item}) => (
        <Participant 
          key={item} 
          name={item} 
          onRemove={() => handleParticipantRemove(item)}
        />
      )}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={
        <Text style={styles.listEmptyText}>
          Ninguém chegou no evento ainda? Adicione partipantes a sua lista de presença.
        </Text>
      }
    />
  </View>
  )
}