class HttpService {
  url = ""; // server url

  postData = async (item, added_url, tokenId = "") => {
    const token = await localStorage.getItem(tokenId);
    const requestOptions = this.postRequestOptions(token, itme);

    return fetch(this.url + "/" + added_url, requestOptions).then((response) =>
      response.json()
    );
  };

  gettData = async (added_url, tokenId = "") => {
    const token = await localStorage.getItem(tokenId);
    const requestOptions = this.getRequestOptions(token, itme);

    return fetch(this.url + "/" + added_url, requestOptions).then((response) =>
      response.json()
    );
  };

  getRequestOptions = (token) => {
    let requestOptions = {
      method: "GET",
      headers: {
        Authorization: token,
        "Content-type": "application/json",
      },
    };
    return requestOptions;
  };

  postRequestOptions = (token, item) => {
    let requestOptions = {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-type": "application/json",
      },
      body: JSON.stringify(item),
    };
    return requestOptions;
  };
}
