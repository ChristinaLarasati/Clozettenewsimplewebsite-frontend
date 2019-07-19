<!--NAVBAR-->
<template>
    <div class="container" id="app">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="logo-continer" align="center">
	<a href="/" onclick="_gaq.push(['_trackEvent', 'Home', 'click_header_logo', 'Clozette Header Logo']);">
    <img src="//cimg.clozette.co.id/img/static/cid-new-logo.png"></a>
    <div class="header clearfix"></div>
<br/>
<menu>
<ul>
    <li><a href="#  ">  </a></li>
    <li><a href="#  ">  </a></li>
    <li><a href="#home">HOME</a></li>
    <li class="dropdown">
    <a href="javascript:void(0)" class="dropbtn">INSIDER</a>
    <div class="dropdown-content">
        <a href="#">HIJAB</a>
        <a href="#">FASHION</a>
        <a href="#">BEUATY</a>
        <a href="#">LIFE STYLE</a>
    </div></li>
   
    <li class="dropdown">
    <a href="javascript:void(0)" class="dropbtn">TUTORIAL</a>
    <div class="dropdown-content">
            <a href="#">HIJAB</a>
            <a href="#">HIJAB</a>
            <a href="#">MAKEUP</a>
            <a href="#">SKIN CARE</a>
            <a href="#">HAIR</a>
            <a href="#">NAILS</a>
            <a href="#">DIY PROJECT</a>
    </div></li>
    <li style="float:right" class="dropdown">
    <div class="topnav">
    <div class="search-container">
        <form  action="/action_page.php">
        <input type="text" placeholder="Search.." name="search">
        <button type="submit"><i class="fa fa-search"></i></button>
        </form>
    </div>
    </div>
    </li>
    <li style="float:right" class="dropdown">
    <a class="dropbtn"  href="/">
    <img src="//cimg-indo.clozette.co.id/static/default-profile-picture_1.jpg" style="width:20px;"></a>
    <div class="dropdown-content">
            <a href="#">MY PROFILE</a>
            <a href="#">CREATE NEW ARTICLE</a>
            <a href="#">CREATE NEW POST</a>
    </div></li>
        <li style="float:right"><a href="#Sign Up">Sign Up</a></li>
        <li style="float:right"><a href="#Login ">Login</a></li>
        
    </ul>
</menu>

</div>
</div>

  
</template>

<script >
</script>

<style>
*{margin:0}
ul {
    grid-area:menu;
    list-style-type: none;
    margin:auto;
    padding:inherit;
    width:inherit;
    height:inherit;
    overflow:hidden;
    background-color: #000;
}
li {
  float: left;
}
li a, .dropbtn {
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
li a:hover, .dropdown:hover .dropbtn {
  background-color: grey;
}
li.dropdown {
  display: inline-block;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}
.dropdown-content a:hover {background-color: #f1f1f1;}
.dropdown:hover .dropdown-content {
  display: block;
}
.topnav a.active {
  background-color: #2196F3;
  color: white;
}
.topnav .search-container {
  float: right;
}
.topnav input[type=text] {
  padding: 6px;
  margin-top: 8px;
  font-size: 17px;
  border: none;
}
.topnav .search-container button {
  float: right;
  padding: 6px 10px;
  margin-top: 8px;
  margin-right: 16px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
}
.topnav .search-container button:hover {
  background: #ccc;
}

@media screen and (max-width: 600px) {
  .topnav .search-container {
    float: none;
  }
  .topnav a, .topnav input[type=text], .topnav .search-container button {
    float: none;
    display: block;
    text-align: left;
    width: 100%;
    margin: 0;
    padding: 14px;
  }
  .topnav input[type=text] {
    border: 1px solid #ccc;  
  }
  .wrap {
            width:1000px;
            margin:0 auto;          
}   
body {
font-family:arial,segoe ui;   
 background-color:#fff;
     font-family:Arial, Helvetica, sans-serif;
     color:#000;
}
}
</style>