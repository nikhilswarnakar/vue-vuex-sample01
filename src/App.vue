<template>
  <div id="app">
    <button @click="toggleMe">Toggle Me</button>
    <hr />
    <img v-if="isTrue" src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    isTrue: function() {
      return this.$store.getters.isTrue;
    }
  },
  data: function() {
    return {

        // isTrue : true
        parentString: "",
        
      toDate: null,
      parentString: "",
      showQuotaPanel: false,
      lastSubmitDate: null,
      count: 0,
      leavequota: 0,
      model : {
        toDate : null,
      parentString: "",
      showQuotaPanel: false,      
      count: 0
      }
    }
    
  },
  methods: {
    toggleMe: function() {
      //var thisme = this;
      // this.isTrue = ! this.isTrue;
      this.model.toDate="2018-01-15";
      this.model.parentString="payload successfully dispacted to Vuex";
      this.model.showQuotaPanel= true;
      this.model.count=10;
      /*
      this.$store.dispatch('toggle',{
          toDate : "2018-01-15",
      parentString: "Hi there how r u",
      showQuotaPanel: false,      
      count: 0
        
      });
      */
      this.$store.dispatch('toggle',this.model);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
