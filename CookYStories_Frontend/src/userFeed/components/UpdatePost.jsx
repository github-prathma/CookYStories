import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

class UpdatePost extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        
        this.state = {
            // input: "",
            // imgUrl: "",
           
            description: props.description,
        };
        
    }
    handleInputChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      });
    }

    handleChange = event => {
        this.props.onUserChange(event)
      }

    render() {

        let showHideClassName = this.props.show ? " modal d-block" : 'modal d-none';
        return (
            <div className = {showHideClassName}>
                <form className="GetDescription">
                    <div >
                        <textarea
                            type="text"
                            value={this.state.description}
                            name="description"
                            onChange={e => this.handleInputChange(e)}
                            className="form-control"
                            placeholder="Enter your way to cook!"
                            style={{height: '200px'}}
                        />     
                    </div>
                    <Button variant="contained"
                    color="secondary"
                    className='modal-close'
                    onClick={this.props.handleUpdate}>
                        Update
                    </Button>
                    
                </form>
            </div>
        )
    }
}

export default UpdatePost;