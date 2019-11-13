import React from 'react'
import Typist from 'react-typist'

// function MiddleTitle({title}){
//     // 타이핑 효과 반복
//     const [count, setCount] = useState(1);
//     useEffect(() => {
//       setCount(1);
//     }, [count]);
//     return(
//         <div className="middle__title">
//         {count? (
//              <Typist
//                 className='content'
//                 cursor={{blink:false}}
//                 avgTypingDelay={100}
//                 startDelay={1000} 
//                 onTypingDone={() => setCount(0)}
//             >{title}
//                 <Typist.Backspace count={19} deley={800}>
//                 </Typist.Backspace>
//             </Typist>
//             ) : (
//             ""
//         )}
//             <span className="blank"></span>
//         </div>
//     )
// }

function MiddleTitle({title}){
    return(
        <div className="middle__title">
             <Typist
                className='content'
                avgTypingDelay={100}
                startDelay={1000} 
            >{title}
            </Typist>
            <span className="blank"></span>
        </div>
    )
}

export default MiddleTitle