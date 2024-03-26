import { useAppSelector } from "../../hooks/redux";
import styles from "./Train.module.scss";
import { nanoid } from "nanoid";
import { InputParam } from "../Input/InputParam";
import { Sorting } from "../../lib/sorting";

//Данный компонент проще реализовать с использованием React hook form,
//Не уверен, что это разрешено по уловиям тестового и решил сделать более нативно

export const Train: React.FC = () => {
  const trainsDescription = useAppSelector((state) => state.trainChanger);
  const trainName = useAppSelector((state) => state.trainNumber.number);
  const isValid = useAppSelector((state) => state.valid.isValid);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    Sorting(trainsDescription);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.train_Data}>
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
                  <InputParam
                    value={train.engineAmperage}
                    characteristic={`engineAmperage`}
                    id={i}
                  />
                </td>
                <td>
                  <InputParam
                    value={train.force}
                    characteristic={`force`}
                    id={i}
                  />
                </td>
                <td>
                  <InputParam
                    value={train.speed}
                    characteristic={`speed`}
                    id={i}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button disabled={!isValid}>Отправить данные</button>
      </form>
    </>
  );
};
