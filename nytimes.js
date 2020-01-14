   function newYorkTimesQuery(searchTerm, numberOfRecords, startYear, endYear){

    
    var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q='+ searchTerm + '&begin_date=' + startYear + '&end_date='+ endYear + '&api-key=dDyNFiezdeF6nHApTATHAxQ5MkM4Yi7L';
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        var result = response.response.docs.slice(0, numberOfRecords);
        console.log(result);
        return result;
      })
    }

    function newYorkTimesQuery(searchTerm, numberOfRecords){

    
      var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q='+ searchTerm + '&api-key=dDyNFiezdeF6nHApTATHAxQ5MkM4Yi7L';
      $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
          var result = response.response.docs.slice(0, numberOfRecords);
          console.log(result);
          return result;
        })
      }

