import React from "react";
import './AddTask.css'
import {useDispatch} from "react-redux";
import { addTask } from "../store"
import {useForm} from "react-hook-form";
export const AddTask = () => {
    const dispatch = useDispatch();
    const {register, reset, handleSubmit} = useForm()
    const submitTask = data => {
        dispatch(addTask(data))
        reset(
            {
                name: '',
            }
        );
    }
    return(
        <form onSubmit={handleSubmit(submitTask)}>
            <div className="add-input">
                <input {...register("name", { required: true})}/>
            </div>
            <button className="add-task"><h1>Add task</h1></button>
        </form>
    )


}