<template>

    <div class="container" id="app">
<div class="header">
      <div class="logo-continer" align="center">
	<a href="/" onclick="_gaq.push(['_trackEvent', 'Home', 'click_header_logo', 'Clozette Header Logo']);"><img src="//cimg.clozette.co.id/img/static/cid-new-logo.png"></a>
     <div class="header clearfix">
</div>
    <nav class="nav">
    <!-- Menu akan memiliki class is-active bila model active isinya sesuai. -->
    <!-- Untuk mencegah link mengarahkan halaman kita gunakan modifier 'prevent'. -->
    <!-- Ketika menu di klik, method setActive yang telah kita definisikan di Vue
        akan terpanggil dan mengubah nilai dari 'active' -->
    <a
      class="menu"
      href="#"
      v-bind:class="{'is-active': active === 'home'}"
      v-on:click.prevent="setActive('home')"
    >Home</a>
    <a
      class="menu"
      href="#"
      v-bind:class="{'is-active': active === 'portfolio'}"
      v-on:click.prevent="setActive('portfolio')"
    >Portfolio</a>
    <a
      class="menu"
      href="#"
      v-bind:class="{'is-active': active === 'shop'}"
      v-on:click.prevent="setActive('shop')"
    >Shop</a>
    <a
      class="menu"
      href="#"
      v-bind:class="{'is-active': active === 'about'}"
      v-on:click.prevent="setActive('about')"
    >About</a>
    <a
      class="menu"
      href="#"
      v-bind:class="{'is-active': active === 'contact'}"
      v-on:click.prevent="setActive('contact')"
    >Contact</a>
  </nav>

  <div class="info">
  <!-- Tanda kurung kurawal ganda (atau 'mustache') akan diganti oleh
      isi dari 'active'. Akan otomatis berubah bila ada perubahan model 'active' -->
  Anda memilih <span class="selected">{{ active }}</span>
  </div>
</div>
      </div> 
       <div class="main">
        <div class="content">
        
            <a href="/" ><img src="//cimg.clozette.co.id/img/community/about_v2/masthead.jpg"></a>
        
        </div>
     </div>
  <br/>
   <br/>
    <br/>
    
<footer>
  <div class="clear"></div>
<div class="footer">
<div class="about-menu-div">
<ul>
  <li>
    <span>ABOUT</span>
  </li>
  <li>
    <span>HELP</span>
  </li>
  <li>
    <span>FOLLOW US</span>
  </li>
   <li>
    <span>MOBILE APPS</span>
  </li>
  <li>
    <span>CLOZETTE GROUP</span>
  </li>
  <li>
    <span>PARTNER SITES</span>
  </li>

   <li><a href="/info/corporate_information">Corporate Information</a></li>
   <li><a href="mailto:hello@clozette.co">Contact Us</a></li>
   <li><a href="https://www.facebook.com/ClozetteIndonesia" target="_blank">Facebook</a></li>
   <li><a href="https://play.google.com/store/apps/details?id=co.clozette.shoppe" target="_blank">Clozette Shoppe</a></li>
    <li><a href="http://www.clozette.co" target="_blank">Clozette.co</a></li>
    <li><a href="http://femaledaily.com/" target="_blank">Female Daily</a></li>
    <li><a href="/info/company_news">Company News</a></li>
    <li><a href="/info/help">My Virtual Closet</a></li>
    <li><a href="https://twitter.com/clozetteid" target="_blank">Twitter</a></li>
    <li><a target="_blank"></a></li>
    <li><a href="http://id.clozette.co" target="_blank">Clozette Indonesia</a></li>
    <li><a href="http://mommiesdaily.com/" target="_blank">Mommies Daily</a></li>
		<li><a href="/info/terms">Terms of Use</a></li>
    <li><a href="/info/help">Account Settings</a></li>
    <li><a href="https://instagram.com/clozetteid" target="_blank">Instagram</a></li>
    <li><a target="_blank"></a></li>
    <li><a href="http://www.oshare.com.tw" target="_blank">O SHa'Re Taiwan</a></li>
    <li><a href="http://www.glamasia.com/" target="_blank">Glam Asia</a></li>
    <li><a href="/info/privacy">Privacy Policy</a></li>
    <li><a href="/info/help">Key Sections</a></li>
    <li><a href="https://www.youtube.com/user/clozetteid" target="_blank">YouTube</a></li>
    <li><a target="_blank"></a></li>
    <li><a href="http://clozette.glam.jp" target="_blank">Glam Clozette Japan</a></li>
    <li><a target="_BLANK" href="http://www35t.glam.com/jsadclick.act?8^2^a93ea9642e37e88feacbc45148728555^115174139528665382311^1646228586^0^/^888x10^204571623^25299855^-1^-1^-1^204571623^0^0^402865931883653^^^0^^SG^0^0^0^^SINGAPORE^5000^0^None^0^^@http://www.glam.com"><img src="http://indo.zettecdn.com/static/mood-glam.gif" width="110" height="16"></a></li>
    <li><a href="/info/copyright">Copyright</a></li>
     
</ul>
<br>

    <div class="footer-logo">
		<div class="footer-logo-bottom">
		<!-- <div class="footer-logo-bottom-left"> -->
    <i class="fas fa-align-left"></i>
		<a href="/"><img src="//cimg-indo.clozette.co.id/static/clozetteIndo-logo-reverse.png"></a>
		<!-- <div class="footer-logo-bottom-right"> -->
    <!-- </div> -->
    
     
    </div>
		</div> 
    <i class="fas fa-align-right"></i>
          <span><p><a style= "fas fa-align-right"> Palma One Building, 10th Floor, 
          Suite 1004 Jl. HR Rasuna Said Kav. X2 No. 4, Jakarta 12950, Indonesia</a></p></span>
          <a style="fas fa-align-right">Copyright © <!---->2016  Clozette Pte Ltd</a>
  </div>
    </div>
  
</footer>
	</div>


</template>
<script>
  
</script>
<style>
*{margin:0}
  
body {
font-family:arial,segoe ui;   
}
  
.wrap {
            width:1000px;
            margin:0 auto;          
} 
             
.header {
            width:auto;
            background:#fff;
            padding:10px;
            color:#000;
}   

.clear {clear:both}   
.nav {
            width:auto;
            background:#fff;
            padding:5px 20px;
            color:#000;
}    
.main {
            width:100%;
            background:#6F9;
}
.content {
            float:left;
            width:100%;
            background:#FFF;
            padding:2%; 
            min-height:400px;
}
      
.footer{
            grid-area: footer;
            width:auto;
            height:auto;
            padding:5px 10px;
            background:#000;
            color:#fff;
}
ul {
    display:grid;
    list-style-type:none;
    margin:0;padding:0;
    grid-template-columns: repeat(6, auto);
    grid-template-rows: repeat(5, auto);
}
img{ 
    width:150px;
    justify-self:center;
}
.comm-about img {
    border: 0;
}

.img {
    max-width: 1000%;
}
img, a:hover {
    text-decoration: none;
}
    /* Properti lain tidak ditulis agar lebih singkat */
</style>

