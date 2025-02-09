<template>
  <div class="home">
    <TitleBar title="Welcome to McDonald's" />
    <WelcomeItem />
    <McDonaldsFood />
  </div>
</template>

<script>
import TitleBar from '@/components/TitleBar.vue';
import WelcomeItem from '@/components/WelcomeItem.vue';
import McDonaldsFood from '@/components/McDonaldsFood.vue';

export default {
  components: {
    TitleBar,
    WelcomeItem,
    McDonaldsFood
  }
};
</script>

<style scoped>
/* Scoped styles for HomeView if necessary */
</style>
