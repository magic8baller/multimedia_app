import axios from 'axios';
import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import {Button} from 'semantic-ui-react';
import request from 'superagent';
import './App.css';
import Home from './components/Home';

export default class App extends Component {
	state = {
		image: '',
		gallery: [],
		defaultTag: 'kriti',

	}

	componentDidMount () {
		axios.get(`https://res.cloudinary.com/ltcloud1/image/list/v1571334056/${this.state.defaultTag}.json`)
			.then(fetchPhotosResponse => {
				console.log(fetchPhotosResponse.data.resources)
				this.setState({gallery: fetchPhotosResponse.data.resources})
			})
			.catch((error) => console.log(error));
	}

	onImageDrop (files) {
		this.setState({uploadedFile: files[0]});
		this.handleImageUpload(files[0])
	}

	handleImageUpload (file) {
		let upload = request.post("https://api.cloudinary.com/v1_1/ltcloud1/image/c_imagga_crop")
			.field('upload_preset', 'ml_default')
			.field('file', file)
		upload.end((uploadError, uploadResponse) => {
			if (uploadError) {
				console.error(uploadError);
			}
			if (uploadResponse.body.secure_url !== '') {
				this.setState({image: uploadResponse.body.secure_url});
			}
		})
	}

	uploadWidget () {
		window.cloudinary.openUploadWidget(
			{cloud_name: 'ltcloud1', upload_preset: 'ml_default', tags: [`${this.state.defaultTag}`]},
			function (err, res) {
				if (res === undefined) return;
				this.setState({gallery: [...this.state.gallery, res]});
			}
		)
	}
	render () {
		return (
			<div className="main">
				<div className="FileUpload">
					<h1>Zine-ish Gallery</h1>
					<div className="upload">
						<Button primary onClick={this.uploadWidget.bind(this)} className="upload-button">Add New Image!</Button>
					</div>
					<br />
					<br />
					<Home gallery={this.state.gallery} />
				</div>
			</div>
		)
	}
}
