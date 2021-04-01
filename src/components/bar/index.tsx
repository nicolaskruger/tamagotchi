import './styles.css'

interface PropsBar {
    val: number;
    text: string;
}

const Bar = ({val, text}:PropsBar) =>{
    const arr = "a".repeat(val).split('');
    return (
        <>
            <h1 className="Bar__h1">{text}</h1>
            <ul className="Bar__ul">
                {arr.map((v,i)=>(
                    <li className="Bar__li" key={i}>
                        
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Bar;