import React  from 'react'

export default class Avatar extends React.Component {

    render(){
        //console.log('in Avatar',this.props)
    return (
        <div className="Avatar">
            You are the {this.props.user.role},{this.props.user.smily}
        </div>
    
    )

    }
    
}
