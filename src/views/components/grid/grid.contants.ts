import { TaskStatus } from "../../../models";

export const STATUS_LABELS_GRID_CONST = {
    [TaskStatus.TODO]: "À faire",
    [TaskStatus.PROGRESS]: "En cours",
    [TaskStatus.FINISH]: "Terminée",
}