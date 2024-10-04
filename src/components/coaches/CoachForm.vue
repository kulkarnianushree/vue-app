<template>
  <form class="coach-form">
    <div><h1><strong>Find Your Coach</strong></h1></div>
    <div class="form-group">
      <input type="radio" id="frontend" value="frontend" v-model="selectedCoach" @change="filterCoaches" />
      <label for="frontend">Frontend</label>
    </div>

    <div class="form-group">
      <input type="radio" id="backend" value="backend" v-model="selectedCoach" @change="filterCoaches" />
      <label for="backend">Backend</label>
    </div>

    <div class="form-group">
      <input type="radio" id="career" value="career" v-model="selectedCoach" @change="filterCoaches" />
      <label for="career">Career</label>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      selectedCoach: null
    };
  },
  methods: {
    filterCoaches() {
      this.$emit('filterCoaches', this.selectedCoach); 
    }
  }
};
</script>

<style scoped>
.coach-form {
  background-color: #f1f1f1;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 20px auto;
}

.coach-form h1 {
  font-size: 1.8em;
  text-align: center;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

input[type="radio"] {
  margin-right: 10px;
}

label {
  font-size: 1.2em;
  color: #555;
  cursor: pointer;
}

label:hover {
  color: #007bff;
}

input[type="radio"]:checked + label {
  color: #007bff;
  font-weight: bold;
}
</style>
