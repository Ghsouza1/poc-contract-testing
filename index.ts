const axios = require("axios");

export class PlanetService {
  private url: string;

  constructor(endpoint: any) {
    this.url = endpoint.url;
  }
  public getPlanet = (id: number) => {
    return axios.request({
      baseURL: `${this.url}`,
      headers: { Accept: "application/json" },
      method: "GET",
      url: `/planets/${id}`,
    });
  };
  public getPlanets = () => {
    return axios.request({
      baseURL: `${this.url}`,
      headers: { Accept: "application/json" },
      method: "GET",
      url: `/planets/`,
    });
  };
}
