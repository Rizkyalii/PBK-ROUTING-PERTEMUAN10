<template>
  <q-page padding class="q-pa-md">
    <h2 class="text-h4 q-mb-lg text-weight-bold text-blue-grey-8">
      <q-icon name="inbox" class="q-mr-sm" />Kotak Masuk
    </h2>

    <q-list separator class="rounded-borders">
      <q-item
        v-for="mail in mailStore.mails"
        :key="mail.id"
        clickable
        v-ripple
        class="q-py-md q-px-lg shadow-2 q-mb-md border-radius-sm"
        @click="openMail(mail)"
      >
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white" icon="email" />
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-subtitle1 text-weight-medium text-primary">{{ mail.subject }}</q-item-label>
          <q-item-label caption class="text-grey-7">
            <span class="text-weight-bold">{{ mail.sender }}</span> • {{ mail.type }} • {{ formatDate(mail.date) }}
          </q-item-label>
          <q-item-label class="q-mt-sm text-body2 text-grey-8 ellipsis-2-lines">{{ mail.body }}</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-icon name="star_border" color="grey-5" />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup>
import { onMounted } from 'vue'
import { useMailStore } from '/src/stores/useMailStore'
import { useRouter } from 'vue-router' // Menggunakan useRouter untuk navigasi

const mailStore = useMailStore()
const router = useRouter() // Inisialisasi router

function formatDate(dateStr) {
  const options = { year: 'numeric', month: 'short', day: 'numeric' }
  return new Date(dateStr).toLocaleDateString('id-ID', options)
}

function openMail(mail) {
  // Contoh: Navigasi ke halaman detail email
  // Anda mungkin perlu menyesuaikan rute ini
  console.log('Membuka email:', mail.subject);
  // router.push(`/mail/${mail.id}`);
}

onMounted(() => {
  mailStore.fetchMails()
})
</script>

<style scoped>
/* Anda bisa menambahkan atau menimpa gaya Quasar di sini jika diperlukan */
.border-radius-sm {
  border-radius: 8px; /* Sudut sedikit membulat */
}

/* Jika Anda ingin sedikit lebih banyak kontrol pada ellipsis */
.ellipsis-2-lines {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>