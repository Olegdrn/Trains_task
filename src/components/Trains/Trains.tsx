import { UseAxios } from "../../hooks/useAxios";
import styles from "./Trains.module.scss";
import { TrainData, Trains as TrainsType } from "../../../types";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { trainDataAdded, trainDataDeleted } from "../../features/trainData";
import { trainNumberChanged } from "../../features/trainNumber";
import { useAppDispatch } from "../../hooks/redux";
import { validChange } from "../../features/validData";
import { memo } from "react";

export const Trains: React.FC = memo(() => {
  const idUrl = useNavigate();
  const { data, isLoading, error } = UseAxios<number, TrainsType[]>(
    `https://gist.githubusercontent.com/orlov-oleg-developer/49f08290d1c59a6851e0a0581900e2a7/raw/e5daf87338f3c75165f8edf4c76cc7ec9c2b4aa9/gistfile1.json`
  );

  const dispatch = useAppDispatch();

  //Изменять url в BrowserRouter лучше с помощью Link to из react-router-dom,
  //но это не работает корректно с table

  const handleRowClick = (row: string, characteristics: TrainData[]) => {
    idUrl(`/${row}`);
    dispatch(trainDataDeleted());
    dispatch(trainNumberChanged(row));
    dispatch(trainDataAdded(characteristics));
    dispatch(validChange(true));
  };

  return (
    <>
      <div className={styles.trainList}>
        <h4>Поезда</h4>
        <table className={styles.trains}>
          <thead>
            <tr>
              <th>Название</th>
              <th>Описание</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((train, i: number) => (
              <tr
                key={nanoid()}
                onClick={() => {
                  handleRowClick(train.name, train.characteristics);
                }}
                className={styles.train}
              >
                <td>{train.name}</td>
                <td>{train.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
});
