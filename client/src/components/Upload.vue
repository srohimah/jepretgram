<template>
  <div class="modal fade" id="modalUpload" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">upload Foto</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="recipient-name" class="text-md-left col-form-label">Image link:</label>
            <input type="text" class="form-control" id="recipient-name" v-model="photos.photo">
          </div>
          <div class="form-group">
            <label for="message-text" rows="5" class="text-md-left col-form-label">Caption:</label>
            <textarea class="form-control" id="body-text" v-model="photos.caption"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-dismiss="modal" @click="upload(photos)">Upload</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      photos: {
        caption: '',
        photo: '',
        user: localStorage.userId
      }
    }
  },
  methods: {
    upload (photos) {
      this.$store.dispatch('upload', photos)
    }
  }
}
</script>

<style>
textarea{
   height: 100px;
}

</style>