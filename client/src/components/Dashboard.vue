<template>
<div>
  <div class="container">
    <div class="row" >
      <div class="col col-sm-3" v-for="photo in photos" :key="photo._id">
        <div class="card">
        <img class="card-img-top" :src="photo.photo" alt="Card image" style="width:100%">
        <div class="card-body">
          <h4 class="card-title">John Doe</h4>
          <p class="card-text">{{photo.caption}}</p>
          <span class="fa fa-heart fa-2x"></span>
        </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  computed: {
    photos () {
      return this.$store.getters.getPhotos
    }
  },
  created () {
    this.$store.dispatch('showPhotos')
  }

}
</script>

<style>

</style>
