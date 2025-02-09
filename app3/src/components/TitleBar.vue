<template>
    <div class="title-bar">
      <h1>{{ title }}</h1>
    </div>
  </template>
  
  <script>
  export default {
    props: ['title']
  };
  </script>
  
  <style>
  .title-bar {
    background-color: #ffcc00; /* McDonald's yellow */
    color: #da291c; /* McDonald's red */
    text-align: center;
    padding: 20px;
    font-size: 24px;
  }
  </style>
  