const Words = {
  data() {
    return {
      input: "",
      result: "",
    };
  },
  methods: {
    getInput(e) {
      this.input = e.target.value;
    },
    calculateLength() {
      this.result = this.input.length;
    },
  },
};

Vue.createApp(Words).mount("#container");
