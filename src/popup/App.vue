<template>
<div class="container">
    <HabitList />
    <AddHabitButton />
</div>
</template>

<script setup>
import HabitList from './components/HabitList.vue';
import AddHabitButton from './components/AddHabitButton.vue';
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