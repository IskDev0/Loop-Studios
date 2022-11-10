<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <router-link to="/"><img src="../assets/images/icons/logo.svg" alt="Logo"></router-link>
        <div class="footer-links">
          <a href="https://facebook.com" target="_blank" class="footer-link"><img
              src="../assets/images/icons/icon-facebook.svg" alt=""></a>
          <a href="https://twitter.com" target="_blank" class="footer-link"><img
              src="../assets/images/icons/icon-twitter.svg" alt=""></a>
          <a href="https://pinterest.com" target="_blank" class="footer-link"><img
              src="../assets/images/icons/icon-pinterest.svg" alt=""></a>
          <a href="https://instagram.com" target="_blank" class="footer-link"><img
              src="../assets/images/icons/icon-instagram.svg" alt=""></a>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-routes">
          <router-link class="footer-route" to="/about">About</router-link>
          <router-link class="footer-route" to="/careers">Careers</router-link>
          <router-link class="footer-route" to="/events">Events</router-link>
          <router-link class="footer-route" to="/products">Products</router-link>
          <router-link class="footer-route" to="/support">Support</router-link>
        </div>
        <div class="copyright">© 2021 Loopstudios. All rights reserved.</div>
      </div>
    </div>
  </footer>
</template>

<script>

</script>
