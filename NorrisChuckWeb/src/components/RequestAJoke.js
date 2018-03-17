import React from 'react';
import './Style.css';

class RequestAJoke extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.getJoke}>
                <div className='group'>
                    <input type='text' name='firstname' required='required' />
                    <span className='highlight'></span>
                    <span className='bar'></span>
                    <label>First Name</label>
                </div>

                <div className='group'>
                    <input type='text' name='lastname' required='required' />
                    <span className='highlight'></span>
                    <span className='bar'></span>
                    <label>Last Name</label>
                </div>

                <div className='group'>
                    <input type='number' name='numOfJoke' min='1' required='required' />
                    <span className='highlight'></span>
                    <span className='bar'></span>
                    <label>Number of Jokes</label>
                </div>
               
                <button className="btn btn-raised">Get some jokes</button>
            </form>
        );
    }
}

export default RequestAJoke;