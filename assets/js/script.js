const { createApp } = Vue;

createApp({
  data () {
    return {
      apiUrl : "https://flynn.boolean.careers/exercises/api/random/mail",
      emailList : [],
    }
  },

  methods : {
    getApi() {
      for (let i=0; i<10; i++) {
        axios.get(this.apiUrl) 
          .then ( result => {
            this.emailList[i] = result.data.response;
          })
      }
    }
  },

  mounted () {
    this.getApi();
  }
}).mount("#app")