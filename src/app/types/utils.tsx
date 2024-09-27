export type Todo = {
    id: string;
    title: string;
  };

 export type ReactSetState<T> = React.Dispatch<React.SetStateAction<T>>