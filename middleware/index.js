<%- include("partials/header") %>

 <div class="container">
 	<div class="row">
 		<h1 class="text-center">Sign Up!</h1>
 		<div style="width: 30%; margin:25px auto;">
			<form action="/register" method="POST">
				<div class="form-group">
					<input class="form-control" type="text" name="username" placeholder="username">
				</div>
				<div class="form-group">
					<input class="form-control" type="password" name="password" placeholder="password">
				</div>
				<div class="form-group">
					<button class="btn btn-primary btn-lg btn-block">Log In</button>
				</div>
			</form>
		</div>
 	</div>

<%- include("partials/footer") %>
