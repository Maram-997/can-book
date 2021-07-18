import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import { Card, Button } from 'react-bootstrap'
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Addbooks from './components/Addbooks';
import UpdateForm from './components/UpdateForm'

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      booksArr: [],
      showAddingForm: false,
      showUpdateForm: false,
      updatedBookData:{},
      index: 0
    }
  }
  componentDidMount = async () => {
    const { user } = this.props.auth0
    await this.setState({
      email: user.email
    })
    let url = `http://localhost:3003/books?email=${this.state.email}`

    let resData = await axios.get(url)
    await this.setState({
      booksArr: resData.data
    })
  }
  showForm = async () => {
    await this.setState({
      showAddingForm: true
    })

  }

  handleClose = async () => {
    await this.setState({
      showAddingForm: false,
      showUpdateForm:false
    })
  }

  handelForm = async (event) => {
    event.preventDefault();
    await this.setState({
      showAddingForm: false
    })
    let booksObj ={
      email:this.state.email,
      name:event.target.name.value,
      description:event.target.description.value,
      status: event.target.status.value,
      img:event.target.img.value
    }
    let url = `http://localhost:3003/newBook`
    let reqData = await axios.post(url, booksObj)
    await this.setState({
      booksArr: reqData.data
    })
  }
  deletingBook = async (idx)=>{
 let paramsObj = {
   email:this.state.email
 }
 let booksData = await axios.delete(`http://localhost:3003/deleteBook/${idx}`,{params:paramsObj})
 await this.setState({
   booksArr:booksData.data
 })
  }
  showBookForm = async (idx) =>{
  await this.setState({
    showUpdateForm:true,
    index:idx,
    updatedBookData:{
    name:this.state.booksArr[idx].name,
    description:this.state.booksArr[idx].description,
    status:this.state.booksArr[idx].status,
    img:this.state.booksArr[idx].img,

    }

  })
  }
  updateBook = async (event) =>{
    event.preventDefault();
    await this.setState({
      showUpdateForm:false
    })
    let paramsObj= {
      email:this.state.email,
      name:event.target.name.value,
      description:event.target.description.value,
      status:event.target.status.value,
      img:event.target.img.value

    }

    let updatedBook = await axios.put(`http://localhost:3003/updateBook/${this.state.index}`,paramsObj)
    await this.setState({
      booksArr:updatedBook.data
    })
  }

  render() {
    return (
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
        <Button variant="primary" onClick={this.showForm}>Add Books</Button>







        <Addbooks show={this.state.showAddingForm} handleClose={this.handleClose} handelForm={this.handelForm} />
        
        
        <UpdateForm show ={this.state.showUpdateForm} handleClose={this.handleClose} updatedBookData={this.state.updatedBookData} updateBook={this.updateBook} />
        
        
        
        
        
        
        
        <div className='books'>


          {this.state.booksArr.map((book,idx) => {
            return (<div>

              <Card style={{ width: '18rem' }}>
                <Card.Title>{book.name}</Card.Title>
                <Card.Img variant="top" src={book.img_url} key={book.idx} />
                <Card.Body>
                  <Card.Text>
                    {book.description}
                  </Card.Text>
                  <Card.Text>
                    {book.status}
                  </Card.Text>
                  <Button variant="primary" onClick={()=>this.showBookForm(idx)}>Update</Button>
                  <Button variant="danger" onClick={()=>this.deletingBook(idx)}>Delete</Button>
                </Card.Body>
              </Card>
            </div>)

          })}



        </div>



      </Jumbotron>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
