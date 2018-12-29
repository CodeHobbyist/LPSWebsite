import Link from 'next/link';
import { Wave  } from 'react-animated-text';
import React, { Component } from 'react';

class About extends Component {

constructor(props){
  super(props);

  this.state = {
      sentenceValue: 'default',
      firstCondition: false,
      secondCondition: false,
      thirdCondition: false
   }
}

_onClick(event){
  if(event === 'describe'){
     this.setState({
         sentenceValue: event,
         firstCondition: !this.state.firstCondition,
         secondCondition: false,
         thirdCondition: false
       });
   }
   else if(event === 'education'){
     this.setState({
         sentenceValue: event,
         firstCondition: false,
         secondCondition: !this.state.secondCondition,
         thirdCondition: false
       });
   }
   else if(event === 'recent'){
     this.setState({
         sentenceValue: event,
         firstCondition: false,
         secondCondition: false,
         thirdCondition: !this.state.thirdCondition
       });
   }
}


render() {
  return(
    <div className="about-holder">
       <div className="container">
         <h2 className="title-page">About</h2>
         <ul className="list-group">
           <li className={this.state.firstCondition ? "list-group-item disable" : "list-group-item"} onClick={event => this._onClick(event = "describe")}><span>About Me</span></li>
           <li className={this.state.secondCondition ? "list-group-item disable" : "list-group-item"} onClick={event => this._onClick(event = "education")}><span>My Education</span></li>
           <li className={this.state.thirdCondition ? "list-group-item disable" : "list-group-item"} onClick={event => this._onClick(event = "recent")}><span>My Recent Work Experiences</span></li>
         </ul>
         <ContentAbout
            sentenceValue = {this.state.sentenceValue}
            conditionValue = {this.state.condition}
            readMoreValue = {this.state.readMoreValue}
         />
    </div>
    <style jsx>{`
        .about-holder{
          height:500px;
         }
        h1 {
          padding-bottom: 25px;
        }
        .list-group {
          display: block !important;
          height: 50px;
          padding-top: 5px;
         }
         .list-group-item {
           float: left;
           position: inherit;
           margin-right: 8px;
           border-radius: 2px;
           font-weight: 600;
           padding: 0.2rem 1rem;
           background-color: transparent;
           border-color: #222;
           color: #e5e5e5 !important;
           -webkit-transition: border 0.5s ease;
           -ms-transition: border 0.5s ease;
           transition: border 0.5s ease;
         }
         .list-group-item:hover
         {
           cursor: pointer;
           border: 1px solid;
           -webkit-transition: border 0.5s ease;
           -ms-transition: border 0.5s ease;
           transition: border 0.5s ease;
         }
         .disable
         {
           font-weight: 600;
           border: 1px solid;
         }
         .read-more:hover
         {
           cursor: pointer;
         }
         .hide {
           display: none;
         }
         .show {
           display: block;
         }
         .disable {
           pointer-events:none;
          }

      `}</style>
    </div>

  );
}

}

export default About;
export const ContentAbout = ({sentenceValue}) => {

let TitleValue = "Please choose what do you want to know about me." ;
let MainContent = () => (
   <p>{TitleValue}</p>
);

if(sentenceValue === 'describe'){
    TitleValue = "About Me";
    MainContent = () => (
      <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <span>
              <h3><Wave text={TitleValue} effect="verticalFadeIn" effectDirection="down" speed={40} effectDuration={0.1} iterations={1}/></h3>
            </span>
          </div>
          <div className="col-md-12 col-sm-12 col-xs-12">
              <p>My name is Louie Pearl Sison, born and raised in the Philippines
                as mentioned on my home page i'm a  graduate of Bachelor of Science In Information Technology
                at Informatics College which is based in the philippines.
              </p>
              <p>
                I'm a Website / Web App Developer for more than 3 years now, my very first job was a WordPress / front-end developer at 4thshift
                Global Solutions based on Makati, Metro Manila Philippines. I worked for over 8 months there then i was hired at Nowcom global
                Solutions for Mid Software Engr for over 2 years, i was also a WordPress / front-end developer.
              </p>
              <p>
                I can say that i grew up working on Nowcom, not only as a Website Developer but also as a human being because i learned a lot from
                how to handle stress to how to handle tasks the correct way, for example, what is the right thing to do if for example you have a bug on the
                production sites etch. i worked at Nowcom for over 2 beautiful and properous years, i left nowcom as a Mid Software Engr.
              </p>
              <p>
                Then came an opportunity to go abroad, I am now staying here in New Zealand to be with my future loving wife, which in doing so
                will try the waters here in New Zealand in terms of the IT world. I am always very passionate when it comes to work because i believe
                you will always need to prove something, i always loved to prove doubters wrong, i guess that is my thing.
              </p>
              <p>
                I always love to try new things, new Technologies, new learnings, specially in the IT industry. you should always be updated on the New
                Technologies in the market so that your skills and knowledge will also be the latest trends. I admit i'm still not the seasoned veteran
                Website Developer, but i think what i can put on the table is hardwork, passion and will not say "No" for an answer. i will always
                find the answer no matter what. ow and yeah not to mention im easy to get along with. my communication skills is crisp as a fried chicken can be.
              </p>
              <p>
                So yeah, if you think im very well suited on your company, please hit me up at <Link href="/contact">Contact Me</Link>
              </p>
              <p>
               P.S. Im not a Website Designer so kindly excuse my UI.
              </p>
          </div>

      </div>

    );
}
else if(sentenceValue === 'education'){

  TitleValue = "My Education";
  MainContent = () => (
    <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <span>
            <h3><Wave text={TitleValue} effect="verticalFadeIn" effectDirection="down" speed={40} effectDuration={0.1} iterations={1}/></h3>
          </span>
        </div>
        <div className="col-md-12 col-sm-12 col-xs-12">
           <ul>
              <li>Bachelor of Science In Information Technology - Informatics College Eastwoord</li>
              <li>Advance International Diploma in Information Technology (2 Year Course) - Informatics College Legazpi</li>
              <li>Bachelor of Science In Nursing - University of Sto Thomas Legazpi</li>
           </ul>
        </div>
     </div>
  );
}
else if(sentenceValue === 'recent'){
  TitleValue = "My Recent Work Experiences";
  MainContent = () => (
    <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <span>
            <h3><Wave text={TitleValue} effect="verticalFadeIn" effectDirection="down" speed={40} effectDuration={0.1} iterations={1}/></h3>
          </span>
        </div>
        <div className="col-md-12 col-sm-12 col-xs-12">
        <ul>
           <li>4thShift Global Solutions - WordPress Developer</li>
           <li>Nowcom Global Solutions - Mid Software Engineer (WordPress/Front-end Developer)</li>
        </ul>
     </div>
    </div>

  );
}
return (
    <div className="content-about-holder">
       <MainContent />
    <style jsx>{`
      .content-about-holder {
        position: relative;
        padding-top: 20px;
        text-align: justify !important;
        font-size: 20px;
        color: #999999;
      }
    `}</style>
    </div>
  );

};
