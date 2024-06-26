const navbar_HTML = () => {
  return `   <!-- Options -->
<div id="nav-colors">
	Navbar
	<button id="pink" class="btn"></button>
	<button id="red" class="btn"></button>
	<button id="purple" class="btn"></button>
	<button id="blue" class="btn"></button>
	<button id="green" class="btn"></button>
	<button id="yellow" class="btn"></button>
	<button id="orange" class="btn"></button>
</div>
<div id="font-colors">
	Font
	<button id="white" class="btn"></button>
	<button id="black" class="btn"></button>
</div>
<div id="edges">
	Edges
	<button id="rounded" class="btn">Rounded</button>
	<button id="square" class="btn">Square</button>
</div>
<h1></h1>
<nav class="navbar">
	<div class="container-fluid">
		<!-- Nav Header -->
		<div class="navbar-header">
			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#collapse-1" aria-expanded="false">
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			<a class="navbar-brand" href="/JAVASCRIPT/Project Local-Storege/index.html"><span class="fa fa-home"></span><span class="link"> Home</span></a>
		</div>
		<!-- Nav Collapse -->
		<div class="navbar-collapse collapse" id="collapse-1">
			<!-- Nav Left -->
			<ul class="nav navbar-nav">
				<!-- Products -->
				<li class="dropdown">
					<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
						<span class="fa fa-tags"></span><span class="link"> Products</span> <span class="fa fa-caret-down"></span></a>
					<ul class="dropdown-menu">
						<li><a href="/JAVASCRIPT/Project Local-Storege/Pages/Product.html"><span class="fa fa-tag"></span> Products</a></li>
						<li><a href="/JAVASCRIPT/Project Local-Storege/Pages/AddProduct.html"><span class="fa fa-tag"></span> AddProduct</a></li>
					</ul>
				</li>
				<!-- Services -->
				<li class="dropdown">
					<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
						<span class="fa fa-gears"></span><span class="link"> Account</span> <span class="fa fa-caret-down"></span></a>
					<ul class="dropdown-menu">
						<li><a href="#"><span class="fa fa-gear"/></span> Service 1</a></li>
						<li><a href="#"><span class="fa fa-gear"/></span> Service 2</a></li>
						<li><a href="#"><span class="fa fa-gear"/></span> Service 3</a></li>
					</ul>
				</li>
				<!-- About -->
        <li class="dropdown">
					<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
						<span class="fa fa-info-circle"></span><span class="link">Profile</span> <span class="fa fa-caret-down"></span></a>
					<ul class="dropdown-menu">
						<li><a href="/JAVASCRIPT/Project Local-Storege/Pages/SignUp.html"><span class="fa fa-gear"/></span>Sign UP</a></li>
						<li><a href="/JAVASCRIPT/Project Local-Storege/Pages/Login.html"><span class="fa fa-gear"/></span>Login</a></li>
					</ul>
				</li>
				<!-- Contact -->
				<li><a href="#"><span class="fa fa-phone"></span><span class="link"> Contact</span></a></li>
			</ul>
			<!-- Nav Right -->
			<form class="navbar-form navbar-right">
				<div class="form-group">
					<input type="text" class="form-control" placeholder="Search">
				</div>
				<button type="submit" class="btn"><span class="fa fa-search"></span></button>
			</form>
		</div>
	</div>
</nav>`;
};

const navbar_Styles = () => {
  return `@import url('https://fonts.googleapis.com/css?family=Roboto');


body {
	margin: 5%;
	color: white;
	background: #111111;
	font-family: 'Roboto', sans-serif;
}

#nav-colors, #font-colors, #edges {
	margin-top: 10px;
	.btn {
		display: inline-block;
		padding: 10px;
		margin: 0 5px;
		border: 2px solid #111111;
		transition: 0.2s ease;
		&:hover {
			border: 2px solid white;
		}
	}
}
#nav-colors {
	#pink {background: linear-gradient(to right,rgb(222, 10, 120)20%,rgb(26, 209, 229)  80%);}
	#red {background: linear-gradient(to right, #d31027, #ea384d);}
	#purple {background: linear-gradient(to right, #833ab4,#fd1d1d, #fcb045);}
	#blue {background: linear-gradient(to right, #00d4ff,#090979);}
	#green {background: linear-gradient(to right, #27ff00, #fc4545);}
	#yellow {background: linear-gradient(to right, #f7971e, #ffd200);}
	#orange {background: linear-gradient(to right, #e43a15, #e65245);}
}
#font-colors {
	#white {background: white;}
	#black {background: black;}
}
#edges {
	#rounded {
		background: black;
	}
	#square {
		background: black;
		border-radius: 0px;
	}
	#rounded, #square {
		&:hover {
			color: white;
		}
	}
}

.navbar {
	border: 0;
	border-radius: 0;
	background: linear-gradient(to right, #00d4ff,#090979);
	.nav li > a, .navbar-brand {
		max-height: 50px;
		width: auto;
		background: transparent !important;
		font-size: 18px;
		transition: 0.2s ease-in-out;
		&:hover{
			background-color: rgba(255,255,255,0.2);
			font-size: 14px;
			.link {
				width: 100%;
				padding: 0 5px 0 5px;
				visibility: visible;
				font-size: 14px;
			}
		}
	}
	.link {
		width: 0;
		font-family: 'Roboto', sans-serif;
		transition: 0.2s ease-in-out;
		visibility: hidden;
		font-size: 0px;
	}
	span {
		color: white;
	}
	.navbar-toggle {
		padding-right: 0;
		.icon-bar {
			background: white;
		}
	}
	.navbar-collapse {
		display: none;
	}
	button {
		background: transparent;
	}
	button[type=submit] {
		padding-right: 0;
		span {
			transition: 0.3s ease-in-out;
		}
		&:hover {
			span {
				transform: scale(1.3) rotate(90deg);
			}
		}
	}
	form {
		padding: 0;
		.form-control {
			border: 0;
			border-radius: 0;
			color: black;
			font-weight: bold;
			background: rgba(255,255,255,0.7);
			transition: 0.2s ease-in-out;
			&:hover {
				background: white;
			}
		}
	}
	.dropdown {
		.fa-caret-down {
			padding-left: 3px;
			font-size: 18px;
			transition: 0.4s ease;
		}
		&.open {
			background-color: rgba(255, 255, 255, 0.2);
			font-size: 14px;
			.link {
				width: 100%;
				visibility: visible;
				font-size: 14px;
				padding: 0 5px 0 5px;
			}
			.dropdown-toggle {
				font-size: 14px;
			}
			.fa-caret-down {
				transform: rotate(180deg);
			}
		}
		.dropdown-menu {
			min-width: 0px !important;
			width: 100%;
			background: #ff5858;
			text-align: center;
			border-radius: 0;
			li, a {
				color: white;
				font-size: 14px;
				line-height: 30px;
				&:hover {
					color: white;
					letter-spacing: 1px;
					background: transparent;
				}
			}
			a {
				padding: 0 15px 0 15px;
			}
		}	
	}
}

@media(max-width: 769px) {
	.navbar {
		.link {
			padding-left: 10px;
			visibility: visible;
			width: 100%;
			font-size: 14px;
		}
		.navbar-brand {
			.link {
				visibility: hidden;
			}
		}
	}
	.dropdown {
		.dropdown-menu {
			text-align: left !important;
		}
	}
	button[type=submit] {
		width: 50%;
		float: left;
	}
	.navbar-form {
		border: 0;
	}
	.form-group {
		padding: 0;
		margin: 0;
		input {
			width: 50%;
			float: left
		}
	}
}`;
};

