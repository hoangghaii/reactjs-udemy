import React, { Component } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import NewPost from "./NewPost/NewPost";
import "./Blog.css";
import Posts from "./Posts/Posts";

class Blog extends Component {
	render() {
		return (
			<div className="Blog">
				<header>
					<nav>
						<ul>
							<li>
								<NavLink
									to="/"
									exact
									activeClassName="my-active"
									activeStyle={{
										color: "#fa923f",
										textDecoration: "underline",
									}}
								>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink
									to={{
										pathname: "/new-post",
										hash: "#submit",
										search: "?quick-submit",
									}}
									activeClassName="my-active"
									activeStyle={{
										color: "#fa923f",
										textDecoration: "underline",
									}}
								>
									New Post
								</NavLink>
							</li>
						</ul>
					</nav>
				</header>

				<Switch>
					<Route path="/" exact component={Posts} />
					<Route path="/new-post" exact component={NewPost} />
				</Switch>
			</div>
		);
	}
}

export default Blog;
