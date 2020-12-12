import axios from 'axios';

export default class Model {
  constructor() {
    this.loading = false;
  }

  async getCovidData() {
    this.loading = true;
    let data;
    try {
      const response = await axios.get(
        'https://api.covid19api.com/country/russia/status/confirmed?from=2020-09-01T00:00:00Z&to=2020-10-01T00:00:00Z'
      );

      data = response.data;
    } catch (e) {
      console.log('ошибка');
    } finally {
      this.loading = false;
    }
    return data;
  }

  async getMap() {}
}
