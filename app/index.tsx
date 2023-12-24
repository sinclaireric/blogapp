import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet,Text, View } from 'react-native';


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title} > Se connecter </Text>
      <Link href="(tabs)">home</Link>

    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    }
   
  });
  