import { getDatabase, ref, onValue } from "firebase/database";
import { database } from "./service";

// Function to fetch sensor data
const fetchSensorData = (path, callback) => {
    
  const sensorRef = ref(database, path);

  onValue(sensorRef, (snapshot) => {
    const data = snapshot.val();
    if (data !== null) {
      // If data is found, execute the callback function with the retrieved data
      callback(data);
    } else {
      // If no data is found, handle it accordingly
      console.log('Data not found');
    }
  });
};

export default fetchSensorData;
