// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import { ImageBackground, ImageSourcePropType } from 'react-native';

import backgroundImg from '../../assets/background-galaxy.png';
import { styles } from './styles';

interface Props {
  children: React.ReactNode;
}

export function Background({ children }: Props) {
  return (
    <ImageBackground
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      defaultSource={backgroundImg}
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      source={backgroundImg}
      style={styles.container}
    >
      {children}
    </ImageBackground>
  );
}
