import {CloudinaryContext, Image, Transformation} from 'cloudinary-react';
import React from 'react';
import Masonry from 'react-mason';
import 'semantic-ui-css/semantic.min.css';
import {List} from 'semantic-ui-react';
import {transformPublicIdToName} from '../utils';
import './Home.css';

const Home = ({gallery}) => {
	return (
		<section className="list-container">
			<CloudinaryContext cloudName="ltcloud1">
				<Masonry>
					{gallery.map(data => {
						let {public_id, created_at} = data;
						return (
							<List horizontal>
								{/* <List.Item> */}
								<div className='image-holder'>
									{/* <List.Content> */}
									<div className="responsive" key={public_id} >
										{/* <div className="img"> */}
										{/* <Segment> */}
										<a target="_blank" href={`https://res.cloudinary.com/ltcloud1/image/upload/v1571334056/${public_id}.jpg`}>
											<Image publicId={public_id} responsive>
												<Transformation
													crop="fill"
													width="200"
													height="200"
													gravity="face:center"
													dpr="auto"
													placeholder="blank" />
											</Image>
										</a>
										<div className="display">
											<div className="image-name">
												<div id="name-text">
													{transformPublicIdToName(public_id)}
												</div>
												<div className="image-info">
													<div className="image-date">
														{created_at}
													</div>
												</div>
											</div>
										</div>

									</div>


									{/* </List.Content> */}
								</div>
								{/* </List.Item> */}
							</List>
						)
					})}
				</Masonry>
			</CloudinaryContext>
			<div className="clearfix"></div>
		</section>
	)
}

export default Home;