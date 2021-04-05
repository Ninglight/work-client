import { Task, TaskStatus } from "../models";

export const tasks: Array<Task> = [
    {
        content: "task n°1",
        category: "plant",
        createdAt: new Date(),
        status: TaskStatus.TODO,
        disabled: true,
    },
    {
        content: "task n°2",
        category: "clothes",
        createdAt: new Date(),
        status: TaskStatus.TODO,
        disabled: false,
    },
    {
        content: "task n°3",
        category: "plant",
        createdAt: new Date(),
        status: TaskStatus.TODO,
        disabled: true,
    },
    {
        content: "task n°4",
        category: "plant",
        createdAt: new Date(),
        status: TaskStatus.PROGRESS,
        disabled: false,
    },
    {
        content: "task n°5",
        category: "plant",
        createdAt: new Date(),
        status: TaskStatus.PROGRESS,
        disabled: false,
    },
    {
        content: "task n°6",
        category: "plant",
        createdAt: new Date(),
        status: TaskStatus.FINISH,
        disabled: false,
    },
    {
        content: "task n°7",
        category: "plant",
        createdAt: new Date(),
        status: TaskStatus.FINISH,
        disabled: false,
    },
    {
        content: "task n°8",
        category: "plant",
        createdAt: new Date(),
        status: TaskStatus.FINISH,
        disabled: false,
    }
]