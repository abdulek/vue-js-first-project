<template>
    <Header />
      <h1>Welcome, Welcome Home</h1>
    <Footer />
</template>

<script>
import Header from './common/Header.vue';
import Footer from './common/Footer.vue';
export default {
  name: 'Home',
  components:{
    Header,
    Footer
  },
  mounted(){
      let user = localStorage.getItem('user-info');
      if(!user){
          this.$router.push({name:'SignIn'});
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
