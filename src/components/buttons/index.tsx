
import Button from '../button';
import './styles.css'

interface But {
    action:()=>void,
    name:string
}

const Buttons = () =>{
    const Buts:But[] = [
        {action:()=>{},name:"Sleep"},
        {action:()=>{},name:"Work"},
        {action:()=>{},name:"Eat"}
    ]

    return (
        <nav className="Buttons__nav">
            <ul>
                {Buts.map((v,i)=>(
                    <li key={i}>
                        <Button name={v.name} action={v.action}/>                        
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Buttons;