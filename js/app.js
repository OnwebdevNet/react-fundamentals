/**
 * Created by onweb_000 on 19.03.2016.
 */
/*
ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root')
);*/

var News = React.createClass({
    render: function() {
        return (
            <div className="news">
                К сожалению, новостей нет.
            </div>
        );
    }
});

var Comments = React.createClass({
    render: function() {
        return (
            <div className="comments">
                Нет новостей - комментировать нечего
            </div>
        );
    }
});

var App = React.createClass({
    render: function() {
        return (
            <div className="app">
                Всем привет, я компонент App! Я умею отображать новости.
                <News />
                <Comments />
            </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('root')
);