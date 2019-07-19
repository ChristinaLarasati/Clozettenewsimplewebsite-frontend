<template>
    <div class="container" id="app">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<div class="header">
      <div class="logo-continer" align="center">
	<a href="/" onclick="_gaq.push(['_trackEvent', 'Home', 'click_header_logo', 'Clozette Header Logo']);">
    <img src="//cimg.clozette.co.id/img/static/cid-new-logo.png"></a>
     <div class="header clearfix">
</div>

<nav>
 <ul>
        <li><a href="#">HOME</a></li>
        <li><a href="#">INSIDER</a>
            <ul>
                <li><a href="#">HIJAB</a></li>
                <li><a href="#">FASHION</a></li>
                <li><a href="#">BEUATY</a></li>
                <li><a href="#">LIFE STYLE</a></li>
            </ul>
        </li>
        <li><a href="#">TUTORIAL</a>
            <ul>
                <li><a href="#">HIJAB</a></li>
                <li><a href="#">MAKEUP</a></li>
                <li><a href="#">SKIN CARE</a></li>
                <li><a href="#">HAIR</a></li>
                <li><a href="#">NAILS</a></li>
                <li><a href="#">DIY PROJECT</a></li>
            </ul>
        </li>
        <li><a style="float:left" class="active" href="/">
            <img src="//cimg-indo.clozette.co.id/static/default-profile-picture_1.jpg" width="28" height="28"></a>
            <ul>
                <li><a href="#">MY PROFILE</a></li>
                <li><a href="#">CREATE NEW ARTICLE</a></li>
                <li><a href="#">CREATE NEW POST</a></li>
                <a href="#" onClick="return confirm ('Are You Sure to Sign Out?')">SIGN OUT</a>
            </ul>
            </li>
            <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
            <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
       
        <br/>
        <div class="navbar-center">
            <div class="search-container">
                <form action="/action_page.php">
                <input type="text" placeholder="Search.." name="search">
                <button type="submit"><i class="fa fa-search"></i></button>
                </form>
            </div>
        </div>
        
    </ul>
    
</nav>
</div>
      </div> 
  </div>
  
</template>

<script >
</script>

<style>

*{margin:0}

    body {
     background-color:#fff;
     font-family:Arial, Helvetica, sans-serif;
     color:#000;
    }

    nav {
     margin:auto;
     text-align: center;
     width: 100%;
    color: #000;
    font-family: franklin-cd;
    font-size: 16px;
    } 
li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
    nav ul ul {
     display: none;
    }

    nav ul li:hover > 
    ul{
    display: block;
    width: 150px;
    }

    nav ul {
     background: #000;
     height: auto;
     list-style: none;
     position: relative;
     display: inline-table;
     width: 75%;
    }

    nav ul:after {
     content: ""; 
     clear:both; 
     display: block;
    }
  
    nav ul li{
     float:left;
    }

    nav ul li:hover{
     background:#666;
     size:inherit;
    }
    nav ul li a{
     display: block;
     padding: 25px;
     color: #fff;
     text-decoration: none;
    }

    nav ul ul{
     background: #000;
     border-radius: 0px;
     padding: 0;
     position: absolute;
     top:100%;
    }

    nav ul ul li{
     float:none;
     border-top: 1px soild #000;
     border-bottom: 1px solid #000;
     position: relative;
    }

    nav ul ul li a{
     padding: 10px 20px;
     color: #fff;
    }
    

</style>
