/*
    Файл        : UserTitle.js
    Автор       : Каневской Андрей 
    Описание    : Файл содержащий функциональную компоненту UserTitle.
                : Выводит текст с именем пользователя.
                
    2020г.
*/

import React, { Component } from 'react';

export default function UserTitle(props) {
    return (
        <div >
            <p style={{ margin: '0 auto' }}>Вы вошли как <u>{props.value}</u>{props.supervalue}</p>
        </div>
    );
}