
/*=============================================================
    CSS INDEX
	=============================
		I. Corona Virus
		II. Drawing Events
		III. Preloader
    	01. GENERAL STYLE (body, link color, section-title, overlay, section-padding etc)
    	02. HEADER DESIGN
		03. BANNER SECTION
		04. ICON BOX SECTION
		05. COURSE CATEGORIES SECTION
		06. TEAM SECTION
		07. TESTIMONIAL SECTION
		08. BLOG SECTION
		09. SUBSCRIBE FORM
		10. FOOTER
		11. CONTACT
		12. 404 SECTION
		13. GALLERY SECTION
		14. ELEMENT DESIGN
=============================================================*/
/* =================================================== */
/* Corona Virus  */
:root {
	--d: 700ms;
	--e: cubic-bezier(0.19, 1, 0.22, 1);
	--font-sans: 'Rubik', sans-serif;
	--font-serif: 'Cardo', serif;
  }
@media (min-width: 600px) {
	.page-content {
	  grid-template-columns: repeat(2, 1fr);
	}
  }
  @media (min-width: 800px) {
	.page-content {
	  grid-template-columns: repeat(4, 1fr);
	}
  }
  
  .card-donate {
	position: relative;
	display: -webkit-box;
	display: flex;
	-webkit-box-align: end;
			align-items: flex-end;
	overflow: hidden;
	padding: 1rem;
	width: 100%;
	text-align: center;
	color: whitesmoke;
	background-color: whitesmoke;
	box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1), 0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1), 0 16px 16px rgba(0, 0, 0, 0.1);
  }
  @media (min-width: 600px) {
	.card-donate {
		height: 300px;
		width: 300px;
		margin: 0 10px 0 10px;
	}
  }
  .card-donate:before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-size: cover;
	-webkit-transition: -webkit-transform calc(var(--d) * 1.5) var(--e);
	transition: -webkit-transform calc(var(--d) * 1.5) var(--e);
	transition: transform calc(var(--d) * 1.5) var(--e);
	transition: transform calc(var(--d) * 1.5) var(--e), -webkit-transform calc(var(--d) * 1.5) var(--e);
	pointer-events: none;
  }
  .card-donate:after {
	content: '';
	/* display: block; */
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 200%;
	pointer-events: none;
	background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), color-stop(11.7%, rgba(0, 0, 0, 0.009)), color-stop(22.1%, rgba(0, 0, 0, 0.034)), color-stop(31.2%, rgba(0, 0, 0, 0.072)), color-stop(39.4%, rgba(0, 0, 0, 0.123)), color-stop(46.6%, rgba(0, 0, 0, 0.182)), color-stop(53.1%, rgba(0, 0, 0, 0.249)), color-stop(58.9%, rgba(0, 0, 0, 0.32)), color-stop(64.3%, rgba(0, 0, 0, 0.394)), color-stop(69.3%, rgba(0, 0, 0, 0.468)), color-stop(74.1%, rgba(0, 0, 0, 0.54)), color-stop(78.8%, rgba(0, 0, 0, 0.607)), color-stop(83.6%, rgba(0, 0, 0, 0.668)), color-stop(88.7%, rgba(0, 0, 0, 0.721)), color-stop(94.1%, rgba(0, 0, 0, 0.762)), to(rgba(0, 0, 0, 0.79)));
	background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.009) 11.7%, rgba(0, 0, 0, 0.034) 22.1%, rgba(0, 0, 0, 0.072) 31.2%, rgba(0, 0, 0, 0.123) 39.4%, rgba(0, 0, 0, 0.182) 46.6%, rgba(0, 0, 0, 0.249) 53.1%, rgba(0, 0, 0, 0.32) 58.9%, rgba(0, 0, 0, 0.394) 64.3%, rgba(0, 0, 0, 0.468) 69.3%, rgba(0, 0, 0, 0.54) 74.1%, rgba(0, 0, 0, 0.607) 78.8%, rgba(0, 0, 0, 0.668) 83.6%, rgba(0, 0, 0, 0.721) 88.7%, rgba(0, 0, 0, 0.762) 94.1%, rgba(0, 0, 0, 0.79) 100%);
	-webkit-transform: translateY(-50%);
			transform: translateY(-50%);
	-webkit-transition: -webkit-transform calc(var(--d) * 2) var(--e);
	transition: -webkit-transform calc(var(--d) * 2) var(--e);
	transition: transform calc(var(--d) * 2) var(--e);
	transition: transform calc(var(--d) * 2) var(--e), -webkit-transform calc(var(--d) * 2) var(--e);
  }
  .card-donate:nth-child(1):before {
	background-image: url('../admin/upload/Gpay.png');
  }
  .card-donate:nth-child(2):before {
	background-image: url('../admin/upload/phonepay.jpg');
  }
  .card-donate:nth-child(3):before {
	background-image: url('../admin/upload/paytm.jpg');
  }

  
  .donate-content {
	position: relative;
	display: -webkit-box;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
			flex-direction: column;
	-webkit-box-align: center;
			align-items: center;
	width: 100%;
	padding: 1rem;
	-webkit-transition: -webkit-transform var(--d) var(--e);
	transition: -webkit-transform var(--d) var(--e);
	transition: transform var(--d) var(--e);
	transition: transform var(--d) var(--e), -webkit-transform var(--d) var(--e);
	z-index: 1;
  }
  .donate-content > * + * {
	margin-top: 1rem;
  }
  
  .title {
    font-size: 22.3px;
    line-height: 0;
    color: #0b0c01;
}
  
  .copy {
	font-family: var(--font-serif);
	font-size: 1.125rem;
	font-style: italic;
	line-height: 1.35;
	color: #ffffff;
  }
  
  .heading-donate {
    text-align: center;
    margin: 10px 0 40px 0;
}

.heading-donate h1 {
    color: #5c3f9a;
}
  .btn {
	cursor: pointer;
	margin-top: 1.5rem;
	padding: 0.75rem 1.5rem;
	font-size: 0.65rem;
	font-weight: bold;
	letter-spacing: 0.025rem;
	text-transform: uppercase;
	color: white;
	background-color: black;
	border: none;
  }
  .btn:hover {
	background-color: #0d0d0d;
  }
  .btn:focus {
	outline: 1px dashed yellow;
	outline-offset: 3px;
  }
  
  @media (hover: hover) and (min-width: 600px) {
	.card:after {
	  -webkit-transform: translateY(0);
			  transform: translateY(0);
	}
  
	.donate-content {
	  -webkit-transform: translateY(calc(100% - 4.5rem));
			  transform: translateY(calc(100% - 4.5rem));
	}
	.donate-content > *:not(.title) {
	  opacity: 0;
	  -webkit-transform: translateY(1rem);
			  transform: translateY(1rem);
	  -webkit-transition: opacity var(--d) var(--e), -webkit-transform var(--d) var(--e);
	  transition: opacity var(--d) var(--e), -webkit-transform var(--d) var(--e);
	  transition: transform var(--d) var(--e), opacity var(--d) var(--e);
	  transition: transform var(--d) var(--e), opacity var(--d) var(--e), -webkit-transform var(--d) var(--e);
	}
  
	.card-donate:hover,
	.card-donate:focus-within {
	  -webkit-box-align: center;
			  align-items: center;
	}
	.card-donate:hover:before,
	.card-donate:focus-within:before {
	  -webkit-transform: translateY(-4%);
			  transform: translateY(-4%);
	}
	.card-donate:hover:after,
	.card-donate:focus-within:after {
	  -webkit-transform: translateY(-50%);
			  transform: translateY(-50%);
	}
	.card-donate:hover .donate-content,
	.card-donate:focus-within .donate-content {
	  -webkit-transform: translateY(0);
			  transform: translateY(0);
	}
	.card-donate:hover .donate-content > *:not(.title),
	.card-donate:focus-within .donate-content > *:not(.title) {
	  opacity: 1;
	  -webkit-transform: translateY(0);
			  transform: translateY(0);
	  -webkit-transition-delay: calc(var(--d) / 8);
			  transition-delay: calc(var(--d) / 8);
	}
  
	.card-donate:focus-within:before, .card-donate:focus-within:after,
	.card-donate:focus-within .donate-content,
	.card-donate:focus-within .donate-content > *:not(.title) {
	  -webkit-transition-duration: 0s;
			  transition-duration: 0s;
	}
  }
  a.nav-link.drop-donate {
    background-color: #fd4c06;
    border: solid;
	border-radius: 50px;
	transition: 2s box-shadow;
}

/* ======================================== */
/* Corona Virus Ends  */
/* ======================================== */

  /* ======================================== */
/* Drawing Event Starts */
/* ======================================== */

.center-outer {
    display: table;
    width: 100%;
    height: 70%;
}

section.landing_section {
    height: 100vh;
}
	
.center-inner {
	display: table-cell;
	vertical-align: middle;
	text-align: center;
}

.bubbles {
	display: inline-block;
	font-family: arial;
	position: relative;
	width: fit-content;
}
		
.bubbles h1 {
	position: relative;
	margin: 1em 0 0;
	font-family: 'Luckiest Guy', cursive;
	background: -webkit-linear-gradient(#3a392f, #ee0d0d);
  	-webkit-background-clip: text;
  	-webkit-text-fill-color: transparent;
	z-index: 2;
	font-size: xxx-large;
}
.bubbles h2{
	font-family: 'Luckiest Guy', cursive;
}
.bubbles h4 {
	position: relative;
	margin: 1em 0 0;
	font-family: 'Luckiest Guy', cursive;
}

@media screen and (min-width: 992px) {
	.bubbles h1 {
		font-size: 5pc;
	}
	
}

@media screen and (max-width: 480px) {
	.niti-img img {
		float: right;
		position: relative;
		padding: 20px 0 40px;
	}
	
}
		
.individual-bubble {
	position: absolute;
	border-radius: 100%;
	bottom: 10px;
	/* background-color: rgb(47, 149, 218); */
	z-index: 1;
}		

.drawing_button{
	text-align: center;
	margin-top: 50px;
}


.drawing_button a {
    background-color: #D1C4E9;
    padding: 10px 100px;
    border-radius: 50px;
    position: relative;
    color: #283593;
    border: solid;
    font-weight: bold;
    font-family: cursive;	
}

.drawing_button a:hover{
	color: #2E7D32;
	background-color: #A5D6A7;
	border-radius: 50px;
	box-shadow: 0px 1px 13px 3px #0a7f0a;
}

.draw_button{
	text-align: center;
	width: 100%;
}

.draw_button a {
	background-color: #D1C4E9;
	color: #283593;
    padding: 10px 100px;
    border-radius: 50px;
    position: relative;
    border: solid;
    font-weight: bold;
    font-family: cursive;	
}

.draw_button a:hover{
	background-color: #A5D6A7;
	color: #2E7D32;
}
.wnr-img img {
    border-radius: 50%;
    border: solid;
    border-color: #000000;
	border-width: thick;
	position: relative;
}
.certify{
	text-align: center;
}
.hedd h1{
	font-family: 'Luckiest Guy', cursive;
}
.ctnt h4{
	text-align: center;
}
.d_header {
	padding: 40px;
    border: solid;
    border-radius: 50px;
	border-color: #efefef;
	transition: background-color 1s, box-shadow 1s;
}
.d_header:hover {
    padding: 40px;
    border: solid;
    border-radius: 50px;
    border-color: #efefef;
    background-color: #ffffff87;
    box-shadow: 0px 0 15px 5px;
}
.d_header h1{
	font-family: 'Luckiest Guy', cursive;
	font-size: xxx-large;
	text-align: center;
	border-bottom: solid;
	border-color: #efefef;
	border-width: thick;
}
.d_header h2{
	font-family: 'Luckiest Guy', cursive;
	font-size: xxx-large;
	text-align: center;
	background: -webkit-linear-gradient(#3a392f, rgb(252, 19, 19));
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}
.d_header h4{
	font-family: 'Luckiest Guy', cursive;
	text-align: center;
	background: -webkit-linear-gradient(#3a392f, #0c64e7);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font-size: xx-large;
}

h3#name {
    font-family: unset;
    font-size: larger;
	background-color: antiquewhite;
	color: brown;
}
span#artist {
    color: black;
}
.d_card {
    border-radius: 10px;
	background-color: rgb(4, 160, 4);
    box-shadow: 0 0 10px 3px #bbb6b6;
    border: solid;
    border-color: darkgreen;
	border-width: thick;
	margin: 10px 0 10px 0;
}
.d_row {
    margin: 30px 0 30px 0;
}
.artwork img {
    border-radius: 10px 10px 0 0;
}

.d_details {
    text-align: center;
}

img#b1 {
    position: absolute;
    top: 24vh;
    left: 0px;
}

img#bb {
    position: absolute;
    left: 0px;
    transform: rotate(180deg);
    bottom: 0%;
    z-index: -1;
}
img#bc {
    position: absolute;
    right: -11%;
    transform: rotate(90deg);
    z-index: -1;
}
img#bc1 {
    position: absolute;
    left: -11%;
    transform: rotate(-90deg);
    z-index: -1;
}
img#b3 {
    position: absolute;
    top: 30vh;
	transform: rotate(-45deg);
	right: 10%;
}

/* ======================================== */
/* Drawing Event Ends */
/* ======================================== */

/* Preloader  */
.loader {
	background: none repeat scroll 0 0 #ffffff;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 9999; 
}

.loader .loader_inner {
	background-image: url("../images/preloader.gif");
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	background-color: #fff;
	height: 60px;
	width: 60px;
	margin-top: -30px;
	margin-left: -30px;
	left: 50%;
	top: 50%;
	position: absolute; 
}
/* Preloader Ends */


