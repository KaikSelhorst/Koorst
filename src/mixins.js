export const api = {
  data() {
    return {
      dadosApi: null,
    };
  },
  methods: {
    async getApi(query) {
      const response = await fetch(
        `https://koorst-api.vercel.app/api/${query}`
      );
      const data = await response.json();
      this.dadosApi = data;
      return;
    },
  },
};
