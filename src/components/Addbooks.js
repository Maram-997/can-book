import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

export class Addbooks extends Component {
    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.handleClose} >
                    <Modal.Header closeButton>
                        <Modal.Title>Adding New Books</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Form onSubmit={this.props.handelForm}  >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Book Name</Form.Label>
                                <Form.Control type="text" placeholder="Book Name" name='name' />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="tesxt" placeholder="Description" name='description'/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Status</Form.Label>
                                <Form.Control type="text" placeholder="Status" name='status' />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Book Poster</Form.Label>
                                <Form.Control type="text" placeholder="Book Poster" name='img' />
                            </Form.Group>

                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.props.handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" type='submit'>
                                    Submit
                                </Button>
                            </Modal.Footer>

                        </Form>
                    </Modal.Body>

                </Modal>
            </div>
        )
    }
}

export default Addbooks
