class Machine extends React.Component{
    render(){
        const { first, second, third} = this.props;
        let test = (first==second && second==third) ? <p>You Win!!</p> : <p>You Lose:(</p> 
        return (
            <div>
                <p>{first} : {second} : {third}</p>
                {test}
            </div>
        )
    }
}