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
    background-color: #ffcc00; 
    color: #da291c; 
    text-align: center;
    padding: 10px;
    font-size: 24px;
  }
  </style>
  