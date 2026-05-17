import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

export default function CategoryBubble({
  emoji,
  label,
}: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>{emoji}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 82,
    height: 82,
    borderRadius: 28,
    backgroundColor: COLORS.softYellow,

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 14,
  },

  emoji: {
    fontSize: 28,
    marginBottom: 6,
  },

  label: {
    color: COLORS.textPrimary,
    fontWeight: '600',
  },
});