<template>
  <div class="navBar flex">
    <div class="navBarOne flex">

      <div>
        <v-icon name="si-consul" class="icon" />
      </div>

      <div class="none flex">
        <li class="flex"><v-icon name="bi-phone-vibrate" class="icon" />Support</li>
        <li class="flex"><v-icon name="bi-globe2" class="icon" />Languages</li>
      </div>

      <div class="atb flex">
        <span>Sign In</span>
        <span>Sign Out</span>
      </div>

    </div>

    <div :class="navClasses">

      <div class="logoDiv">
        <img src="/src/Assets/air-company-logo.png" alt="" class="Logo" />
      </div>

      <div :class="active">
        <ul class="menu flex">
          <li @click="removeNavBar" class="listItem">Home</li>
          <li @click="removeNavBar" class="listItem">About</li>
          <li @click="removeNavBar" class="listItem">Offers</li>
          <li @click="removeNavBar" class="listItem">Seats</li>
          <li @click="removeNavBar" class="listItem">Destinations</li>
        </ul>

        <button @click="removeNavBar" class="btn flex btnOne">
          Contact
        </button>
      </div>

      <button class="btn flex btnTwo">
        Contact
      </button>

      <div @click="toggleNavBar" class="toggleIcon">
        <v-icon name="bi-grid-3x3-gap-fill" class="icon" />
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 'navBarMenu',
      navBarVisible: false,
      navClasses: 'navBarTwo',
    };
  },
  mounted() {
    window.addEventListener('scroll', this.addBgColor);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.addBgColor);
  },
  methods: {
    toggleNavBar() {
      if (this.navBarVisible) {
        this.removeNavBar();
      } else {
        this.showNavBar();
      }
    },
    showNavBar() {
      this.active = 'navBarMenu showNavBar';
      this.navBarVisible = true;
    },
    removeNavBar() {
      this.active = 'navBarMenu';
      this.navBarVisible = false;
    },
    addBgColor() {
      if (window.scrollY >= 15) {
        this.navClasses = 'navBarTwo navbar_With_Bg';
      } else {
        this.navClasses = 'navBarTwo';
      }
    }
  },
  // Other component options here
};
</script>

<style></style>