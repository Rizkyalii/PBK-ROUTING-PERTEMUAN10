// src/stores/useItemsStore.js
import { defineStore } from 'pinia'
import axios from 'axios'

const API_URL = 'http://localhost:3000/items'

export const useItemsStore = defineStore('items', {
  state: () => ({
    items: [],
    inbox:[],
    currentItem: {
      name: '',
      JumlahBarang: null,
      BeratBarang: null,
      HargaBarang: null,
      protein: null,
      sodium: null
    },
    editId: null
  }),

  getters: {
    isEditing: (state) => state.editId !== null
  },

  actions: {
    async fetchItems() {
      const res = await axios.get(API_URL)
      this.items = res.data
    },

async saveItem() {
  if (!this.currentItem.name) return

  if (this.isEditing) {
    await axios.put(`${API_URL}/${this.editId}`, this.currentItem)
    this.inbox.unshift({
      message: `Barang "${this.currentItem.name}" berhasil diperbarui.`,
      timestamp: new Date()
    })
  } else {
    await axios.post(API_URL, this.currentItem)
    this.inbox.unshift({
      message: `Barang "${this.currentItem.name}" berhasil ditambahkan.`,
      timestamp: new Date()
    })
  }

  this.resetForm()
  await this.fetchItems()
},


    async deleteItem(id) {
  const item = this.items.find(i => i.id === id)
  if (!item) return

  await axios.delete(`${API_URL}/${id}`)
  
  // Tambahkan ke inbox
  this.inbox.unshift({
    message: `Barang "${item.name}" berhasil dihapus.`,
    timestamp: new Date()
  })

  // Segarkan data dan reset form jika perlu
  await this.fetchItems()
  if (this.editId === id) this.resetForm()
},


    editItem(item) {
      this.currentItem = { ...item }
      this.editId = item.id
    },

    resetForm() {
      this.currentItem = {
        name: '',
        JumlahBarang: null,
        BeratBarang: null,
        HargaBarang: null,
        protein: null,
        sodium: null
      }
      this.editId = null
    }
  }
})
