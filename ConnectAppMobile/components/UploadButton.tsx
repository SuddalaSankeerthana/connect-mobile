import { Text, View } from "react-native";
import { styles } from "../styles/UploadPostScreen.styles";

type UploadButtonProps = {
  testID: string;
  text: string;
}
export const UploadButton = ({ testID, text }:UploadButtonProps) => (
  <View style={styles.uploadButton}>
    <Text testID={testID} style={styles.uploadButtonText}>
      {text}
    </Text>
  </View>
);
