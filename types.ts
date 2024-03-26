export interface TrainData {
  speed: number;
  force: number;
  engineAmperage: number;
}

export interface Trains {
  characteristics: TrainData[];
  description: string;
  name: string;
}

export interface newInputData {
  id: number;
  characteristic: string;
  value: number;
}
