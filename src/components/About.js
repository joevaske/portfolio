import React, { Component } from 'react';
import Scroll from './Scroll';
export default class About extends Component {
 
  render() {
   
    return (
      
    <section className="content-section bg-light" id="about">
    <div className="container text-center">
      <div className="row">
        <div className="col-lg-10 mx-auto">


        <h3>
        Web developer/Graphic Designer/IT Business Analyst/Traffic Engineer
        </h3>
        <p className="lead">
          13+ years experience designing, drawing, and programing.
        </p>

      

<center>
    <div id="SkillBox">
    <div className="SkillBar">
        <div id="Skill-HTML"> 
        <span className="Skill-Area ">HTML</span>
        <span className="PercentText ">100%</span>
        </div>
    </div>
    
    <div className="SkillBar">
        <div id="Skill-CSS">
        <span className="Skill-Area ">CSS/CSS3</span>
        <span className="PercentText ">85%</span>
        </div>
    </div>

    <div className="SkillBar">
        <div id="Skill-JS">
        <span className="Skill-Area ">JavaScript</span>
        <span className="PercentText ">80%</span>
        </div>
    </div>

    <div className="SkillBar">
        <div id="Skill-jQuery">
        <span className="Skill-Area ">jQuery</span>
        <span className="PercentText ">75%</span>
        </div>
    </div>

    <div className="SkillBar">
    <div id="Skill-REACT">
        <span className="Skill-Area ">React/Gatsby</span>
        <span className="PercentText ">65%</span>
    </div>
    </div>
    <div className="SkillBar">
    <div id="Skill-PHP">
    <span className="Skill-Area ">PHP </span>
    <span className="PercentText ">80%</span>
    </div>
    </div>

    <div className="SkillBar">
    <div id="Skill-SQL">
    <span className="Skill-Area ">SQL </span>
    <span className="PercentText ">65%</span>
    </div>
    </div>
    
    <div className="SkillBar">
        <div id="Skill-PHOTOSHOP">
        <span className="Skill-Area ">Adobe Photoshop</span>
        <span className="PercentText ">75%</span>
        </div>
    </div>
    
        <div className="SkillBar">
        <div id="Skill-ILLUSTRATOR">
        <span className="Skill-Area ">Adobe Illustrator</span>
        <span className="PercentText ">70%</span>
        </div>
    </div>

        <div className="SkillBar">
        <div id="Skill-MMA">
        <span className="Skill-Area ">Karate/Brazilian Jiu Jitsu</span>
        <span className="PercentText ">95%</span>
        </div>
    </div>
    
    </div>
</center>
















        {/*
           <h2>
          Web developer/Graphic Designer, IT Business Analyst and Traffic Engineer
          </h2>
          <p className="lead">
            13+ years experience designing, drawing, and programing.
          </p>
          <p className="lead">
          Talented designer with wide aspect of work. 
          </p>
          <p className="lead">
          Involved and individualy finished many projects.
          </p>
          <p className="lead mb-5">
          Excelent team player and successful sportsman ready for improvement and learning every day
          </p>
        
        
        */}
       

          <Scroll type="id" element="resumes" offset={100}>
            <a className="btn btn-dark btn-xl" href="#resumes">
              My Resumes
            </a>
          </Scroll>
        </div>
      </div>
    </div>
  </section>

    );
  }
}
