import {Text, View} from 'react-native';
import {styles} from '../styles/UploadPostScreen.styles';

type CancelButtonProps = {
  testID: string;
  text: string;
};

export const CancelButton = ({testID, text}: CancelButtonProps) => (
  <View style={styles.cancelButton}>
    <Text testID={testID} style={styles.cancelButtonText}>
      {text}
    </Text>
  </View>
);
