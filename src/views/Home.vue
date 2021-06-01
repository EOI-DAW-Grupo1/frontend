<template>
  <div class="home">

    <Slider preTitle="Bienvenido" 
            :isBig="false"
            title="Las mejores pizzas"
            desc="A los mejores precios" />

    <section class="delicious-intro">
        <div class="wrap is-flex">
            <div class="info">
                <div class="columns">
                    <div class="column is-4 is-flex">
                        <div class="icon"><span class="icon-phone"></span></div>
                        <div class="text">
                            <h3>000 (123) 456 7890</h3>
                            <p>A small river named Duden flows</p>
                        </div>
                    </div>
                    <div class="column is-4 is-flex">
                        <div class="icon"><span class="icon-my_location"></span></div>
                        <div class="text">
                            <h3>198 West 21th Street</h3>
                            <p>Suite 721 New York NY 10016</p>
                        </div>
                    </div>
                    <div class="column is-4 is-flex">
                        <div class="icon"><span class="icon-clock-o"></span></div>
                        <div class="text">
                            <h3>Open Monday-Friday</h3>
                            <p>8:00am - 9:00pm</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="social is-flex is-align-items-center is-justify-content-center">
                <ul class="social-icon">
                    <li class="">
                        <a href="#"><span class="icon-twitter"></span></a>
                    </li>
                    <li class="">
                        <a href="#"><span class="icon-facebook"></span></a>
                    </li>
                    <li class="">
                        <a href="#"><span class="icon-instagram"></span></a>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <PizzaWall />

    <section class="delicious-section delicious-services">
        <div class="overlay"></div>
        <div class="container">
            <div class="columns is-justify-content-center mb-5 pb-3">
                <div class="column is-7 heading-section  has-text-centered">
                    <h2 class="mb-4">Our Services</h2>
                    <p>
                        Far far away, behind the word mountains, far from the countries
                        Vokalia and Consonantia, there live the blind texts.
                    </p>
                </div>
            </div>
            <div class="columns">
                <div class="column is-4 ">
                    <div class="media is-block has-text-centered block-6 services">
                        <div class="icon is-flex is-justify-content-center is-align-items-center mb-5">
                            <span class="flaticon-diet"></span>
                        </div>
                        <div class="media-body">
                            <h3 class="heading">Healthy Foods</h3>
                            <p>
                                Even the all-powerful Pointing has no control about the blind
                                texts it is an almost unorthographic.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="column is-4 ">
                    <div class="media is-block has-text-centered block-6 services">
                        <div
                                class="icon is-flex is-justify-content-center is-align-items-center mb-5"
                        >
                            <span class="flaticon-bicycle"></span>
                        </div>
                        <div class="media-body">
                            <h3 class="heading">Fastest Delivery</h3>
                            <p>
                                Even the all-powerful Pointing has no control about the blind
                                texts it is an almost unorthographic.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="column is-4 ">
                    <div class="media is-block has-text-centered block-6 services">
                        <div
                                class="icon is-flex is-justify-content-center is-align-items-center mb-5"
                        >
                            <span class="flaticon-pizza-1"></span>
                        </div>
                        <div class="media-body">
                            <h3 class="heading">Original Recipes</h3>
                            <p>
                                Even the all-powerful Pointing has no control about the blind
                                texts it is an almost unorthographic.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="delicious-section">
        <div class="container">
            <div class="columns is-justify-content-center mb-5 pb-3">
                <div class="column is-7 heading-section  has-text-centered">
                    <h2 class="mb-4">Recent from blog</h2>
                    <p>
                        Far far away, behind the word mountains, far from the countries
                        Vokalia and Consonantia, there live the blind texts.
                    </p>
                </div>
            </div>
            <div class="columns is-flex">
                <div class="column is-4 is-flex ">
                    <div class="blog-entry align-self-stretch">
                        <a
                                class="block-20"
                                href="blog-single.html"
                                style="background-image: url('images/image_1.jpg');"
                        >
                        </a>
                        <div class="text py-4 is-block">
                            <div class="meta">
                                <div><a href="#">Sept 10, 2018</a></div>
                                <div><a href="#">Admin</a></div>
                                <div>
                                    <a class="meta-chat" href="#"
                                    ><span class="icon-chat"></span> 3</a
                                    >
                                </div>
                            </div>
                            <h3 class="heading mt-2"><a href="#">The Delicious Pizza</a></h3>
                            <p>
                                A small river named Duden flows by their place and supplies it
                                with the necessary regelialia.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="column is-4 is-flex ">
                    <div class="blog-entry align-self-stretch">
                        <a
                                class="block-20"
                                href="blog-single.html"
                                style="background-image: url('images/image_2.jpg');"
                        >
                        </a>
                        <div class="text py-4 is-block">
                            <div class="meta">
                                <div><a href="#">Sept 10, 2018</a></div>
                                <div><a href="#">Admin</a></div>
                                <div>
                                    <a class="meta-chat" href="#"
                                    ><span class="icon-chat"></span> 3</a
                                    >
                                </div>
                            </div>
                            <h3 class="heading mt-2"><a href="#">The Delicious Pizza</a></h3>
                            <p>
                                A small river named Duden flows by their place and supplies it
                                with the necessary regelialia.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="column is-4 is-flex ">
                    <div class="blog-entry align-self-stretch">
                        <a
                                class="block-20"
                                href="blog-single.html"
                                style="background-image: url('images/image_3.jpg');"
                        >
                        </a>
                        <div class="text py-4 is-block">
                            <div class="meta">
                                <div><a href="#">Sept 10, 2018</a></div>
                                <div><a href="#">Admin</a></div>
                                <div>
                                    <a class="meta-chat" href="#"
                                    ><span class="icon-chat"></span> 3</a
                                    >
                                </div>
                            </div>
                            <h3 class="heading mt-2"><a href="#">The Delicious Pizza</a></h3>
                            <p>
                                A small river named Duden flows by their place and supplies it
                                with the necessary regelialia.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

  </div>
</template>

<script>

import Slider from "@/components/Slider"
import PizzaWall from "@/components/PizzaWall"

export default {
  name: 'Home',
  components: {
    Slider,
    PizzaWall
  }
}
</script>
