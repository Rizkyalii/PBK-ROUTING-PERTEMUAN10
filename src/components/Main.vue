<template>
  <q-layout
    view="lHh Lpr lff"
    style="height: 1500px"
    class="shadow-2 rounded-borders"
  >
    <q-header elevated class="bg-secondary">
      <q-toolbar>
        <q-toolbar-title>{{ currentRouteTitle }} </q-toolbar-title>
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" show-if-above :width="200" :breakpoint="400">
      <q-scroll-area
        style="
          height: calc(100% - 150px);
          margin-top: 150px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list padding>
          <q-item active clickable v-ripple to="/">
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>
            <q-item-section> Home </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/StatusBarang">
            <q-item-section avatar>
              <q-icon name="add_shopping_cart" />
            </q-item-section>
            <q-item-section> Status Barang </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/Staff">
            <q-item-section avatar>
              <q-icon name="person_add" />
            </q-item-section>
            <q-item-section> Tambah Staff </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/Inbox">
            <q-item-section avatar>
              <q-icon name="drafts" />
            </q-item-section>
            <q-item-section> Inbox </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/Mail">
            <q-item-section avatar>
              <q-icon name="mail" />
            </q-item-section>
            <q-item-section> Mail </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/Settings">
            <q-item-section avatar>
              <q-icon name="settings" />
            </q-item-section>
            <q-item-section> Setting </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="https://www.srinsofttech.com/images/corporate/srinsoft-overview.jpg"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img
              src="https://artikel.rumah123.com/wp-content/uploads/sites/41/2023/09/12160753/gambar-foto-profil-whatsapp-kosong.jpg"
            style="border: 2px solid rgb(51, 112, 255);"/>
          </q-avatar>
          <div class="text-weight-bold">Admin</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <q-page padding>
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

const drawer = ref(false);
const route = useRoute();

const currentRouteTitle = computed(() => {
  switch (route.name) {
    case "Home":
      return "Halaman Utama";
    case "Staff":
      return "Data Staff";
    case "StatusBarang":
      return "Informasi Barang";
    case "Inbox":
      return "Pesan Masuk";
    case "Settings":
      return "Pengaturan";return "Masuk Akun";
    case "Setting":
      return "Profile ";
    default:
      return "Aplikasi Saya";
  }
});

// Daftar menu dinamis
const menuItems = [
  { label: "Home", icon: "home", route: "/" },
  { label: "Status Barang", icon: "inventory", route: "/StatusBarang" },
  { label: "Pengaturan", icon: "settings", route: "/Settings" },
  { label: "Inbox", icon: "drafts", route: "/Inbox" },
  { label: "Tambah Staff", icon: "person_add", route: "/Staff" },
  { label: "Login", icon: "login", route: "/Login" },
];
</script>

<style scoped>
/* Gaya yang Anda miliki */
</style>
