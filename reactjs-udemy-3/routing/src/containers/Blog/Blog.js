import React, { Component, Suspense } from "react";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import "./Blog.css";

const Posts = React.lazy(() => import("./Posts/Posts"));
const NewPost = React.lazy(() => import("./NewPost/NewPost"));

class Blog extends Component {
	state = {
		auth: true,
	};
	render() {
		return (
			<div className="Blog">
				<header>
					<nav>
						<ul>
							<li>
								<NavLink
									to="/posts"
									exact
									activeClassName="my-active"
									activeStyle={{
										color: "#fa923f",
										textDecoration: "underline",
									}}
								>
									Posts
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
					{this.state.auth ? (
						<Route
							path="/posts"
							render={() => (
								<Suspense fallback={<div>Loading...</div>}>
									<Posts />
								</Suspense>
							)}
						/>
					) : null}
					<Route
						path="/new-post"
						render={() => (
							<Suspense fallback={<div>Loading...</div>}>
								<NewPost />
							</Suspense>
						)}
					/>

					<Route render={() => <h1>Not Found</h1>} />
					<Redirect from="/" to="/posts" />
					<Route path="/" component={Posts} />
				</Switch>
			</div>
		);
	}
}

export default Blog;
