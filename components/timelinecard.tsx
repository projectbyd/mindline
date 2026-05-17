import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

export default function TimelineCard({
  emoji,
  title,
  status,
  time,
}: any) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        {emoji} {title}
      </Text>

      <View style={styles.footer}>
        <Text style={styles.status}>{status}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 30,
    padding: 20,
    marginBottom: 16,
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: 12,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  status: {
    color: COLORS.softGreen,
    fontWeight: '600',
  },

  time: {
    color: COLORS.textSecondary,
  },
});