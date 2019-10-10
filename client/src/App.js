import React from "react"

function App() {
    return (
        <div className="livestrong-App-Wrapper">
            <Nav />
            <Switch>
                
                <Route path="/login" component={liveStrongLogin} />
                <Route path="/home" component={liveStongHome}/>
                <Route exact path="/" component={liveStongHome} />
            </Switch>
        </div>
    )
}

export default App;
