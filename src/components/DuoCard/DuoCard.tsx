import { GameController } from 'phosphor-react-native';
import { Text, TouchableOpacity, View } from 'react-native';

import { THEME } from '../../theme';
import { DuoInfo } from '../DuoInfo/DuoInfo';
import { styles } from './styles';

export interface DuoCardProps {
  id: string;
  hoursEnd: string;
  hoursStart: string;
  name: string;
  useVoiceChannel: boolean;
  weekDays: string[];
  yearsPlaying: number;
}

interface Props {
  data: DuoCardProps;
  onConnect: () => void;
}

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export function DuoCard({ data, onConnect }: Props) {
  return (
    <View style={styles.container}>
      <DuoInfo label="Nome" value={data.name} />

      <DuoInfo label="Tempo de Jogo" value={`${data.yearsPlaying} anos`} />

      <DuoInfo
        label="Disponibilidade"
        value={`${data.weekDays.length} dias \u2022 ${data.hoursStart} - ${data.hoursEnd}`}
      />

      <DuoInfo
        label="Chamado de áudio"
        value={data.useVoiceChannel ? 'Sim' : 'Não'}
        colorValue={
          data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT
        }
      />

      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
      <TouchableOpacity style={styles.button}>
        <GameController color={THEME.COLORS.TEXT} size={20} />
        <Text style={styles.buttonTitle}>Conectar</Text>
      </TouchableOpacity>
    </View>
  );
}
