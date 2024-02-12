import { defineStore } from 'pinia';

export const useHabitsStore = defineStore({
  id: 'habits',
  state: () => ({
    habits: [
      { id: 1, title: "Drink water", days: ['2024-02-02', '2024-02-03'], done: {} },
      { id: 2, title: "Exercise", days: ['2024-02-01'], done: {} }
    ],
  }),
  actions: {
    addHabit(habit) {
      console.log(habit);
      this.habits.push(habit);
    },
    removeHabit(id) {
      this.habits = this.habits.filter(habit => habit.id !== id);
      console.log(this.habits);
    },
  },
});