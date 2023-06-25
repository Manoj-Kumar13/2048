import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    updateTime();
  }, []);

  const updateTime = () => {
    setInterval(() => {
      const newTime = time + 1;
      setTime(newTime);
    }, 1000);
  };

  return (
    <View>
      <Text>time</Text>
    </View>
  );
}

export default Timer;
