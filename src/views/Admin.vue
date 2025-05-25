<template>

  <div class="admin-dashboard">

    <section class="form-section">
      <h2>{{ editing ? 'Edit Barang' : 'Tambah Barang' }}</h2>
      <form @submit.prevent="editing ? updateBarang() : addBarang()">
        <input v-model="barangForm.nama" type="text" placeholder="Nama Barang" required />
        <input v-model="barangForm.jumlah" type="number" placeholder="Jumlah" required />
        <button type="submit">{{ editing ? 'Update' : 'Tambah' }}</button>
        <button type="button" v-if="editing" @click="cancelEdit">Batal</button>
      </form>
    </section>

    <section class="barang-list">
      <h2>Daftar Barang</h2>
      <table>
        <thead>
          <tr>
            <th>Nama Barang</th>
            <th>Jumlah</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in barang" :key="index">
            <td>{{ item.nama }}</td>
            <td>{{ item.jumlah }}</td>
            <td>
              <button @click="editBarang(index)">Edit</button>
              <button @click="deleteBarang(index)">Hapus</button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      barang: [],
      barangForm: {
        nama: '',
        jumlah: '',
      },
      editing: false,
      currentEditIndex: null,
    };
  },
  methods: {
    addBarang() {
      this.barang.push({ ...this.barangForm });
      this.resetForm();
    },
    editBarang(index) {
      this.barangForm = { ...this.barang[index] };
      this.editing = true;
      this.currentEditIndex = index;
    },
    updateBarang() {
      this.barang[this.currentEditIndex] = { ...this.barangForm };
      this.resetForm();
    },
    deleteBarang(index) {
      this.barang.splice(index, 1);
    },
    cancelEdit() {
      this.resetForm();
    },
    resetForm() {
      this.barangForm = { nama: '', jumlah: '' };
      this.editing = false;
      this.currentEditIndex = null;
    },
  },
};
</script>

<style scoped>
.admin-dashboard {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 20px;
  background: #f7f9fc;
  color: #333;
  min-height: 150vh;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

header h1 {
  font-size: 28px;
  color: #2c3e50;
}

.form-section {
  background: white;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.form-section form {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.form-section input {
  flex: 1 1 200px;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
}

.form-section button {
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background-color: #3498db;
  color: white;
  transition: background-color 0.3s ease;
}

.form-section button:hover {
  background-color: #2980b9;
}

.barang-list table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.barang-list th, .barang-list td {
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid #eee;
}

.barang-list th {
  background-color: #ecf0f1;
}

.barang-list button {
  margin-right: 5px;
  padding: 5px 10px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background-color: #27ae60;
  color: white;
  transition: background-color 0.3s ease;
}

.barang-list button:last-child {
  background-color: #e74c3c;
}

.barang-list button:hover {
  opacity: 0.8;
}
</style>