export interface Tasks {
  _id: any;
  title: String;
  description?: String;
  done?: Boolean;
  date?: Date;
  list: any;
  position: number;
}

export interface Lists {
  _id: number;
  title: String;
  date?: Date;
  isMain?: Boolean;
}
