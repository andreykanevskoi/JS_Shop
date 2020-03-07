/*
    Файл        : App.js
    Автор       : Каневской Андрей
    Описание    : Основная компонента приложения.

    2020г.
*/

import React from 'react';
import Menu from './Menu'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Menu />
            </div>
        )
    }
}