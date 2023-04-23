const { createApp } = Vue;

createApp({
  data () {
    return {
      apiUrl : "https://flynn.boolean.careers/exercises/api/random/mail",
    }
  },

  methods : {
    getApi() {
      axios.get(this.apiUrl) 
        .then ( result => {
          console.log(result.data.response);
        })
    }
  },

  mounted () {
    this.getApi();
  }
}).mount("#app")