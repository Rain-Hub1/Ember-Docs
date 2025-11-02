<template>
  <div class="hero-card">
    <div class="content">
      <div class="title">{{ title }}</div>
      <div class="subtitle">{{ subtitle }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String
});
</script>

<style scoped>
.hero-card {
  padding: 2rem;
  border-radius: 12px;
  background: linear-gradient(120deg, #0ea5e9, #2563eb);
  color: white;
  margin: 2rem 0;
}
.title {
  font-size: 1.5rem;
  font-weight: 700;
}
.subtitle {
  font-size: 1rem;
  opacity: 0.8;
}
</style>
