import React, { Component } from 'react';

import axios from 'axios';
import ListItem from './ListItem';
import Listing from './Listing';

export default class Post extends Component {
	render() {
		return (
			<input>Title: </input>
			<input>Content: </input>
			<button>Sumit</button>
		);
	}
}