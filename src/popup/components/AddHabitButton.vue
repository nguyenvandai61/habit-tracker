<template>
    <div class="add-task p-4 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <form @submit.prevent="addHabit" class="flex gap-2 items-center">
        <input
          v-model="habit"
          type="text"
          class="w-full border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Add a new habit"
        />
        <button
          type="submit"
          class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          Add
        </button>
      </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useHabitsStore } from '@/stores/habitsStore'

const habit = ref('');
const habitsStore = useHabitsStore();


function addHabit() {
  habitsStore.addHabit(
    {
      id: Date.now(),
      title: habit.value,
      days: [],
      done: {}
    }
  );
  habit.value = '';
}
</script>