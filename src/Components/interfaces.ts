export interface PlayerType {
  firstName: string;
  secondName: string;
  role: string;
  birthDate: string;
  birthPlace: string;
  id: string;
  foto: string;
  team: string;
}

export interface TeamType {
  name: string;
  city: string;
  firstColor: string;
  logo: string;
  secondColor: string;
  id: string;
}

export interface StateType {
  teams: TeamType[];
  players: PlayerType[];
}

export interface TeamParams {
  idTeam: string;
}

export interface PlayerParams {
  teamId: string;
  playerId: string;
}

export interface ModalProps {
  action: () => void;
  message: string;
}

export type NullInitState = number | null;
