import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

export default function UpcomingCard({
  text,
}: any) {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.softYellow,
    borderRadius: 24,
    padding: 18,
    marginBottom: 14,
  },

  text: {
    color: COLORS.darkBrown,
    fontWeight: '600',
  },
});