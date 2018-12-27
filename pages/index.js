import Link from 'next/link';
import { Component } from 'react';
import html5 from '../images/html5.png';
import jsx from '../images/jsx.png';
import css3 from '../images/css3.png';
import sass from '../images/sass.png';
import less from '../images/less.png';
import bootstrap from '../images/bootstrap.png';
import javascript from '../images/javascript.png';
import jquery from '../images/jquery.png';
import node from '../images/nodejs.png';
import php from '../images/php.png';
import mysql from '../images/mysql.png';
import webpack from '../images/webpack.png';
import gulp from '../images/gulp.png';
import next from '../images/nextjs.png';
import wordpress from '../images/wordpress.png';

class Index extends Component{

 constructor(props){
   super(props);
 }

render(){
   return(
     <div className="home-holder">
       <div className="container">
        <h2 className="title-page">Welcome to my Website</h2>
        <p>My Name is Louie Pearl Sison, I have a degree on Bachelor of Science in Information Technology,
        I am pursuing the Website Development field with a company where I can improve my talent, wisdom,
        knowledge and skills and at the same time would help the company to be more successful, which in
        doing so will expand and grow. Please see the skills below that i possess as of the moment.</p>
        </div>
       <div className="skills-container">
         <div className="row">
           <div className="col-lg-3 col-md-6">
              <div className="img-holder">
                <img src={html5} className="img-responsive"/>
              </div>
              <div className="div-opacity-holder">
                <p>HTML5</p>
                <h6>Hypertext Markup Language</h6>
              </div>
           </div>
           <div className="col-lg-3 col-md-6">
             <div className="img-holder">
               <img src={jsx} className="img-responsive"/>
             </div>
             <div className="div-opacity-holder">
                <p>JSX</p>
                <h6>JavaScript Syntax Extension</h6>
             </div>
           </div>
           <div className="col-lg-3 col-md-6">
             <div className="img-holder">
               <img src={css3} className="img-responsive"/>
             </div>
             <div className="div-opacity-holder">
                <p>CSS3</p>
                <h6>Cascading Style Sheets 3</h6>
             </div>
           </div>
           <div className="col-lg-3 col-md-6">
             <div className="img-holder">
               <img src={sass} className="img-responsive"/>
             </div>
             <div className="div-opacity-holder">
                <p>SASS</p>
                <h6>SassScript</h6>
             </div>
           </div>
         </div>

         <div className="row">
           <div className="col-lg-3 col-md-6">
              <div className="img-holder">
                <img src={less} className="img-responsive"/>
              </div>
              <div className="div-opacity-holder">
                <p>LESS</p>
                <h6>Learner Style Sheets</h6>
              </div>
           </div>
           <div className="col-lg-3 col-md-6">
             <div className="img-holder">
               <img src={bootstrap} className="img-responsive"/>
             </div>
             <div className="div-opacity-holder">
                <p>BOOTSTRAP</p>
                <h6>Open-source Front-end Framework</h6>
             </div>
           </div>
           <div className="col-lg-3 col-md-6">
             <div className="img-holder">
               <img src={jsx} className="img-responsive"/>
             </div>
             <div className="div-opacity-holder">
                <p>REACT</p>
                <h6>JavaScript Library for Building User Interfaces</h6>
             </div>
           </div>
           <div className="col-lg-3 col-md-6">
             <div className="img-holder">
               <img src={javascript} className="img-responsive"/>
             </div>
             <div className="div-opacity-holder">
                <p>JAVASCRIPT</p>
                <h6>Client-Side Scripting Language</h6>
             </div>
           </div>
         </div>

         <div className="row">
           <div className="col-lg-3 col-md-6">
              <div className="img-holder">
                <img src={jquery} className="img-responsive"/>
              </div>
              <div className="div-opacity-holder">
                <p>JQUERY</p>
                <h6>JavaScript library designed to simplify HTML DOM</h6>
              </div>
           </div>
           <div className="col-lg-3 col-md-6">
             <div className="img-holder">
               <img src={node} className="img-responsive"/>
             </div>
             <div className="div-opacity-holder">
                <p>NODE</p>
                <h6>Cross-Platform JavaScript Run-Time Environment</h6>
             </div>
           </div>
           <div className="col-lg-3 col-md-6">
             <div className="img-holder">
               <img src={gulp} className="img-responsive"/>
             </div>
             <div className="div-opacity-holder">
                <p>GULP</p>
                <h6>Open-Source JavaScript Toolkit</h6>
             </div>
           </div>
           <div className="col-lg-3 col-md-6">
             <div className="img-holder">
               <img src={next} className="img-responsive"/>
             </div>
             <div className="div-opacity-holder">
                <p>NEXTJS</p>
                <h6>lightweight framework for static and server-rendered applications</h6>
             </div>
           </div>

         </div>

         <div className="row">
           <div className="col-lg-3 col-md-6">
              <div className="img-holder">
                <img src={webpack} className="img-responsive"/>
              </div>
              <div className="div-opacity-holder">
                <p>WEBPACK</p>
                <h6>Open-Source JavaScript Module Bundler</h6>
              </div>
           </div>
           <div className="col-lg-3 col-md-6">
             <div className="img-holder">
               <img src={php} className="img-responsive"/>
             </div>
             <div className="div-opacity-holder">
                <p>PHP</p>
                <h6>Hypertext Preprocessor is a Server-Side Scripting Language </h6>
             </div>
           </div>
           <div className="col-lg-3 col-md-6">
             <div className="img-holder">
               <img src={mysql} className="img-responsive"/>
             </div>
             <div className="div-opacity-holder">
                <p>MYSQL</p>
                <h6>Open Source Relational Database Management System</h6>
             </div>
           </div>
           <div className="col-lg-3 col-md-6">
             <div className="img-holder">
               <img src={wordpress} className="img-responsive"/>
             </div>
             <div className="div-opacity-holder">
                <p>WORDPRESS</p>
                <h6>Free and Open-Source Content Management System Based on PHP and MySQL</h6>
             </div>
           </div>
         </div>

       </div>

       <style jsx>{`
           .home-holder{
             height:500px;
            }

           .home-holder .container p
           {
             color: #999999 !important;
           }
           .skills-container .row {
             margin-left: 0;
             margin-right: 0;
           }
           .skills-container .row div {
             height: 250px;
             text-align: center;
           }
           .skills-container .row div .img-holder {
             padding-top: 48px;
           }
           .skills-container .row div .img-holder img{
             height: 130px;
           }
           .skills-container .row div .div-opacity-holder
           {
             background-color: transparent;
             position: absolute;
             height: 250px;
             width: 90%;
             top: 0;
             left: 15px;
             -webkit-transition: background-color 0.8s ease;
             -ms-transition: background-color 0.8s ease;
             transition: background-color 0.8s ease;
           }
           .skills-container .row div .div-opacity-holder p:first-child
           {
             position: relative;
             top: 0;
             opacity: 0;
             text-align: left;
             padding-left: 15px;
             padding-right: 15px;
             color: #e5e5e5 !important;
             -webkit-transition: opacity 0.8s ease, top 0.8s;
             -ms-transition: opacity 0.8s ease, top 0.8s;
             transition: opacity 0.8s ease, top 0.8s;
            }
            .skills-container .row div .div-opacity-holder h6
            {
              position: relative;
              color: #999999 !important;
              top: 15px;
              opacity: 0;
              text-align: left;
              padding-left: 15px;
              padding-right: 15px;
              -webkit-transition: opacity 0.8s ease, top 0.8s;
              -ms-transition: opacity 0.8s ease, top 0.8s;
              transition: opacity 0.8s ease, top 0.8s;
             }
           .skills-container .row div .div-opacity-holder:hover {
             cursor: pointer;
             background-color: rgba(0, 0, 0, 0.5);
             -webkit-transition: background-color 0.8s ease;
             -ms-transition: background-color 0.8s ease;
             transition: background-color 0.8s ease;
           }
           .skills-container .row div .div-opacity-holder:hover p:first-child
           {
             opacity: 1;
             top: 15px;
             -webkit-transition: opacity 0.8s ease, top 0.8s;
             -ms-transition: opacity 0.8s ease, top 0.8s;
             transition: opacity 0.8s ease, top 0.8s;
           }
           .skills-container .row div .div-opacity-holder:hover h6
           {
             opacity: 1;
             top: 0;
             -webkit-transition: opacity 0.8s ease, top 0.8s;
             -ms-transition: opacity 0.8s ease, top 0.8s;
             transition: opacity 0.8s ease, top 0.8s;
           }


       `}</style>
     </div>


    );
 }

}



export default Index;
