<template>
  <q-page padding class="bg-gradient-primary">
    <div class="q-pa-md q-gutter-md content-wrapper">
      <div class="text-h4 text-primary text-weight-bold header-title">
        <q-icon name="group" class="q-mr-sm" /> Manajemen Pengguna
      </div>
      <q-card
        class="q-pa-lg shadow-10 rounded-borders form-card"
        style="border: 1px solid rgb(51, 112, 255)"
      >
        <q-card-section>
          <div class="text-h6 text-primary text-weight-medium q-mb-md">
            {{
              userStore.isEditing
                ? "📝 Edit Pengguna"
                : "➕ Tambah Pengguna Baru"
            }}
          </div>
          <div class="q-gutter-md">
            <q-input
              v-model="userStore.userName"
              label="Nama Pengguna"
              outlined
              dense
              clearable
              bg-color="white"
              :placeholder="
                userStore.isEditing
                  ? 'Edit nama pengguna'
                  : 'Masukkan nama pengguna baru'
              "
              prepend-icon="person_outline"
              color="primary"
            >
              <template v-slot:append>
                <q-icon name="badge" color="grey-6" />
              </template>
            </q-input>

            <div class="q-pt-sm row q-gutter-sm justify-end">
              <q-btn
                :label="
                  userStore.isEditing
                    ? '💾 Simpan Perubahan'
                    : '➕ Tambah Pengguna'
                "
                :color="userStore.isEditing ? 'teal-6' : 'primary'"
                class="q-px-md q-py-sm glossy button-action"
                @click="userStore.saveUser"
                no-caps
              />

              <q-btn
                v-if="userStore.isEditing"
                label="❌ Batal"
                flat
                color="grey-7"
                @click="userStore.cancelEdit"
                class="q-px-md q-py-sm button-cancel"
                no-caps
              />
            </div>
          </div>
        </q-card-section>
      </q-card>

      <q-card class="q-mt-lg shadow-8 rounded-borders user-list-card">
        <q-card-section style="border: 1px solid rgb(51, 112, 255)">
          <div class="list-header">
            <div class="text-h6 text-dark text-weight-bold q-mb-sm">
              <q-icon name="list_alt" class="q-mr-sm" color="primary" /> Daftar
              Pengguna Aktif
            </div>
            <div class="text-subtitle2 text-grey-7">
              Kelola daftar pengguna yang terdaftar di sistem Anda.
            </div>
            <q-separator class="q-mt-md header-separator" />
          </div>

          <transition-group
            name="user-item-transition"
            tag="div"
            class="q-gutter-md"
          >
            <q-item
              v-for="user in userStore.users"
              :key="user.id"
              class="user-item bg-white rounded-borders q-pa-md shadow-2"
              bordered
            >
              <q-item-section avatar>
                <q-avatar
                  color="blue-grey-2"
                  text-color="blue-grey-9"
                  icon="account_circle"
                  size="md"
                />
              </q-item-section>

              <q-item-section>
                <div class="text-body1 text-weight-medium text-grey-9">
                  {{ user.name }}
                </div>
                <div class="text-caption text-grey-6">
                  ID: {{ user.id.substring(0, 8) }}...
                </div>
              </q-item-section>

              <q-item-section side>
                <div class="q-gutter-sm">
                  <q-btn
                    round
                    flat
                    icon="edit"
                    color="blue-7"
                    @click.stop="userStore.editUser(user)"
                    size="sm"
                    class="button-edit"
                  >
                    <q-tooltip
                      anchor="top middle"
                      self="bottom middle"
                      :offset="[10, 10]"
                    >
                      Edit Pengguna
                    </q-tooltip>
                  </q-btn>
                  <q-btn
                    round
                    flat
                    icon="delete_outline"
                    color="red-6"
                    @click.stop="userStore.deleteUser(user.id)"
                    size="sm"
                    class="button-delete"
                  >
                    <q-tooltip
                      anchor="top middle"
                      self="bottom middle"
                      :offset="[10, 10]"
                    >
                      Hapus Pengguna
                    </q-tooltip>
                  </q-btn>
                </div>
              </q-item-section>
            </q-item>
          </transition-group>

          <div
            v-if="userStore.users.length === 0"
            class="text-grey-6 text-caption q-mt-lg text-center no-users-message"
          >
            <q-icon name="info" size="xs" class="q-mr-xs" /> Belum ada pengguna
            terdaftar. Yuk, tambahkan yang pertama!
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { onMounted } from "vue";
import { useUserStore } from "/src/stores/useUserStore";

