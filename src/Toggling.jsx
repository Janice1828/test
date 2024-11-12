import React, { useContext, useState } from 'react'
import { useContextData } from './main';
const Toggling = () => {
    const { useContextValue, setUseContextValue } = useContext(useContextData)
    const [paragraphVisibility, setParagraphVisibility] = useState(false);
    const toggleParagraph = () => {
        setParagraphVisibility(!paragraphVisibility);
    }
    return (
        <div>
            <p className="text-2xl font-bold">
                asd {useContextValue}
            </p>
            <a href="#" onClick={toggleParagraph}>Want to buy a new car?</a>
            {paragraphVisibility ? <p>Call +11 22 33 44 now!</p> : ''}

            <br />     <button onClick={() => { setUseContextValue("Changed Main Value") }}>Click</button>
        </div>
    )
}

export default Toggling