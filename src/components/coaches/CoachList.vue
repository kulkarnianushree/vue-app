<template>
  <section class="coaches-section">
    <ul class="coaches-list">
      <li v-for="coach in coaches" :key="coach.id" class="coach-item">
        <h1 class="coach-name">{{ coach.firstName }} {{ coach.lastName }}</h1>
        <p class="coach-price">${{ coach.price }}</p>
        <p class="coach-description">{{ coach.description }}</p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  computed: {
    coaches() {
      return this.$store.getters['coach/coach'];
    }
  }
}
</script>

<style scoped>
.coaches-section {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.coaches-list {
  list-style-type: none;
  padding: 0;
}

.coach-item {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 15px;
  margin: 10px 0;
  transition: box-shadow 0.3s ease;
}

.coach-item:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.coach-name {
  font-size: 1.5em;
  margin: 0 0 10px;
  color: #333;
}

.coach-price {
  font-size: 1.2em;
  margin: 0 0 5px;
  color: #28a745; /* Green color for price */
}

.coach-description {
  color: #666;
  margin: 0;
}
</style>
