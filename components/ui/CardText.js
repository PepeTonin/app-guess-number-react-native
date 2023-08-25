import { StyleSheet, Text } from 'react-native';

function CardText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

export default CardText;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'open-sans',
    color: 'white',
    fontSize: 24,
  }
});
