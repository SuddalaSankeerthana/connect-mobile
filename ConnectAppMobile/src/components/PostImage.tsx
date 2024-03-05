import {Image, View} from 'react-native';
import { styles } from '../styles/HomeScreenBodyStyles';

export function PostImage({image}: {image: string}) {
  return (
    <>
    <View>
      <Image source={{uri: image}} style={styles.image} />
      </View>
    </>
  );
}
