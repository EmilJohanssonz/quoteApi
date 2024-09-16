
// Your API key
const headers = 'Key'

document.getElementById('fetch-quote').addEventListener('click', function () { // Fetch and display a random quote
  fetch('https://api.api-ninjas.com/v1/quotes', { //api for random quote
    method: 'GET',
    headers: {
      'X-Api-Key': ' // Replace with your actual API key
    }

  })
    .then(response => { // Check if the response was successful
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText); // Throw an error if the response was not successful
      }
      return response.json(); // Parse the response as JSON
    })
    .then(data => {
      console.log(data); // Log the response data
      const quote = data[0].quote; // Extract the quote from the response
      const author = data[0].author; // Extract the author from the response
      document.getElementById('quote-display').innerText = `"${quote}" - ${author}`; // Display the quote and author
    })
    .catch(error => {
      console.error('Error fetching quote:', error);
      document.getElementById('quote-display').innerText = 'Could not fetch a quote at this time.'; // Display an error message
    });
});
