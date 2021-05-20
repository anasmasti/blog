<template>
  <v-app light>
    <AppBar />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import AppBar from '@/components/layout/AppBar';
import Footer from '@/components/layout/Footer';

export default {
   components: {
    AppBar,
    Footer
  },
};
</script>
