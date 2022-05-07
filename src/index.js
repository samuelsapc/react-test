import React from 'react';
import ReactDOM from 'react-dom';
import Header from './componets/Header';
import Body from './componets/body';
import Footer from './componets/footer';
class App extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Body/>
                <Footer/>
            </div>
           
        );
    }
}

ReactDOM.render(<App/> , window.document.getElementById("root"))