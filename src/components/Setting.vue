<template>
  <q-page padding class="flex flex-center page-background">
    <q-card class="profile-card q-pa-xl shadow-10 rounded-borders">
      <div class="column items-center profile-header">
        <q-avatar size="120px" class="q-mb-md avatar-glow">
          <img src="https://cdn-icons-png.flaticon.com/512/4139/4139981.png" alt="User Avatar" />
        </q-avatar>

        <div class="text-h5 text-primary text-weight-bold q-mt-md">ADMIN</div>
      </div>

      <div class="q-mt-md column q-gutter-md info-fields-container">
        <q-input
          v-model="email"
          label="Alamat Email"
          outlined
          readonly
          dense
          color="blue-grey-6"
          bg-color="light-blue-1"
          class="info-input"
        >
          <template #prepend>
            <q-icon name="mail_outline" color="blue-grey-6" />
          </template>
        </q-input>

        <q-input
          v-model="phone"
          label="Nomor Telepon"
          outlined
          readonly
          dense
          color="blue-grey-6"
          bg-color="light-blue-1"
          class="info-input"
        >
          <template #prepend>
            <q-icon name="phone_android" color="blue-grey-6" />
          </template>
        </q-input>

        <q-input
          v-model="password"
          label="Kata Sandi"
          outlined
          readonly
          dense
          color="blue-grey-6"
          bg-color="light-blue-1"
          type="password"
          class="info-input"
        >
          <template #prepend>
            <q-icon name="lock_open" color="blue-grey-6" />
          </template>
        </q-input>
      </div>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('admin@gmail.com')
const phone = ref('+6281244444444')
const password = ref('SuperSecretPassword123') // Contoh kata sandi yang lebih realistis

const passwordFieldType = ref('password') // Untuk toggle visibility

const togglePasswordVisibility = () => {
  passwordFieldType.value = passwordFieldType.value === 'password' ? 'text' : 'password'
}
</script>

<style scoped>
/* Page Background */
.page-background {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Profile Card Styling */
.profile-card {
  width: 400px; /* Slightly wider for better presentation */
  max-width: 90vw;
  border-radius: 20px; /* More rounded corners */
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15); /* Deeper, softer shadow */
  background-color: #ffffff; /* Clean white background */
  padding: 40px; /* More padding inside the card */
  transition: all 0.3s ease-in-out; /* Smooth transition for hover effects */
}

.profile-card:hover {
  transform: translateY(-5px); /* Slight lift on hover */
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
}

/* Profile Header Section */
.profile-header {
  margin-bottom: 30px;
}

/* Avatar Styling */
.q-avatar {
  border: 4px solid #fff; /* White border around avatar */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); /* Shadow for avatar */
  transition: transform 0.3s ease;
}

.q-avatar:hover {
  transform: scale(1.05); /* Slight zoom on hover */
}

.avatar-glow img {
  border-radius: 50%; /* Ensure image is perfectly round */
}

/* Text Styling */
.text-primary {
  color: #2196F3; /* A vibrant blue */
}

.text-grey-7 {
  color: #616161; /* Darker grey for subtitles */
}

/* Info Fields Container */
.info-fields-container {
  margin-top: 30px;
}

/* Info Input Fields */
.info-input {
  border-radius: 8px;
  overflow: hidden; /* Ensure border-radius applies to inner elements */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05); /* Subtle shadow for inputs */
  transition: all 0.3s ease;
}

.info-input:focus-within {
  box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.2); /* Blue glow on focus */
  border-color: #2196F3;
}

/* Action Button Styling */
.action-button {
  height: 50px;
  font-size: 1rem;
  letter-spacing: 0.8px;
  font-weight: 600;
  border-radius: 12px; /* Rounded button */
  box-shadow: 0 8px 20px rgba(33, 150, 243, 0.3); /* Blue shadow for button */
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}

.action-button:hover {
  transform: translateY(-4px); /* More pronounced lift on hover */
  box-shadow: 0 12px 25px rgba(33, 150, 243, 0.4);
}
</style>