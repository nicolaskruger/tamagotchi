
import { connect, ConnectedProps } from 'react-redux';
import Button from '../button';
import mapStateToProps from '../mapStateToProps';
import './styles.css'
import {sleep,eat,work,to_def_mode} from '../../actions/actionCreator';
import { useState } from 'react';

const connector = connect(mapStateToProps,{sleep,eat,work,to_def_mode})

type PropsButtons = ConnectedProps< typeof connector >

interface But {
    action:()=>void,
    name:string
}

const Buttons = ({tamagotchi, sleep, eat, work,to_def_mode}:PropsButtons) =>{
    const [call,setCall] = useState(false);
    const operProxy = (func:()=>void)=>()=>{
        func();
        if(!call)
        setTimeout(
            ()=>{
                to_def_mode(tamagotchi);
                setCall(false);
            },
            3000
        )
        setCall(true);
    }
    const p_sleep = operProxy(()=>{sleep(tamagotchi)});
    const p_eat = operProxy(()=>{eat(tamagotchi)});
    const p_work = operProxy(()=>{work(tamagotchi)});
    
    const Buts:But[] = [
        {action:()=>{
            p_sleep()
        },name:"Sleep"},
        {action:()=>{
            p_work()
        },name:"Work"},
        {action:()=>{
            p_eat()
        },name:"Eat"}
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

export default connector(Buttons);