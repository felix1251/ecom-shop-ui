<template lang="">
  <div class="d-flex w-100 h-100 justify-content-center align-items-center flex-column gap-4">
    <h2>Ecommerce Shop</h2>
    <GoogleLogin :callback="callback"/>
  </div>
</template>
<script>
import secureStorage from '@/secureStorage'

export default {
  name: "sign-in",
  methods: {
    callback(response) {
      console.log(response)
      this.signIn(response.credential)
    },
    signIn(id_token){
      this.$plain.post('api/v1/google_auth/callback', {id_token: id_token})
        .then(response=>{
          console.log(response)
        })
        .catch(error=>{
          console.log(error)
        })
    }
  },
};
</script>
<style lang=""></style>
