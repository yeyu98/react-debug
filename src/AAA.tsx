import { useEffect, useState } from "react";
import BBB from "./BBB";

export default function AAA() {
    const [state, setState] = useState(0)

    useEffect(() => {
        setState(19)
    }, [])

    return (
        <div>
            <div>tetst AAA</div>
            <div>{state}</div>
            <BBB />
        </div>
    )
}