import React, { Component } from 'react';
import './App.css';
import BlogHeader from './BlogHeader';
import BlogForm from './BlogForm';
import BlogPost from './BlogPost'
var moment = require('moment');

const removePost = (id, posts) => {
  function removeIt(post){
    return post.id !== id
  }
  return posts.filter(removeIt)
}

const toggleEdit = (id, posts) => {
  function changeStatus(post){
    if(post.id === id){
      post.isEditing = !post.isEditing
    }
    return post
  }
  return posts.map(changeStatus)
}

const changeContent = (id, text, posts) => {
  function saveContent(post){
    if(post.id === id){
      post.content = text
    }
    return post
  }
  return posts.map(saveContent)
}

const changeAuthor = (id, text, posts) => {
  function saveAuthor(post){
    if(post.id === id){
      post.author = text
    }
    return post
  }
  return posts.map(saveAuthor)
}



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      blogPosts: [
        {id: 1, content: 'content goes here', author: 'Jake', date: moment().toString(), isEditing: false},
        {id: 2, content: 'content goes here2', author: 'Jake F', date: moment().toString(), isEditing: false},
        {id: 3, content: 'content goes here3', author: 'Jake Fi', date: moment().toString(), isEditing: false},
        {id: 4, content: 'content goes here4', author: 'Jake Fis', date: moment().toString(), isEditing: false},
        {id: 5, content: 'content goes here5', author: 'Jake Fish', date: moment().toString(), isEditing: false},
      ],
      formContent: '',
      formAuthor: ''
    }
  }

  handleDelete(id){
    this.setState({blogPosts: removePost(id, this.state.blogPosts)})
  }

  handleChangeInput(text, field){
    this.setState({[field]: text})
  }

  handleAddPost(post){
    this.setState({blogPosts: this.state.blogPosts.concat([post]), formContent: '', formAuthor: ''})
  }

  handleToggleEdit(id){
    this.setState({blogPosts: toggleEdit(id, this.state.blogPosts)})
  }

  handleContentChange(id, text){
    this.setState({blogPosts: changeContent(id, text, this.state.blogPosts)})
  }

  handleAuthorChange(id, text){
    this.setState({blogPosts: changeAuthor(id, text, this.state.blogPosts)})
  }

  render() {
    return (
      <div className="App">
        <BlogHeader/>
        <BlogForm formContent={this.state.formContent} 
                  formAuthor={this.state.formAuthor}
                  onChangeInput={this.handleChangeInput.bind(this)}
                  onAddPost={this.handleAddPost.bind(this)}/>
        <ul className='blogList'>
          {
            this.state.blogPosts.slice().reverse().map(post => (
              <BlogPost key={post.id} 
                        id={post.id}
                        content={post.content} 
                        author={post.author} 
                        date={post.date}
                        isEditing={post.isEditing}
                        onDelete={this.handleDelete.bind(this)}
                        onToggleEdit={this.handleToggleEdit.bind(this)}
                        onContentChange={this.handleContentChange.bind(this)}
                        onAuthorChange={this.handleAuthorChange.bind(this)}
              />
            ))
          }
        </ul>
      </div>
    );
  }
}

export default App;
