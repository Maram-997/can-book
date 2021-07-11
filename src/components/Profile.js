import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card,CardGroup } from 'react-bootstrap';
function Profile() {
    const { user, isAuthenticated } = useAuth0();
    //   const {
    //     isAuthenticated,
    return isAuthenticated && (
        <div>
            <CardGroup style={{width:"25%"}}>
                <Card>
                    <Card.Img variant="top" src={`${user.picture}`} />
                    <Card.Body>
                        <Card.Title> Hello {user.name} </Card.Title>
                        <Card.Text>
                            {user.nickname}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"> {user.email} </small>
                    </Card.Footer>
                </Card>
            </CardGroup>
            {/* {console.log(user)} */}
        </div>);
}
export default Profile;