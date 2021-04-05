import React from "react";
import style from './tag.module.css';
import { TagProps } from "./tag.model";

export const Tag = (tag: TagProps): JSX.Element => {

    return (
        <div className={style.tag}>
            {tag.content}
        </div>
    )
}

export default Tag;