const userStore = useUserStore();

onMounted(() => {
  userStore.fetchUsers();
});
</script>

<style scoped>
.content-wrapper {
  max-width: 1500px;
  margin: 0 auto;
  padding-bottom: 50px;
}

/* Header */
.header-title {
  padding-bottom: 20px;
  text-align: center;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
}

/* Card Styles */
.form-card,
.user-list-card {
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15); /* Stronger, softer shadow */
}

.form-card {
  background-color: #ffffff; /* Pure white for clean look */
}

.user-list-card {
  background-color: #f8f9fa; /* Slightly off-white for contrast */
}

/* Input Field */
.q-input {
  transition: all 0.3s ease;
}

.q-input:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* Buttons */
.button-action {
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  border-radius: 8px;
  font-weight: 600;
}

.button-action:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.button-cancel {
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  border-radius: 8px;
}

.button-cancel:hover {
  color: #333 !important;
  background-color: #f0f0f0;
}

/* User List Item */
.user-item {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.5, 1); /* Quasar's standard ease */
  border: 1px solid #e0e0e0;
  cursor: pointer;
  box-sizing: border-box; /* Ensures padding/border doesn't add to total width */
}

.user-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  border-color: #a7d9f7; /* Subtle hover border */
}

.user-item-transition-enter-active {
  animation: flipRight 0.6s cubic-bezier(0.25, 0.8, 0.5, 1);
}
.user-item-transition-leave-active {
  animation: flipLeft 0.6s cubic-bezier(0.25, 0.8, 0.5, 1) reverse;
  position: absolute; /* Allows items to animate out without affecting others */
  width: 100%;
}
.user-item-transition-move {
  transition: transform 0.5s cubic-bezier(0.25, 0.8, 0.5, 1);
}

/* Action Buttons within List Item */
.button-edit,
.button-delete {
  transition: transform 0.2s ease-in-out;
}

.button-edit:hover,
.button-delete:hover {
  transform: scale(1.1);
}

/* No Users Message */
.no-users-message {
  font-style: italic;
  padding-top: 15px;
}

.list-header {
  padding-bottom: 10px; /* Sedikit padding di bawah header */
  position: relative; /* Diperlukan untuk q-separator kustom jika ingin efek tertentu */
}

.list-header .text-h6 {
  font-size: 1.4rem; /* Sedikit lebih besar dari default h6 */
  letter-spacing: 0.5px; /* Memberi sedikit jarak antar huruf */
  color: #333; /* Warna teks yang lebih gelap untuk kontras */
}

.list-header .text-subtitle2 {
  font-size: 0.9rem;
  color: #757575; /* Warna abu-abu yang lebih lembut */
  margin-top: 4px; /* Sedikit jarak dari judul utama */
}

.header-separator {
  background-color: #e0e0e0; /* Warna abu-abu terang untuk garis */
  height: 1px; /* Ketebalan garis */
  width: 100%; /* Lebar garis */
  margin-top: 15px; /* Jarak dari teks di atasnya */
}

/* Keyframe Animations */
@keyframes flipRight {
  from {
    transform: rotateY(-90deg) scale(0.9);
    opacity: 0;
  }
  to {
    transform: rotateY(0deg) scale(1);
    opacity: 1;
  }
}

@keyframes flipLeft {
  from {
    transform: rotateY(0deg) scale(1);
    opacity: 1;
  }
  to {
    transform: rotateY(90deg) scale(0.9);
    opacity: 0;
  }
}
</style>