/*===================================*
  01. GENERAL STYLE
*===================================*/

section.bg-random {
    background-color: antiquewhite;
}
.company-img{
	float: left;
	margin: 20px 0 20px 0;
}
.heading h2 {
    text-align: center;
	margin: 30px 0 30px 0;
	color: #003153;
}
.p-brands {
    box-shadow: 2px 2px 20px 2px #a9a9a9;
}

@import url('https://fonts.googleapis.com/css2?family=Mukta&family=Poppins:wght@200&display=swap');
body {
	background: #ffffff none repeat scroll 0 0;
    color: #888888;
    font-family: 'Mukta', sans-serif;
    font-size: 16px;
	-webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing:grayscale;
}
h1,h2,h3,h4,h5,h6 {
	color: #292b2c;
	font-family: 'Rubik', sans-serif;
}
p {
	color:#888888;
}
a {
	color: #292b2c;
	text-decoration: none;
	-webkit-transition: all 0.5s ease;
	transition: all 0.5s ease;
}
a:hover {
	color: #FFBC09;
	text-decoration: none;
}
a:focus {
	outline: none;
	text-decoration: none;
}
button {
	-webkit-transition: all 0.5s ease;
	transition: all 0.5s ease;
}
img {
	max-width: 100%;
}
ul,li,ol {
	margin: 0;
	padding: 0;
}
fieldset {
	border: 0 none;
	margin: 0 auto;
	padding: 0;
}
input:focus,
textarea:focus {
	outline: none;
	box-shadow:  none !important;
}
section {
	padding: 100px 0;
	position:relative;
	width: 100%;
}
section.small_pt,
.top_footer.small_pt {
	padding-top: 50px;
}
section.small_pb,
.top_footer.small_pb {
	padding-bottom: 50px;
}
.small_padding {
    padding: 30px;
}
.medium_padding {
    padding: 50px;
}
.large_padding {
    padding: 100px;
}
.small_divider {
	height: 30px;
}
.medium_divider {
	height: 50px;
}
.large_divider {
	height: 100px;
}
.padding_eight_all {
	padding: 8%;
}
.padding_eight_lr {
	padding: 0 8%;
}
.list_none li {
	list-style:none;
}
.order_list,
.disc_list {
	padding-left: 15px;
}
.btn:focus,.btn:hover,.btn.active {
	box-shadow: none;
	outline: medium none;
}
button:focus {
	outline:none;
}
.btn {
	border-width: 2px;
	cursor: pointer;
	line-height: normal;
	padding: 12px 30px;
	text-transform: capitalize;
	transition: all 0.5s ease-in-out;
	position: relative;
	overflow: hidden;
	z-index: 1;
}
.btn.active:focus, .btn:active:focus {
	box-shadow: none !important;
}
.btn-default {
	background-color: #FFBC09;
	border: 2px solid #FFBC09;
	color: #ffffff !important;
	padding: 12px 30px;
}
.btn-default:hover {
	background-color: #DF9C00;
	border-color: #DF9C00;
	color: #fff;
}
.btn-default::before {
	content: "";
	background-color: rgba(255, 255, 255, 0.5);
	height: 100%;
	width: 2em;
	display: block;
	position: absolute;
	top: 0;
	left: -4.5em;
	-webkit-transform: skewX(-45deg) translateX(0);
	transform: skewX(-45deg) translateX(0);
	transition: all 0.8s ease-in-out;
}
.btn-default:hover::before {
	-webkit-transform: skewX(-45deg) translateX(30em);
	transform: skewX(-45deg) translateX(30em);
}
.btn-black {
	border: 2px solid #333;
	background-color: #333;
	color: #ffffff;
	padding: 12px 30px;
}
.btn-black:hover {
	background-color: #ffffff;
	color: #333;
}
.btn-outline-white {
	background-color: transparent;
	border: 2px solid #ffffff;
	color: #ffffff;
	padding: 12px 30px;
}
.btn-outline-white:hover {
	color: #FFBC09;
}
.btn-outline-white::before {
	display: block;
	position: absolute;
	top: 0px;
	right: 0px;
	height: 100%;
	width: 0px;
	z-index: -1;
	content: '';
	background-color: #fff;
	transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
}
.btn-outline-white::after {
	content: "";
	position: absolute;
	height: 0%;
	left: 50%;
	top: 50%;
	width: 150%;
	z-index: -1;
	-webkit-transition: all 0.75s ease 0s;
	-moz-transition: all 0.75s ease 0s;
	-o-transition: all 0.75s ease 0s;
	transition: all 0.75s ease 0s;
}
.btn-outline-white:hover::before {
	left: 0%;
	right: auto;
	width: 100%;
}
.btn-outline-black {
	background-color: transparent;
	border: 2px solid #333;
	color: #333;
	padding: 12px 30px;
}
.btn-outline-black:hover {
	color: #fff;
}
.btn-outline-black::before {
	display: block;
	position: absolute;
	top: 0px;
	right: 0px;
	height: 100%;
	width: 0px;
	z-index: -1;
	content: '';
	background-color: #333;
	transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
}
.btn-outline-black::after {
	content: "";
	position: absolute;
	height: 0%;
	left: 50%;
	top: 50%;
	width: 150%;
	z-index: -1;
	-webkit-transition: all 0.75s ease 0s;
	-moz-transition: all 0.75s ease 0s;
	-o-transition: all 0.75s ease 0s;
	transition: all 0.75s ease 0s;
}
.btn-outline-black:hover::before {
	left: 0%;
	right: auto;
	width: 100%;
}
.btn-outline-default {
	background-color: transparent;
	border: 2px solid #FFBC09;
	color: #FFBC09 !important;
	padding: 12px 30px;
}
.btn-outline-default:hover {
	color: #fff !important;
}
.btn-outline-default::before {
	display: block;
	position: absolute;
	top: 0px;
	right: 0px;
	height: 100%;
	width: 0px;
	z-index: -1;
	content: '';
	background-color: #FFBC09;
	transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
}
.btn-outline-default::after {
	content: "";
	position: absolute;
	height: 0%;
	left: 50%;
	top: 50%;
	width: 150%;
	z-index: -1;
	-webkit-transition: all 0.75s ease 0s;
	-moz-transition: all 0.75s ease 0s;
	-o-transition: all 0.75s ease 0s;
	transition: all 0.75s ease 0s;
}
.btn-outline-default:hover::before {
	left: 0%;
	right: auto;
	width: 100%;
}
.btn-radius,
.pr-radius {
	border-radius: 40px !important;
}
.btn + .btn {
	margin-left: 10px;
}
.btn i {
	font-size: 22px;
	vertical-align: middle;
	line-height: 1;
}
.btn span {
    font-size: 14px;
}
.btn-group-sm > .btn, .btn-sm {
    padding: 7px 15px;
}
.btn-group-lg > .btn, .btn-lg {
    padding: 14px 35px;
}
.btn-xs {
    padding: 4px 15px;
    font-size: 12px;
}
.btn-md {
    padding: 12px 30px;
    font-size: 16px;
}
.btn.btn-xs i {
    font-size: 12px;
}
.btn.btn-sm i {
    font-size: 16px;
}
.btn.btn-lg i {
    font-size: 28px;
}
.radius_all_5 {
	border-radius: 5px;
}
.radius_all_10 {
	border-radius: 10px;
}
.radius_ltrt_5 {
	border-radius: 5px 5px 0 0;
}
.radius_ltrt_10 {
	border-radius: 10px 10px 0 0;
}
.radius_lbrb_5 {
	border-radius: 0 0 5px 5px;
}
.radius_lbrb_10 {
	border-radius: 0 0 10px 10px;
}
.radius_ltlb_5 {
	border-radius: 5px 0 0 5px;
}
.radius_ltlb_10 {
	border-radius: 10px 0 0 10px;
}
.radius_rtrb_10 {
	border-radius: 0 10px 10px 0;
}
.box_shadow1 {
	box-shadow: 0 0 10px rgba(0,0,0,0.2)
}
.box_shadow2 {
	box-shadow: 0px 4px 20px rgba(101, 101, 101, 0.1);
}
.heading_s1 h1 {
	font-weight: 700;
	margin: 0;
	text-transform: capitalize;
}
.heading_s1 h1,.heading_s1 h2, .heading_s1 h3, .heading_s1 h4, .heading_s1 h5, .heading_s1 h6 {
	margin-bottom: 1rem;
	text-transform: capitalize;
}
.heading_s1 p {
	margin-bottom: 0;
}
.heading_light > * {
	color: #fff;
}
.heading_s1.heading_light::before {
	background-color: #ffffff;
}
.text_uppercase * {
	text-transform: uppercase;
}
.form-control,
.form-control:focus,
.custom-file-input:focus ~ .custom-file-label {
	color: #666666;
	box-shadow: none;
}
.form-control {
	height: 45px;
	padding: 10px 20px;
}
.field_form .form-group:last-child {
	margin: 0;
}
.form-control::-webkit-input-placeholder {
	color:#666666;
	opacity:1
}
.form-control::-moz-placeholder {
	color:#666666;
	opacity:1
}
.form-control:-ms-input-placeholder {
	color:#666666;
	opacity:1
}
.form-control::-ms-input-placeholder {
	color:#666666;
	opacity:1
}
.form-control::placeholder {
	color:#666666;
	opacity:1
}
.form_style1 .form-control,.form_style1 .form-control:focus {
	border-radius: 40px;
}
.form_style2 .form-control,.form_style2 .form-control:focus {
	border-radius: 0px;
}
.form_transparent .form-control,.form_transparent .form-control:focus, .form_transparent .custom-file-input:focus ~ .custom-file-label {
	background-color: transparent;
	color: #fff;
}
.form_transparent .form-control::placeholder {
    color: #fff;
}
.form_transparent .form-control::placeholder {
    color: #fff;
}
.form_transparent .form-control::placeholder {
    color: #fff;
}
.form_transparent .form-control::placeholder {
    color: #fff;
}
.text_white * {
	color: #fff;
}
.text_dark * {
	color: #333 !important;
}
.text_default {
	color: #FFBC09 !important;
}
.text_light_green {
	color: #B3D369 !important;
}
.text_danger {
	color: #F5576C !important;
}
.text_warning {
	color: #f5bf2f !important;
}
.overflow_hide {
	overflow: hidden;
}
.scrollup {
	background-color: #2f2f2f;
	border-radius: 100%;
	bottom: 20px;
	color: #ffffff;
	font-size: 24px;
	height: 40px;
	line-height: 40px;
	position: fixed;
	right: 20px;
	text-align: center;
	width: 40px;
	z-index: 99;
}
.scrollup:hover {
	background-color: #FFBC09;
	color: #fff;
}
.scrollup:focus {
	color:#fff;
}
.bg_size_auto {
    background-size: auto !important;
}
.bg_size_contain {
	background-size: contain !important;
}
.bg_repeat {
    background-repeat: repeat !important;
}
.position_top_center {
    background-position: top center !important;
}
.position_center_bottom {
    background-position: center bottom !important;
}
.position_right_center {
    background-position: right center !important;
}
.position_right_bottom {
    background-position: right bottom !important;
}
.bg_fixed {
    background-attachment: fixed !important;
}
.z_index_minus1 * {
	z-index: -1;
	position: relative;
}
.overlay_bg_90,
.overlay_bg_80,
.overlay_bg_70,
.overlay_bg_60,
.overlay_bg_50,
.overlay_bg_40,
.overlay_bg_30,
.overlay_bg_30,
.overlay_bg_20,
.overlay_bg_10,
.overlay_bg_danger_90,
.overlay_bg_light_green_90,
.overlay_bg_default_90,
.overlay_bg_default_80,
.overlay_bg_default_70,
.overlay_bg_default_60,
.overlay_bg_default_50,
.overlay_bg_default_40,
.overlay_bg_default_30,
.overlay_bg_default_20,
.overlay_bg_default_10,
.overlay_bg_danger_90,
.overlay_bg_danger_80,
.overlay_bg_danger_70,
.overlay_bg_danger_60,
.overlay_bg_danger_50,
.overlay_bg_danger_40,
.overlay_bg_danger_30,
.overlay_bg_danger_20,
.overlay_bg_danger_10,
.overlay_bg_light_green_90,
.overlay_bg_light_green_80,
.overlay_bg_light_green_70,
.overlay_bg_light_green_60,
.overlay_bg_light_green_50,
.overlay_bg_light_green_40,
.overlay_bg_light_green_30,
.overlay_bg_light_green_20
.overlay_bg_light_green_10,
.overlay_bg_blue_90,
.overlay_bg_blue_80,
.overlay_bg_blue_70,
.overlay_bg_blue_60,
.overlay_bg_blue_50,
.overlay_bg_blue_40,
.overlay_bg_blue_30,
.overlay_bg_blue_20,
.overlay_bg_blue_10 {
	position: relative;
}
.overlay_bg_90::before,
.overlay_bg_80::before,
.overlay_bg_70::before,
.overlay_bg_60::before,
.overlay_bg_50::before,
.overlay_bg_40::before,
.overlay_bg_30::before,
.overlay_bg_30::before,
.overlay_bg_20::before,
.overlay_bg_10::before,
.overlay_bg_danger_90:before,
.overlay_bg_light_green_90:before,
.overlay_bg_default_90:before,
.overlay_bg_default_80:before,
.overlay_bg_default_70:before,
.overlay_bg_default_60:before,
.overlay_bg_default_50:before,
.overlay_bg_default_40:before,
.overlay_bg_default_30:before,
.overlay_bg_default_20:before,
.overlay_bg_default_10:before,
.overlay_bg_danger_90:before,
.overlay_bg_danger_80:before,
.overlay_bg_danger_70:before,
.overlay_bg_danger_60:before,
.overlay_bg_danger_50:before,
.overlay_bg_danger_40:before,
.overlay_bg_danger_30:before,
.overlay_bg_danger_20:before,
.overlay_bg_danger_10:before,
.overlay_bg_light_green_90:before,
.overlay_bg_light_green_80:before,
.overlay_bg_light_green_70:before,
.overlay_bg_light_green_60:before,
.overlay_bg_light_green_50:before,
.overlay_bg_light_green_40:before,
.overlay_bg_light_green_30:before,
.overlay_bg_light_green_20:before,
.overlay_bg_light_green_10:before,
.overlay_bg_blue_90:before,
.overlay_bg_blue_80:before,
.overlay_bg_blue_70:before,
.overlay_bg_blue_60:before,
.overlay_bg_blue_50:before,
.overlay_bg_blue_40:before,
.overlay_bg_blue_30:before,
.overlay_bg_blue_20:before,
.overlay_bg_blue_10:before {
	bottom: 0;
	content: "";
	left: 0;
	position: absolute;
	right: 0;
	top: 0;
}
.overlay_bg_90::before {
	background-color: rgba(0, 0, 0, 0.90);
}
.overlay_bg_80::before {
	background-color: rgba(0, 0, 0, 0.80);
}
.overlay_bg_70::before {
	background-color: rgba(0, 0, 0, 0.70);
}
.overlay_bg_60::before {
	background-color: rgba(0, 0, 0, 0.60);
}
.overlay_bg_50::before {
	background-color: rgba(0, 0, 0, 0.50);
}
.overlay_bg_40::before {
	background-color: rgba(0, 0, 0, 0.40);
}
.overlay_bg_30::before {
	background-color: rgba(0, 0, 0, 0.30);
}
.overlay_bg_20::before {
	background-color: rgba(0, 0, 0, 0.20);
}
.overlay_bg_10::before {
	background-color: rgba(0, 0, 0, 0.10);
}
.overlay_bg_danger_90:before {
	background-color: rgba(245, 87, 108, 0.90);
}
.overlay_bg_danger_80:before {
	background-color: rgba(245, 87, 108, 0.80);
}
.overlay_bg_danger_70:before {
	background-color: rgba(245, 87, 108, 0.70);
}
.overlay_bg_danger_60:before {
	background-color: rgba(245, 87, 108, 0.60);
}
.overlay_bg_danger_50:before {
	background-color: rgba(245, 87, 108, 0.50);
}
.overlay_bg_danger_40:before {
	background-color: rgba(245, 87, 108, 0.40);
}
.overlay_bg_danger_30:before {
	background-color: rgba(245, 87, 108, 0.30);
}
.overlay_bg_danger_20:before {
	background-color: rgba(245, 87, 108, 0.20);
}
.overlay_bg_danger_10:before {
	background-color: rgba(245, 87, 108, 0.10);
}
.overlay_bg_light_green_90:before {
	background-color: rgba(179, 211, 105, 0.90);
}
.overlay_bg_light_green_80:before {
	background-color: rgba(179, 211, 105, 0.80);
}
.overlay_bg_light_green_70:before {
	background-color: rgba(179, 211, 105, 0.70);
}
.overlay_bg_light_green_60:before {
	background-color: rgba(179, 211, 105, 0.60);
}
.overlay_bg_light_green_50:before {
	background-color: rgba(179, 211, 105, 0.50);
}
.overlay_bg_light_green_40:before {
	background-color: rgba(179, 211, 105, 0.40);
}
.overlay_bg_light_green_30:before {
	background-color: rgba(179, 211, 105, 0.30);
}
.overlay_bg_light_green_20:before {
	background-color: rgba(179, 211, 105, 0.20);
}
.overlay_bg_light_green_10:before {
	background-color: rgba(179, 211, 105, 0.10);
}
.overlay_bg_default_90:before {
	background-color: rgba(255, 188, 9, 0.90);
}
.overlay_bg_default_80:before {
	background-color: rgba(255, 188, 9, 0.80);
}
.overlay_bg_default_70:before {
	background-color: rgba(255, 188, 9, 0.70);
}
.overlay_bg_default_60:before {
	background-color: rgba(255, 188, 9, 0.60);
}
.overlay_bg_default_50:before {
	background-color: rgba(255, 188, 9, 0.50);
}
.overlay_bg_default_40:before {
	background-color: rgba(255, 188, 9, 0.40);
}
.overlay_bg_default_30:before {
	background-color: rgba(255, 188, 9, 0.30);
}
.overlay_bg_default_20:before {
	background-color: rgba(255, 188, 9, 0.20);
}
.overlay_bg_default_10:before {
	background-color: rgba(255, 188, 9, 0.10);
}
.overlay_bg_blue_90:before {
	background-color: rgba(7, 41, 77, 0.90);
}
.overlay_bg_blue_80:before {
	background-color: rgba(7, 41, 77, 0.80);
}
.overlay_bg_blue_70:before {
	background-color: rgba(7, 41, 77, 0.70);
}
.overlay_bg_blue_60:before {
	background-color: rgba(7, 41, 77, 0.60);
}
.overlay_bg_blue_50:before {
	background-color: rgba(7, 41, 77, 0.50);
}
.overlay_bg_blue_40:before {
	background-color: rgba(7, 41, 77, 0.40);
}
.overlay_bg_blue_30:before {
	background-color: rgba(7, 41, 77, 0.30);
}
.overlay_bg_blue_20:before {
	background-color: rgba(7, 41, 77, 0.20);
}
.overlay_bg_blue_10:before {
	background-color: rgba(7, 41, 77, 0.10);
}
.bg_black {
	background-color: #202325;
}
.bg_gray {
	background-color: #F7F7F7;
}
.bg-yellow{
	background-color: #E2CF7A;
}
.bg-bluvoilet{
	background-color: #003153;
}
.bg_default {
	background-color: #FFBC09;
}
.bg_light_green {
	background-color: #B3D369;
}
.bg_danger {
	background-color: #f5576c;
}
.bg_danger {
	background-color: #f5576c;
}
.bg_blue {
	background-color: #36D4ED;
}
.bg_blue_dark {
	background-color: #07294D;
}
.bg_blue_dark2 {
	background-color: #072044;
}
.bg_orange {
	background-color: #FF9131;
}
.bg_pink {
	background-color: #FF69B4;
}
.radius_all_5[class*="overlay_bg_"]:before{
	border-radius: 5px;
}
.radius_all_10[class*="overlay_bg_"]:before {
	border-radius: 10px;
}
.border_top_tran {
	border-top: 1px solid rgba(255,255,255,0.5);
}
.ripple {
	background-color: #FFFFFF;
	border-radius: 100%;
	color: #FFBC09;
	position: relative;
	display: inline-block;
	margin-right: 25px;
	line-height: 50px;
	font-size: 18px !important;
	vertical-align: middle;
	margin-left: 0;
	height: 50px;
    width: 50px;
	text-align: center;
}
.ripple::before,.ripple::after {
	 -webkit-animation: ripple 1.8s infinite ;
    -moz-animation: ripple 1.8s infinite ;
    -o-animation: ripple 1.8s infinite ;
    transition:ripple 1.8s infinite ;
	animation: ripple 1.8s infinite ;
	background-color: #ffffff;
	border-radius: 100%;
	margin: -20px;
	bottom: 0px;
	content: "";
	display: block;
	left: 0px;
	opacity: 0;
	position: absolute;
	right: 0px;
	top: 0px;
	z-index:-1;
}
.ripple::before {
	animation-delay: 0.4s;
	-webkit-animation-delay: 0.4s;
}
.ripple::after {
	animation-delay: 1s;
	-webkit-animation-delay: 1s;
}
@-webkit-keyframes ripple{
    0%{
        opacity:0;
        -webkit-transform:scale(0);
        transform:scale(0)
    }
    50%{
        opacity:0.5;
    }
	100%{
        opacity:0;
        -webkit-transform:scale(1);
        transform:scale(1)
    }
}
@keyframes ripple{
    0%{
        opacity:0;
        -webkit-transform:scale(0);
        transform:scale(0)
    }
    50%{
        opacity:0.5;
    }
	100%{
        opacity:0;
        -webkit-transform:scale(1);
        transform:scale(1)
    }
}

