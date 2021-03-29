import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
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
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link
									to={{
										pathname: "/new-post",
										hash: "#submit",
										search: "?quick-submit",
									}}
								>
									New Post
								</Link>
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
