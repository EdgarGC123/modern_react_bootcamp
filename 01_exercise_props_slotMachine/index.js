class App extends React.Component{
    render(){
        return (
            <div>
                <h2>Welcome to Slot Machines!</h2>
                <Machine first={"🍒"} second={"🍒"} third={"🍒"}></Machine>
                <Machine first={"🍒"} second={"🍊"} third={"🍒"}></Machine>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root2"))