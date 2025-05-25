<template>
  <div class="admin-staff">
   
    <section class="form-section">
      <h2>{{ editing ? 'Edit Staff' : 'Tambah Staff' }}</h2>
      <form @submit.prevent="editing ? updateStaff() : addStaff()">
        <input v-model="staffForm.nama" type="text" placeholder="Nama Staff" required />
        <input v-model="staffForm.email" type="email" placeholder="Email" required />
        <input v-model="staffForm.role" type="text" placeholder="Role" required />
        <button type="submit">{{ editing ? 'Update' : 'Tambah' }}</button>
        <button type="button" v-if="editing" @click="cancelEdit">Batal</button>
      </form>
    </section>

    <section class="staff-list">
      <h2>Daftar Staff</h2>
      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Email</th>
            <th>Role</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(staff, index) in staffList" :key="index">
            <td>{{ staff.nama }}</td>
            <td>{{ staff.email }}</td>
            <td>{{ staff.role }}</td>
            <td>
              <button @click="editStaff(index)">Edit</button>
              <button @click="deleteStaff(index)">Hapus</button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
export default {
  name: "AdminStaff",
  data() {
    return {
      staffList: [],
      staffForm: {
        nama: '',
        email: '',
        role: '',
      },
      editing: false,
      currentEditIndex: null,
    };
  },
  methods: {
    addStaff() {
      this.staffList.push({ ...this.staffForm });
      this.resetForm();
    },
    editStaff(index) {
      this.staffForm = { ...this.staffList[index] };
      this.editing = true;
      this.currentEditIndex = index;
    },
    updateStaff() {
      this.staffList[this.currentEditIndex] = { ...this.staffForm };
      this.resetForm();
    },
    deleteStaff(index) {
      this.staffList.splice(index, 1);
    },
    cancelEdit() {
      this.resetForm();
    },
    resetForm() {
      this.staffForm = { nama: '', email: '', role: '' };
      this.editing = false;
      this.currentEditIndex = null;
    },
  },
};
</script>

<style scoped>
.admin-staff {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 20px;
  background: #f8f9fc;
  color: #333;
  min-height: 100vh;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

header h1 {
  font-size: 26px;
  color: #2c3e50;
}

.logout-btn {
  padding: 10px 20px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.logout-btn:hover {
  background-color: #c0392b;
}

.form-section {
  background: white;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 30px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.form-section form {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
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
  background-color: #3498db;
  color: white;
  cursor: pointer;
}

.form-section button:hover {
  background-color: #2980b9;
}

.staff-list table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  overflow: hidden;
}

.staff-list th, .staff-list td {
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid #eee;
}

.staff-list th {
  background-color: #ecf0f1;
}

.staff-list button {
  margin-right: 5px;
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.staff-list button:first-child {
  background-color: #27ae60;
}

.staff-list button:last-child {
  background-color: #e74c3c;
}

.staff-list button:hover {
  opacity: 0.85;
}
</style>
