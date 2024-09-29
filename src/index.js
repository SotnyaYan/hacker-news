import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import {NewsItem} from "./NewsItem/NewsItem";
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById('root'));
//const divElement = React.createElement('div', {className: 'text'}, 'hello frontend')
//root.render(<div className={'text'}>hello frontend</div>); //jsx синтаксис
root.render(<App/>);


//Кнопка false/true
//function App(){
//    const [state, setState] = useState(false)
//
//    return  (
//        <div>
//            <p>Текущее состояние: {String(state)}</p>
//            <button onClick={() => setState(!state)}>Переключить</button>
//        </div>
//    )
//}
