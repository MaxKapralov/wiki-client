export const environment = {
  production: false,
  apiHost: 'localhost',
  apiPort: 8080,
  get apiUrl() {
    return `http://${this.apiHost}:${this.apiPort}`;
  }
};
