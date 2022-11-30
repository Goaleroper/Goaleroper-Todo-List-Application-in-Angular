export interface Tasks {
  _id: number;
  title: String;
  description?: String;
  done?: Boolean;
  date?: Date;
  list: Lists[];
  position: number;
}

export interface Lists {
  _id: number;
  title: String;
  date?: Date;
  isMain?: Boolean;
}
