<template>
  <div class="relative flex flex-col justify-center lg:overflow-hidden bg-jayge-100 custom-mq">
    <div class="relative flex items-center h-jcam w-jcam bg-jayllow-500 pl-2 lg:pl-6 pr-2 md:pr-0 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 mx-auto rounded-xl lg:rounded-3xl">
      <div class="mx-auto w-full">
        <div class="flex items-center w-full flex-col md:flex-row">
          <!-- First Column (20% width) -->
           <div class="image-logo">
            <div class="outer">
              <div class="logo-pure"></div>
              <div class="inner glitch">
                <div class="channel r"></div>
                <div class="channel g"></div>
                <div class="channel b"></div>
              </div>
            </div>
           </div>
          <!-- Second Column (80% width) -->
          <div class="grow transition-height min-w-full md:min-w-[unset]">
            <Navigation />
            <div class="text-jayge-200 bg-jayge-900 overflow-y-auto max-h-[600px] rounded-md md:rounded-l-lg md:rounded-r-none relative">
              <NuxtPage class="change-height" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>    
</template>
  
  <script setup>
  import Navigation from '~/components/Navigation.vue'
  </script>

  <style scoped lang="css">
  /* glitch */
  .outer {
	 position: relative;
  }
  .outer:before {
    display: block;
    content: "";
    width: 100%;
    padding-top: 63.8731596829%;
  }
  .outer > .inner {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
/* <!-- img src="~assets/images/djjaycam-logo.svg" class="pr-4 image-logo" / --> */
  .logo-pure {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url('../assets/images/djjaycam-logo.svg');
    opacity: .6;
  }

 .glitch {
  background: transparent;
  background-image: url('../assets/images/djjaycam-logo.svg');
  background-size: 0;
  overflow: hidden;
  z-index: 1;
  mix-blend-mode: multiply;
}
.glitch::before, .glitch::after,
.glitch .channel {
  background: inherit;
  background-size: cover;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.glitch::before {
  animation: glitch-before 3s linear infinite alternate both;
  content: "";
}
@keyframes glitch-before {
  0% {
    clip-path: polygon(0% 63.1201913859%, 100% 63.1201913859%, 100% 68.2851217004%, 0% 68.2851217004%);
    transform: translate(1.5860774262%, -0.3674589624%);
  }
  2% {
    clip-path: polygon(0% 43.2566045209%, 100% 43.2566045209%, 100% 48.7892168047%, 0% 48.7892168047%);
    transform: translate(1.2644566287%, 0.1469875208%);
  }
  4% {
    clip-path: polygon(0% 49.8222227282%, 100% 49.8222227282%, 100% 57.254361241%, 0% 57.254361241%);
    transform: translate(-6.1088654622%, -0.095881723%);
  }
  6% {
    clip-path: polygon(0% 10.4189056588%, 100% 10.4189056588%, 100% 17.4852028962%, 0% 17.4852028962%);
    transform: translate(2.6629678883%, -0.1016674768%);
  }
  8% {
    clip-path: polygon(0% 28.2219738899%, 100% 28.2219738899%, 100% 31.3196512989%, 0% 31.3196512989%);
    transform: translate(5.3462500453%, 0.3987160959%);
  }
  10% {
    clip-path: polygon(0% 46.4606099843%, 100% 46.4606099843%, 100% 50.6695686125%, 0% 50.6695686125%);
    transform: translate(5.8749046521%, -0.4564662512%);
  }
  12% {
    clip-path: polygon(0% 86.4163234631%, 100% 86.4163234631%, 100% 91.5220811592%, 0% 91.5220811592%);
    transform: translate(-6.5916908416%, -0.3471419488%);
  }
  14% {
    clip-path: polygon(0% 33.7693797001%, 100% 33.7693797001%, 100% 40.9809315691%, 0% 40.9809315691%);
    transform: translate(2.4125451313%, -0.0074289552%);
  }
  16% {
    clip-path: polygon(0% 13.9470147738%, 100% 13.9470147738%, 100% 21.3397240661%, 0% 21.3397240661%);
    transform: translate(6.7337369453%, -0.4081608905%);
  }
  18% {
    clip-path: polygon(0% 43.3659288407%, 100% 43.3659288407%, 100% 48.8797215594%, 0% 48.8797215594%);
    transform: translate(-7.4332612206%, -0.0317690379%);
  }
  20%, 100% {
    clip-path: none;
    transform: none;
  }
}
.glitch::after {
  animation: glitch-after 3s linear infinite alternate both;
  content: "";
}
@keyframes glitch-after {
  0% {
    clip-path: polygon(0% 36.1644679966%, 100% 36.1644679966%, 100% 44.8040767242%, 0% 44.8040767242%);
    transform: translate(-1.6694147971%, -0.4623374093%);
  }
  2% {
    clip-path: polygon(0% 58.765437799%, 100% 58.765437799%, 100% 65.0812415687%, 0% 65.0812415687%);
    transform: translate(2.7416755841%, -0.4003194396%);
  }
  4% {
    clip-path: polygon(0% 10.9538377495%, 100% 10.9538377495%, 100% 14.654339742%, 0% 14.654339742%);
    transform: translate(4.2139331146%, -0.012765056%);
  }
  6% {
    clip-path: polygon(0% 73.3196793971%, 100% 73.3196793971%, 100% 82.1473925323%, 0% 82.1473925323%);
    transform: translate(-7.8648127614%, -0.4545000982%);
  }
  8% {
    clip-path: polygon(0% 85.0948939822%, 100% 85.0948939822%, 100% 86.9000501432%, 0% 86.9000501432%);
    transform: translate(-1.0450314605%, 0.4358952745%);
  }
  10% {
    clip-path: polygon(0% 77.9980734245%, 100% 77.9980734245%, 100% 82.8828265614%, 0% 82.8828265614%);
    transform: translate(2.6616708726%, 0.0065791929%);
  }
  12% {
    clip-path: polygon(0% 17.8167783014%, 100% 17.8167783014%, 100% 24.0498573058%, 0% 24.0498573058%);
    transform: translate(1.516777502%, 0.2739486446%);
  }
  14% {
    clip-path: polygon(0% 86.5895997428%, 100% 86.5895997428%, 100% 90.4335055963%, 0% 90.4335055963%);
    transform: translate(-4.9808643542%, 0.4022229343%);
  }
  16% {
    clip-path: polygon(0% 89.4165461507%, 100% 89.4165461507%, 100% 97.1354900917%, 0% 97.1354900917%);
    transform: translate(-7.3548921712%, 0.4843204388%);
  }
  18% {
    clip-path: polygon(0% 36.9642691169%, 100% 36.9642691169%, 100% 41.0671491326%, 0% 41.0671491326%);
    transform: translate(6.8831689304%, -0.2889788745%);
  }
  20%, 100% {
    clip-path: none;
    transform: none;
  }
}
.glitch .channel {
  mix-blend-mode: screen;
}
.glitch .channel::before {
  bottom: 0;
  content: "";
  display: block;
  mix-blend-mode: multiply;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
}
.glitch .r {
  animation: rgb-shift-r 3s steps(1, jump-end) infinite alternate both;
}
@keyframes rgb-shift-r {
  0% {
    transform: translate(1.5128697474%, -0.4789345311%);
  }
  2% {
    transform: translate(-1.0087013938%, 0.0804833987%);
  }
  4% {
    transform: translate(-0.5044818141%, 0.1652025438%);
  }
  6% {
    transform: translate(-1.2976766358%, -0.0768132308%);
  }
  8% {
    transform: translate(-1.500861944%, -0.2294077618%);
  }
  10% {
    transform: translate(-1.2098010031%, 0.1780522886%);
  }
  12% {
    transform: translate(1.5712621129%, 0.0415568644%);
  }
  14% {
    transform: translate(-0.6056178301%, -0.1323791083%);
  }
  16% {
    transform: translate(0.0397417651%, -0.4629038768%);
  }
  18% {
    transform: translate(-0.583849517%, -0.1974602795%);
  }
  20%, 100% {
    transform: none;
  }
}
.glitch .r::before {
  background: #f00;
}
.glitch .g {
  animation: rgb-shift-g 3s steps(1, jump-end) infinite alternate both;
}
@keyframes rgb-shift-g {
  0% {
    transform: translate(1.0430977366%, 0.2783635475%);
  }
  2% {
    transform: translate(0.5332196497%, 0.0752406074%);
  }
  4% {
    transform: translate(1.1149225053%, 0.0837126679%);
  }
  6% {
    transform: translate(1.6154135267%, -0.186541303%);
  }
  8% {
    transform: translate(1.8102551783%, -0.4775971592%);
  }
  10% {
    transform: translate(-0.5406424198%, -0.1580128598%);
  }
  12% {
    transform: translate(-0.0148651788%, -0.1561917735%);
  }
  14% {
    transform: translate(1.045605134%, -0.0285473008%);
  }
  16% {
    transform: translate(0.6399336209%, 0.0961661678%);
  }
  18% {
    transform: translate(-1.2950395989%, -0.1606106891%);
  }
  20%, 100% {
    transform: none;
  }
}
.glitch .g::before {
  background: #0f0;
}
.glitch .b {
  animation: rgb-shift-b 3s steps(1, jump-end) infinite alternate both;
}
@keyframes rgb-shift-b {
  0% {
    transform: translate(-1.1691167497%, -0.4315222%);
  }
  2% {
    transform: translate(-1.2694353863%, -0.2669692017%);
  }
  4% {
    transform: translate(-0.5408056825%, 0.1569953928%);
  }
  6% {
    transform: translate(-0.818536403%, -0.318868422%);
  }
  8% {
    transform: translate(1.897523695%, 0.0128622448%);
  }
  10% {
    transform: translate(1.9798314656%, -0.4771030582%);
  }
  12% {
    transform: translate(-0.0677053914%, 0.0577391315%);
  }
  14% {
    transform: translate(0.3129050162%, -0.4716275793%);
  }
  16% {
    transform: translate(0.7647286127%, 0.4805488944%);
  }
  18% {
    transform: translate(0.2867230655%, 0.2786215162%);
  }
  20%, 100% {
    transform: none;
  }
}
.glitch .b::before {
  background: #00f;
}

/* end glitch */
.transition-height {
  transition: height 0.5s ease-in-out;
  interpolate-size: allow-keywords;
}
.change-height {
  transition: height 0.5s;
  interpolate-size: allow-keywords;
}
@media (max-width: 1280px) {
.image-logo {
  width: 50%;
}
}
@media (min-width: 1281px) {
  .image-logo {
    width: 60%;
  }
 }
 @media (max-height: 690px) {
    .lg\:overflow-hidden {
        overflow: unset;
    }
}
</style>
  