/*
 * @Author: yeyu98
 * @Date: 2024-03-30 09:59:43
 * @LastEditors: yeyu98
 * @LastEditTime: 2024-05-18 15:22:02
 * @Description: 
 */
import { PureComponent, ReactNode } from 'react'

interface Props {}
interface State {
    list: string []
}

class BBB extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            list: ['A', 'B', 'C']
        }
    }

    handleClick = () => {
        this.setState({
            list: ['C', 'A', 'X']
        })
    }

    render(): ReactNode {
        return (
            <>
            <div>child BBB</div>
            <button onClick={this.handleClick}>diff</button>
            {
                this.state.list.map((item, index) => (<div key={index}>{item}</div>))
            }
            </>
        )
    }
}

export default BBB
