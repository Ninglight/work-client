import { Task } from "../../../models";

export interface GridProps {
    tasks: Array<Task>;
}

export interface TaskGroupByStatus {
    [key: string]: Array<Task>
}