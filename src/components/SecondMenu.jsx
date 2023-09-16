import React from 'react'
import menu from "../assets/styles/menu.module.scss";

import RedoSvg from '../assets/svg/RedoSvg';
import UndoSvg from '../assets/svg/UndoSvg';

import DropDown from './DropDown';
export default function SecondMenu() {
  return (
    <div className={menu.top_menu}>
         <div className={menu.dropDownToBottom}>
         <RedoSvg/>
         </div>

         <div className={menu.dropDownToBottom}>
         <UndoSvg/>
         </div>

         <div style={{backgroundColor:"b0b9c3"}}>
         <DropDown items= {[
            <div>Параграф</div>,
            <h1>Заголовок1</h1>,
            <h2>Заголовок2</h2>,
            <h3>Заголовок3</h3>,
            <h4>Заголовок4</h4>,
            <h5>Заголовок5</h5>,
            <h6>Заголовок6</h6>,
            <div>Предформатированный</div>

        ]}/>
         </div>

{/* TODO СЮДА НАДО ДОБАВИТЬ КОМПОНЕНТ ДЛЯ ВЫСЧИТЫВАНИЯ РАЗМЕРА ТЕКСТА!!! */}
         {/* <div className={menu.dropDownToBottom}>
         <UndoSvg/>
         </div> */}

         <DropDown items = {[
          <svg width="24" height="24" focusable="false"><path d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2Zm3 4h8c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 1 1 0-2Zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 0 1 0-2Zm-3-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2Z" fill-rule="evenodd"></path></svg>,
          <svg width="24" height="24" focusable="false"><path d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2Zm0 4h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2Zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2Zm0-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2Z" fill-rule="evenodd"></path></svg>,
          <svg width="24" height="24" focusable="false"><path d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2Zm6 4h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2Zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2Zm-6-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2Z" fill-rule="evenodd"></path></svg>,
          <svg width="24" height="24" focusable="false"><path d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2Zm0 4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2Zm0 4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2Zm0 4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2Z" fill-rule="evenodd"></path></svg>
        ]}/>
    </div>
  )
}
