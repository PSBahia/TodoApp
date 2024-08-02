import React, { useState } from 'react';
import { Text, TextInput, View, Image, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Task } from '../../components/Task';
import { Ionicons } from "@expo/vector-icons";
import { styles } from './styles';
import { Counter } from '../../components/Counter';
//==================================


export function Home() {

  const [tasks, setTasks] = useState<{ name: string; isCompleted: boolean }[]>([]);
  const [taskName, setTaskName] = useState('');
  const [createdCount, setCreatedCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);

  function handleTaskAdd() {
    if (tasks.some(task => task.name === taskName)) {
      return Alert.alert("Tarefa já existe!", "Cadastre outra tarefa");
    }

    setTasks(prevState => [...prevState, { name: taskName, isCompleted: false }]);
    setTaskName('');
    setCreatedCount(prevCount => prevCount + 1);
  }

  function handleTaskRemove(name: string) {
    const taskToRemove = tasks.find(task => task.name === name);
    const isTaskCompleted = taskToRemove?.isCompleted || false;

    Alert.alert("Remover", `Deseja remover a tarefa ${name}?`, [
      {
        text: 'Sim',
        onPress: () => {
          setTasks(prevState => prevState.filter(task => task.name !== name));
          setCreatedCount(prevCount => prevCount - 1);
          setCompletedCount(prevCount => prevCount - (isTaskCompleted ? 1 : 0));
        }
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ]);
  }

  function handleCompletionChange(name: string, isCompleted: boolean) {
    setTasks(prevState => {
      const updatedTasks = prevState.map(task =>
        task.name === name ? { ...task, isCompleted } : task
      );

      const completedTasksCount = updatedTasks.filter(task => task.isCompleted).length;
      setCompletedCount(completedTasksCount);

      return updatedTasks;
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/Logo.png')} />
      </View>

      <View style={styles.form}>
        <TextInput
          onChangeText={setTaskName}
          style={styles.input}
          placeholder='Adicionar Tarefa'
          placeholderTextColor='#808080'
          value={taskName}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleTaskAdd}
          accessibilityLabel="Adicionar Tarefa"
          accessibilityHint="Clique para adicionar uma nova tarefa"
        >
          <Ionicons name='add-circle-outline' size={25} color='#fff' />
        </TouchableOpacity>
      </View>

      <Counter createdCount={createdCount} completedCount={completedCount} />

      <FlatList
        data={tasks}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <Task
            name={item.name}
            onRemove={() => handleTaskRemove(item.name)}
            onCompletionChange={(isCompleted) => handleCompletionChange(item.name, isCompleted)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.imageEmptyText}>
            <Image source={require('../../assets/Clipboard.png')} />
            <Text style={styles.listEmptyText}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.listEmptyText2}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      />
    </View>
  );
}
