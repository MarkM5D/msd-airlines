<template>
  <div class="search container section">
    <div class="sectionContainer grid" data-aos="fade-up" data-aos-duration="1000">
      <div class="btns flex">
        <div class="singleBtn">
          <span>Economy</span>
        </div>
        <div class="singleBtn">
          <span>Business Class</span>
        </div>
        <div class="singleBtn">
          <span>First Class</span>
        </div>
      </div>
      <div class="searchInputs flex" data-aos="fade-up" data-aos-duration="1000">
        <div class="singleInput flex">
          <div class="iconDiv">
            <v-icon name="hi-location-marker" class="icon" />
          </div>
          <div class="texts">
            <h4>Location</h4>
            <input type="text" placeholder="Where do you want to go ?" />
          </div>
        </div>
        <div class="singleInput flex">
          <div class="iconDiv">
            <v-icon name="ri-account-pin-circle-line" class="icon" />
          </div>
          <div class="texts">
            <h4>Travelers</h4>
            <input type="text" placeholder="Add guests" />
          </div>
        </div>
        <div class="singleInput flex">
          <div class="iconDiv">
            <v-icon name="io-calendar-outline" class="icon" />
          </div>
          <div class="texts">
            <h4>Check In</h4>
            <input type="text" placeholder="Add date" />
          </div>
        </div>
        <div class="singleInput flex">
          <div class="iconDiv">
            <v-icon name="io-calendar-outline" class="icon" />
          </div>
          <div class="texts">
            <h4>Check Out</h4>
            <input type="text" placeholder="Add date" />
          </div>
        </div>
        <button class="btn btnBlock flex">Search Flight</button>
      </div>
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