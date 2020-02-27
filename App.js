import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet
} from 'react-native';
import { FAB,Provider } from 'react-native-paper';

const App = () => {
  return (
    <Provider>
      <View style={{flex:1}}>
       <StatusBar barStyle="light-content" backgroundColor="red"/>
        <Text>React native is awesome</Text>
        <FAB
          style={styles.fab}
          small
          icon="plus"
          onPress={() => console.log('Pressed')}
        />
    </View>
    </Provider>
  );                                                                                               
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
})

export default App;
