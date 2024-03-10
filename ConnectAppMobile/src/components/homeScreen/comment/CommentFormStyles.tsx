import {StyleSheet} from 'react-native';
import { blue } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

export const Formstyles = StyleSheet.create({
  commentInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginLeft: 5,
  },
  sendButton: {
    marginLeft: 10,
    padding: 10,
    borderRadius: 8,
  },
  profileImageContainer: {
    marginRight: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    padding: 5,
    borderColor: '#ccc',
    borderRadius: 20,
  },
});
