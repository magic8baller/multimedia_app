// import {CloudinaryContext, Image, Transformation} from 'cloudinary-react';
// import {img1, img2, img3, img4, img5, img6} from './images';
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import {withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from 'react';
import Masonry from 'react-mason';
import 'semantic-ui-css/semantic.min.css';
import {List} from 'semantic-ui-react';
import Grid from '@material-ui/core/Grid';
// const images= [
// {src: img1, title: 'ok'}, {src: img2, title: 'two'}, {src: img3, title: 'third'}, {src: img4, title: 'fourth'}, {src: img5, title: 'fifth'}, {src: img6, title: 'sixth'}
// ]
import data from '../db';
import './Home.css';
import {NavBar} from './NavBar.js';
const styles = theme => ({
	root: {
		display: "grid",
		direction: "row",
		// gridTemplateColumns: "max-content max-content",
		gridGap: "5px 5px",
		// gridAutoFlow: "row dense",
		boxSizing: "border-box",
		margin: "2em",
		width: "100vw",
		font: 'Helvetica',
		justify:"center",
  alignItems:"baseline"

	},
	item: {
		padding: "3em"
	},
	large: {
		gridRow: "auto / span 4"
	},
	card: {
		maxWidth: 375,
		// maxHeight: 600,
		padding: '2rem',
		objectFit: 'contain'
	},
	media: {
		height: 140
	},
	text: {
		height: '100%',
		textAlign: "center",
		font: 'Verdana'
	},
	contain: {
		objectFit: 'contain',
		height: '100%'
	}
});

const Poems = (props) => {
	const {classes} = props

	return (
		<>
		{/* <div> */}
				<NavBar />
				{/* </div> */}
				<Masonry>
		<div className={classes.root}>
					<Grid container
						direction="row"
						justify="center"
						alignItems="baseline" spacing={2}>
			<div className={classes.large}>
					{data.poems.map((poem, i) => {
						let {title, body, img} = poem
						return (
					<List horizontal>
							<Card key={i} className={classes.card}>
								<CardActionArea>
									<CardMedia
										className={classes.media}
										image={img}
										title={title}
									/>
									<CardContent className={classes.contain}>
										<Typography gutterBottom variant="h5" component="h2">
											<span style={{font: 'Impact'}}>
												<em><b><u>{title}</u></b></em></span>

										</Typography>
										<Typography component="p" className="text">
											<span style={{whiteSpace: 'pre-line'}}>{body}</span>
										</Typography>
									</CardContent>
								</CardActionArea>
								<CardActions>
									<Button size="small" color="primary">
										Share
        </Button>
									<Button size="small" color="primary">
										Add To Faves
        </Button>
								</CardActions>
							</Card>
					</List>
						)
					})}

			</div>
			</Grid>
		</div>
				</Masonry>
		</>
	)
}

// export default Poems;
export default withStyles(styles)(Poems);