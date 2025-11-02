<template>
  <div class="feature-pills">
    <slot></slot>
  </div>
</template>

<style>
.feature-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: 2rem 0;
}
.feature-pills > div {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-weight: 500;
  font-size: 0.875rem;
}
</style>
