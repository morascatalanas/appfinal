<template>
<b-carousel
    id="carousel-fade"
      :interval="4000"
      controls
      indicators
      background="#ababab">
  <div class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" >
<b-card bg-variant="secondary" text-variant="white" header="Mission" class="text-center">
        <b-card-text>To support young athletes living in Chicago's northside neighborhoods, who have an interest in learning and playing soccer, with opportunities to learn and practice others skills related to the game of soccer.</b-card-text>
      </b-card>    </div>
    <div class="carousel-item">
<b-card bg-variant="secondary" text-variant="white" header="Vision" class="text-center">
        <b-card-text>The Northside Youth Soccer League aspires to develop strong, well-rounded, and mindful athletes through the building of character, self-discipline, and leadership.</b-card-text>
      </b-card>    </div>
    <div class="carousel-item">
<b-card bg-variant="secondary"  text-variant="white" header="General Information" class="text-center">
        <b-card-text>The Northside Youth Soccer League  since 1996 to provide athletes between the ages of 4 - 12  residing in Chicago's northside neighborhoods an environment in which to learn and play soccer. To be a member , you must be  and reside in a Chicago northside neighborhood.</b-card-text>
      </b-card>   </div>
  </div>
</div>
</b-carousel>

</template>

<style lang="scss">
.card{
background-color: #1CAF6C;
margin: 5%;
}
.carousel-indicators{
  margin-bottom: 0px;
}


</style>
