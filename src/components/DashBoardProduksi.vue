<template>
  <q-page class="q-pa-md dashboard-produk">
    <div class="text-h4 text-weight-bold text-secondary q-mb-lg">
      Dashboard Produksi Barang
    </div>

    <!-- Statistik Produksi -->
    <div class="row q-col-gutter-md q-mb-lg">
      <q-card class="col-xs-12 col-sm-6 col-md-4 bg-blue-grey-1">
        <q-card-section>
          <div class="text-subtitle2 text-blue-grey-8">Total Produksi</div>
          <div class="text-h5 text-weight-bold">8.250 Unit</div>
        </q-card-section>
      </q-card>

      <q-card class="col-xs-12 col-sm-6 col-md-4 bg-amber-1">
        <q-card-section>
          <div class="text-subtitle2 text-amber-9">Barang Rusak</div>
          <div class="text-h5 text-weight-bold">125 Unit</div>
        </q-card-section>
      </q-card>

      <q-card class="col-xs-12 col-sm-6 col-md-4 bg-light-green-1">
        <q-card-section>
          <div class="text-subtitle2 text-green-9">Produksi Hari Ini</div>
          <div class="text-h5 text-weight-bold">510 Unit</div>
        </q-card-section>
      </q-card>

      <q-card class="col-xs-12 col-sm-6 col-md-4 bg-blue-1">
        <q-card-section>
          <div class="text-subtitle2 text-blue-9">Barang Masuk</div>
          <div class="text-h5 text-weight-bold">1.120 Unit</div>
        </q-card-section>
      </q-card>

      <q-card class="col-xs-12 col-sm-6 col-md-4 bg-red-1">
        <q-card-section>
          <div class="text-subtitle2 text-red-9">Barang Keluar</div>
          <div class="text-h5 text-weight-bold">940 Unit</div>
        </q-card-section>
      </q-card>
    </div>

    <!-- Grafik Produksi -->
    <q-card flat bordered class="bg-white">
      <q-card-section>
        <div class="text-subtitle1 text-weight-bold q-mb-md">
          Grafik Produksi Bulanan (Unit)
        </div>
        <q-responsive :ratio="16 / 9">
          <BarChart :data="chartData" :options="chartOptions" />
        </q-responsive>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import BarChart from '/src/components/BarChartProduksi.vue'

const chartData = ref({
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'],
  datasets: [
    {
      label: 'Jumlah Produksi',
      data: [1000, 1200, 950, 1300, 1100, 1700],


      backgroundColor: 'rgb(51, 112, 255)' // blue-grey
    }
  ]
})

const chartOptions = ref({
  responsive: true,
  plugins: {
    legend: { position: 'top' },
    title: {
      display: true,
      text: 'Statistik Produksi Barang Tahun 2025'
    }
  }
})
</script>

<style scoped>
.dashboard-produk {
  background: #f2f4f7;
}

.q-card {
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
}
</style>
