 import {  Request,Response } from "express";
 import db from "../db/database"
 import { Note } from "../models/note";

 
 export const newNota=(req:Request,res:Response)=>{
    const {title,content}=req.body;
    const smt=db.prepare("INSERT INTO notes (title, content) VALUES (?, ?)")
    const result =smt.run(title,content);
    res.status(201).json({
        id: result.lastInsertRowid,
        title,
        content,
    })

 }