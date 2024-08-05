const headers = 'Your Api key'

document.getElementById('fetch-quote').addEventListener('click', function () {
  fetch('https://api.api-ninjas.com/v1/quotes', {
    method: 'GET',
    headers: {
      'X-Api-Key': 'Your Api key'
    }

  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      const quote = data[0].quote;
      const author = data[0].author;
      document.getElementById('quote-display').innerText = `"${quote}" - ${author}`;
    })
    .catch(error => {
      console.error('Error fetching quote:', error);
      document.getElementById('quote-display').innerText = 'Could not fetch a quote at this time.';
    });
});
