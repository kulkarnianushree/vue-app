<template>
  <section>
    <coach-form @filterCoaches="setSelectedCategory"></coach-form>
  </section>
  <section class="coaches-section">
    <ul class="coaches-list">
      <li v-for="coach in filteredCoaches" :key="coach.id" class="coach-item">
        <h1 class="coach-name">{{ coach.firstName }} {{ coach.lastName }}</h1>
        <p class="coach-price">${{ coach.price }}</p>
        <p class="coach-description">{{ coach.description }}</p>
        <div class="coach-actions">
          <button type="button" class="contact-btn" @click="ContactHandler(coach.id)">Contact</button>
          <button type="button" class="details-btn" @click="viewDetailsHandler(coach.id)">View Details</button>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import CoachForm from './CoachForm.vue';

export default {
  components: {
    CoachForm
  },
  data() {
    return {
      selectedCategory: null
    };
  },
  computed: {
    coaches() {
      return this.$store.getters['coach/coach'];
    },
    filteredCoaches() {
      if (!this.selectedCategory) return this.coaches; 
      return this.coaches.filter(coach => coach.description.toLowerCase().includes(this.selectedCategory.toLowerCase()));
    }
  },
  methods: {
    setSelectedCategory(category) {
      this.selectedCategory = category;
    },
    ContactHandler(id) {
      this.$router.push({
        name: 'sendMessage',
        params: { id }
      });
    }
  }
};
</script>

<style scoped>
.coaches-section {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 20px auto;
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

.coach-actions {
  margin-top: 15px;
}

button {
  padding: 10px 20px;
  font-size: 1em;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.contact-btn {
  background-color: #007bff; /* Blue */
  color: white;
  margin-right: 10px;
}

.contact-btn:hover {
  background-color: #0056b3;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.details-btn {
  background-color: #28a745; /* Green */
  color: white;
}

.details-btn:hover {
  background-color: #218838;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
</style>
