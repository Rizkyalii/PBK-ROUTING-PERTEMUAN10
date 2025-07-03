<template>
  <q-page padding class="flex flex-center bg-grey-1">
    <q-card class="q-pa-xl q-mt-md shadow-3" style="width: 350px; max-width: 90vw;">
      <div class="column items-center">
        <!-- Avatar -->
        <q-avatar size="100px" class="q-mb-md">
          <img src="https://cdn-icons-png.flaticon.com/512/4139/4139981.png" />
        </q-avatar>

        <!-- Name & Role -->
        <div class="text-h6 text-primary text-weight-bold">Nanda Saputra</div>
        <div class="text-subtitle2 text-grey-7">Staff</div>
      </div>

      <!-- Form Fields -->
      <div class="q-mt-lg column q-gutter-md">
        <q-input
          v-model="email"
          label="Email"
          outlined
          dense
          class="bg-blue-1"
          type="email"
        >
          <template #append>
            <q-icon name="email" />
          </template>
        </q-input>

        <q-input
          v-model="phone"
          label="Phone Number"
          outlined
          dense
          class="bg-blue-1"
          type="tel"
        >
          <template #append>
            <q-icon name="phone" />
          </template>
        </q-input>

        <q-input
          v-model="password"
          label="Password"
          outlined
          dense
          class="bg-blue-1"
          type="password"
        >
          <template #append>
            <q-icon name="lock" />
          </template>
        </q-input>
      </div>

      <!-- Save Button -->
      <q-btn label="Simpan" color="primary" class="full-width q-mt-lg" />
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('nanputra@gmail.com')
const phone = ref('+6281244444444')
const password = ref('password')
</script>

<style scoped>
.text-primary {
  color: #1a73e8;
}
</style>
