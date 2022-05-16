export type ILight = {
  id: string;
  on: boolean;
  color: string;
}

export enum IToggleAction {
  'on',
  'off',
}

export enum ILightPattern {
  'P1' = 1,
  'P2' = 2,
}