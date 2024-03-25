const App = () => {
    return(
    <>

        <CardWrapper innerComponent={TextComponent}/>
    </>
    )

}
const TextComponent = () => {
    return <div>
        <h1>Text Component</h1>
    </div>
}
const CardWrapper = ({innerComponent}) => {
    return <div style={{border: '1px solid yellow',padding:'20px'}}>

        {innerComponent()}
    </div>
}
export default App
