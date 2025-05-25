<template>
  <div class="about-container">
    <section class="about-card">
      <h1 class="title">Tentang Company</h1>
      <p class="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae est, qui assumenda pariatur quaerat ratione. Distinctio, qui asperiores nisi magni est doloribus architecto totam quae excepturi aliquid? Sunt, ea omnis voluptates delectus architecto inventore sit! Nihil corporis delectus blanditiis perferendis libero laboriosam, quam facilis optio cum sint nisi pariatur animi dignissimos minima ad rem ullam consectetur hic deserunt eveniet magni itaque temporibus molestiae id? Assumenda praesentium alias cupiditate eligendi quam commodi quasi, saepe, distinctio molestias, autem provident aspernatur nisi ea officia voluptates possimus repudiandae ab recusandae ut itaque totam incidunt mollitia modi expedita. Aliquam autem aspernatur ea eum culpa earum!
      </p>

      <div class="info-grid">
        <div class="info-box">
          <h2>Fitur Unggulan</h2>
          <ul>
            <li>Manajemen barang</li>
            <li>Pencarian cepat</li>
            <li>Antarmuka ringan</li>
            <li>Responsive design</li>
          </ul>
        </div>
        <div class="info-box">
          <h2>Teknologi</h2>
          <ul>
            <li>Vue.js 3</li>
            <li>Vue Router</li>
            <li>Pure CSS</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-container {
  display: flex;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(to right, #f0f0f0, #ffffff);
  min-height: 100vh;
}

.about-card {
  max-width: 800px;
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
  text-align: center;
}

.description {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.info-box {
  background-color: #fafafa;
  padding: 1rem;
  border-radius: 0.75rem;
  border: 1px solid #ddd;
}

.info-box h2 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #222;
}

.info-box ul {
  padding-left: 1.2rem;
}

.info-box li {
  list-style: disc;
  color: #444;
  margin-bottom: 0.4rem;
}

@media (max-width: 768px) {
  .info-grid {
    grid-template-columns: 1fr;
  }
}
</style>