/*Loader Css*/
#preloader {
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background-color: #fff;
	z-index: 999999;
}
.spinner, .spinner-small {
	height: 45px;
	width: 45px;
	position: absolute;
	top: 50%;
	left: 50%;
	margin: -20px 0 0 -20px;
	border: 2px solid #000000;
	border-top: 2px solid #FFBC09;
	border-radius: 100%;
	-webkit-animation: rotation .6s infinite linear;
	-moz-animation: rotation .6s infinite linear;
	-o-animation: rotation .6s infinite linear;
	animation: rotation .6s infinite linear;
	z-index: 9999;
}
@-webkit-keyframes rotation {
	from {
		-webkit-transform:rotate(0)
	}
	to {
		-webkit-transform:rotate(359deg)
	}
}
@-moz-keyframes rotation {
	from {
		-moz-transform:rotate(0)
	}
	to {
		-moz-transform:rotate(359deg)
	}
}
@-o-keyframes rotation {
	from {
		-o-transform:rotate(0)
	}
	to {
		-o-transform:rotate(359deg)
	}
}
@keyframes rotation {
	from {
		transform:rotate(0)
	}
	to {
		transform:rotate(359deg)
	}
}
.loader-section {
	position: fixed;
	top: 0;
	width: 51%;
	height: 100%;
	background-color: #E7EDF3;
	z-index: 999;
	-webkit-transform: translateX(0);  /* Chrome, Opera 15+, Safari 3.1+ */
	-moz-transform: translateX(0);
	-ms-transform: translateX(0);  /* IE 9 */
	transform: translateX(0);  /* Firefox 16+, IE 10+, Opera */
}
.loader-section.section-left {
	left: 0;
}
.loader-section.section-right {
	right: 0;
}

/* Loaded */
.loaded .loader-section.section-left {
	-webkit-transform: translateX(-100%);  /* Chrome, Opera 15+, Safari 3.1+ */
	-moz-transform: translateX(-100%);
	-ms-transform: translateX(-100%);  /* IE 9 */
	transform: translateX(-100%);  /* Firefox 16+, IE 10+, Opera */
	-webkit-transition: all 0.8s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);
	transition: all 0.8s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);
}
.loaded .loader-section.section-right {
	-webkit-transform: translateX(100%);  /* Chrome, Opera 15+, Safari 3.1+ */
	-ms-transform: translateX(100%);  /* IE 9 */
	-moz-transform: translateX(100%);
	transform: translateX(100%);  /* Firefox 16+, IE 10+, Opera */
	-webkit-transition: all 0.8s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);
	transition: all 0.8s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);
}
/*===================================*
  01.END GENERAL STYLE
*===================================*/
.icon_box.text-center.bg-white.icon_box_style2.box_shadow2.radius_all_10.animation.animated.fadeInUp {
    position: relative;
}
/*===================================*
  02.START HEADER DESIGN
*===================================*/
.dark_skin .logo_light, .dark_skin .logo_default,
.light_skin .logo_default, .light_skin .logo_dark {
	display: none;
}
.dark_skin .logo_dark,
.light_skin .logo_light {
	display: block;
}
.light_skin .navbar-nav a,
.light_skin .navbar-toggler {
	color: #ffffff;
}

a.nav-link {
    color: white;
}
section.banner_section.p-0.full_screen {
    z-index: -1;
}

ul.navbar-nav {
    position: relative;
    float: left;
    left:12%;
}
.navbar {

	    padding: 0;
	    position: relative;
	    float: left;
			z-index: 10;
			width: 100%;
			background: #003153;
	}

.header_wrap {
	transition: all 0.5s ease 0s;
}
.header_wrap:not([class*="bg_"]):not([class*="bg-"]) {
	background-color: #fff;
}
.navbar-expand-lg .navbar-nav li {
	position: relative;
	list-style: none;
}
.navbar-nav .dropdown-menu {
	border: 0 none;
	border-radius: 0;
	margin: 0;
	min-width: 12rem;
	padding: 0;
}
strong.main-header {
    font-size: 20px;
}
p.sub-header {
    font-size: 15px;
}
.navbar-nav .dropdown-menu:not([class*="bg_"]):not([class*="bg-"]) {
	background-color: #333333;
}
.light_skin .navbar-nav .dropdown-menu .mega-menu .dropdown-menu {
	background-color: #252525;
}
.dark_skin:not([class*="bg_"]):not([class*="bg-"]) .navbar-nav .dropdown-menu {
	background-color: #fff;
	box-shadow: 0 13px 42px 11px rgba(0,0,0,.05);
	border: 1px solid #eee;
	margin-top: -1px;
}
.dark_skin .mega-menu-col,
.dark_skin .cart_list li {
	border-color: #ddd;
}
.dark_skin .navbar-expand-lg .navbar-nav .dropdown-menu li a.active,
.dark_skin .navbar-expand-lg .navbar-nav .dropdown-menu li a:hover,
.dark_skin .navbar-expand-lg .navbar-nav .dropdown-menu > ul > li:hover > a,
.dark_skin .navbar-expand-lg .navbar-nav .dropdown-menu > ul > .mega-menu-col ul > li:hover > a {
	color: #FFBC09;
}
.dark_skin .navbar-expand-lg .navbar-nav .dropdown-item,
.dark_skin .navbar-expand-lg .navbar-nav .dropdown-header,
.dark_skin .cart_quantity,
.dark_skin .cart_total {
	color: #333;
}
.dark_skin .cart_list a {
	color: #333 !important;
}
.dark_skin .cart_list a:hover, .dark_skin .item_remove:hover {
	color: #000 !important;
}

