<template>
  <q-page class="q-pa-md dashboard">
    <div class="text-h4 text-primary q-mb-lg text-weight-bold">
      Dashboard Penjualan
    </div>

    <!-- Ringkasan Info -->
    <div class="row q-col-gutter-md q-mb-lg">
      <q-card class="col-xs-12 col-sm-4 bg-indigo-1">
        <q-card-section>
          <div class="text-subtitle1 text-indigo-9">Total Penjualan</div>
          <div class="text-h5 text-weight-bold">Rp 125.000.000</div>
        </q-card-section>
      </q-card>

      <q-card class="col-xs-12 col-sm-4 bg-green-1">
        <q-card-section>
          <div class="text-subtitle1 text-green-9">Jumlah Produk</div>
          <div class="text-h5 text-weight-bold">120 Item</div>
        </q-card-section>
      </q-card>

      <q-card class="col-xs-12 col-sm-4 bg-orange-1">
        <q-card-section>
          <div class="text-subtitle1 text-orange-9">Pelanggan Aktif</div>
          <div class="text-h5 text-weight-bold">45 Orang</div>
        </q-card-section>
      </q-card>
    </div>

    <!-- Grafik Penjualan -->
    <q-card flat bordered class="bg-white">
      <q-card-section>
        <div class="text-subtitle1 text-weight-bold q-mb-md">Grafik Penjualan Bulanan</div>
        <q-responsive :ratio="16/9">
          <BarChart :data="chartData" :options="chartOptions" />
        </q-responsive>
      </q-card-section>
    </q-card>
    <DashboardProduksi />
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import BarChart from '/src/components/BarChart.vue'
import DashboardProduksi from '/src/components/DashBoardProduksi.vue'

const chartData = ref({
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'],
  datasets: [
    {
      label: 'Penjualan (Juta Rp)',
      data: [12, 19, 14, 20, 25, 18],
      backgroundColor: '#42A5F5'
    }
  ]
})

const chartOptions = ref({
  responsive: true,
  plugins: {
    legend: { position: 'top' },
    title: {
      display: true,
      text: 'Penjualan per Bulan (2025)'
    }
  }
})
</script>

<style scoped>
.dashboard {
  background: #f5f8fa;
}

.q-card {
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
}
</style>
