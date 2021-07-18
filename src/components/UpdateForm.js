import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';


export class UpdateForm extends Component {
    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.handleClose} >
                    <Modal.Header closeButton>
                        <Modal.Title>Update Book</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Form  onSubmit={this.props.updateBook} >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Book Name</Form.Label>
                                <Form.Control type="text" defaultValue={this.props.updatedBookData.name} name='name' />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="tesxt" defaultValue={this.props.updatedBookData.description} name='description'/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Status</Form.Label>
                                <Form.Control type="text" defaultValue={this.props.updatedBookData.status} name='status' />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Book Poster</Form.Label>
                                <Form.Control type="text" defaultValue={this.props.updatedBookData.img}  name='img' />
                            </Form.Group>

                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.props.handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" type='submit'>
                                    Update Book
                                </Button>
                            </Modal.Footer>

                        </Form>
                    </Modal.Body>

                </Modal>
            </div>
        )
    }
}

export default UpdateForm
