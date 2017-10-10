import React from 'react';



class Fund extends React.Component {
    
    
    
    render() {
        
        return (
            <div className="Fund">
               {this.props.children}
            </div>
        );
    }
    
    
}




export default Fund;