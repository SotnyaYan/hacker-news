//Компонент - функция, которая возвращает jsx компонент(поххоже на html разметку)
//import React from 'react'
import style from './NewsItem.module.css'

export function NewsItem(props) {
    console.log(props.children)
    return (

        <div className={style.container}>
            <a className={style.link} href="example.com">{props.title}</a>

            <div className={style.info}>
                <div className={style.userData}>
                    <span>{props.username} | </span>
                    <span>{props.date}</span>
                </div>


               <div className={style.score}>
                    {props.score} points
                </div>
            </div>
        </div>
    )
}