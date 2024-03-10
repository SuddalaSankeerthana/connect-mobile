import {StyleSheet} from 'react-native';
import { blue } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

export const Formstyles = StyleSheet.create({
  commentInputContainer: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    padding: 10,
    backgroundColor: 'white',
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  sendButton: {
    marginLeft: 10,
    padding: 10,
    borderRadius: 8,
  },
});
