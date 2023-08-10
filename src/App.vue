<script setup>
import Home from './Components/Home/Home.vue';
import Navbar from './Components/Navbar/Navbar.vue';
import Search from './Components/Search/Search.vue';
import Support from './Components/Support/Support.Vue'
import Info from './Components/Info/Info.vue';
import Lounge from './Components/Lounge/Lounge.vue';
import Travelers from './Components/Travelers/Travelers.vue';
import Subscribers from './Components/Subscribers/Subscribers.vue';
import Footerr from './Components/Footer/Footerr.vue';

</script>

<template>
  <div>
    <Navbar />
    <Home />
    <Search />
    <Support/>
    <Info/>
    <Lounge/>
    <Travelers/>
    <Subscribers/>
    <Footerr/>
  </div>
</template>

<style scoped></style>