.dropdown-toggle::after, .dropdown-toggler::after {
	border: 0 none;
	content: "\f3d0";
	font-family: ionicons;
	height: auto;
	line-height: normal;
	margin-left: 5px;
	vertical-align: middle;
	width: auto;
	transition: all 0.3s ease-in-out;
}
.dd_main_arrow_none .navbar-expand-lg .navbar-nav > li > .nav-link.dropdown-toggle::after {
	content: normal;
}
.dropdown-toggler::after {
	-moz-transform: rotate(-90deg);
	-webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
}
.dropdown-menu .dropdown-toggler::after {
	position: absolute;
	right: 10px;
	top: 10px;
}
.navbar-expand-lg .navbar-nav > li > .nav-link {
	font-size: 14px;
	font-weight: 600;
	padding: 5px 5px;
	text-transform: uppercase;
}

div#navbarSupportedContent {
	height: 55px;
}
.navbar-expand-lg .navbar-nav > li > a.active,
.navbar-expand-lg .navbar-nav > li:hover > a {
	color: #FFBC09;
}
.main_menu_capitalize .navbar-expand-lg .navbar-nav > li > .nav-link {
	text-transform: capitalize;
}
.main_menu_weight_100 .navbar-expand-lg .navbar-nav > li > .nav-link {
	font-weight: 100;
}
.main_menu_weight_200 .navbar-expand-lg .navbar-nav > li > .nav-link {
	font-weight: 200;
}
.main_menu_weight_300 .navbar-expand-lg .navbar-nav > li > .nav-link {
	font-weight: 300;
}
.main_menu_weight_400 .navbar-expand-lg .navbar-nav > li > .nav-link {
	font-weight: 400;
}
.main_menu_weight_500 .navbar-expand-lg .navbar-nav > li > .nav-link {
	font-weight: 500;
}
.main_menu_weight_600 .navbar-expand-lg .navbar-nav > li > .nav-link {
	font-weight: 600;
}
.main_menu_weight_700 .navbar-expand-lg .navbar-nav > li > .nav-link {
	font-weight: 700;
}
.main_menu_weight_800 .navbar-expand-lg .navbar-nav > li > .nav-link {
	font-weight: 800;
}
.main_menu_weight_900 .navbar-expand-lg .navbar-nav > li > .nav-link {
	font-weight: 900;
}
.main_menu_size_16 .navbar-expand-lg .navbar-nav > li > .nav-link {
	font-size: 16px;
}
.bottom-header .navbar-expand-lg .navbar-nav > li > .nav-link {
	padding: 20px 10px;
}
.navbar-expand-lg .navbar-nav .dropdown-item {
	padding: 8px 25px 8px 10px;
	color: #ffffff;
	font-size: 14px;
	text-transform: capitalize;
}
.navbar-expand-lg .navbar-nav .dropdown-header {
    color: #fff;
    padding: 10px 10px;
    text-transform: uppercase;
    font-weight: bold;
}
.navbar-expand-lg .attr-nav li .nav-link {
	padding: 20px 10px;
	position: relative;
}
.navbar-expand-lg .attr-nav li .nav-link i {
	font-size: 20px;
}
.hover_menu_style2 .navbar-expand-lg .navbar-nav.attr-nav > li > .nav-link {
	margin: 0;
	padding: 20px 10px;
}
.dropdown-item:focus, .dropdown-item:hover,
.dropdown-item.active, .dropdown-item:active {
	background-color: transparent;
}
.navbar-expand-lg .navbar-nav.attr-nav .dropdown-menu li a.active,
.navbar-expand-lg .navbar-nav.attr-nav .dropdown-menu li a:hover,
.navbar-expand-lg .navbar-nav.attr-nav .dropdown-menu > ul > li:hover > a {
	background-color: rgba(0,0,0,0);
}

.navbar-expand-lg .navbar-nav .dropdown-menu li a.active,
.navbar-expand-lg .navbar-nav .dropdown-menu li a:hover,
.navbar-expand-lg .navbar-nav .dropdown-menu > ul > li:hover > a,
.navbar-expand-lg .navbar-nav .dropdown-menu > ul > .mega-menu-col ul > li:hover > a {
	color: #FFBC09;
}
.search-overlay {
	border: 1px solid #ddd;
	right: 0;
	opacity: 0;
	position: absolute;
	min-width: 300px;
	top: 100%;
	transition: all 0.25s ease-in-out 0s;
	visibility: hidden;
	width: 100%;
	z-index: 999;
	background-color: #fff;
	padding: 15px;
	-webkit-transform: scale(0);
    transform: scale(0);
	-webkit-transform-origin: -webkit-calc(100% - 30px) 0;
    transform-origin: calc(100% - 30px) 0;
}
.search-overlay.open {
    visibility: visible;
    opacity: 1;
	-webkit-transform: scale(1);
    transform: scale(1);
}
.search_trigger.open i::before {
	content: "\f129";
}
.search_wrap {
	position: relative;
}
.search_icon {
	font-size: 26px;
	position: absolute;
	right: 15px;
	top: 4px;
	border: 0;
	background-color: transparent;
	cursor: pointer;
	padding: 0;
}
.search_wrap .form-control {
	border-radius: 0;
	padding: 10px;
	height: auto;
}
.nav-fixed .navbar-expand-lg .navbar-nav > li > .nav-link {
	padding: 20px 10px;
}
.nav-fixed .navbar-expand-lg .attr-nav li .nav-link,
.hover_menu_style2.nav-fixed  .navbar-expand-lg .navbar-nav.attr-nav > li > .nav-link {
	padding: 15px 10px;
	margin: 0;
}
.header_wrap.nav-fixed {
	box-shadow: 0 0 10px rgba(0,0,0,0.2);
	position: fixed;
	right: 0;
	left: 0;
	top: 0;
	z-index: 999;
}
.header_wrap.fixed-top.nav-fixed {
	padding-top: 0 !important;
}
.nav-fixed.border_bottom_tran {
	border: 0;
}
.header_wrap.nav-fixed.no-sticky {
	position: relative;
}
.bg-dark.light_skin.nav-fixed .logo_dark {
    display: none;
}
.bg-dark.light_skin.nav-fixed .logo_light {
    display: block;
}
.header_wrap.nav-fixed.bg-dark {
    border-bottom: 0;
}
.bg-dark.light_skin.nav-fixed .navbar-nav > li > a, .bg-dark.light_skin.nav-fixed .navbar-toggler {
    color: #fff;
}
.bg-dark.hover_menu_style2.nav-fixed .navbar-expand-lg .navbar-nav > li > .nav-link::before {
    background-color: #fff;
}
.header_wrap.nav-fixed[class*="overlay_"]:before {
	content: normal;
}
.mega-menu {
	display: table;
	padding: 15px 0;
	width: 100%;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
}
.navbar-expand-lg .navbar-nav li.dropdown-mega-menu {
	position: static;
}
.dropdown-mega-menu .dropdown-menu {
	right: 0;
}
.mega-menu-col {
	border-right: 1px solid #5d5d5d;
}
.mega-menu-col:last-child {
	border-right: 0;
}
.dropdown-menu li a i {
    font-size: 14px;
    width: 20px;
    display: inline-block;
	text-align: center;
}
.cart_list li {
	list-style: outside none none;
}
.cart_count {
	position: absolute;
	top: 13px;
	right: 2px;
	font-size: 10px;
	background-color: #FFBC09;
	border-radius: 40px;
	height: 16px;
	line-height: 16px;
	padding: 0 5px;
	color: #fff;
	font-weight: normal;
}
.nav-fixed .cart_count {
	top: 8px;
}
.cart_box {
	background-color: #333333;
	width: 300px;
	position: absolute !important;
	-webkit-transform: scale(0);
    transform: scale(0);
	-webkit-transform-origin: -webkit-calc(100% - 30px) 0;
    transform-origin: calc(100% - 30px) 0;
	display: block;
	transition: all 0.25s ease-in-out;
}
.navbar-expand-lg .navbar-nav li.show > .dropdown-menu.cart_box {
	-webkit-transform: scale(1);
    transform: scale(1);
}
.cart_list li {
	border-bottom: 1px solid #777777;
	padding: 20px;
}
.item_remove {
	float: right;
}
.cart_list img {
	background-color: #ffffff;
	float: left;
	margin-right: 10px;
	max-width: 60px;
	vertical-align: top;
}
.cart_list a {
	color: #fff !important;
	font-size: 14px;
	vertical-align: top;
	padding: 0 !important;
}
.cart_list a:hover,.item_remove:hover {
	color: #ddd !important;
}
.cart_quantity {
	color: #ffffff;
	display: inline-block;
	font-weight: 500;
}
.cart_list {
    display: table;
}
.cart_total {
	color: #ffffff;
	margin: 0;
	padding: 10px 20px;
	text-align: right;
	font-weight: bold;
}
.cart_total strong {
	float: left;
}
.cart_buttons {
	margin: 0;
	padding: 10px 20px 20px;
	text-align: center;
}
.cart_buttons .view-cart, .cart_buttons .checkout {
	margin: 0 5px !important;
	padding: .375rem .75rem !important;
	float: none !important;
}
.top-header,
.middle-header {
    padding: 10px 0;
}
.light_skin  .top-header,
.light_skin  .middle-header {
	border-bottom: 1px solid rgba(255,255,255,0.2);
}
.dark_skin .top-header,
.dark_skin .middle-header {
	border-bottom: 1px solid rgba(0,0,0,0.2);
}
.social_icons, .contact_detail {
	font-size: 0;
}
.social_icons li,
.contact_detail li {
    display: inline-block;
	padding: 2px 3px;
}
.social_icons li a {
	font-size: 18px;
    height: 35px;
    width: 35px;
	line-height: 36px;
    display: inline-block;
    text-align: center;
	vertical-align: middle;
}
.social_icons.social_small li a {
	height: 25px;
	width: 25px;
	line-height: 26px;
	font-size: 16px;
}
.social_white .social_icons li a, .social_white.social_icons li a {
	color: #fff;
	border-color: #fff;
}
.border_social li a {
	border: 1px solid #292b2c;
}
.radius_social li a {
	border-radius: 5px;
}
.social_style1 li a {
	background-color: rgba(0,0,0,0.1);
}
.social_white.social_style1 li a {
	background-color: rgba(255,255,255,0.1);
}
.contact_detail i {
	margin-right: 8px;
	vertical-align: middle;
	font-size: 18px;
}
.contact_detail li {
	color: #000;
	font-size: 14px;
	margin-left: 5px;
	vertical-align: middle;
}
.contact_detail li:first-child {
	margin-left: 0px;
}
.top-header.light_skin .contact_detail li,
.top-header.light_skin .contact_detail li a {
	color: #fff;
}
.top-header.dark_skin .contact_detail li {
	color: #000;
}
header .social_icons li a {
	font-size: 16px;
	height: 30px;
	width: 30px;
	line-height: 30px;
}
.nav-fixed .top-header,
.nav-fixed .middle-header {
	display: none !important;
}
span.ion-android-menu {
    color: #ffffff;
}
.navbar-toggler {
	float: right;
    margin: 9px 0;
    font-size: 28px;
	transition: all 0.5s ease 0s;
}
.navbar-toggler[aria-expanded="true"] span::before {
    content: "\f129";
    font-size: 20px;
    width: 21px;
    line-height: 28px;
	vertical-align: top;
}
header .attr-nav + .social_icons {
	border-left: 1px solid #333;
	margin-left: 5px;
	padding-left: 5px;
}
header .attr-nav + .social_icons li {
	padding: 0;
}
header.light_skin .attr-nav + .social_icons {
	border-color: #fff;
}
header.light_skin.nav-fixed .attr-nav + .social_icons {
	border-color: #333;
}
header.light_skin.nav-fixed .social_icons li a {
	color: #000;
}
header.light_skin.nav-fixed .social_icons li a:hover {
    color: #0E93D8;
}
.navbar .btn {
	padding: 10px 25px;
}
.header_info {
	display: -ms-flexbox;
	display: flex;
	-ms-flex-align: center;
	align-items: center;
}
.header_info li {
	display: -ms-flexbox;
	display: flex;
	padding-left: 30px;
}
.header_info li:first-child {
	padding-left: 0px;
}
.header_info li i {
    width: 30px;
	font-size: 28px;
	height: 30px;
	color: #0e93d8;
}
.header_info li p{
	margin: 0;
	color: #292b2c;
}
.header_info li .hd_info {
    padding-left: 10px;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.43;
}
.lng_dropdown {
	position: relative;
	display: inline-block
}
.lng_dropdown .ddTitleText img, .lng_dropdown .ddChild li img {
	border-radius: 100%;
	display: inline-block;
	height: 16px;
	width: 16px;
}
.lng_dropdown .ddlabel {
	display: inline-block;
	margin-left: 8px;
	vertical-align: middle;
	text-transform: uppercase;
	font-size: 14px;
}
.lng_dropdown #pr_select_msdd .ddlabel {
	margin-left: 0;
}
.lng_dropdown .dd.ddcommon {
	cursor: pointer;
	padding-right: 10px;
	position: relative;
	width: auto !important;
	outline: none;
}
.lng_dropdown .ddTitleText {
	padding: 5px 10px;
	display: inline-block;
	text-transform: uppercase;
}
.lng_dropdown .ddChild {
	background-color: #fff;
}
.lng_dropdown .ddChild li {
	cursor: pointer;
	line-height: normal;
	list-style: outside none none;
	padding: 3px 10px;
}
.ddArrow::before {
	content: "\f3d0";
	font-family: ionicons;
	position: absolute;
	right: 0;
	top: 6px;
}
.lng_dropdown.lng_dropdown_white .ddTitleText ,
.lng_dropdown_white .ddArrow::before {
	color: #fff;
}
.search_box {
	position: relative;
}
.search_box input {
	padding-right: 30px;
}
.search_box button {
	border: 0;
	padding: 0 10px;
	background-color: transparent;
	font-size: 22px;
	position: absolute;
	right: 0;
	top: 0;
	bottom: 0;
	cursor: pointer;
}
.header_list {
	display: -ms-flexbox;
	display: flex;
	-ms-flex-align: center;
	align-items: center;
}
.header_list > li {
	position: relative;
	padding-left: 7px;
	padding-right:8px;
	border-right:1px solid #fff;
}
.header_list > li a {
	font-size: 14px;
}
.border_list {
	position: relative;
}
.border_list::before {
	content: "";
	position: absolute;
	left: 0;
	height: 25px;
	width: 1px;
	background-color: #eee;
}
.header_wrap.light_skin.nav-fixed .btn-outline-white {
	border: 2px solid #333;
	color: #333;
}
.header_wrap.light_skin.nav-fixed .btn-outline-white:hover {
	background-color: #333;
	border: 2px solid #333;
	color: #fff;
}
.top-header.light_skin .header_list li a,
.top-header.light_skin .header_list li span,
.top-header.light_skin .lng_dropdown .ddlabel,
.top-header.light_skin .ddArrow::before {
	color: #fff;
}
.top-header.light_skin .header_list > li::before {
	background-color: #fff;
}
.top-header.light_skin .lng_dropdown .ddChild {
	background-color: #343a40;
}
.top-header.light_skin .header_list li a:hover,
.top-header.light_skin .contact_detail li a:hover,
.social_white .social_icons li a:hover,
.social_white.social_icons li a:hover {
	color: #FFBC09;
}
.alertbox {
	position: relative;
	z-index: 999;
	transition: all 0.4s ease 0s;
}
.alertbox.alert_fixed {
	position: fixed;
	right: 0;
	left: 0;
	top: 0;
}
.alertbox.alert_fixed.fixed {
	-moz-transform: translateY(-100%);
	-webkit-transform: translateY(-100%);
	transform: translateY(-100%);
}
.alertbox_content {
	display: -ms-flexbox;
	display: flex;
	-ms-flex-align: center;
	align-items: center;
	-ms-flex-pack: center;
	justify-content: center;
}
.alertbox .alert {
	border: 0;
	border-radius: 0;
	margin: 0;
	padding-left: 0;
	padding-right: 0;
}
.alertbox .close {
	float: none;
	vertical-align: middle;
	margin-left: 15px;
	font-size: 31px;
}
.alertbox_content *,
.alertbox_content a {
	color: #fff;
	font-weight: bold;
}
.news_ticker a {
    padding: 0 10px;
}
.news_ticker a:hover {
    color: #fff;
}
/*===================================*
  02.END HEADER DESIGN
*===================================*/

