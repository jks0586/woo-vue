<template>
  <div class="">
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
      <div class="container-fluid d-block container ">
        
        <a class="navbar-brand " href="#">
          <img src="@/assets/img/logo.png" alt="" >
        </a>
        <button
          class="navbar-toggler border border-white text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        <span class="navbar-toggler-icon text-white"></span>
        </button>
      </div>
    </nav>
  </div>
</template>
<script>
import { RouterLink } from "vue-router";
export default {
  components: {
    RouterLink,
  },
};
</script>
