import Foods from './foods';
//this file should retur a randomly selected item from array of items. 


function choice(items){
    let i = Math.floor(Math.random() * items.length);
    return items[i];
}
function remove(items, item){
    let i = items.indexOf(item);
    items.splice(i,1)
    return items;
}

export {choice, remove}; 
// class Helper extends React.Component{
//     render(){
//         return (
//             <div>

//             </div>
//         )
//     }
// }