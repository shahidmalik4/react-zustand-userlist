import { create } from 'zustand';


export const useUiStore = create(set => ({
  isFormOpen: false,
  toggleForm: () => set(state => ({ isFormOpen: !state.isFormOpen })),
}));
