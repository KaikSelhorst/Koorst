export const api = {
  data() {
    return {
      dadosApi: null,
    };
  },
  methods: {
    async getApi(query) {
      const response = await fetch(`http://localhost:3000/${query}`);
      const data = await response.json();
      this.dadosApi = data;
      return;
    },
  },
};
