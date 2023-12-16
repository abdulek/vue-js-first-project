<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Post</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Restaurant</a>
        </li>
      </ul>
      <div class="d-flex">
        <!-- Example single danger button -->
          <div class="btn-group dropstart">
            <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              User
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Profile</a></li>
              <li><a class="dropdown-item" href="#" v-on:click="logout()">Logout</a></li>
            </ul>
          </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
    export default {
        name: 'Header',
        methods:{
          logout(){
            localStorage.clear();
            this.$router.push({name:'SignIn'});
          }
        }

    }
</script>
