import {notFound} from 'next/navigation'
import React from 'react';
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";

async function getPosts(id){

  try{
    const res = await fetch(`https://dummyjson.com/posts/${id}`);
    return res.json();
  }
  catch (error){
    throw new Error(error);
  }
    
  }

export default async function Page({params}) {
    const { id, title, body} = await getPosts(params.id);

    if(!title){
      return notFound();
    }

  return (
    <div className={styles.blogContainer}>
        <div className={styles.cardImage}>
            <Image src={`https://picsum.photos/200/300?random=${id}`} fill alt="Blog Card" priority/>
        </div>
        
            <h1 className={styles.title}>{title}</h1>
            <p>{body}</p> 

    </div>
  )
}
