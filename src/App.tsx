import React from 'react';
import logo from './assets/image/logo.svg';
import styles from './App.module.css';
import robots from './mockdata/robots.json'
import Robot from './components/Robot'
import ShoppingCart from "./components/ShoppingCart";

interface Props {
}

interface State {
    robotGallery: any[]
}

class App extends React.Component<Props,State> {
    constructor(props) {
        super(props)
        this.state = {
            robotGallery: [],
        }
    }

    //组件初始化，刚刚初始化创建DOM元素时候触发
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data =>this.setState({
                robotGallery:data
            }))

    }
    //点击事件 弹出alert




    render() {
        return (
            <div className={styles.app}>
                <div className={styles.appHeader}>
                    <img src={logo} className={styles.appLogo} alt="logo"/>
                    <h1>罗伯特萝卜头萝卜汤罗伯塔Online</h1>
                </div>
                <ShoppingCart/>
                <div className={styles.robotList}>
                    {this.state.robotGallery.map((r) => (
                        <Robot id={r.id} name={r.name} email={r.email}/>
                    ))}
                </div>
            </div>
        );
    }
}

export default App;
