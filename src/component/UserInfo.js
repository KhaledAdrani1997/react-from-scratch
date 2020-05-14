
import React from 'react'

// export default class UserInfo extends Component {
//     render() {
//         return (
//             <div style={{margin:"5px"}}>
//                 <h3>UserInfo:</h3>
//                 <p>age: {this.props.user.age}</p>
//                 <p>place: {this.props.user.place}</p>
//             </div>
//         )
//     }
// }



export default function UserInfo(props) {
    return (
         <div style={{margin:"5px"}}>
                 <h3>UserInfo:</h3>
                 <p>age: {props.user.age}</p>
                <p>place: {props.user.place}</p>
             </div>
    )
}




