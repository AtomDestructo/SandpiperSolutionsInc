
import { Link } from "react-router-dom";


export default function Navbar(){
        return (
<header class="header-area overlay">                    
               {/*} 
                <nav class=" navbar navbar-expand-lg navbar-custom w3-animate-right py-0" >
                    <div class="container-fluid  bg8" >
                        <a class="navbar-brand px-5" >
                            <img class="img-thumbnail " src="/media/logoMain.svg" width="150em" height="150em" alt="Main logo" />
                        </a>
                        <button class="navbar-toggler bg1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                            <img class="bg1"></img>
                            <ul class="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link "><p class="text-dark m-2 fs-5">Home</p></Link>
                                </li> 
                                <li>
                                <div class="dropdown ">
                                <button class="btn dropdown-toggle m-2 "><p class="text-dark fs-5 ">About Us</p></button>
                                    <div class="dropdown-content">
                                        <div class="container bg1">
                                        <Link to="/MissionAndVision" className="nav-link">Our team’s mission and visions</Link>
                                        <Link to="/CoreValues" className="nav-link">Core Values</Link>
                                        <Link to="/OurTeam" className="nav-link">Our Team</Link>
                                        </div>
                                    </div>     
                                </div>  
                                </li>       
                                <li className="nav-item m-2">
                                    <Link to="/investors" className="nav-link"><p class="text-dark fs-5">Investor Relations</p></Link>
                                </li>
                                <li className="nav-item m-2">
                                    <Link to="/subsidiaries" className="nav-link"><p class="text-dark fs-5">Subsidiaries</p></Link>
                                </li>
                                <li className="nav-item m-2">
                                    <Link to="/contact" className="nav-link"><p class="text-dark fs-5">Contact Us</p></Link>
                                </li>
                            </ul>
                        </div> 
                    </div>               
                </nav>
{*/}

    <nav class="navbar navbar-expand-md navbar-dark ">
        <div class="container-fluid ">

                <a class="navbar-brand" >
                    <img class="img-thumbnail logomain1" src="/media/logoMain.svg" width="150em" height="150em" alt="Main logo" />
                </a>

            <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" aria-expanded="false"  aria-label="Toggle navigation" data-target="#main-nav" data-toggle="collapse">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div id="navbarSupportedContent" class="collapse navbar-collapse ">

                <ul class="navbar-nav me-auto ms-auto">
                    <li><a href="#" class="nav-item nav-link "><Link to="/">Home</Link></a></li>
                    <li><a href="#" class="nav-item nav-link "><Link to="/investors">Investor Relations</Link></a></li>
                    <li><a href="#" class="nav-item nav-link "><Link to="/subsidiaries">Subsidiaries</Link></a></li>
                    <li><a href="#" class="nav-item nav-link "><Link to="/contact">Contact Us</Link></a></li>

                    <li class="dropdown">

                        <li><a href="#" class="nav-item nav-link " data-toggle="dropdown">About Us</a></li>
                        <div class="dropdown-menu">
                            <Link to="/MissionAndVision" class="dropdown-item">Our team’s mission and visions</Link>
                            <Link to="/CoreValues" class="dropdown-item">Core Values</Link>
                            <Link to="/OurTeam" class="dropdown-item">Our Team</Link>
                        </div>
                    </li>                     
                </ul>
            </div>     
            </div>
	</nav>
</header>
    );
}
