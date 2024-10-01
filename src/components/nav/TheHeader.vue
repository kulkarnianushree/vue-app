<template>
    <section class="header">
      <div class="left">
        <h1>Find a Coach</h1>
      </div>
      <div class="right">
        <router-link to="/coaches">Coaches</router-link>
        <router-link to="/requests">Requests</router-link>
      </div>
    </section>
  </template>
  
  <style scoped>
  .header {
    background-color: navy;
    color: white;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
  }
  
  .left h1 {
    margin: 0;
    font-weight: bold;
  }
  
  .right {
    display: flex;
    flex-shrink: 0; 
  }
  
  .right a {
    color: white;
    margin-left: 20px;
    text-decoration: none;
    font-weight: bold;
    white-space: nowrap; 
  }
  
  .right a:hover {
    text-decoration: underline;
  }
  </style>
  