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

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      blogPosts: [
        {id: 1, content: 'content goes here', author: 'Jake', date: moment().toString()},
        {id: 2, content: 'content goes here2', author: 'Jake F', date: moment().toString()},
        {id: 3, content: 'content goes here3', author: 'Jake Fi', date: moment().toString()},
        {id: 4, content: 'content goes here4', author: 'Jake Fis', date: moment().toString()},
        {id: 5, content: 'content goes here5', author: 'Jake Fish', date: moment().toString()},
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
            this.state.blogPosts.map(post => (
              <BlogPost key={post.id} 
                        id={post.id}
                        content={post.content} 
                        author={post.author} 
                        date={post.date}
                        onDelete={this.handleDelete.bind(this)}/>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default App;
