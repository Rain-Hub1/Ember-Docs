<template>
  <div class="custom-component">
    <p>
      <slot>Este é um componente Vue customizado!</slot>
    </p>
  </div>
</template>

<style>
.custom-component {
  background-color: #2c2c2c;
  border-left: 3px solid #42b883;
  padding: 1rem 1.5rem;
  margin: 1rem 0;
  border-radius: 8px;
}
</style>
