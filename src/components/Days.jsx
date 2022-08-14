import { render } from "@testing-library/react";
import ButtonOK from "./Button";
import "./Days.css";

function Days() {
    
    const DayNumb = new Date().getDay();

    let daysArr = [
        'Неділя',
        'Понеділок',
        'Вівторок',
        'Середа',
        'Четвер',
        'Пятниця',
        'Субота'
    ];

    const currentDay = daysArr[DayNumb];



    return (
        <div>
            Day is - <span className="current-day">{currentDay}</span>
            <p>Вчора був <span className="before-day">{daysArr[DayNumb - 1]}</span>
            , а завтра буде <span className="after-day">{daysArr[DayNumb + 1]}</span></p>
            <ButtonOK />
        </div>
    )
}



export default Days;