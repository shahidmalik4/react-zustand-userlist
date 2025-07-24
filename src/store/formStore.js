import { create } from 'zustand'

export const useFormStore = create((set) => ({
  formData: {
    name: '',
    email: '',
  },
  errors: {},
  setField: (field, value) =>
    set((state) => ({
      formData: { ...state.formData, [field]: value },
    })),
  setErrors: (errors) => set({ errors }),
  clearForm: () => set({ formData: { name: '', email: '' }, errors: {} }),
}))
