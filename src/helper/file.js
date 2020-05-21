function getJSON(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    callback(this.responseText);
  };
  xhr.open('GET', url, true);
  xhr.send();
}

// eslint-disable-next-line import/prefer-default-export
export function getUsefulContents(url, callback) {
  // eslint-disable-next-line no-unused-vars,no-undef
  getJSON(url, data => callback(JSON.PARSE(DATA)));
}
