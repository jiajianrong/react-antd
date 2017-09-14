import React from 'react';



class Asset extends React.Component {
    
    
    
    render() {
        
        return (
            <div className="Asset">
               {this.props.children}
            </div>
        );
    }
    
    
}




export default Asset;