
var Network = {
  Get(URL, callback) {
    console.log('Request URL', URL);

    //console.log("weather api ", endpoint.weatherApi);
    //var url = 'http://www.mocky.io/v2/58ac2188100000280c514a5f';
    fetch(URL, {
          method: 'get',
          headers: {
            // 'Accept': 'application/json',
            // 'Content-Type': 'application/json',
            // "Authorization": "Basic " + btoa("qwertyaxc:1253465fsdf54534aa349")
          },
          // body: JSON.stringify({
          //   'username': username,
          //   'password': password
          // })
        })
      .then(
        function(response) {
          if (response.status !== 200) {
            console.warn('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }

          // Examine the json in the response
          response.json().then(function(json) {
            console.log('Res',json);
            callback(json);
          });
        })
      .catch(function(err) {
        console.warn('Fetch Error :-S', err);
      });

    // return fetch(URL, {timeout: 10}).then((res) => res.json()).catch(error => {
    //  console.log(error.message)
    // });
  }
};

module.exports = Network;
