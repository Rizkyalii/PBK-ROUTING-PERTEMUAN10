<template>
  <div class="profile-container">
    <div class="avatar-section">
      <img
        src="https://i.pravatar.cc/150?img=3"
        alt="Profile"
        class="avatar"
      />
      <h2 class="name">Rizky Maulana Ali</h2>
      <p class="role">Admin</p>
    </div>

    <div class="form-group">
      <label>Email</label>
      <div class="input-icon">
        <input type="email" value="aliiia@gmail.com" disabled />
        <span class="icon">📧</span>
      </div>
    </div>

    <div class="form-group">
      <label>Phone Number</label>
      <div class="input-icon">
        <input type="tel" value="+6281244444444" disabled />
        <span class="icon">📞</span>
      </div>
    </div>

    <div class="form-group">
      <label>Password</label>
      <div class="input-icon">
        <input type="password" value="password123" disabled />
        <span class="icon">🔒</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'AdminProfile',
}

</script>

<style scoped>
.profile-container {
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
  border-radius: 16px;
  background-color: #fff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', sans-serif;
  text-align: center;
}

.avatar-section {
  margin-bottom: 30px;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #007BFF;
  margin-bottom: 10px;
}

.name {
  font-size: 1.5rem;
  color: #007BFF;
  margin: 0;
}

.role {
  color: #777;
  margin-top: 4px;
  font-size: 0.95rem;
}

.form-group {
  text-align: left;
  margin-bottom: 20px;
}

label {
  display: block;
  font-size: 0.85rem;
  margin-bottom: 6px;
  color: #555;
}

.input-icon {
  position: relative;
}

input {
  width: 90%;
  padding: 10px 36px 10px 12px;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  background-color: #f1f6ff;
  color: #333;
}

input:disabled {
  background-color: #f1f6ff;
}

.icon {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.2rem;
  color: #888;
}
</style>
