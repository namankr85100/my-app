function Square() {
    return <button className="square">X</button>;
}

function Tick() { 
    return (
        <>
        <button className="square">X</button>;
        <Square/>
        </>
    )
}

export default Tick();