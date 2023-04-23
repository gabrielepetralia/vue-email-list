const { createApp } = Vue;

createApp({
  data () {
    return {
      apiUrl : "https://flynn.boolean.careers/exercises/api/random/mail",
      emailList : [],
      numEmails : 10,
      loading : true,
    }
  },

  methods : {
    getApi() {
      this.loading = true;
      for (let i=0; i < this.numEmails; i++) {
        axios.get(this.apiUrl) 
          .then ( result => {
            this.emailList[i] = result.data.response;
            if(i === this.numEmails - 1) this.loading = false;
          })
      }
    }
  },

  mounted () {
    this.getApi();
  }
}).mount("#app")