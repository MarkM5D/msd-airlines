<template>
    <div class="subscribe section">
        <div data-aos="fade-up" data-aos-duration="1000" class="sectionContainer container">
            <h2>
                Subscribe Newsletters & get Latest News
            </h2>
            <div class="inputDiv flex">
                <input type="text" placeholder="Enter your email address" />
                <button class="btn">Subscribe</button>
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