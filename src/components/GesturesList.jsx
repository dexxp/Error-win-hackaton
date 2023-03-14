import React from "react";
import { Gesture } from "./Gesture";

export const GesturesList = ({ gestures }) => {
  const [firstGesture, ...otherGestures] = gestures;
  return (
    <div className="gestures-wrapper">
      <div className="gestures-wrapper__col">
        <Gesture gesture={firstGesture} />
      </div>
      <div className="gestures-wrapper__col">
        {otherGestures.map((gesture) => (
          <Gesture gesture={gesture} key={gesture.name} />
        ))}
      </div>
    </div>
  );
};
