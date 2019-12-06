import React from 'react';
import QuizService from '../../services//quiz';
import Header from '../Header';
import QuestionBlock from '../QuestionBlock';
import './App.css';

export default class App extends React.Component {
   
  QuizConstructor = new QuizService();
 

  render() {
    return (
      <div className='container my-format'>
        <Header />
        <QuestionBlock 
            getData={this.QuizConstructor.getQuastions} 
            getAnswers = {this.QuizConstructor.getAnswers} 
        />
      </div>
    );
  }
}

