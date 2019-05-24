import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actions/index';
import { Link } from 'react-router-dom';
import { List, Icon, Header, Image, Button } from 'semantic-ui-react';


class AllProfiles extends React.Component{
    constructor(props){
        super(props)
        this.deleteAcc = this.deleteAcc.bind(this);
    }

    deleteAcc(userAcc){
        const activeUser = userAcc;
        const { users } = this.props;
        const index = users.map( x=> x.userId).indexOf(activeUser);
        this.props.deleteUser(index);
    }

    render(){
        const { users } = this.props;
        this.items = users.map(
            (user, i) => <List.Item key = {i} className="singleProfile" >             
                            <h2 className="profileNum"> Profile # {i} </h2> 
                            <Header as='header'>
                                <Image circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' />
                                <Link to={`/users/${ user.userId }`}> { user.username } </Link>
                            </Header>
                            <p> Name: { user.firstName } { user.lastName }, </p>
                            <p> Email: { user.email } </p> 
                            <Button basic color ="red"
                                    size = "huge"
                                    type="button"
                                    onClick={ () => this.deleteAcc(user.userId) }>
                                    Delete Account
                            </Button>
                        </List.Item> 
            );

        return(           
            <div className="profilesList">
                <Header as="header" icon>
                    <Icon name="users" />
                        All Users
                </Header>
                <List horizontal relaxed divided size="big">
                    {this.items}
                </List>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        posts: state.posts,
        comments: state.comments,
        users: state.users
    }
}

function mapDispachToProps(dispatch){
    return bindActionCreators(actionCreators, dispatch);

}

export default connect(mapStateToProps, mapDispachToProps)(AllProfiles);
