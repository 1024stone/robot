import React from "react";
import styles from "./ShoppingCart.module.css"
import {FiShoppingCart} from "react-icons/fi";

interface Props {

}

//组件自己的状态
interface State {
    isOpen: boolean
}

class ShoppingCart extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log('currentTarget',e.currentTarget)//事件处理绑定的元素
        console.log('target',e.target)//事件发生额元素
        if ((e.target as HTMLElement).nodeName ==="SPAN"){
            this.setState({isOpen: !this.state.isOpen})
        }
    }

    render() {
        return (
            <div className={styles.cartContainer}>
                <button className={styles.button}
                        onClick={this.handleClick}
                >
                    <FiShoppingCart/>
                    <span>购物车 2 (件)</span>
                </button>
                <div className={styles.cartDorpDown}
                     style={{
                         display: this.state.isOpen ? 'block' : 'none'
                     }}
                >
                    <ul>
                        <li>robot 1</li>
                        <li>robot 2</li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default ShoppingCart
