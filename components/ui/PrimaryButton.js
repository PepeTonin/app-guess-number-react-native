import { View, Text, Pressable } from 'react-native';
import { StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

// igual fazer props.children
function PrimaryButton({ children, onPressButton }) {

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.buttonPressed]
            : styles.buttonInnerContainer
        }
        onPress={onPressButton}
        android_ripple={{color: Colors.primary600}}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
    elevation: 2,
    backgroundColor: Colors.primary500,
  },
  buttonInnerContainer: {
    padding: 8,
    opacity: 1
  },
  buttonPressed: {
    opacity: 0.75,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },

});
