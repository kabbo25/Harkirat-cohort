import  {useState} from 'react'

const App = () => {
    return (
        <>
            <HeaderWithButton/>
            <Header title={'World'}/>
            <Header title={'Hello'}/>
        </>
    )
}
const HeaderWithButton=()=>{
    const [title, setTitle] = useState('kabbo')
    const handleChange = () => {
        setTitle('My name is ' + Math.random()*100)
    }
    return (
        <>
            <button onClick={handleChange}> click me to change title</button>
            <Header title={title}/>
        </>
    )
}
const Header = ({title}) => {
    return <h1>{title}</h1>
}
export default App
