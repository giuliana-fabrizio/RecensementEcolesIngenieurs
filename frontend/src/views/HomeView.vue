<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <button>Filtrer les résultats</button>
    <FilterComponent/>
  </div>
</template>

<script>
import FilterComponent from '@/components/FilterComponent.vue'

export default {
  name: 'HomeView',
  components: {
    FilterComponent
  }
}
</script>
