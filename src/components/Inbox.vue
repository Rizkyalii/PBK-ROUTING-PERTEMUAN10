<template>
  <q-page padding class="inbox-page bg-grey-1">
    <div class="text-h5 text-weight-bold text-primary q-mb-md">
      📥 Inbox Aktivitas Sistem
    </div>

    <q-timeline color="primary" layout="dense" side="left">
      <q-timeline-entry
        v-for="(log, index) in combinedInbox"
        :key="index"
        :title="log.message"
        :subtitle="new Date(log.timestamp).toLocaleString()"
        :icon="getIcon(log.message)"
        :color="getColor(log.message)"
      />
    </q-timeline>

    <div v-if="combinedInbox.length === 0" class="text-center q-mt-lg text-grey">
      <q-icon name="inbox" size="md" />
      <div>Tidak ada aktivitas pengguna atau barang saat ini.</div>
    </div>
  </q-page>
</template>

<script setup>
import { computed } from 'vue'
import { useUserStore } from '/src/stores/useUserStore'
import { useItemsStore } from '/src/stores/useItemsStore'

const userStore = useUserStore()
const itemStore = useItemsStore()

const combinedInbox = computed(() => {
  const allLogs = [...userStore.inbox, ...itemStore.inbox]
  return allLogs.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
})

function getIcon(message) {
  if (message.includes('ditambahkan')) return 'add_circle'
  if (message.includes('diperbarui')) return 'edit'
  if (message.includes('dihapus')) return 'delete'
  return 'notifications'
}

function getColor(message) {
  if (message.includes('ditambahkan')) return 'green'
  if (message.includes('diperbarui')) return 'orange'
  if (message.includes('dihapus')) return 'red'
  return 'blue'
}
</script>

<style scoped>
.inbox-page {
  min-height: 200vh;
  background-color: #f4f6f9;
}

.q-timeline-entry__subtitle {
  font-size: 0.85rem;
  color: #78909c;
}
</style>
