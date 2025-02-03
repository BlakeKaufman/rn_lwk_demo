import {StyleSheet} from 'react-native';
import {BACKGROUND_COLOR, OPACITY_BACKGROUND} from '../constants';

export default function ViewMnemonic() {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.globalViewInner}>
        <View style={styles.innerContainer}>
          <ThemeText
            customStyles={styles.headerText}
            text={'Keep this somewhere secure'}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  globalViewInner: {
    flex: 1,
    alignItems: 'center',

    justifyContent: 'center',
    backgroundColor: OPACITY_BACKGROUND,
  },
  innerContainer: {
    backgroundColor: BACKGROUND_COLOR,
    width: '95%',
    maxWidth: 325,
    padding: 20,
    borderRadius: 8,
  },
  headerText: {
    fontWeight: 500,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 25,
  },
  seedText: {
    marginBottom: 20,
    textAlign: 'center',
  },
});
