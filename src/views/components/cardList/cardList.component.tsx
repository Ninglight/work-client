import React from "react";
import Card from "../taskCard/taskCard.component";
import style from './cardList.module.css';
import { CardListProps } from "./cardList.model";
import { Droppable, Draggable } from 'react-beautiful-dnd';


export const CardList = ({ tasks }: CardListProps): JSX.Element => {
    return (
        <Droppable droppableId="droppable-1" type="PERSON">
            {(provided, snapshot) => (
                 <div ref={provided.innerRef} style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }} className={style.list} {...provided.droppableProps}>
                    {tasks.map((task, index) => (
                        <Draggable key={index}>
                            <Card task={task}  />
                        </Draggable>
                    ))}
                </div>
            )}
        </Droppable>



       
    )
}

export default CardList;