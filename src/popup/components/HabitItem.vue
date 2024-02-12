<template>
  <div class="habit-item p-4 max-w-md mx-auto bg-white rounded-lg shadow-md">
    <h3 class="text-lg font-semibold">{{ habit.title }}</h3>
    <div class="flex justify-between items-center mt-4">
      <span class="completion-count text-sm text-gray-600">
        Completed: {{ completedCount(habit) }}/{{ 3 }}
      </span>
      <div class="flex items-center">
        <label class="flex items-center">
          <input type="checkbox" :checked="isDone" @change="toggleDone" class="form-checkbox h-5 w-5 text-blue-600"/>
          <span class="ml-2 text-gray-700">Done today?</span>
        </label>
      </div>
      <button @click="$emit('remove-habit', habit.id)" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Remove
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useHabitsStore } from '@/stores/habitsStore'

const habitsStore = useHabitsStore()

const props = defineProps({
  habit: {
    type: Object,
    required: true,
    default: () => ({
      id: 0,
      title: '',
      days: [],
      done: {
        '2024-02-01': false,
        '2024-02-02': false,
        '2024-02-03': false
      }
    })
  }
})

const emit = defineEmits(['update:habit'])

const currentDay = computed(() => habitsStore.currentDay)
const isDone = computed(() => props.habit.done[currentDay.value])

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
  return 0
}
</script>
