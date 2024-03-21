import { useAppSelector } from "../../hooks/redux";
import styles from "./Train.module.scss";
import { nanoid } from "nanoid";

export const Train: React.FC = () => {
  const trainsDescription = useAppSelector((state) => state.trainChanger);
  const trainName = useAppSelector((state) => state.trainNumber.number);

  console.log("train");
  return (
    <div className={styles.train_Data}>
      <h4>Характеристики</h4>
      <h4>{trainName}</h4>
      <table className={styles.trains}>
        <thead>
          <tr>
            <th>Ток двигателя</th>
            <th>Сила тяги</th>
            <th>Скорость</th>
          </tr>
        </thead>
        <tbody>
          {trainsDescription.map((train, i) => (
            <tr key={nanoid()} className={styles.characteristic}>
              <td>
                <input type="text" defaultValue={train.engineAmperage} />
              </td>
              <td>
                <input type="text" defaultValue={train.force} />
              </td>
              <td>
                <input type="text" defaultValue={train.speed} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button>Отправить данные</button>
    </div>
  );
};
