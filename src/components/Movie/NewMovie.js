import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class NewMovie extends Component {
    state = {}
    render() {
        return (
            <div> <table className='table' id='tablenew'>
                <tbody>
                    <tr>
                        <td><label>Id: </label></td>
                        <td><input className='input' type='text' name='newId' onChange={this.props.onChange}></input></td>
                    </tr>
                    <tr>
                        <td><label>Title: </label></td>
                        <td><input className='input' type='text' name='newTitle' onChange={this.props.onChange}></input></td>
                    </tr>
                    <tr>
                        <td><label>Subtitle: </label></td>
                        <td><input className='input' type='text' name='newSubtitle' onChange={this.props.onChange}></input></td>
                    </tr>
                    <tr>
                        <td><label>Description: </label></td>
                        <td><input className='input' type='text' name='newDescription' onChange={this.props.onChange}></input></td>
                    </tr>
                    <tr>
                        <td><label>Year: </label></td>
                        <td><input className='input' type='text' name='newYear' onChange={this.props.onChange}></input></td>
                    </tr>
                    <tr>
                        <td><label>Image url: </label></td>
                        <td><input className='input' type='text' name='newImageUrl' onChange={this.props.onChange}></input></td>
                    </tr>
                    <tr>
                        <td><label>Rating: </label></td>
                        <td> <input className='input' type='text' name='newRating' onChange={this.props.onChange}></input></td>
                    </tr>
                </tbody>
            </table>
                <button className='btn btn-secondary m-2' onClick={this.props.onAdd}><Link to='/'>Submit</Link></button>
            </div>
        );
    }
}

export default NewMovie;