// src/stores/useMailStore.js
import { defineStore } from 'pinia'
import axios from 'axios'

const API_URL = 'http://localhost:3000/mails'

export const useMailStore = defineStore('mail', {
  state: () => ({
    mails: []
  }),

  actions: {
    async fetchMails() {
      try {
        const res = await axios.get(API_URL)
        this.mails = res.data
      } catch (err) {
        console.error('Gagal fetch email:', err)
      }
    }
  }
})
