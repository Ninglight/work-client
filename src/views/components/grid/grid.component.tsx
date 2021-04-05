import React, { useState, useEffect } from "react";
import { Task, TaskStatus } from "../../../models";
import { GridProps, TaskGroupByStatus } from "./grid.model";
import { CardList } from "../cardList/cardList.component";
import style from './grid.module.css';
import { STATUS_LABELS_GRID_CONST } from "./grid.contants";
import { DragDropContext } from 'react-beautiful-dnd';

export const Grid = ({ tasks }: GridProps): JSX.Element => {

    const [tasksGroupByStatus, setTasksGroupByStatus] = useState<TaskGroupByStatus>({});

    useEffect(() => {
        setTasksGroupByStatus(groupByStatus(tasks))
    }, [tasks]);


    const initTasksGroupByStatus = (): TaskGroupByStatus => {
        return {
            [TaskStatus.TODO]: [],
            [TaskStatus.PROGRESS]: [],
            [TaskStatus.FINISH]: []
        }
    }

    const groupByStatus = (tasks: Array<Task>): TaskGroupByStatus => {
        return tasks.reduce<TaskGroupByStatus>((acc, cur) => {
            acc[cur.status].push(cur);
            return acc;
        }, initTasksGroupByStatus())
    }

    return (
        <DragDropContext>
            <div className={style.grid}>
                {!!tasksGroupByStatus ? Object.keys(tasksGroupByStatus).map((key, index) => (
                    <div key={index} className={style.column}>
                        <h2>{STATUS_LABELS_GRID_CONST[key as TaskStatus]}</h2>
                        <CardList tasks={tasksGroupByStatus[key]} />
                    </div>
                )) : "Chargement"}
            </div>
        </DragDropContext>
    )
}

export default Grid;