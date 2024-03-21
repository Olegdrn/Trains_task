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
