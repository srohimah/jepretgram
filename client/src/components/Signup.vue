<template>
  <div class="modal fade" id="modalSignup" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">SignUp</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="recipient-name" class="text-md-left col-form-label">Name:</label>
            <input type="text" class="form-control"  require v-model="name">
          </div>
          <div class="form-group">
            <label for="message-text" rows="5" class="text-md-left col-form-label">Email:</label>
            <input type="email" class="form-control" required v-model="email">
          </div>
          <div class="form-group">
            <label for="message-text" rows="5" class="text-md-left col-form-label">Password:</label>
            <input type="password" class="form-control"  required v-model="password">
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="signup">Sign Up</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    signup () {
      axios({
        method: 'post',
        url: 'http://localhost:3000/users/signup',
        data: {
          email: this.email,
          name: this.name,
          password: this.password
        }
      }).then(data => {
        console.log(data)
      }).catch(err => console.log(err))
    }
  }
}
</script>

<style>

</style>