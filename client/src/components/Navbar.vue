<template>
<div>
<nav class="navbar navbar-expand-lg navbar-dark fixed-top navbar-top">
    <div class="container">
      <a class="navbar-brand" href="#">Jepretgram</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <button v-if="!tokenUser" class="btn btn-otline-info" data-toggle="modal" data-target="#modalSignup">Signup</button>
            <button v-if="!tokenUser" class="btn btn-otline-info" data-toggle="modal" data-target="#modalSignin">Login</button>
            <button v-if="tokenUser" class="btn btn-otline-info" @click="logout">Logout</button>
            <button v-if="tokenUser" class="btn btn-otline-info" data-toggle="modal" data-target="#modalUpload">Upload Foto</button>
          </li>
        </ul>
      </div>
    </div>
</nav>
<signup></signup>
<signin></signin>
<upload></upload>
</div>
</template>

<script>
import signup from '@/components/Signup'
import signin from '@/components/Signin'
import upload from '@/components/Upload'
import router from '../router'

export default {
  components: {
    signup,
    signin,
    upload
  },
  data () {
    return {
      tokenUser: localStorage.tokenUser
    }
  },
  methods: {
    logout () {
      localStorage.clear()
      router.push('/')
    }
  }
}
</script>

<style>
.navbar-top{
    background-color:brown;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
}
</style>
