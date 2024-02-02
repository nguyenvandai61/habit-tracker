<template>
  <div class="habit-item">
    <h3>{{ habit.title }}</h3>
    <span class="completion-count"
      >Completed: {{ completedCount(habit) }}/{{ habit.days.length }}</span
    >
    <label>
      <input type="checkbox" :checked="habit.done[currentDay]" @change="toggleDone"/>
      Done today?
    </label>
    <button @click="$emit('remove-habit', habit.id)">Remove</button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useHabitsStore } from '@/stores/habitsStore'

const habitsStore = useHabitsStore()

const props = defineProps({
  habit: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['update:habit'])

const currentDay = computed(() => habitsStore.currentDay)

function toggleDone() {
    emit('update:habit', {
      ...props.habit,
      done: {
        ...props.habit.done,
        [currentDay.value]: !props.habit.done[currentDay.value]
      }
    })
}

function completedCount(habit) {
  return Object.values(habit.done).filter((done) => done).length
}
</script>
