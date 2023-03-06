import React, { Component } from "react";



// Component exports the Home page structure to be rendered in the 'App' function
export class Home extends Component {
    render() {
        return (
            <>
{/*opening title */}
        <div class="container-fluid ">
          <div class="row " >
              <div class="bg9 min-vh-100 animation fade-in-image"></div>
          </div>
        </div>
{/*carousel*/}

<div id="carouselExampleIndicators" class="carousel slide carousel-fade carousel-top " data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  
  <div class="carousel-inner ">
    <div class="carousel-item item active">
      <img src="/media/greenhouse-2.jpg" class="d-block w-100" alt="pic1"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item ">
      <img src="/media/OIP-2.jpg" class="d-block w-100" alt="pic2"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item ">
      <img src="/media/grainbin.jpg" class="d-block w-100" alt="pic3"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<hr/>

{/* blurb container */}
<br/>
<div class="container">
        <div>
            <div class="container-fluid bg15">
                <div class="row " >
                    <div class="col-3 text-right ">
                    <div class="font-a11 w3-animate-left">A little about us:</div>
                </div>
                    <div class="col-9 left font-a33 w3-animate-right">
                    message goes here
                    </div>
                </div>
            <br/>
            <hr/>
            <br/>
            <div class="row " >
                    <div class="col-3 ">
                    <div class="font-a11 w3-animate-left">Message from our President:</div>
                </div>
                    <div class="col-9 font-a33 w3-animate-right">
                    message goes here
                    </div>
                </div>
            <br/>
            <hr/>
            <br/>
            <div class="row " >
                <div class="col-3 right">
                <div class="font-a11 w3-animate-left">Message from our Team:</div>
                </div>
                <div class="col-9 font-left font-a33 w3-animate-right">
                We are a young, dynamic and diversified company who present ideas and “doing” over problems.  
                We are an experienced team with many years of experience within different fields and studies, which makes us very unique within our market place(s).  The company is currently debt-free and is based on a fully equity type structure.  In return our dedicated team prides and focusses on growth development, cash flow and the benefits to all affected stakeholders.  
                A message to our Stakeholders
                
                </div>
            </div>
            <div class="row ">
                <div class="col-3 ront-right w3-animate-left">
                </div>
                <div class="col-9 font-left font-a33 w3-animate-right">
                As we pride ourselves with team, our stakeholders are our most valuable members.
                Our stakeholders receive up to date notifications, reports and opportunities to share ideas.
                </div>
            </div>
            <br/>
            <hr/>
            <br/>
            <div class="row " >
                <div class="col-3 right">
                <div class="font-a11 w3-animate-left">A message to our Stakeholders:</div>
                </div>
                <div class="col-9 left font-a33 w3-animate-right" >
                As we pride ourselves with team, our stakeholders are our most valuable members.
            Our stakeholders receive up to date notifications, reports and opportunities to share ideas.

                </div>
            </div>
            </div>
        </div>
        </div>
            </>
        );
    }
}

export default Home;
