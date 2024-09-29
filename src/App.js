import {NewsItem} from "./NewsItem/NewsItem";
import {useEffect, useState} from "react";

const initNews = [
    {
            title: 'Первая новость',
            url: 'www.example.com',
            username: 'пользователь',
            date: '29.09.2024',
            score: 101,
            id: '1'

    },
    {
            title: 'Вторая новость',
            url: 'www.example.com',
            username: 'пользователь 2',
            date: '9.9.1024',
            score: 7,
            id: '2'

    },
    {
            title: 'Третья новость',
            url: 'www.example.com',
            username: 'пользователь 3',
            date: '19.02.2024',
            score: 10000,
            id: '3'

    }
]

const newNews = {
            title: 'Четвертая новость',
            url: 'www.example.com',
            username: 'пользователь 4',
            date: '10.02.2010',
            score: 10000,
            id: '4'
    }

function App() {
    const checkStorage = () => JSON.parse(window.localStorage.getItem('newsKey')) || initNews
    const [news, setNews] = useState(checkStorage)

    useEffect(() => {
        window.localStorage.setItem('newsKey', JSON.stringify(news))
    }, [news])

    const newCountHandler = () => {
        setNews( (prevState) => [...prevState, newNews])
    }

  return (
    <>

        <div>Количество новостей: {news.length}</div>
        <button onClick={newCountHandler}>Добавить новость</button>
        {
            news.map(item => {
                return (
                    <NewsItem
                        key={item.id}
                        title={item.title}
                        url={item.url}
                        username={item.username}
                        date={item.date}
                        score={item.score}
                    />
                )
            })
        }
    </>
  );
}

export default App;
