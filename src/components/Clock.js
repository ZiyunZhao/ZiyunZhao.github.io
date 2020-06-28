import React, { Component } from 'react';

export class Clock extends Component {
    constructor(props) {
      super(props);
      this.lst = ["an incoming software engineer at Google", "a Cal Alumni",  "a machine learning researcher", "a basketball fanatic"]
      this.state = { count: 0 };
    
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1500
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
    //   this.setState({
    //     date: new Date()
    //   });
    this.setState(prevState => ({ count: (prevState.count + 1) % 4 }));
    }
  
    render() {
      return (
        <div className="Clock">
          
              <span className="I_am">I am </span>
              
               <span clasName="content">
               {this.lst[this.state.count]}.
               </span>

             
        </div>
      );
    }
  }
  
