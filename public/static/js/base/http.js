module.exports.httpGetAsync = (url) => {
  return new Promise( (resolve, reject) => {
    let httpRequest = new XMLHttpRequest();

    httpRequest.open('GET', url, true);

    httpRequest.onload = () => {
      if (httpRequest.status == 200) {
        let data = httpRequest.responseText;
        resolve(JSON.parse(data));
      }
      else {
        reject({
          status: httpRequest.status,
          statusText: httpRequest.statusText
        });
      }
    };
    httpRequest.onerror = () => {
      reject({
        status: httpRequest.status,
        statusText: httpRequest.statusText
      });
    };

    httpRequest.send(null);
  });
}

module.exports.httpPostAsync = (url, payload) => {
  return new Promise((resolve, reject) => {
    let httpRequest = new XMLHttpRequest();

    httpRequest.open('POST', url, true);
    httpRequest.setRequestHeader('Content-Type', 'application/json');

    httpRequest.onload = () => {
      if (httpRequest.status == 200) {
        let data = httpRequest.responseText;
        resolve(JSON.parse(data));
      }
      else {
        reject({
          status: httpRequest.status,
          statusText: httpRequest.statusText
        });
      }
    };

    httpRequest.onerror = () => {
      reject({
        status: httpRequest.status,
        statusText: httpRequest.statusText
      });
    };

    httpRequest.send(JSON.stringify(payload));
  });
}