const navbar_js = () => {
  // Open close dropdown on click
  $("li.dropdown").click(function () {
    if ($(this).hasClass("open")) {
      $(this).find(".dropdown-menu").slideUp("fast");
      $(this).removeClass("open");
    } else {
      $(this).find(".dropdown-menu").slideDown("fast");
      $(this).toggleClass("open");
    }
  });

  // Close dropdown on mouseleave
  $("li.dropdown").mouseleave(function () {
    $(this).find(".dropdown-menu").slideUp("fast");
    $(this).removeClass("open");
  });

  // Navbar toggle
  $(".navbar-toggle").click(function () {
    $(".navbar-collapse").toggleClass("collapse").slideToggle("fast");
  });

  // Navbar colors
  $("#nav-colors > .btn").click(function () {
    if ($(this).is("#pink")) {
      $(".navbar").css(
        "background",
        "linear-gradient(to right,rgb(222, 10, 120) 20% ,rgb(26, 209, 229) 80%)"
      );
      $(".dropdown-menu").css("background", "#ff5858");
    } else if ($(this).is("#red")) {
      $(".navbar").css(
        "background",
        "linear-gradient(to right, #d31027, #ea384d)"
      );
      $(".dropdown-menu").css("background", "#d31027");
    } else if ($(this).is("#purple")) {
      $(".navbar").css(
        "background",
        "linear-gradient(to right, #833ab4,#fd1d1d, #fcb045)"
      );
      $(".dropdown-menu").css("background", "#41295a");
    } else if ($(this).is("#blue")) {
      $(".navbar").css(
        "background",
        "linear-gradient(to right, #00d4ff,#090979)"
      );
      $(".dropdown-menu").css("background", "#396afc");
    } else if ($(this).is("#green")) {
      $(".navbar").css(
        "background",
        "linear-gradient(to right, #27ff00, #fc4545)"
      );
      $(".dropdown-menu").css("background", "#add100");
    } else if ($(this).is("#yellow")) {
      $(".navbar").css(
        "background",
        "linear-gradient(to right, #f7971e, #ffd200)"
      );
      $(".dropdown-menu").css("background", "#f7971e");
    } else if ($(this).is("#orange")) {
      $(".navbar").css(
        "background",
        "linear-gradient(to right, #e43a15, #e65245)"
      );
      $(".dropdown-menu").css("background", "#e43a15");
    }
  });



  // Font colors
  $("#font-colors > .btn").click(function () {
    if ($(this).is("#white")) {
      $(".navbar .fa, .link, a").css("color", "white");
      $(".icon-bar").css("background", "white");
    } else if ($(this).is("#black")) {
      $(".navbar .fa, .link, a").css("color", "black");
      $(".icon-bar").css("background", "black");
    }
  });

  // edges
  $("#edges > .btn").click(function () {
    if ($(this).is("#rounded")) {
      $(".navbar, .form-control").css("border-radius", "8px");
      if ($(window).width() > 768) {
        $(".dropdown-menu").css({
          "border-bottom-right-radius": "8px",
          "border-bottom-left-radius": "8px",
        });
      }
    } else if ($(this).is("#square")) {
      $(".navbar, .form-control").css("border-radius", "0");
      $(".dropdown-menu").css({
        "border-bottom-right-radius": "0",
        "border-bottom-left-radius": "0",
      });
    }
  });
};

export { navbar_HTML, navbar_Styles, navbar_js };