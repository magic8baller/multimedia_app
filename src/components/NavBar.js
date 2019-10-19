import React from "react";
import {Link} from "react-router-dom";
import "./NavBar.css";

export class NavBar extends React.Component {
	render () {
		return (
			<div className="header">
				<div className="header-menu">
					<Link to="/">
						<div id="menu-view" className="menu-item">
							<i className="menu-icon fa fa-picture-o"> </i>
							<span className="menu-item-first-word">Gallery</span>
							<span className="menu-item-second-word"></span>
						</div>
					</Link>

					<Link to="/poems">
						<div id="menu-new" className="menu-item">
							<i className="menu-icon fa fa-upload"></i>
							<span className="menu-item-first-word">Poems</span>
							<span className="menu-item-second-word"></span>
						</div>
					</Link>
				</div>
			</div>
		);
	}
}