// eslint-disable-next-line import/no-unresolved
import { API_URL } from '@env';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import logoImg from '../../assets/logo-nlw-esports.png';
import { Background } from '../../components/Background';
import { GameCard, GameCardProps } from '../../components/GameCard/GameCard';
import { Heading } from '../../components/Heading/Heading';
// import { GAMES } from '../../utils/games';
import { styles } from './styles';

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);

  const navigation = useNavigation();

  const handleOpenGame = ({ id, title, bannerUrl }: GameCardProps) => {
    navigation.navigate('game', { id, title, bannerUrl });
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises, @typescript-eslint/restrict-template-expressions
    fetch(`${API_URL}/games`)
      .then((response) => response.json())
      .then((data: GameCardProps[]) => setGames(data));
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
        <Image source={logoImg} style={styles.logo} />

        <Heading
          title="Encontre seu duo!"
          subtitle="Selecione o game que deseja jogar..."
        />

        <FlatList
          data={games}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <GameCard onPress={() => handleOpenGame(item)} data={item} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
  );
}
