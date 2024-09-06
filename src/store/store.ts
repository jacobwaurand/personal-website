import { defineStore } from "pinia"

export const store = defineStore('store', {
    state: () => ({
        activePage: '',
    }),
    getters: {},
    actions: {
      setPage(pageName: string) {
        this.activePage = pageName;
      },
    },
  })