import React from "react";
import Tag from "../tag/tag.component";
import { TaskCardProps } from "./taskCard.model";
import style from './taskCard.module.css';

export const TaskCard = ({ task }: TaskCardProps ): JSX.Element => {

    return (
        <div className={`${style.card} ${task.disabled ? style.disabled : ""}`}>
            <div className={style.content}>
                {task.content}
            </div>
            <div className={style.footer}>
                <Tag content={task.category} color="primary" />
            </div>
        </div>
    )
}

export default TaskCard;