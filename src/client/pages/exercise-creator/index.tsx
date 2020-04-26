import React, { ChangeEvent } from "react";
import { observer } from "mobx-react";
import { useStore } from "../../store";

export const ExerciseCreator = observer(() => {
  const { createExercise } = useStore();
  const { name, description, create, setName, setDescription } = createExercise;
  const changeHandler = (setter: (v: string) => void) => (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setter(event.target.value);
  };

  return (
    <div>
      name
      <input type="text" onChange={changeHandler(setName)} value={name} />
      desc
      <input
        type="text"
        onChange={changeHandler(setDescription)}
        value={description}
      />
      <button onClick={create}>Create</button>
    </div>
  );
});
