<template>
     <div class="habit-list">
    <h1>Habit Tracker</h1>
    <ul>
      <li v-for="habit in habits" :key="habit.id">
        <HabitItem :habit="habit" @update:habit="updateHabit" @remove-habit="emitRemoveHabit" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';

import HabitItem from './HabitItem.vue';

const props = defineProps({
  habits: {
    type: Array,
    required: true
  }
});

const emit = defineEmits(['remove-habit']);

// Using a ref to make the habits reactive
const habits = ref(props.habits);

watchEffect(() => {
  habits.value = props.habits;
});

function updateHabit(updatedHabit) {
  habits.value = habits.value.map(habit =>
    habit.id === updatedHabit.id ? updatedHabit : habit
  );
}

function emitRemoveHabit(id) {
  emit('remove-habit', id);
}
</script>