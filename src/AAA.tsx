/*
 * @Author: yeyu98
 * @Date: 2024-03-30 09:59:43
 * @LastEditors: yeyu98
 * @LastEditTime: 2024-04-07 20:40:36
 * @Description: 
 */
import { useState } from "react";
import BBB from "./BBB";

export default function AAA() {
    const [state] = useState(666)

    return (
        <div className="AAA">
            <div className="text">test AAA {state}</div>
            {/* <div className="text-constant">{state}</div> */}
            <BBB />
        </div>
    )
}