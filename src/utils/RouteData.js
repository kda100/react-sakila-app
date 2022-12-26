class RouteData {
  constructor(name, route, page) {
    this.name = name;
    this.route = route;
    this.page = page;
  }

  getFullPath(parameters = {}) {
    let url = `${this.route}`;
    if (Object.keys(parameters).length === 0) {
      return url;
    } else {
      url += "?";
      const lastKey = Object.keys(parameters).pop();
      for (const [key, value] of Object.entries(parameters)) {
        if (key === lastKey) {
          url += `${key}=${value}`;
        } else {
          url += `${key}=${value}&`;
        }
      }
    }
    return url;
  }
}

export default RouteData;
