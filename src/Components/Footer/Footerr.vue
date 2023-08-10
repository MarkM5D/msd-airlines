<template>
    <div class="footer">
        <div class="sectionContainer container grid">
            <div class="gridOne" data-aos="fade-up" data-aos-duration="1000">
                <div class="logoDiv">
                    <img src="/src/Assets/air-company-logo.png" alt="" class="Logo" />
                </div>
                <p>
                    Your mind should be stronger than your feelings, fly !
                </p>
                <div class="socialIcon flex">
                    <v-icon name="co-facebook-f" class="icon" />
                    <v-icon name="bi-twitter" class="icon" />
                    <v-icon name="bi-youtube" class="icon" />
                    <v-icon name="co-pinterest-p" class="icon" />
                </div>
            </div>
            <div class="footerLinks" data-aos="fade-up" data-aos-duration="1000">
                <span class="linkTitle">
                    Information
                </span>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Explore</a>
                </li>
                <li>
                    <a href="">Flight Status</a>
                </li>
                <li>
                    <a href="">Travel</a>
                </li>
                <li>
                    <a href="">Check-In</a>
                </li>
                <li>
                    <a href="">Manage your booking</a>
                </li>
            </div>
            <div class="footerLinks" data-aos="fade-up" data-aos-duration="1000">
                <span class="linkTitle">
                    Quick Guide
                </span>
                <li>
                    <a href="">FAQ</a>
                </li>
                <li>
                    <a href="">How to</a>
                </li>
                <li>
                    <a href="">Features</a>
                </li>
                <li>
                    <a href="">Baggage</a>
                </li>
                <li>
                    <a href="">Route Map</a>
                </li>
                <li>
                    <a href="">Our communities</a>
                </li>
            </div>
            <div class="footerLinks" data-aos="fade-up" data-aos-duration="1000">
                <span class="linkTitle">
                    Information
                </span>
                <li>
                    <a href="">Chauffuer</a>
                </li>
                <li>
                    <a href="">Our Partners</a>
                </li>
                <li>
                    <a href="">Destination</a>
                </li>
                <li>
                    <a href="">Careers</a>
                </li>
                <li>
                    <a href="">Transportation</a>
                </li>
                <li>
                    <a href="">Programme Rules</a>
                </li>
            </div>
        </div>

        <div class="copyRightDiv flex">
            <p>
                Courtesy Design | Developed by <a href="http://mehmetsalihdurdu.com.tr/">MSD</a>
            </p>
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