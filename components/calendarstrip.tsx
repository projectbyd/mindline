import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { COLORS } from '../constants/colors';

const days = [
  {
    day: 'Sun',
    date: '1',
  },
  {
    day: 'Mon',
    date: '2',
  },
  {
    day: 'Tue',
    date: '3',
    active: true,
  },
  {
    day: 'Wed',
    date: '4',
  },
  {
    day: 'Thu',
    date: '5',
  },
  {
    day: 'Fri',
    date: '6',
  },
];

export default function CalendarStrip() {
  return (
    <View style={styles.container}>
      {days.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.dayContainer,

            item.active &&
              styles.activeContainer,
          ]}
        >
          <Text
            style={[
              styles.dayText,

              item.active &&
                styles.activeText,
            ]}
          >
            {item.day}
          </Text>

          <Text
            style={[
              styles.dateText,

              item.active &&
                styles.activeText,
            ]}
          >
            {item.date}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginBottom: 24,
  },

  dayContainer: {
    width: 52,
    height: 70,

    borderRadius: 24,

    justifyContent: 'center',
    alignItems: 'center',
  },

  activeContainer: {
    backgroundColor: COLORS.softYellow,
  },

  dayText: {
    fontSize: 13,
    color: COLORS.textSecondary,

    marginBottom: 4,
  },

  dateText: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.darkBrown,
  },

  activeText: {
    color: COLORS.darkBrown,
  },
});