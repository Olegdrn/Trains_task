import { useState } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { Validation } from "../../lib/validation";
import { validChange } from "../../features/validData";
import styles from "./InputParam.module.scss";
import { trainDataUpdated } from "../../features/trainData";
import { newInputData } from "../../../types";

export const InputParam: React.FC<newInputData> = (props) => {
  const dispatch = useAppDispatch();
  const [error, setError] = useState<boolean>(false);

  const onParamChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ): void => {
    e.preventDefault();
    if (Validation(e.target.value, e.target.name)) {
      setError(false);
      dispatch(validChange(true));
      const newData: newInputData = {
        id: +e.target.id,
        characteristic: e.target.name,
        value: +e.target.value,
      };
      dispatch(trainDataUpdated(newData));
    } else {
      setError(true);
      dispatch(validChange(false));
    }
  };

  return (
    <>
      <div className={styles.inputParam}>
        <input
          className={error ? styles.error : ""}
          name={props.characteristic}
          id={`${props.id}`}
          type="string"
          // value={props.value}
          defaultValue={props.value}
          onChange={(e) => onParamChange(e)}
        />
      </div>
    </>
  );
};
