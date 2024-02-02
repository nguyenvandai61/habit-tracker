<template>
    <button @click="addHabit">Add Habit</button>
</template>

<script setup>
const emit = defineEmits(['add-habit']);

function addHabit() {
  emit('add-habit');
}

</script>