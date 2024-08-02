import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';

type TaskProps = {
  name: string;
  onRemove: () => void;
  onCompletionChange: (isCompleted: boolean) => void;
};

export function Task ({ name, onRemove, onCompletionChange }: TaskProps){
  const [isCompleted, setIsCompleted] = useState(false);

  const handleCompletionChange = () => {
    setIsCompleted(!isCompleted);
    onCompletionChange(!isCompleted);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleCompletionChange}>
        {isCompleted ? (
          <Ionicons name="checkmark-circle-outline" size={24} color="#060" />
        ) : (
          <Ionicons name="ellipse-outline" size={24} color="#4EA8DE" />
        )}
      </TouchableOpacity>
      <Text style={styles.name}>
        {name}
      </Text>
      <TouchableOpacity onPress={onRemove}>
        <Ionicons name="trash" size={24} color="#808080"/>
      </TouchableOpacity>
    </View>
  );
};

