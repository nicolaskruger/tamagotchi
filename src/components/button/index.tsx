import './styles.css'

interface ButtonProps {
    name:string,
    action:()=> void
}

const Button = ({name,action}:ButtonProps) => {
    return (
        <section className="Button__section">
            <button className="Button__button" onClick={()=>action()}>

            </button>
            <h2>
                {name}
            </h2>
        </section>
    )
}

export default Button;