// store/useUserStore.js
import { defineStore } from 'pinia'
import axios from 'axios'

const API_URL = 'http://localhost:3000/users'

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [],
    userName: '',
    editId: null,
    inbox: []
  }),

  getters: {
    isEditing: (state) => state.editId !== null
  },

  actions: {
    async fetchUsers() {
      const res = await axios.get(API_URL)
      this.users = res.data
    },

    async saveUser() {
      const name = this.userName.trim()
      if (!name) return

      if (this.isEditing) {
        await axios.put(`${API_URL}/${this.editId}`, { name })
        this.inbox.unshift({ message: `User "${name}" berhasil diperbarui.`, timestamp: new Date() })
      } else {
        await axios.post(API_URL, { name })
        this.inbox.unshift({ message: `User "${name}" berhasil ditambahkan.`, timestamp: new Date() })
      }

      this.resetForm()
      this.fetchUsers()
    },

    editUser(user) {
      this.userName = user.name
      this.editId = user.id
    },

    async deleteUser(id) {
      const user = this.users.find(u => u.id === id)
      await axios.delete(`${API_URL}/${id}`)
      this.inbox.unshift({ message: `User "${user.name}" berhasil dihapus.`, timestamp: new Date() })
      this.fetchUsers()
      if (this.editId === id) this.resetForm()
    },

    cancelEdit() {
      this.resetForm()
    },

    resetForm() {
      this.userName = ''
      this.editId = null
    }
  }
})
