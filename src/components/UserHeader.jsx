import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserHeader extends Component {
    componentDidMount() {
    }

    render() { 
        const { user } = this.props;
        
        if (!user) {
            return null;
        }

        return (
            <div>
                {user.name}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.users.find(user => user.id === ownProps.userId)
    };
};
 
export default connect(mapStateToProps)(UserHeader);