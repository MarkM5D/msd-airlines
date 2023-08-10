<template>
    <div class="support container section">
        <div class="sectionContainer">
            <div class="titlesDiv">
                <small>
                    travel support
                </small>
                <h2>Plan your travel with confidence</h2>
                <p>
                    Find help with booking and travel plans, see what to expect along the journey!
                </p>
            </div>
            <div class="infoDiv grid">
                <div class="textDiv grid">
                    <div class="singleInfo"  data-aos="fade-down" data-aos-duration="1000">
                        <span class="number">
                            01
                        </span>
                        <h4>Travel requirements for Dubai</h4>
                        <p>
                            Find help with booking and travel plans, see what to expect along the journey to your favourite
                            Destinations !
                        </p>
                    </div>
                    <div class="singleInfo" data-aos="fade-down" data-aos-duration="2000">
                        <span class="number colorOne">
                            02
                        </span>
                        <h4>Chauffeur services at your arrival</h4>
                        <p>
                            Find help with booking and travel plans, see what to expect along the journey to your favourite
                            Destinations !
                        </p>
                    </div>
                    <div class="singleInfo" data-aos="fade-down" data-aos-duration="3000">
                        <span class="number colorTwo">
                            03
                        </span>
                        <h4>Multi-risk travel insurance</h4>
                        <p>
                            Find help with booking and travel plans, see what to expect along the journey to your favourite
                            Destinations !
                        </p>
                    </div>
                </div>
                <div class="imgDiv" data-aos="fade-up" data-aos-duration="1000">
                    <img src="/src/Assets/gridAll.png" alt="" />
                </div>
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