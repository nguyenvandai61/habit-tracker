import { defineStore } from 'pinia';

export const useHabitsStore = defineStore({
  id: 'habits',
  state: () => ({
    habits: [],
  }),
  actions: {
    addHabit(habit) {
      this.habits.push(habit);
    },
    removeHabit(id) {
      this.habits = this.habits.filter(habit => habit.id !== id);
    },
  },
});