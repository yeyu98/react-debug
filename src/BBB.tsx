/*
 * @Author: yeyu98
 * @Date: 2024-03-30 09:59:43
 * @LastEditors: yeyu98
 * @LastEditTime: 2024-04-03 22:09:10
 * @Description: 
 */
import React, { PureComponent, ReactNode } from 'react'

interface Props {}
interface State {}

class BBB extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            
        }
    }

    render(): ReactNode {
        return (
            <div>child BBB</div>
        )
    }
}

export default BBB
