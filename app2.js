function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = 'Fetched data';
        resolve(data);
      }, 2000);
    });
  }
  
  function processData(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const processedData = data.toUpperCase(); 
        resolve(processedData);
      }, 1500); 
    });
  }

  
  fetchData()
    .then((data) => {
      console.log('Data fetched:', data);
      return processData(data); 
    })
    .then((processedData) => {
      console.log('Data processed:', processedData);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  