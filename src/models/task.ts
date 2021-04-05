export interface Task {
    content: string;
    category: string;
    createdAt: Date;
    status: TaskStatus;
    disabled: boolean;
}

export enum TaskStatus {
    TODO = "todo",
    PROGRESS = "progress",
    FINISH = "finish",
}