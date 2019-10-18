import {CloudinaryContext, Image, Transformation} from 'cloudinary-react';
import React from 'react';
import Masonry from 'react-mason';
import 'semantic-ui-css/semantic.min.css';
import {Divider, List, Segment} from 'semantic-ui-react';
import {transformPublicIdToName} from '../utils';
import './Home.css';

const Home = ({gallery}) => {
	return (
		<section className="gallery">
			<CloudinaryContext cloudName="ltcloud1">
				<Masonry>
					{gallery.map(data => {
						let {public_id} = data;
						return (
							<List horizontal>
								<List.Item>
									<List.Content>
										<div className="responsive" key={public_id} >
											<div className="img">
												<Segment>
													<a target="_blank" href={`https://res.cloudinary.com/ltcloud1/image/upload/v1571334056/${public_id}.jpg`}>
														<Image publicId={public_id} responsive>
															<Transformation
																crop="fill"
																width="820"
																height="900"
																gravity="face:center"
																dpr="auto"
																placeholder="blank" />
														</Image>
													</a>
													<Divider section />				{transformPublicIdToName(public_id)}
												</Segment>
											</div>
										</div>
									</List.Content>
								</List.Item>
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