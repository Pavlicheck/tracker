import React, { useEffect } from "react";
import { useStore } from "../../store";
import { observer } from "mobx-react";

export const Timer = observer(() => {
  const { timer: timerStore } = useStore();

  let timer = null;
  useEffect(() => {
    const timerId = timerStore.createTimer({});
    timer = timerStore.getTimer(timerId);
  }, []);
  return <div>{timerStore.count}</div>;
});
