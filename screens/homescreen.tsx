import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';

import { COLORS } from '../constants/colors';

import CategoryBubble from '../components/CategoryBubble';
import TimelineCard from '../components/TimelineCard';
import UpcomingCard from '../components/UpcomingCard';
import FilterChip from '../components/FilterChip';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>
        Hi Alana 👋
      </Text>

      <View style={styles.composer}>
        <TextInput
          placeholder="What's on your mind?"
          placeholderTextColor="#999"
        />

        <View style={styles.actionRow}>
          <Text>📎</Text>
          <Text>⏰</Text>
          <Text>🏷️</Text>
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: 24 }}
      >
        <CategoryBubble emoji="🚀" label="Junior" />
        <CategoryBubble emoji="💼" label="Work" />
        <CategoryBubble emoji="🏋️" label="Gym" />
        <CategoryBubble emoji="💡" label="Ideas" />
      </ScrollView>

      <View style={styles.filterRow}>
        <FilterChip label="Status" />
        <FilterChip label="Category" />
        <FilterChip label="Date" />
      </View>

      <Text style={styles.sectionTitle}>
        Timeline
      </Text>

      <TimelineCard
        emoji="🚀"
        title="Export client excel before 3PM"
        status="Ongoing"
        time="2h ago"
      />

      <TimelineCard
        emoji="💼"
        title="Need revise invoice design"
        status="Pending"
        time="5h ago"
      />

      <Text style={styles.sectionTitle}>
        Upcoming Thoughts
      </Text>

      <UpcomingCard text="🏋️ Gym at 7 PM" />
      <UpcomingCard text="🚀 Junior revision tomorrow" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: 70,
    paddingHorizontal: 20,
  },

  header: {
    fontSize: 30,
    fontWeight: '700',
    color: COLORS.darkBrown,
    marginBottom: 20,
  },

  composer: {
    backgroundColor: COLORS.card,
    borderRadius: 30,
    padding: 20,
    marginBottom: 20,
  },

  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  filterRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.darkBrown,
    marginBottom: 14,
    marginTop: 10,
  },
});