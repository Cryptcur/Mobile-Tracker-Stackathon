import { useEffect, useState } from "react";
import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync
} from "expo-location";

export default (shouldTrack, callback) => {
  const [error, setError] = useState(null);
  const [subscriber, setSubscriber] = useState(null);
  //FIX STOP RECORDING

  const startWatching = async () => {
    try {
      await requestPermissionsAsync();
      const subscribe = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 2000,
          distanceInterval: 10
        },
        callback
      );
      setSubscriber(subscribe);
    } catch (ex) {
      setError(ex);
    }
  };
  useEffect(() => {
    if (shouldTrack) {
      startWatching();
    } else {
      subscriber.remove();
      setSubscriber(null);
    }
    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    };
  }, [shouldTrack, callback]);

  return [error];
};
