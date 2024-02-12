<template>
  <div class="habit-list max-w-4xl mx-auto p-4">
    <h1 class="text-2xl font-bold text-center mb-6">Habit Tracker</h1>
    <ul class="list-none space-y-4">
      <li v-for="habit in habits" :key="habit.id">
        <HabitItem :habit="habit" @update:habit="updateHabit" @remove-habit="emitRemoveHabit" class="p-4" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue';

import HabitItem from './HabitItem.vue';
import { useHabitsStore } from '@/stores/habitsStore';

const habitsStore = useHabitsStore();
const habits = computed(() => habitsStore.habits);

function updateHabit(updatedHabit) {
  habits.value = habits.value.map(habit =>
    habit.id === updatedHabit.id ? updatedHabit : habit
  );
}

function emitRemoveHabit(id) {
  habitsStore.removeHabit(id);
}
</script>