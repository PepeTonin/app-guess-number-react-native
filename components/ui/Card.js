import { StyleSheet, View } from 'react-native';
import Colors from '../../constants/colors';

function Card({ children, style }) {
  return <View style={[styles.card, style]}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 5, // android only style
    justifyContent: 'center',
    alignItems: 'center',

    // shadow only works in ios
    //   shadowColor: 'black',
    //   shadowOffset: { width: 0, height: 2 },
    //   shadowRadius: 6,
    //   shadowOpacity: 0.25
  }
});
