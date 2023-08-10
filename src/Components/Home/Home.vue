<template>
  <div class="home flex container">

    <div class="mainText" data-aos="fade-up" data-aos-duration="1000">
      <h1>Create Ever-lasting Memories With Us</h1>
    </div>

    <div data-aos="fade-down" data-aos-duration="1000" class="homeImages flex">
      <div class="videoDiv">
        <video src="/src/Assets/flight.mp4" autoplay muted loop class="video"></video>
      </div>

      <img src="/src/Assets/takeOff.png" class="plane">

    </div>

  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: 'AOSExample',
  mounted() {
    AOS.init({
      duration: 1000,
    });
  },
};
</script>

<style></style>