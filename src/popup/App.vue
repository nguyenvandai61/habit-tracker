<template>
<div class="container">
    <HabitList :habits="filteredHabits" @remove-habit="removeHabit" />
    <AddHabitButton @add-habit="addHabit" />
</div>
</template>

<script setup>
import { ref, computed } from 'vue';
import HabitList from './components/HabitList.vue';
import AddHabitButton from './components/AddHabitButton.vue';

const habits = ref([
  { id: 1, title: "Drink water", days: ['2024-02-02', '2024-02-03'], done: {} },
  { id: 2, title: "Exercise", days: ['2024-02-01'], done: {} }
]);

const currentDay = ref(new Date().toISOString().slice(0, 10));

const filterType = ref('all');

function addHabit() {
  habits.value.push({
    id: Date.now(),
    title: "",
    days: [],
    done: {}
  });
}

function removeHabit(id) {
  const habitIndex = habits.value.findIndex(habit => habit.id === id);
  if (habitIndex !== -1) {
    habits.value.splice(habitIndex, 1);
  }
}

function completedCount(habit) {
  return Object.values(habit.done).filter(done => done).length;
}

const filteredHabits = computed(() => {
  if (filterType.value === 'all') {
    return habits.value;
  } else if (filterType.value === 'completed') {
    return habits.value.filter(habit => completedCount(habit) === habit.days.length);
  } else {
    return habits.value.filter(habit => completedCount(habit) < habit.days.length);
  }
});
</script>

<style scoped>
.container {
  font-family: sans-serif;
  text-align: center;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
}

.habit-info {
  flex: 1;
}

.habit-actions {
  text-align: right;
}

.completion-count {
  font-size: smaller;
}

.filter {
  margin-top: 10px;
}
</style>