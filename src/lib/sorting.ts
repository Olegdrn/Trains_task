import { TrainData } from "../../types";

export function Sorting(value: TrainData[]): void {
  const valueSort = [...value];
  valueSort.sort((a: TrainData, b: TrainData) => a.speed - b.speed);

  valueSort.forEach((param, i) => {
    console.log(param.speed);
  });
}
