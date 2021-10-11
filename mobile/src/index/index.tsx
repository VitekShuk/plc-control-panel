import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, StatusBar, View, Text } from 'react-native';

import { CustomSwitch } from '../ui/switch';

const Index = () => (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
              <Text style={styles.text}>PlcControlPanel</Text>
              <View style={styles.switchBox}>
                <View>
                    <CustomSwitch text='Реле 1' number={0} />
                    <CustomSwitch text='Реле 2' number={1} />
                    <CustomSwitch text='Реле 3' number={2} />
                </View>
                <View>
                    <CustomSwitch text='Реле 4' number={3} />
                    <CustomSwitch text='Реле 5' number={4} />
                    <CustomSwitch text='Реле 6' number={5} />
                </View>
              </View>
            </ScrollView>
        </SafeAreaView>
    );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 10,
  },
  text: {
    fontSize: 42,
    textAlign:  'center',
  },
  switchBox: {
    marginTop: 350,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
});

export default Index;