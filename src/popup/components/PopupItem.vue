<template>
  <div>
    <h1>Habit Tracker</h1>
    <!-- <ul>
      <li v-for="habit in habits" :key="habit.id">
        {{ habit.name }} - Completed: {{ habit.completedTimes }}
        <button @click="completeHabit(habit)">Complete</button>
      </li>
    </ul>
    <input v-model="newHabit" @keyup.enter="addHabit" />
    <button @click="addHabit">Add Habit</button> -->
  </div>
</template>

<script setup>
// import { ref } from 'vue'

// const habits = ref([
//   { id: 1, name: 'Read 20 pages', completedTimes: 0 },
//   { id: 2, name: 'Meditate for 10 minutes', completedTimes: 0 }
// ])
// const newHabit = ref('')

// const addHabit = () => {
//   if (newHabit.value.trim()) {
//     habits.value.push({
//       id: habits.value.length + 1,
//       name: newHabit.value,
//       completedTimes: 0
//     })
//     newHabit.value = ''
//   }
// }

// const completeHabit = (habit) => {
//   habit.completedTimes++
// }
</script>

<style>
/* Add your styles here */
</style>
