<template>
  <q-page padding class="bg-grey-1">
    <div class="q-pa-md q-gutter-md">
      <!-- Header -->
      <div class="text-h5 text-primary text-weight-bold">
        👥 Manajemen Pengguna
      </div>

      <!-- Form Tambah / Edit -->
      <q-card class="q-pa-md shadow-2 rounded-borders bg-white">
        <div class="q-gutter-sm">
          <q-input
            v-model="userStore.userName"
            label="Nama Pengguna"
            outlined
            dense
            clearable
            :placeholder="userStore.isEditing ? 'Edit nama pengguna' : 'Masukkan nama pengguna baru'"
            prepend-icon="person"
          />

          <q-btn
            :label="userStore.isEditing ? '💾 Simpan Perubahan' : '➕ Tambah Pengguna'"
            color="primary"
            glossy
            @click="userStore.saveUser"
          />

          <q-btn
            v-if="userStore.isEditing"
            label="❌ Batal"
            flat
            color="grey"
            @click="userStore.cancelEdit"
          />
        </div>
      </q-card>

      <!-- Daftar Pengguna -->
      <q-card class="q-mt-md shadow-1 rounded-borders bg-white">
        <q-card-section>
          <div class="text-subtitle1 text-bold text-dark q-mb-sm">
            Daftar Pengguna
          </div>

          <transition-group name="flip-right" tag="div" class="q-gutter-md">
            <q-item
              v-for="user in userStore.users"
              :key="user.id"
              class="bg-grey-2 rounded-borders q-pa-sm"
              bordered
            >
              <q-item-section avatar>
                <q-avatar color="primary" text-color="white" icon="person" />
              </q-item-section>

              <q-item-section>
                <div class="text-body1">{{ user.name }}</div>
              </q-item-section>

              <q-item-section side>
                <q-btn
                  flat
                  round
                  icon="edit"
                  color="primary"
                  @click.stop="userStore.editUser(user)"
                />
                <q-btn
                  flat
                  round
                  icon="delete"
                  color="red"
                  @click.stop="userStore.deleteUser(user.id)"
                />
              </q-item-section>
            </q-item>
          </transition-group>

          <div v-if="userStore.users.length === 0" class="text-grey text-caption q-mt-md">
            Tidak ada pengguna saat ini.
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { onMounted } from 'vue'
import { useUserStore } from '/src/stores/useUserStore'

const userStore = useUserStore()

onMounted(() => {
  userStore.fetchUsers()
})
</script>

<style scoped>
/* Animasi flip-right */
.flip-right-enter-active {
  animation: flipRight 0.5s ease-out;
}
.flip-right-leave-active {
  animation: fadeOut 0.3s ease-in;
}

@keyframes flipRight {
  from {
    transform: rotateY(-90deg);
    opacity: 0;
  }
  to {
    transform: rotateY(0);
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.9);
  }
}
</style>
