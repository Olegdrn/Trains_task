import { UseAxios } from "../../hooks/useAxios";
import styles from "./Trains.module.scss";
import { Trains as TrainsType } from "../../../types";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { trainDataAdded, trainDataDeleted } from "../../features/trainData";
import { trainNumberChanged } from "../../features/trainNumber";
import { useAppDispatch } from "../../hooks/redux";

interface TrainData {
  speed: number;
  force: number;
  engineAmperage: number;
}

export const Trains: React.FC = () => {
  const idUrl = useNavigate();
  const { data, isLoading, error } = UseAxios<number, TrainsType[]>(
    `https://gist.githubusercontent.com/orlov-oleg-developer/49f08290d1c59a6851e0a0581900e2a7/raw/e5daf87338f3c75165f8edf4c76cc7ec9c2b4aa9/gistfile1.json`
  );

  const dispatch = useAppDispatch();

  console.log("trains");

  //Изменять url в BrowserRouter лучше с помощью Link to из react-router-dom,
  //но это не работает корректно с table

  const handleRowClick = (row: string, characteristics: TrainData[]) => {
    idUrl(`/${row}`);
    dispatch(trainDataDeleted());
    characteristics.forEach((e: TrainData, i: number) => {
      dispatch(trainDataAdded(e));
    });
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
                  dispatch(trainNumberChanged(train.name));
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
};
