const people = [
  "Franquelin Benjamin",
  "Dunord Caroline",
  "Reacher Jack",
  "Wilson Wade",
  "Pool Francis",
  "Cesar Alex",
  "Ten Ben",
  "Guetta David",
  "Kennedy John",
  "Robert Julia",
];

export enum Status {
  ALL,
  ABSCENT,
  PRESENT,
  EXCUSE,
}

interface StatusOption {
  backgoundColor: string;
  status: Status;
}

const statusOptions: Array<StatusOption> = [
  {
    backgoundColor: "",
    status: Status.ALL,
  },
  {
    backgoundColor: "red",
    status: Status.ABSCENT,
  },
  {
    backgoundColor: "green",
    status: Status.PRESENT,
  },
  {
    backgoundColor: "gold",
    status: Status.EXCUSE,
  },
];

type GetStatus = (status: Status) => string;

const getStatus: GetStatus = (status) => {
  switch (status) {
    case Status.EXCUSE:
      return "Excuse";
    case Status.ABSCENT:
      return "Absent";
    case Status.PRESENT:
      return "Present";
    default:
      return "Tous";
  }
};

export { people, statusOptions, getStatus };

export interface Person {
  name: string;
  status: Status;
}
export type AddPerson = (status: Status) => void;
