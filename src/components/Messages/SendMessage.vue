<template>
    <div class="message-container">
      <h1><strong>Interested? Reach out Now!</strong></h1>
      <section class="coach-details">
        <div>
          <h1>Coach Name: {{ coach.firstName }} {{ coach.lastName }}</h1>
        </div>
        <div>
          <h3>Amount of course: ${{ coach.price }}</h3>
        </div>
      </section>
      <section class="contact-form">
        <form @submit.prevent="sendMessage">
          <div class="form-group">
            <label for="email">Email:</label>
            <input id="email" type="email" v-model="userData.email" required />
          </div>
          <div class="form-group">
            <label for="msg">Message:</label>
            <textarea id="msg" rows="3" v-model="userData.message" required></textarea>
          </div>
          <div class="form-actions">
            <button type="submit" class="btn send-btn">Send Message</button>
            <button type="button" class="btn cancel-btn" @click="cancel">Cancel</button>
          </div>
        </form>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      id: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        userData: {
          id:Math.random().toString(),
          email: '',
          message: ''
        }
      };
    },
    computed: {
      coach() {
        return this.$store.getters['coach/coach'].find((coach) => coach.id === this.id);
      }
    },
    methods: {
      sendMessage() {
        this.$store.dispatch('message/addMessage',this.userData)
      },
      cancel() {
        this.$router.push('/coaches')
      },
    }
  };
  </script>
  
  <style scoped>
  /* Overall container */
  .message-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f4f4f9;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  /* Coach details */
  .coach-details {
    margin-bottom: 20px;
    padding: 15px;
    background-color: #fff;
    border-radius: 8px;
    border: 1px solid #ddd;
    text-align: center;
  }
  
  .coach-details h1 {
    font-size: 1.8em;
    margin-bottom: 10px;
    color: #333;
  }
  
  .coach-details h3 {
    font-size: 1.4em;
    color: #28a745; /* Green color for price */
  }
  
  /* Form styles */
  .contact-form {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    border: 1px solid #ddd;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-group label {
    display: block;
    font-size: 1.2em;
    color: #333;
    margin-bottom: 8px;
  }
  
  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 10px;
    font-size: 1em;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .form-group input:focus,
  .form-group textarea:focus {
    border-color: #007bff;
    outline: none;
  }
  
  /* Buttons */
  .form-actions {
    margin-top: 20px;
    text-align: right;
  }
  
  button {
    padding: 10px 20px;
    font-size: 1em;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .send-btn {
    background-color: #007bff; /* Blue for send */
    color: white;
    margin-right: 10px;
  }
  
  .send-btn:hover {
    background-color: #0056b3;
  }
  
  .cancel-btn {
    background-color: #6c757d; /* Gray for cancel */
    color: white;
  }
  
  .cancel-btn:hover {
    background-color: #5a6268;
  }
  </style>
  