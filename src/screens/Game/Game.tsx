/* eslint-disable import/no-unresolved */
import { API_URL } from '@env';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Entypo } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// eslint-disable-next-line import/no-unresolved
import { GameParms } from '../../@types/@navigation';
import logoImg from '../../assets/logo-nlw-esports.png';
import { Background } from '../../components/Background';
import { DuoCard, DuoCardProps } from '../../components/DuoCard/DuoCard';
import { DuoMatch } from '../../components/DuoMatch/DuoMatch';
import { Heading } from '../../components/Heading/Heading';
import { THEME } from '../../theme';
import { styles } from './styles';

export function Game() {
  const navigation = useNavigation();
  const route = useRoute();
  const game = route.params as GameParms;

  const [duos, setDuos] = useState<DuoCardProps[]>([]);
  const [discordDuoSelected, setDiscordDuoSelected] = useState<string>('');

  const handleGoBack = () => {
    navigation.goBack();
  };

  const getDiscordUser = async (adsId: string) => {
    try {
      await fetch(`${API_URL}/ads/${adsId}/discord`)
        .then((response) => response.json())
        .then((data: { discord: string }) => {
          setDiscordDuoSelected(data.discord);
        });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises, @typescript-eslint/restrict-template-expressions
    fetch(`${API_URL}/games/${game.id}/ads`)
      .then((response) => response.json())
      .then((data: DuoCardProps[]) => setDuos(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>

          {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
          <Image source={logoImg} style={styles.logo} />

          <View style={styles.right} />
        </View>

        <Image
          source={{ uri: game.bannerUrl }}
          style={styles.cover}
          resizeMode="cover"
        />
        <Heading title={game.title} subtitle="Conecte-se e comece a jogar" />

        <FlatList
          data={duos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-misused-promises
            <DuoCard
              data={item}
              onConnect={() => {
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                getDiscordUser(item.id);
              }}
            />
          )}
          horizontal
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          style={styles.containerList}
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          contentContainerStyle={
            duos.length > 0 ? styles.contentList : styles.emptyListContent
          }
          showsHorizontalScrollIndicator={false}
          // eslint-disable-next-line react/no-unstable-nested-components
          ListEmptyComponent={() => (
            <Text style={styles.emptyListText}>
              Não há anúncios publicados para este jogo ainda.
            </Text>
          )}
        />
        <DuoMatch
          visible={discordDuoSelected.length > 0}
          discord={discordDuoSelected}
          onClose={() => setDiscordDuoSelected('')}
        />
      </SafeAreaView>
    </Background>
  );
}