/* ============ */
/* member.html */
/* ============ */

ul.list-group {
    padding: 0;
}

ul.list-group li.list-group-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem 1.3rem;
    margin-bottom: 1rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    list-style: none;
    transition: all 200ms ease-out;
    background: white;
}


ul.list-group li.list-group-item:hover {
    background: whitesmoke;
    transform: scale(1.03);
    transition: all 200ms ease-in;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
}

ul.list-group li.list-group-item div.avatar {
    width: 54px;
    height: 54px;
    border-radius: 50%;
    margin-right: 1rem;
}

ul.list-group li.list-group-item div.avatar img {
        width: 100px;
    height: 100px;
    position: absolute;
    border-radius: 50%;
    margin-left: 20px;
    margin-top: -26px;
}

.main h3 {
    margin-top: 25px;
    font-family: sans-serif;
    color: darkblue;
    font-weight: bolder;
}

.sub h4 {
    font-size: medium;
    position: relative;
    margin-top: -30px;
}

/* ============ */
/* member.html */
/* ============ */

/*===================================*
  03. BANNER SECTION
*===================================*/
.full_screen,.full_screen .carousel-item {
	height: 100vh;
}
.banner_content_wrap .carousel-item {
	padding: 100px 0;
}
.banner_content h2 {
	font-size: 50px;
	margin-bottom: 20px;
	vertical-align: bottom;
}
.banner_content p {
	color: #333;
	font-size: 18px;
	margin-bottom: 35px;
}
.banner_content.text_white p {
	color: #fff;
}
.banner_section .banner_slide_content {
	left: 0;
	position: absolute;
	right: 0;
	top: 50%;
	-moz-transform: translateY(-50%);
	-webkit-transform: translateY(-50%);
	transform: translateY(-50%);
}
.carousel-control-next, .carousel-control-prev {
	background-color: rgba(0,0,0,0.5);
	font-size: 20px;
	height: 50px;
	opacity: 0;
	top: 50%;
	-moz-transform: translateY(-50%);
	-webkit-transform: translateY(-50%);
	transform: translateY(-50%);
	width: 50px;
}
.carousel-control-next:focus, .carousel-control-next:hover, .carousel-control-prev:focus, .carousel-control-prev:hover {
	 opacity: 0;
}
.carousel:hover .carousel-control-next, .carousel:hover .carousel-control-prev {
	opacity: 1;
}
.carousel-control-next {
	right: 20px;
}
.carousel-control-prev {
	left: 20px;
}
.carousel_style1 .carousel-control-next, .carousel_style1 .carousel-control-prev {
	border-radius: 100%;
}
.carousel-indicators {
	bottom: 20px;
}
.carousel-indicators li {
	border-radius: 100%;
	cursor: pointer;
	width: 12px;
	height: 12px;
}
.content_overlay_bg {
	padding: 50px;
	position:relative;
}
.content_overlay_bg::before {
    background-color: rgba(0, 0, 0, 0.5);
    bottom: 0;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
}
.banner_head2 {
	 font-size: 40px;
}
.carousel-fade .carousel-item {
    opacity: 0;
    transition-property: opacity;
}
.carousel-fade .carousel-item-next.carousel-item-left, .carousel-fade .carousel-item-prev.carousel-item-right, .carousel-fade .carousel-item.active {
	opacity: 1;
}
.carousel-fade .active.carousel-item-left, .carousel-fade .active.carousel-item-prev, .carousel-fade .carousel-item-next, .carousel-fade .carousel-item-prev, .carousel-fade .carousel-item.active {
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
}
.carousel-fade .active.carousel-item-left, .carousel-fade .active.carousel-item-prev, .carousel-fade .carousel-item-next, .carousel-fade .carousel-item-prev, .carousel-fade .carousel-item.active {
    -webkit-transform: translateX(0);
    transform: translateX(0);
}
.carousel-indicators.justify-content-end {
	left: auto;
}
.carousel-indicators.justify-content-start {
	right: auto;
}
.carousel-item img {
	position: relative;
	z-index: -1;
}
/*===================================*
  03.END BANNER SECTION
*===================================*/

/*===================================*
  04. START ICON BOX CSS
*===================================*/
section.my-founder {
    text-align: center;
    background-color: #e2cf7a;
}

.our-gallery{
text-align:center;
color: #003153;
margin-bottom: 40px;
}
	.mybtn.btn-default{
		background-color: #043756;
		border-color: #FFEE58;
		opacity: 1;
		border-radius: 25px;
		border: solid;
		box-shadow: 0px 0px 5px 1px grey;
		border-width: medium;
		}
.icon_box {
		padding: 30px;
    z-index: 9;
    margin-top: 30px;
    min-height: 350px;
    background-color: white;
    transition: all 0.5s ease-in-out;
    border-radius: 10px;
    box-shadow: 2px 2px 7px 0px grey;
}
.box_icon,
.intro_desc {
	position: relative;
}
.box_icon i {
	font-size: 40px;
}
.icon_box img {
	max-width: 60px;
}
.icon_box_style1.icon_box {
	padding: 15px;
	border: 2px solid #f6f6f6;
	-moz-transition: transform .25s cubic-bezier(.68,-0.55,.27,1.55);
	-webkit-transition: transform .25s cubic-bezier(.68,-0.55,.27,1.55);
	transition: transform .25s cubic-bezier(.68,-0.55,.27,1.55);
	-moz-transform: translate3d(0, 0, 0);
	-webkit-transform: translate3d(0, 0, 0);
	transform: translate3d(0, 0, 0);
	-webkit-animation-fill-mode: none;
	animation-fill-mode: none;
}
.icon_box_style1 .box_icon {
	float: left;
	margin-right: 20px;
}
.icon_box_style1.icon_box:hover {
	box-shadow: 0 0 14px rgba(0,0,0,0.05);
	-moz-transform: translate3d(0,-10px, 0);
	-webkit-transform: translate3d(0,-10px, 0);
	transform: translate3d(0,-10px, 0);
}
.icon_box_style1.icon_box img {
	max-width: 40px;
}
.icon_box_style1 .intro_desc {
	overflow: hidden;
}
.intro_desc h5 {
	text-transform: capitalize;
}
.intro_desc p:last-child {
	margin: 0;
}
.icon_box_style2 .box_icon {
	border-radius: 100%;
	display: inline-block;
	padding: 20px;
	position: relative;
}
.icon_box_style2 .box_icon::before {
	content: "";
	position: absolute;
	left: 0;
	top: 0;
	bottom: 0;
	right: 0;
	border: 3px solid #fff;
	border-radius: 100%;
	margin: 0px;
	opacity: 0;
	transition: all 0.2s ease-in-out;
}
.icon_box_style2 .box_icon img {
	padding: 5px;
}
.icon_box_style2:hover .box_icon:before {
	margin: 5px;
	opacity: 1;
}
.icon_box_style2:hover {
	margin-top: 20px;
}
/*===================================*
  04. END ICON BOX CSS
*===================================*/

