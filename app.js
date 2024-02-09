function simulateAsyncOperation(shouldSucceed) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldSucceed) {
          resolve('Async operation successful');
        } else {
          reject(new Error('Async operation failed'));
        }
      }, 2000); 
    });
  }
  
  simulateAsyncOperation(true)
    .then((message) => {
      console.log('Success:', message);
    })
    .catch((error) => {
      console.error('Error:', error.message);
    });
  
  simulateAsyncOperation(false)
    .then((message) => {
      console.log('Success:', message);
    })
    .catch((error) => {
      console.error('Error:', error.message);
    });
  