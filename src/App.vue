<template>
  <div class="Router">
    <router-link to="/" class="nav-link">Home</router-link>
    <router-link to="/about" class="nav-link">About Company</router-link>
    <router-link to="/staff" class="nav-link">Manajemen</router-link>
    <div class="profile">
      <router-link to="/ListBarang">
        <div class="profile-header">
          <img src="https://i.pravatar.cc/150?img=3" alt="Admin Profile" class="profile-picture" />
        </div>
      </router-link>
    </div>
  </div>
  <RouterView />
</template>

<style scoped>
.nav-link {
  text-decoration: none;
  color: #2c3e50;
  font-weight: bold;
}
.Router {
  margin-top: 70px;
  display: flex;
  margin-left: 500px;
  align-items: center;
  gap: 10rem;
  margin-bottom: 50px;
  text-decoration: none;
}

.profile {
  margin-left: 150px;
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 20px;
}

.profile-picture {
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #cacaca;
}
</style>
