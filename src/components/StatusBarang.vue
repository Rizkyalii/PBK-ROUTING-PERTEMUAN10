<template>
  <q-page padding class="q-pa-lg bg-grey-1">
    <div class="column items-center">
      <q-card
        class="q-pa-md q-mb-lg shadow-6 rounded-borders"
        style="
          width: 100%;
          max-width: 1500px;
          border: 2px solid rgb(51, 112, 255);
        "
      >
        <q-card-section>
          <div
            class="text-h5 text-weight-bold text-primary q-mb-md text-center"
          >
            <q-icon name="inventory_2" class="q-mr-sm" />Kelola Barang
          </div>
          <div class="q-gutter-md">
            <q-input
              v-model="store.currentItem.name"
              label="Nama Barang"
              outlined
              clearable
            />
            <q-input
              v-model.number="store.currentItem.JumlahBarang"
              type="number"
              label="Jumlah Barang"
              outlined
              clearable
            />
            <q-input
              v-model.number="store.currentItem.BeratBarang"
              type="number"
              label="Berat Per Barang (g)"
              outlined
              clearable
            />
            <q-input
              v-model.number="store.currentItem.HargaBarang"
              type="number"
              label="Harga Per Barang"
              outlined
              clearable
            />
            <q-input
              v-model="store.currentItem.TanggalProduksi"
              type="date"
              label="Tanggal Produksi"
              outlined
              clearable
            />
            <q-input
              v-model="store.currentItem.TanggalKadaluarsa"
              type="date"
              label="Tanggal Kadaluarsa"
              outlined
              clearable
            />

            <div class="row q-gutter-md justify-center q-mt-lg">
              <q-btn
                :label="store.isEditing ? 'Simpan Perubahan' : 'Tambah Barang'"
                :color="store.isEditing ? 'teal-7' : 'blue-7'"
                @click="store.saveItem"
                unelevated
                rounded
                class="q-px-lg"
              />
              <q-btn
                v-if="store.isEditing"
                label="Batal"
                flat
                color="grey-7"
                @click="store.resetForm"
                rounded
                class="q-px-lg"
              />
            </div>
          </div>
        </q-card-section>
      </q-card>

      <q-card
        class="q-mb-md shadow-6 rounded-borders"
        style="width: 100%; max-width: 1500px"
      >
        <q-card-section class="q-pa-none">
          <q-markup-table
            separator="horizontal"
            flat
            bordered
            class="rounded-borders"
          >
            <thead>
              <tr class="bg-secondary text-white">
                <th class="text-left text-h6">Nama Barang</th>
                <th class="text-right text-h6">JumlahBarang</th>
                <th class="text-right text-h6">Berat Per Barang (g)</th>
                <th class="text-right text-h6">Harga Per Barang</th>
                <th class="text-right text-h6">Tanggal Produksi</th>
                <th class="text-right text-h6">Tanggal Kadaluarsa</th>
                <th class="text-center text-h6">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in store.items"
                :key="item.id"
                class="text-grey-9"
              >
                <td class="text-left text-weight-medium">{{ item.name }}</td>
                <td class="text-right">{{ item.JumlahBarang }}</td>
                <td class="text-right">{{ item.BeratBarang }}</td>
                <td class="text-right">{{ item.HargaBarang }}</td>
                <td class="text-right">
                  {{ formatDate(item.TanggalProduksi, "YYYY-MM-DD") }}
                </td>
                <td class="text-right">
                  {{ formatDate(item.TanggalKadaluarsa, "YYYY-MM-DD") }}
                </td>

                <td class="text-center">
                  <q-btn
                    size="md"
                    flat
                    icon="edit"
                    color="blue-6"
                    @click="store.editItem(item)"
                    round
                  />
                  <q-btn
                    size="md"
                    flat
                    icon="delete"
                    color="red-6"
                    @click="store.deleteItem(item.id)"
                    round
                    class="q-ml-sm"
                  />
                </td>
              </tr>
              <tr v-if="store.items.length === 0">
                <td colspan="7" class="text-center text-grey-6 q-py-lg">
                  Tidak ada data barang. Silakan tambahkan item baru!
                </td>
              </tr>
            </tbody>
          </q-markup-table>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { onMounted } from "vue";
import { useItemsStore } from "/src/stores/useItemsStore";
import { date } from "quasar";
const { formatDate } = date;

const store = useItemsStore();

onMounted(() => {
  store.fetchItems();
});
</script>

<style scoped>
/* Anda dapat menambahkan gaya kustom di sini jika diperlukan */
/* Misalnya untuk memastikan rounded-borders bekerja pada q-markup-table */
.rounded-borders {
  border-radius: 8px; /* Contoh radius sudut */
}

/* Menimpa gaya default untuk header tabel jika diperlukan, tapi Quasar biasanya sudah cukup baik */
/* .q-markup-table th {
  font-weight: bold;
} */
</style>
