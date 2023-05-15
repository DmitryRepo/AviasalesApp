// Сначала получаем searchId(getSearchId), потом по searchId производим поиск(getTickets) билетов.
class TiketsApi {
  baseUrl = 'https://aviasales-test-api.kata.academy';
  async getSearchId() {
    return fetch(`${this.baseUrl}/search`).then((response) => {
      if (!response.ok) {
        throw new Error(`Ошибка, статус ошибки ${response.status}`);
      }
      return response.json();
    });
  }
  async getTickets(searchId) {
    return fetch(`${this.baseUrl}/tickets?searchId=${searchId}`).then((response) => {
      if (!response.ok) {
        throw new Error(`Ошибка, статус ошибки ${response.status}`);
      }
      return response.json();
    });
  }
}

export default TiketsApi;