/*===================================*
  05.START COURSE CATEGORIES SECTION
*===================================*/
.overlap_box {
	margin-top: -124px;
	position: relative;
	z-index: 9;
}
.cat_overlap_box {
    top: -50%;
}
.single_categories a  {
	border-radius: 5px;
	display: block;
	text-align: center;
	padding: 30px 20px;
	color: #fff;
}
.single_categories a:hover {
	color: #fff;
}
.single_categories i {
	display: block;
	margin-bottom: 10px;
	font-size: 30px;
}
.cat_style1 a {
	background-color: rgba(255,255,255,0.2);
	border: 2px solid rgba(255,255,255,0.2);
	border-radius: 0px;
	padding: 50px 20px;
}
.cat_style1 a:hover {
	background-color: #FFBC09;
}
.course_categories.owl-theme .owl-nav.disabled + .owl-dots {
	margin-top: 25px;
}
/*===================================*
  05.END COURSE CATEGORIES SECTION
*===================================*/
		.blinking{
		animation: blinkingText 0.50s infinite;
    font-size: 14px;
		}

		a.dropdown-toggle.nav-link {
    margin-left: 5px;
    margin-right: 5px;
	}

		@keyframes blinkingText{
				0%{     color: #ffffff;    }
				49%{    color: #009900; }
				50%{    color: #993300; }
				99%{    color: #00FF00; }
				100%{   color: #000000; }
		}

		.entry_content p{
		line-height:24px;
		margin-bottom:10px;
		}
		.entry_content li{
		line-height:24px;
		padding-bottom:7px;
		padding-top:5px;
		}
		.grid_item img {
		height:220px;
		}
/*===================================*
  06.START TEAM SECTION
*===================================*/
.team_box {
	margin-top: 30px;
}
.team_title {
	background-color: #fff;
	padding: 15px;
	text-transform: capitalize;
}
.team_img {
	position: relative;
	overflow: hidden;
}
.team_style1 .social_icons {
	position: absolute;
	top: 100%;
	text-align: center;
	left: 0;
	right: 0;
	opacity: 0;
	-moz-transform: translateY(-50%);
	-webkit-transform: translateY(-50%);
	transform: translateY(-50%);
	transition: all 0.5s ease-in-out;
}
.team_style1:hover .social_icons {
	top: 50%;
	opacity: 1;
}
.team_img img {
	width: 100%;
	transition: all 0.5s ease-in-out;
}
.team_style1 .team_img::before {
	content: "";
	position: absolute;
	left: 0;
	right: 0;
	background-color: rgba(0,0,0,0.5);
	top: 0;
	bottom: 0;
	opacity: 0;
	transition: all 0.5s ease-in-out;
}
.team_style1.team_box:hover .team_img:before {
	opacity: 1;
}
.team_style1 {
	border-radius: 10px;
}
.team_style1 .team_img,
.team_style1 .team_img img,
.team_style1 .team_img:before {
	border-radius: 10px 10px 0 0;
}
.team_single_info {
	padding: 15px;
	display: inline-block;
	width: 100%;
}
.contact_info span {
	color: #333;
	float: left;
	margin-right: 10px;
	line-height: normal;
	max-width: 70px;
	width: 100%;
}
.team_name {
	margin-bottom: 15px;
	padding-bottom: 15px;
	border-bottom: 1px solid #ddd;
}
.team_style2 .social_icons {
	margin-top: 10px;
}
.team_style2:hover img {
	-moz-transform: scale(1.05);
	-webkit-transform: scale(1.05);
	transform: scale(1.05);
}
/*===================================*
  06.END TEAM SECTION
*===================================*/

/*===================================*
  07.START TESTIMONIAL SECTION
*===================================*/
.testimonial_img img {
	max-width: 100px;
}
.testimonial_img,
.author_img {
	float: left;
	margin-right: 20px;
}
.testi_user span,
.author_intro span {
	font-style: italic;
}
.testi_user,
.author_intro {
	margin-bottom: 6px;
}
.testi_meta,
.author_meta {
	overflow: hidden;
}
.testimonial_style1 .testimonial_box,
.course_author {
	background-color: #fff;
	box-shadow: 0 0px 5px rgba(0, 0, 0, 0.2);
	border-radius: 10px;
	padding: 30px 30px 30px 50px;
	margin: 5px 5px 5px 50px;
	position: relative;
	z-index: 1;
}
.testimonial_style1 .testimonial_box::before {
	content: "\f10e";
	position: absolute;
	right: 40px;
	top: 0;
	font-family: fontawesome;
	font-size: 200px;
	line-height: normal;
	z-index: -1;
	color: rgba(0,0,0,0.02);
}
.testimonial_style1 .testimonial_img,
.author_img {
	margin-left: -100px;
}
.testi_desc p:last-child,
.author_desc p:last-child {
	margin: 0;
}
.testimonial_style2 .testimonial_box {
	text-align: center;
	border: 2px solid #eee;
	padding: 20px;
	margin-top: 60px;
	background-color: #fff;
}
.testimonial_style2 .testimonial_img{
	float: none;
	margin: -80px auto 20px;
	display: table;
	padding: 10px;
	border: 2px solid #eee;
	background-color: #fff;
}
/*===================================*
  07.END TESTIMONIAL SECTION
*===================================*/

/*===================================*
  08.START BLOG SECTION
*===================================*/
.blog_post {
	margin-top: 30px;
}
.blog_title {
	margin-bottom: 10px;
}
.blog_img {
	position: relative;
	overflow: hidden;
}
.blog_img img {
	width: 100%;
}
.blog_img a::before {
	content: "";
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	opacity: 0;
	background-color: rgba(0,0,0,0.5);
	transition: all 0.5s ease-in-out;
}
.blog_post:hover .blog_img a:before {
	opacity: 1;
}
.blog_meta {
	display: table;
	width: 100%;
}
.blog_meta li {
	display: inline-block;
	margin-right: 15px;
}
.blog_meta li:last-child {
	margin-right: 0px;
}
.blog_meta li i {
	margin-right: 8px;
	color: #FFBC09;
	font-size: 16px;
}
.blog_meta li a {
	color: #888;
	font-size: 14px;
	text-transform: capitalize;
}
.blog_meta li a:hover {
	color: #FFBC09;
}
.blog_content,
.blog_footer {
	padding:15px;
}
.blog_content p {
	margin-bottom: 10px;
}
.blog_footer {
	border-top: 1px solid #ddd;
}
.link_blog {
	position: absolute;
	top: 100%;
	left: 0;
	right: 0;
	text-align: center;
	opacity: 0;
	-moz-transform: translateY(-50%);
	-webkit-transform: translateY(-50%);
	transform: translateY(-50%);
	transition: all 0.5s ease-in-out;
}
.blog_post:hover .link_blog {
	top: 50%;
	opacity: 1;
}
/*===================================*
  08.END BLOG SECTION
*===================================*/

/*===================================*
  09.START SUBSCRIBE FORM
*===================================*/
.newsletter_form {
	position: relative;
}
.newsletter_form input {
	padding: 10px 105px 10px 15px;
	width: 100%;
	border: 0;
	color: #777777;
	height: 43px;
}
.newsletter_form button {
	position: absolute;
	right: 4px;
	top: 4px;
}
/*===================================*
  09.END SUBSCRIBE FORM
*===================================*/

/*===================================*
  10.START FOOTER
*===================================*/
.footer_logo {
	margin-bottom: 15px;
}
.top_footer {
	padding: 30px 0;
}
footer p {
	font-size: 14px;
}
.widget_links li {
	padding: 0 0 10px;
}
.widget_links li:last-child {
	padding-bottom: 0;
}
.widget_links li a {
	color: #888888;
	font-size: 14px;
	position: relative;
}
.widget_links.links_style1 li a:hover,
.widget_links.links_style2 li a:hover {
	padding-left: 5px;
}
.links_style2 li a::before {
	content: "\f105";
	font-family: fontawesome;
	font-size: 18px;
	vertical-align: middle;
	margin-right: 10px;
}
.contact_info > li > i {
	font-size: 18px;
	vertical-align: middle;
	max-width: 30px;
	width: 100%;
	text-align: center;
	margin-right: 5px;
}
.contact_info li:first-child {
	margin-top: 0;
}
.contact_info > li {
	margin-top: 15px;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-align: center;
	align-items: center;
}
.contact_info i + *,
.contact_info span + * {
	font-size: 14px;
	color: #888888;
	margin: 0;
	vertical-align: top;
}
footer .widget_title {
	font-size: 18px;
	margin-top: 10px;
}
.widget_title {
	margin-bottom: 20px;
	text-transform: capitalize;
	position: relative;
}
.bottom_footer {
    background-color: #051d2e;
    text-align: center;
}
.footer_link li {
	display: inline-block;
	position: relative;
}
.footer_link li a {
	font-size: 14px;
	padding: 0 5px;
	color: #888;
}
.fb-img img {
	margin: 10px 0;
	border: solid;
	border-color: #ffffff;
}
button.fb-btn {
    position: absolute;
    background-color:  #3b5998;
    color: #ffffff;
    left: 30px;
    bottom: 25px;
}

button.fb-btn:hover {
    background-color: #ffffff;
    color:  #3b5998 ;
}
i.fb-icon {
    position: absolute;
    font-size: xx-large;
    color: #ffffff;
    background-color: #3b5998;
    width: 35px;
    right: 70px;
    bottom: 25px;
    text-align: center;
    border-radius: 6px;
}
.post_img {
	float: left;
	margin-right: 10px;
	max-width: 60px;
}
.post_date {
	font-size: 80%;
}
.post_content {
	overflow: hidden;
}
.recent_post li {
	display: inline-block;
	width: 100%;
	margin-bottom: 12px;
}
.recent_post li:last-child {
	margin-bottom: 0;
}
.post_content h6 {
	font-size: 14px;
	line-height: normal;
	margin-bottom: 5px;
	font-weight: normal;
}
.footer_dark h1,.footer_dark h2,.footer_dark h3,.footer_dark h4,.footer_dark h5,.footer_dark h6,
.footer_dark p,
.footer_dark .contact_info li i,
.footer_dark .contact_info i + *,
.footer_dark .widget_links li a,
.footer_dark .footer_link li a,
.footer_dark .post_content h6 a {
	color: #fff;
}
.footer_dark .post_date {
	color: rgba(255,255,255,0.6);
}
.footer_dark .widget_links li a:hover,
.footer_dark .footer_link li a:hover,
.footer_dark .post_content h6 a:hover,
.footer_dark .contact_info a:hover {
	color: #FFBC09;
}
/*===================================*
  10.END FOOTER
*===================================*/

/*===================================*
  11.START CONTACT
*===================================*/
.contact_map iframe {
	height: 100%;
	width: 100%;
	display: block;
}
.map_radius_rtrb {
	border-radius: 0 10px 10px 0;
}
/*===================================*
  11.END CONTACT
*===================================*/

/*===================================*
  12.START 404 SECTION
*===================================*/
.error_txt {
	color: #333;
	font-size: 180px;
	font-weight: bold;
	line-height: 1.2;
}
/*===================================*
  12.END 404 SECTION
*===================================*/

/*===================================*
  13.START GALLERY SECTION
*===================================*/
.grid_filter {
	margin-bottom: 30px;
}
.grid_filter li {
	display: inline-block;
	margin: 0 3px;
}
.grid_filter li a {
	background-color: #eee;
	padding: 5px 25px;
	display: block;
	font-size: 16px;
	text-transform: capitalize;
	border-radius: 4px;
}
.grid_filter li a.current,
.grid_filter li a:hover {
	background-color: #FFBC09;
	color: #fff;
}
.grid_container {
	list-style: none;
}
.gutter_small {
    margin: 0 -7.5px -15px -7.5px;
}
.gutter_small > li {
    padding: 0 7.5px 15px 7.5px;
}
.gutter_medium {
    margin: 0 -15px -30px -15px;
}
.gutter_medium > li {
    padding: 0px 15px 30px 15px;
}
.grid_col3 > li {
	width: 33.33%;
	float: left;
}
.grid_col4 > li {
    width: 25%;
	float: left;
}
.gallery_item {
	overflow: hidden;
	position: relative;
}
.gallery_item img {
	width: 100%;
	}


.gallery_content {
	bottom: 0;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: -ms-flex;
	display: flex;
	-webkit-justify-content: center;
	-ms-flex-pack: center;
	-ms-justify-content: center;
	justify-content: center;
	-webkit-flex-flow: column nowrap;
	-ms-flex-flow: column nowrap;
	flex-flow: column nowrap;
	position: absolute;
	top: 60px;
	opacity: 0;
	visibility: hidden;
	right: 0;
	left: 0;
	text-align: center;
	transition: all 0.3s ease-in-out;
	z-index: 2;
}
.gallery_item:hover .gallery_content {
	top: 0;
	opacity: 1;
	visibility: visible;
}
.gallery_item::before {
	background-color: rgba(219, 38, 38, 0.6);
	content: "";
	position: absolute;
	left: 0;
	right: 0;
	opacity: 0;
	visibility: hidden;
	top: 0;
	bottom: 0;
	transition: all 0.5s ease-in-out;
	z-index: 2;
}
.gallery_item:hover:before {
	opacity: 1;
	visibility: visible;
}

.grid_container .owl-carousel.owl-theme .owl-dots {
	margin: 0 !important;
	position: absolute;
	bottom: 5px;
	right: 15px;
	z-index: 9;
}
.grid_container .owl-carousel {
	z-index: inherit;
}
.grid_container .owl-carousel.owl-theme .owl-dots span {
	margin: 5px 2px;
}
.owl-theme .owl-dots .owl-dot span {
	background-color: transparent;
	border: 1px solid #9a9a9a;
	margin: 5px;
}
.dots_white.owl-theme .owl-dots .owl-dot.active span, .dots_white.owl-theme .owl-dots .owl-dot:hover span {
	background-color: #fff;
	border-color: #fff;
}
.dots_white.owl-theme .owl-dots .owl-dot span {
	border-color: #fff;
}
.gallery_content .ripple {
	margin: 0;
}
.text_holder {
	margin-top: 25px;
	text-transform: capitalize;
	padding: 0px 10px;
}

.text_holder p b {
    color: black;
}
/*===================================*
  13.END GALLERY SECTION
*===================================*/

/*===================================*
  14.START ELEMENT DESIGN
*===================================*/
.owl-theme .owl-nav {
	margin-top: 0;
}
.owl-theme .owl-nav [class*="owl-"] {
	box-shadow: 0 0 8px rgba(0,0,0,0.15);
	color: #000;
	font-size: 18px;
	margin: 0;
	padding: 6px 16px;
	background: #fff;
	border-radius: 0;
	position: absolute;
	top: 50%;
	-moz-transform: translateY(-50%);
	-webkittransform: translateY(-50%);
	transform: translateY(-50%);
	transition: all 0.3s ease-in-out;
}
.owl-theme .owl-nav .owl-prev {
	left: 0;
}
.owl-theme .owl-nav .owl-next {
	right: 0;
}
.owl-theme .owl-nav [class*="owl-"] {
	color: #000;
	font-size: 18px;
}
.owl-theme .owl-nav [class*="owl-"]:hover {
	background-color: #fff;
	color: #FFBC09;
}
.nav_style1.owl-theme .owl-nav .owl-prev {
	left: -50px;
	opacity: 0;
}
.nav_style1.owl-theme .owl-nav .owl-next {
	right: -50px;
	opacity: 0;
}
.nav_style1.owl-theme:hover .owl-nav .owl-prev {
	left: 0px;
	opacity: 1;
}
.nav_style1.owl-theme:hover .owl-nav .owl-next {
	right: 0px;
	opacity: 1;
}
.video_play {
	position: absolute;
	right: 0;
	display: table;
	left: 50%;
	top: 50%;
	-moz-transform: translateY(-50%) translateX(-50%);
	-webkit-transform: translateY(-50%) translateX(-50%);
	transform: translateY(-50%) translateX(-50%);
	text-align: center;
}
.content_box {
	margin-top: 30px;
}
.content_desc {
	position: relative;
	padding: 15px;
}
.price {
	float: right;
}
.content_title {
	font-size: 18px;
	margin-bottom: 10px;
}
.event_box .content_meta {
	border-bottom: 1px solid #ddd;
	padding-bottom: 10px;
	margin-bottom: 10px;
}
.content_desc p {
	margin-bottom: 10px;
}
.rating_stars i {
	color: #ffc600;
	font-size: 18px;
	line-height: normal;
}
.teacher img {
	border-radius: 100%;
	max-width: 40px;
	margin-right: 10px;
}
.content_footer {
	border-top: 1px solid #ddd;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: space-between;
    display: -ms-flexbox;
    display: flex;
	padding: 15px;
	width: 100%;
}
.course_meta {
	display: inline-block;
}
.content_meta li {
	float: left;
	padding-right: 15px;
	font-size: 15px;
}
.content_meta li:last-child {
	padding-right: 0px;
}
.content_meta li i {
	margin-right: 6px;
	font-size: 14px;
}
.price .alert {
	margin: 0;
	padding: 5px 15px;
	display: block;
}
.courses_info .content_meta {
	float: right;
	width: auto;
}
.courses_info,
.content_meta {
	display: inline-block;
	width: 100%;
	vertical-align: middle;
}
.courses_info .rating_stars {
	float: left;
}
.content_meta li a {
	color: #292b2c;
}
.content_meta li a:hover {
	color: #FFBC09;
}
.content_img {
	overflow: hidden;
	position: relative;
}
.content_img a {
	display: block;
}
.content_img img {
	transition: all 0.5s ease-in-out;
	-moz-transform: scale(1);
	-webkit-transform: scale(1);
	transform: scale(1);
	width: 100%;
}
.content_box:hover .content_img img {
	-moz-transform: scale(1.1);
	-webkit-transform: scale(1.1);
	transform: scale(1.1);
}
.course_list .content_img {
	float: left;
	width: 40%;
	margin-left: 15px;
	margin-top: 15px;
}
.course_list .content_desc {
	overflow: hidden;
	max-height: 173px;
	min-height: 173px;
}
.course_list .content_title {
	max-height: 45px;
	overflow: hidden;
}
.course_list .content_desc p {
	height: 45px;
	overflow: hidden;
}
.box_counter i {
	font-size: 50px;
}
.box_counter img {
	max-width: 60px;
	margin-bottom: 15px;
}
.counter_text {
	font-size: 30px;
}
.counter_content {
	text-transform: capitalize;
}
.box_counter p {
	margin: 0;
}
.event_title {
	border-bottom: 1px solid #dad1b9;
	padding-bottom: 10px;
	margin: 15px 0;
}
.event_date {
	position: absolute;
	top: 10px;
	left: 10px;
	max-width: 75px;
	background-color: #fff;
	text-align: center;
	width: 100%;
}
.event_time {
	display: block;
	color: #fff;
	font-size: 14px;
	text-transform: uppercase;
}
.event_date h5 {
	font-size: 14px;
	margin: 0;
	padding: 5px;
}
.event_date h5 span {
	display: block;
	font-size: 24px;
}
.event_date span {
	display: block;
	padding: 5px;
}
.content_desc p:last-child {
	margin: 0;
}
.event_list {
	margin-top: 30px;
}
.event_list .content_box {
	margin-top: 15px;
	display: inline-block;
	width: 100%;
}
.event_list .content_box:first-child {
	margin-top: 0px;
}
.event_list .event_date {
	position: static;
	float: left;
	margin: 15px 0px 15px 15px;
}
.event_list .event_date h5 {
	border: 1px solid #eee;
}
.event_list .content_desc {
	overflow: hidden;
}
.event_list .content_desc p {
	height: 48px;
	overflow: hidden;
}
.custom_select {
	position: relative;
}
.custom_select::before {
	content: "\e64b";
	font-family: 'themify';
	position: absolute;
	display: block;
	top: 50%;
	right: 10px;
	font-weight: 900;
	pointer-events: none;
	font-size: 12px;
	-moz-transform: translateY(-50%);
	-webkit-transform: translateY(-50%);
	transform: translateY(-50%);
}
.custom_select select {
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	border: 1px solid #ced4da;
	border-radius: 4px;
	padding: 5px 30px 5px 10px;
	width: 100%;
}
.cl_logo_slider.owl-carousel .owl-item img {
	margin: 0 auto;
	width: auto;
	opacity: 0.7;
	padding:  0 10px;
}
.lr_popup .modal-body {
	padding: 0;
}
.custome-checkbox .form-check-label {
	position: relative;
	cursor: pointer;
	color: #908f8f;
	font-weight: 500;
	padding: 0;
	line-height: normal;
	vertical-align: middle;
}
.custome-checkbox .form-check-input {
	display: none;
}
.custome-checkbox .form-check-label::before {
	content: "";
	border-radius: 3px;
	border: 2px solid #FFBC09;
	height: 20px;
	width: 20px;
	display: inline-block;
	vertical-align: top;
	margin: 0px 8px 0 0;
}
.custome-checkbox input[type="checkbox"]:checked + .form-check-label::after {
	opacity: 1;
}
.custome-checkbox input[type="checkbox"] + .form-check-label::after {
	content: "";
	width: 11px;
	position: absolute;
	top: 6px;
	left: 5px;
	opacity: 0;
	height: 6px;
	border-left: 2px solid #FFBC09;
	border-bottom: 2px solid #FFBC09;
	-moz-transform: rotate(-45deg);
	-webkit-transform: rotate(-45deg);
	transform: rotate(-45deg);
}
.lr_popup .close {
	position: absolute;
	right: 10px;
	top: 5px;
	z-index: 99;
}
.different_login {
	text-align: center;
	position: relative;
	margin: 20px 0;
}
.different_login span {
	background-color: #fff;
	padding: 0 15px;
	position: relative;
	text-transform: uppercase;
}
.different_login::before {
	content: "";
	position: absolute;
	left: 0;
	top: 50%;
	right: 0;
	border-top: 1px solid #ddd;
	-moz-transform: translateY(-50%);
	-webkit-transform: translateY(-50%);
	transform: translateY(-50%);
}
.login_footer {
	text-align: left;
}
.login_footer a {
	float: right;
	color: #908f8f;
}
.btn-login li {
	margin: 0px 5px 0;
	display: inline-block;
}
.btn-login li a {
	border-radius: 5px;
	padding: 10px 20px;
	color: #fff;
	display: block;
}
.btn-login li a i {
	margin-right: 10px;
	font-size: 18px;
}
.btn-facebook {
	background: #3b5998;
	border-color: #3b5998;
}
.btn-facebook:hover {
	color: #fff;
	background: #344e86;
	border-color: #344e86;
}
.btn-google {
	background: #d85040;
	border-color: #d85040;
}
.btn-google:hover {
	color: #fff;
	background: #d33d2b;
	border-color: #d33d2b;
}
.form-note {
	padding-top: 15px;
	border-top: 1px solid #ddd;
	margin-top: 20px;
}
.tab-content {
	margin-top: 20px;
}
.nav-tabs {
    border-bottom: 1px solid #dee2e6;
}
.nav-tabs li.nav-item {
   margin-right: 20px
}
.nav-tabs .nav-link.active,
.nav-tabs .nav-link.active:hover {
    border-bottom-color: #FFBC09;
	color: #FFBC09;
}
.nav-tabs .nav-link:hover {
	border-bottom-color: rgba(0,0,0,0);
}
.nav-tabs li.nav-item a {
	background-color: transparent;
    border-top: 0;
    border-left: 0;
    border-right: 0;
	border-bottom: 3px solid rgba(0,0,0,0);
    text-align: center;
    text-transform: capitalize;
}
.page-title h1 {
	font-size: 36px;
	margin: 0;
	text-transform: capitalize;
	font-weight: bold;
}
.breadcrumb {
	background-color: transparent;
	margin: 0;
	padding: 0;
}
.page-title-light *, .page-title-light .breadcrumb-item, .page-title-light .breadcrumb-item::before {
	color: #fff;
}
.pagination li {
	margin-right: 5px;
}
.pagination .page-item a {
	border: 2px solid #dee2e6;
	border-radius: 4px;
	color: #888888;
	height: 40px;
	width: 40px;
	text-align: center;
	line-height: 36px;
	padding: 0;
}
.pagination .page-item a i {
	font-size: 24px;
	vertical-align: middle;
}
.page-item.active .page-link, .page-item .page-link:hover {
	background-color: #FFBC09;
	border-color: #FFBC09;
	color: #fff;
}
.page-link:focus {
	box-shadow: none;
}
.sidebar ul {
    list-style: none;
}
.search_form {
	position: relative;
}
.search_form .form-control {
	padding: 10px 45px 10px 15px;
	height: 47px;
}
.search_form button {
	background-color: transparent;
	border: 0;
	position: absolute;
	right: 0;
	top: 0;
	padding: 12px 15px;
	font-size: 18px;
	height: 46px;
}
.search_form button:hover {
	color: #FFBC09;
}
.sidebar .widget {
	margin-bottom: 15px;
	padding-bottom: 15px;
}
.sidebar .widget:last-child {
	margin: 0;
	padding: 0;
}
.sidebar .widget_title {
	position: relative;
	padding-bottom: 15px;
}
.sidebar .widget_title::before {
	background-color: #FFBC09;
	bottom: 0;
	content: "";
	height: 3px;
	left: 0;
	position: absolute;
	width: 80px;
	z-index: 1;
}
.sidebar .widget_title::after {
	background-color: #ddd;
	position: absolute;
	left: 0;
	right: 0;
	height: 1px;
	bottom: 0;
	width: 100%;
	content: "";
	z-index: 0;
}
.widget_categories .categories_num {
	float: right;
}
.widget_categories ul li,
.widget_archive ul li {
	padding-bottom: 15px;
	line-height: normal;
}
.widget_categories ul li:last-child,
.widget_archive ul li:last-child {
    padding-bottom: 0px;
}
.widget_categories a::before,
.widget_archive a:before {
	content: "\f105";
	font-family: fontawesome;
	margin-right: 10px;
}
.sidebar .widget_countdown {
	padding: 15px;
	margin-bottom: 30px;
}
.widget_countdown .countdown_box .countdown {
	font-size: 26px;
}
.widget_countdown .countdown_box::before {
	font-size: 20px;
	top: 5px;
}
.widget_countdown .countdown_time .cd_text {
	font-size: 12px;
}
.tags a {
	border: 1px solid #ddd;
	font-size: 14px;
	padding: 5px 15px;
	display: inline-block;
	border-radius: 2px;
	margin-bottom: 5px;
}
.tags a:hover {
	background-color: #FFBC09;
	color: #fff;
	border-color: #FFBC09;
}
.countent_detail_meta {
	display: inline-block;
	width: 100%;
}
.countent_detail_meta ul {
	list-style: none;
}
.countent_detail_meta li {
	float: left;
	padding-right: 15px;
	margin-right: 15px;
	border-right: 1px solid #dad1b9;
}
.instructor img {
	border-radius: 5px;
	float: left;
	margin-right: 10px;
	max-width: 50px;
	width: 100%;
}
.countent_detail_meta label {
	display: block;
	font-weight: bold;
	color: #333;
	margin: 0;
}
.course_student span {
	color: #333;
}
.instructor_info {
	overflow: hidden;
}
.course_cat a::after {
	content: ",";
	margin: 0 2px;
}
.course_cat a:last-child:after {
	content: normal;
}
.countent_detail_meta li:last-child {
	margin: 0;
	padding: 0;
	border: 0;
}
.course_img {
	position: relative;
}
.course_img .price {
	position: absolute;
	left: 20px;
	bottom: 20px;
}
.enroll_btn {
	position: absolute;
	right: 20px;
	bottom: 20px;
}
.course_detail {
	padding: 20px;
	margin-bottom: 40px;
}
.course_title {
	border-bottom: 1px solid #dad1b9;
	padding-bottom: 15px;
	margin-bottom: 15px;
}
.course_title h2,
.event_title h2 {
	font-size: 24px;
	margin: 0;
}
.curriculum_sections li {
	border-bottom: 1px solid #eee;
}
.curriculum_sections li:last-child {
	border-bottom: 0;
}
.curriculum_sections li a {
	display: table;
	width: 100%;
}
.curriculum_sections li a::before {
	content: "\f0f6";
	font-family: fontawesome;
	font-size: 18px;
	display: table-cell;
	width: 20px;
	text-align: center;
	line-height: 50px;
}
.course_item_meta {
	text-align: right;
}
.item_meta.duration {
	background-color: #FFBC09;
	color: #fff;
	padding: 4px 8px;
	border-radius: 3px;
	position: absolute;
	right: 20px;
	font-size: 14px;
	top: 20px;
}
.item_meta.duration::before {
	content: "\f017";
	font-family: fontawesome;
	margin-right: 5px;
}

.niti-img img{
	float: right;
    position: relative;
}
	.top-heading {
    font-size: 20px;
    color: #ffffff;
		padding-top: 20px;
    text-align: center;
}
section.my-header {
    padding-top: 0;
    padding-bottom: 0;
}

.accordion .card-header {
	padding: 0;
	background-color: transparent;
	border: 0;
}
.accordion .card-header a {
	display: block;
	padding: 20px 20px 20px 50px;
	font-size: 18px;
	text-transform: capitalize;
	border-bottom: 1px solid #ddd;
	line-height: normal;
}
.accordion .card-header a::after {
	content: "\f126";
	font-family: "Ionicons";
	font-size: 14px;
	font-weight: normal;
	position: absolute;
	left: 20px;
	top: 22px;
}
.accordion .card-header a.collapsed::after {
	content: "\f123";
}
.course_tabs .accordion .card-header a {
	padding: 20px 120px 20px 50px;
}
.tab_box {
	padding:15px;
}
.tab-content p:last-child {
	margin: 0;
}
.comment_content p:last-child,
.card-body p:last-child {
	margin: 0;
}
.course_rate .review_bar {
    width: calc(100% - 120px);
    margin: 0 10px;
    height: 15px;
    background-color: #DDD;
    display: inline-block;
}
.course_rate .review_bar .rating {
    background-color: #FFBC09;
	height: 15px;
}
.course_rating {
	display: -ms-flexbox;
	display: flex;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
	-ms-flex-align: center;
	align-items: center;
	margin-bottom: 15px;
}
.rating_review {
	width: 40%;
	text-align: center;
	background-color: #f5f5f5;
	padding: 20px;
}
.review_number {
	display: block;
	font-size: 70px;
	color: #333;
	font-weight: 500;
	line-height: normal;
}
.rating_box {
	width: 60%;
	padding: 20px;
}
.course_rate {
	margin-bottom: 10px;
}
.course_rate:last-child {
	margin-bottom: 0px;
}
.user_img img {
	max-width: 100px;
	margin-right: 15px;
}
.comment-time {
	font-size: 14px;
	text-transform: capitalize;
	color: #333;
}
.meta_data {
	margin-bottom: 6px;
}
.comment_info {
	padding-top: 15px;
	margin-top: 15px;
	border-top: 1px solid #ddd;
}
.comment_info.reply {
	padding-left: 60px;
}
.countdown_time {
	display: inline-block;
	width: 100%;
}
.countdown_time .countdown_box {
	float: left;
	width: 25%;
	text-align: center;
	position: relative;
}
.countdown_time .cd_text {
	display: block;
	color: #333;
}
.countdown_box .countdown {
	color: #333;
	font-size: 40px;
	font-weight: bold;
}
.countdown_white .countdown_box .countdown, .countdown_white .countdown_box .cd_text {
    color: #fff;
}
.countdown_box::before {
    content: ":";
    font-size: 40px;
    font-weight: bold;
    color: #000;
    position: absolute;
    right: -6px;
}
.countdown_white .countdown_box::before {
	color: #fff;
}
.countdown_box:last-child:before {
	content: normal;
}
iframe {
	border: 0;
}
.event_map iframe {
	width: 100%;
	height:300px;
}
.event_map {
	margin-bottom: 40px;
}
.social_icons [class*="sc_"] {
	color: #fff !important;
}
.social_icons [class*="sc_"]:hover {
	opacity: 0.8;
}
.sc_facebook {
	background-color: #3b5998 !important;
	border-color: #3b5998 !important;
}
.sc_gplus,
.sc_google {
	background-color:#dd4b39 !important;
	border-color: #dd4b39 !important;
}
.sc_linkedin {
	background-color:#0e76a8 !important;
	border-color: #0e76a8 !important;
}
.sc_rss {
	background-color:#ee802f !important;
	border-color: #ee802f !important;
}
.sc_skype {
	background-color:#00aff0 !important;
	border-color: #00aff0 !important;
}
.sc_twitter {
	background-color:#00acee !important;
	border-color: #00acee !important;
}
.sc_youtube {
	background-color:#c4302b !important;
	border-color: #c4302b !important;
}
.sc_vimeo {
	background-color:#86c9ef !important;
	border-color: #86c9ef !important;
}
.sc_yahoo {
	background-color:#720e9e !important;
	border-color: #720e9e !important;
}
.sc_tumblr {
	background-color:#34526f !important;
	border-color: #34526f !important;
}
.sc_instagram {
	background-color:#3f729b !important;
	border-color: #3f729b !important;
}
.sc_pinterest {
	background-color:#c8232c !important;
	border-color: #c8232c !important;
}
.sc_dribbble {
	background-color:#EA4C89 !important;
	border-color: #EA4C89 !important;
}
.sc_reddit {
	background-color: #C6C6C6 !important;
	border-color: #C6C6C6 !important;
}
.sc_github {
	background-color: #171515 !important;
	border-color: #171515 !important;
}
.sc_android {
	background-color: #A4C639 !important;
	border-color: #A4C639 !important;
}
.sc_windows {
	background-color: #00A7E7 !important;
	border-color: #00A7E7 !important;
}
.sc_tux {
	background-color: #C1C1C1 !important;
	border-color: #C1C1C1 !important;
}
.sc_delicious {
    background-color: #205cc0!important;
	border-color: #205cc0 !important;
}
.sc_paypal {
    background-color: #00588b!important;
	border-color: #00588b !important;
}
.sc_blogger {
    background-color: #fc4f08!important;
	border-color: #fc4f08!important;
}
.sc_flickr {
    background-color: #ff0084!important;
	border-color: #ff0084!important;
}
.sc_yahoo {
    background-color: #720e9e!important;
	border-color: #720e9e!important;
}
.sc_dropbox {
    background-color: #3d9ae8!important;
	border-color: #3d9ae8!important;
}
.sc_ebay {
    background-color: #89c507!important;
	border-color: #89c507!important;
}
.sc_wordpress {
    background-color: #1e8cbe!important;
	border-color: #1e8cbe !important;
}
.sc_yelp {
    background-color: #c41200!important;
}
blockquote {
	padding: 20px 20px 20px 75px;
	background-color: #f6f6f6;
	font-style: italic;
	position: relative;
	border-left: 3px solid #888;
}
blockquote p:last-child {
	margin: 0;
}
blockquote::before {
	content: "\f10d";
	position: absolute;
	font-family: fontawesome;
	font-style: normal;
	font-size: 24px;
	left: 30px;
	top: 17px;
}
.single_post .single_post_content {
	margin-top: 15px;
}
.single_post .blog_text .blog_meta {
	margin: 10px 0;
}
.post_navigation i {
	font-size: 32px;
	line-height: normal;
}
.post_navigation span {
	display: block;
	font-weight: bold;
	text-transform: capitalize;
}
.single_post .post_navigation {
	margin: 30px 0;
}
.single_post .related_post {
	margin: 40px 0;
}
.single_post .comment_list {
	margin-bottom: 40px;
}
.comment-title h5 {
	margin: 0;
}
.rating > span.selected{
	color: #ffc300;
}
.rating > span {
	cursor: pointer;
	display: inline-block;
}
.rating span i {
	font-size: 30px;
}
.rating > span.selected i::before {
	content: "\f2fc";
}
.share {
	margin: 5px 0;
}
.share h5 {
	float: left;
	margin-right: 10px;
	margin-top: 5px;
}
.list_item li {
	display: inline-block;
	padding-right: 30px;
}
.list_item li:last-child {
	padding-right: 0;
}
.overlap_section {
	margin-right: -50px;
	position: relative;
	z-index: 2;
	border-radius: 0 200px 200px 0;
}
.register_form {
	background-color: rgba(255,255,255,0.1);
}
.fancy_box {
	position: relative;
}
.fancy_box::before {
	content: "";
	position: absolute;
	left: 0;
	top: 0;
	bottom: 0;
	right: 0px;
	border: 3px solid #FFBC09;
	width: 50%;
	z-index: -1;
}
.fancy_box::after {
	content: "";
	position: absolute;
	left: 0;
	border-right: 3px solid #fff;
	top: 50%;
	bottom: 0;
	width: 50%;
	height: 80%;
	transform: translateY(-50%);
	z-index: -1;
}
.cta_section p:last-child {
	margin-bottom: 0;
}
/*===================================*
  14.END ELEMENT DESIGN
*===================================*/

.alert-msg-failure {
	color: #721c24;
	background-color: #efa0a0;
	border-radius: 3px;
	margin-top: 10px;
}
.alert-msg-success {
	color: #155724;
	background-color: #d4edda;
	border-radius: 3px;
	margin-top: 10px;
}

/*Demo Switcher Css*/
span.statcounter {
    display: none;
}
.demo_switcher {
	position: fixed;
	right: 0;
	z-index: 9999;
	top: 40%;
}
.demo > ul > li > a {
	font-size: 22px;
	text-align: center;
	display: block;
	width: 40px;
	height: 40px;
	line-height: 40px;
	color: #fff;
	transition: all 0.5s ease-in-out;
}
.demo > ul > li > a.menu_icon {
	line-height: 44px;
	font-size: 25px;
}

.demo_list ul {
	list-style: none;
	display: inline-block;
}
.demo_list {
	background-color: #fff;
	position: fixed;
	right: -360px;;
	max-width: 360px;
	padding: 5px;
	overflow: auto;
	top: 0;
	bottom: 0;
	transition: all 0.5s ease-in-out;
	z-index: 9999;
}
.demo_list.switch-active {
	right: 0;
}
.demo_list li {
	float: left;
	 width: 50%;
	 padding: 5px;
}
.demo_list li a {
	display: block;
	border: 1px solid #ddd;
	padding: 4px;
	position: relative;
}
.demo_list li a::before {
	content: "";
	position: absolute;
	left: 4px;
	top: 4px;
	bottom: 4px;
	right: 4px;
	opacity: 0;
	background-color: rgba(0,0,0,0.6);
	z-index: 9;
	transition: all 0.5s ease-in-out;
}
.demo_list li a:hover:before {
	opacity: 1;
}
body.switch-open {
	overflow: hidden;
	padding-right: 15px;
}
.switch-open::before {
	content: "";
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	background-color: rgba(0,0,0,0.8);
	z-index: 9999;
}
.demo li {
	position: relative;
}
.demo > ul > li > a.demo_icon.switch-active {
	position: relative;
	transition: all 0.5s ease-in-out;
	-moz-transform: translateX(-360px);
	-webkit-transform: translateX(-360px);
	transform: translateX(-360px);
}
.demo > ul > li > a.demo_icon.switch-active i::before {
	content: "\f129";
	font-size: 20px;
	vertical-align: middle;
}
.demo > ul > li > a.menu_icon.switch-active {
	line-height: 36px;
}
.demo_list h5 {
	margin: 10px 0;
}
.demo li.switch-active .color_icon {
	transition: all 0.5s ease-in-out;
	-moz-transform: translateX(-200px);
	-webkit-transform: translateX(-200px);
	transform: translateX(-200px);
}
.color-switch {
	background: #212121;
	right: -200px;
	padding: 10px;
	position: absolute;
	top: 0;
	transition: all .5s ease-in-out;;
	width: 200px;
	z-index: 999;
}
.switch-active {
	right: 0;
}
.color-switch button::after {
	color: #ffffff;
	content: "\f122";
	font-family: "Ionicons";
	font-size: 18px;
	left: 5px;
	opacity: 0;
	position: absolute;
	top: 2px;
}
.color-switch button.active::after {
	opacity: 1;
}
.color-switch button {
	border: 0 none;
	border-radius: 3px;
	cursor: pointer;
	height: 25px;
	line-height: 20px;
	margin: 2px;
	padding: 0;
	position: relative;
	text-align: center;
	width: 25px;
}
.default {
	background-color: #FFBC09;
}
.green {
	background-color: #00C382;
}
.orange {
	background-color: #FD5A38;
}
.blue-light {
	background-color: #00C3CB;
}
.red {
	background-color: #f0222c;
}
.demo_list li a span {
	position: absolute;
	left: 0;
	right: 0;
	color: #fff;
	z-index: 9;
	top: 50%;
	-moz-transform: translateY(-50%);
	-webkit-transform: translateY(-50%);
	transform: translateY(-50%);
	text-shadow: 0 0 4px rgba(0,0,0,0.8);
	opacity: 0;
	padding: 0 10px;
	transition: all 0.5s ease-in-out;
}
.demo_list li a:hover span {
    opacity: 1;
}
@media only screen and (max-width: 480px) {
.demo_list {
	right: -270px;
	max-width: 270px;
}
.demo > ul > li > a.icon.switch-active {
	-moz-transform: translateX(-270px);
	-webkit-transform: translateX(-270px);
	transform: translateX(-270px);
}
}

.mem-image img {
	position:relative;
	margin-top:50px;
    border: solid;
    border-color: white;
    border-width: thick;
}
.card-even p {
    color: white;
}
.card-odd p {
    color: #000000;
}
.card-even h3{
  color: #ffffff;
}
.card-even h5 {
    color: #e2cf7a;
}
.card-odd h5 {
    color: #ffffff;
}
.col-md-8.col-sm-1.info p {
    color: #000000;
}
.col-md-8.col-sm-1.even-info p {
    color: white;
}

.hidden{
	display:none;
}
.mem-image {
    float: right;
	margin-bottom: 30px;
	
}
.mem-image img {
    border-radius: 50%;
}
.info-links{
  color: blue;
}

#anuj-card{
  float: right;
  position: relative;
}
.lg-vol-img img {
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    border: solid;
    border-color: white;
}

.vol-img {
    margin-top: 20px;
    margin-bottom: 20px;
}


.volunteer-heading h3 {
    text-align: center;
}

.card.my-up-card {
  width: 50%;
  background: #003153;
  margin-top: 40px;
  padding: 20px;
  border-radius: 20px;
  margin-bottom: 20px;
  border: solid;
  border-color: #ffffff;
  box-shadow: 2px 2px 2px 2px #baa02d;
}
.vol-info h4 {
    color: #ffffff;
}

.vol-info h5 {
    color: #f0dd34;
}
.vol-info h6 {
    color: #e2cf7a;
}

.card.my-card {
    background: #003153;
    padding: 20px;
	margin: 40px 0 40px 0;
    border-radius: 20px;
    border: solid;
    border-color: #ffffff;
    box-shadow: 2px 2px 2px 2px #baa02d;
}

.vol-img img {
    border-radius: 10px;
    border: solid;
    border-color: #ffffff;
}
.col-md-4.col-sm-4.re-card {
    margin-right: 10px;
    margin-left: 10px;
}
.ref{
  color: #FFFFFf;
}

.form-label-left{
    width:150px;
}
.form-line{
    padding-top:12px;
    padding-bottom:12px;
}
.form-label-right{
    width:150px;
}
.form-all{
    margin:0px auto;
    padding-top:0px;
    width:600px;
    color:#555 !important;
    font-family:"Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Verdana, sans-serif;
    font-size:14px;
}


.social_media{
	position: fixed;
	top: 50%;
	z-index: 10;
}
.social_media a {
	text-decoration: none;
	width: 40px;
	display: block;
	
  }
a .flex-container {
	position: relative;
	padding: 0;
	margin: 10px 0 0 0;
	list-style: none;
	display: flex;
	height: 45px;
	width: 150px;
	justify-content: space-around;
	left: -110px;
	transition: left 1s;
  }
  a .flex-container:hover {
	left: -10px;
  }
  a .flex-container .flex-item {
	display: flex;
	justify-content: center;
	align-items: center;
	color: #ffffff;
  }
  a .flex-container .flex-item h4 {
	font-weight: bold;
	font-size: 16px;
	color: #ffffff;
  }
  