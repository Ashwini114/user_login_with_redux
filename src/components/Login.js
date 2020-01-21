import React,{ Component } from "react"
import { Card, Button , Form  } from 'react-bootstrap';
import { Redirect } from "react-router-dom";


class Login extends Component {
    constructor(props)
    {
        super(props);
        this.state= {
            redirect : false
        }
        this.emailRef = React.createRef();
        this.passwordRef = React.createRef();
        this.errorMsg = React.createRef();
        
    }
    loginHandler()
    {
      let email = this.emailRef.current.value;
      let password = this.passwordRef.current.value;
      /** Validation */
      if(email == "" || password == "")
      {
        if(email == "")
           this.emailRef.current.style.borderColor = "red";
        if(password == "")
            this.passwordRef.current.style.borderColor = "red";
      }
      else
      {
          /** Checking credentials from data saved in store */
          if(email != this.props.credentails.username || password != this.props.credentails.password )
            this.errorMsg.current.style.display = "block";
          else
          {
            
            this.props.changeLoginStatus(true);
            setTimeout(()=>{
                this.setState({
                    redirect : true
                })
            }, 1000)

          }
            
            
      }

    }
    render()
    {
        if (this.state.redirect) {
            return <Redirect to='/dashboard'/>;
        }
        else{
            return(
            
                <div className="login-div">
                    <Card >
                        <Card.Header as="h5">Login</Card.Header>
                        <Card.Body>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" ref={this.emailRef}/>
    
                            </Form.Group>
    
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" ref={this.passwordRef}/>
                            </Form.Group>
    
                            <Button variant="primary" onClick={()=>this.loginHandler()}>
                                Submit
                            </Button>
                            <p ref={this.errorMsg} className="error_msg">Invalid credential</p>
                        </Form>
                        </Card.Body>
                    </Card>
                </div>
               
            )
            
        }

    }
}

export default Login