import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

type CounterProps = {
  createdCount: number;
  completedCount: number;
};

export function Counter({ createdCount, completedCount }: CounterProps){
  return (
    <View style={styles.counter}>
      <View style={styles.counter}>
        <Text style={styles.counterTextCreated}>Criadas:</Text><Text style={styles.number}>{createdCount}</Text>
      </View>
      <View style={styles.counter}>
        <Text style={styles.counterTextCompleted}>Concluídas: </Text><Text style={styles.number}>{completedCount}</Text>
      </View>
    </View>
  );
};


