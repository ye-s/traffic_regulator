
const fetchVehicles = (handleFetchFail, handleData) => { 
  window.trafficMeister.fetchData(function(err, data) {
    if (!err) {
      handleData(data)
      handleFetchFail(false)
    } else {
      handleFetchFail(true);
    }
  });
};

export default fetchVehicles;