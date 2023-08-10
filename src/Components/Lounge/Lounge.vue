<template>
    <div class="lounge container section">
        <div class="sectionContainer grid">
            <div class="imgDiv" data-aos="fade-down" data-aos-duration="1000">
                <img src="/src/Assets/gridAll2.png" alt="" />
            </div>

            <div class="textDiv">
                <h2 data-aos="fade-down" data-aos-duration="4000">Unaccompanied Minor Lounge</h2>

                <div class="grids grid">

                    <div class="singleGrid" data-aos="fade-down" data-aos-duration="4000">
                        <span class="gridTitle">
                            Help through the airport
                        </span>
                        <p>
                            You can also call airlines from your phone and book a flight ticket to one of your favourite
                            destinations.
                        </p>
                    </div>

                    <div class="singleGrid" data-aos="fade-down" data-aos-duration="4000">
                        <span class="gridTitle">
                            Priority Boarding
                        </span>
                        <p>
                            You can also call airlines from your phone and book a flight ticket to one of your favourite
                            destinations.
                        </p>
                    </div>

                    <div class="singleGrid" data-aos="fade-down" data-aos-duration="4000">
                        <span class="gridTitle">
                            Care on the flight
                        </span>
                        <p>
                            You can also call airlines from your phone and book a flight ticket to one of your favourite
                            destinations.
                        </p>
                    </div>

                    <div data-aos="fade-down" data-aos-duration="4000" class="singleGrid">
                        <span class="gridTitle">
                            Cauffeur-drive service
                        </span>
                        <p>
                            You can also call airlines from your phone and book a flight ticket to one of your favourite
                            destinations.
                        </p>
                    </div>

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