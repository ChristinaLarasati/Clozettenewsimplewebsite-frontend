<!--Registrasi-->

<template>
    <div class="container" id="app">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="logo-continer" align="center">
	<a href="/" onclick="_gaq.push(['_trackEvent', 'Home', 'click_header_logo', 'Clozette Header Logo']);">
    <img src="//cimg.clozette.co.id/img/static/cid-new-logo.png"></a>
    <div class="header clearfix"></div>

<form action="/action_page.php">
  <div class="container">
    <h1>Register</h1>
    <hr>
    <label for="username"><b>Username</b></label>
    <span class="icon1"><i class="fa fa-user" aria-hidden="true"></i></span><br>
    <input type="text" placeholder="username" name="username" required>
    

    <label for="email"><b>Email</b></label>
    <input type="email" placeholder="Enter Email" name="email" required>

    <label for="psw"><b>Password</b></label>
    <span class="icon5"><i class="fa fa-unlock" aria-hidden="true"></i></span><br>
    <input type="password" placeholder="Enter Password" name="psw" required>

    <label for="kode-verifikasi"><b> Kode Verifikasi</b></label>
    <input type="text" placeholder="Kode Verifikasi" name="kode-verifikasi" required>
    <label for="negara"><b>Negara</b></label>

    <select name="negara">
                <option value="singapura">Singapura</option>
                <option value="indonesia">Indonesia</option>
                <option value="jepang">Jepang</option>
    </select>
    
    <label for="nomor-hp"><b>Nomor HP</b></label>
    <span class="icon3"><i class="fa fa-phone" aria-hidden="true"></i></span><br>
    <input type="text" placeholder="Nomor HP" name="nomor-hp" required>
    
    <label for="tanggal-lahir"><b>Tanggal Lagir</b></label>
    <input type="date" placeholder="dd/mm/yyyy" name="tanggal-lagir" required>

    <hr>
    
    <button type="submit" class="registerbtn">Register</button>
  </div>
  
  <div class="container signin">
    <p>Already have an account? <a href="#">Sign in</a>.</p>
  </div>
</form>

<!-- <div class="main-agileits">
	<h2 class="sub-head">Sign Up</h2>
		<div class="sub-main">	
			<form action="#" method="post">
				<input placeholder="First Name" name="Name" class="name" type="text" required="">
					<span class="icon1"><i class="fa fa-user" aria-hidden="true"></i></span><br>
				<input placeholder="Last Name" name="Name" class="name2" type="text" required="">
					<span class="icon2"><i class="fa fa-user" aria-hidden="true"></i></span><br>
				<input placeholder="Phone Number" name="Number" class="number" type="text" required="">
					<span class="icon3"><i class="fa fa-phone" aria-hidden="true"></i></span><br>
				<input placeholder="Email" name="mail" class="mail" type="text" required="">
					<span class="icon4"><i class="fa fa-envelope" aria-hidden="true"></i></span><br>
				<input  placeholder="Password" name="Password" class="pass" type="password" required="">
					<span class="icon5"><i class="fa fa-unlock" aria-hidden="true"></i></span><br>
				<input  placeholder="Confirm Password" name="Password" class="pass" type="password" required="">
					<span class="icon6"><i class="fa fa-unlock" aria-hidden="true"></i></span><br>
				
				<input type="submit" value="sign up">
			</form>
		</div>
		<div class="clear"></div>
</div> -->
</div>
</div>
</template>
<script>
export default {
}
</script>

<style>
body {font-family: Arial, Helvetica, sans-serif;}
* {box-sizing: border-box}

/* Full-width input fields */
input[type=text], input[type=password] {
  width: 15%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for all buttons */
button {
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

button:hover {
  opacity:1;
}

/* Extra styles for the cancel button */
.cancelbtn {
  padding: 14px 20px;
  background-color: #f44336;
}

/* Float cancel and signup buttons and add an equal width */
.cancelbtn, .signupbtn {
  float: left;
  width: 50%;
}

/* Add padding to container elements */
.container {
  padding: 16px;
}

/* Clear floats */
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

/* Change styles for cancel button and signup button on extra small screens */
@media screen and (max-width: 300px) {
  .cancelbtn, .signupbtn {
     width: 100%;
  }
}
</style>
