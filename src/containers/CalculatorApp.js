import "./styles.css";
import React, { Component } from "react";

import DisplayPanel from "../components/DisplayPanel/DisplayPanel";
import Header from "../components/Header/Header";
import InputButton from "../components/InputButton/InputButton";



export default class CalculatorApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBaseColor: "light",
      calculatorStyle: {
        display: "grid",
        gridTemplateColumns: "25% 25% 25% 25%",
        gridTemplateRows: "43% 43% 43% 43%",
        marginTop: "15%",
      }
    };
    this.handleThemeToggle = this.handleThemeToggle.bind(this);
  }


  componentDidMount(){
    const calculatorElement = document.getElementById("calculatorApp");

    calculatorElement.addEventListener("mousedown",
     (e)=>{

        const clickOffset_x = (e.clientX-window.innerWidth/2)/calculatorElement.offsetWidth

        const clickOffset_y = (e.clientY-window.innerHeight/2)/calculatorElement.offsetHeight
        /*
        alert(clickOffset_x)
        alert(clickOffset_y)
        */
        let calculatorTransform;

        if(clickOffset_x > 0.2 && clickOffset_y > 0.2){
          let x_rotate = -5, y_rotate = 5;
          calculatorTransform = "perspective(2000px) rotateX("+clickOffset_x/0.2*x_rotate+"deg) rotateY("+clickOffset_y/0.2*y_rotate+"deg)"
          
        }
        else if(clickOffset_x < -0.2 && clickOffset_y > 0.2){
          let x_rotate = -5, y_rotate = -5;
          calculatorTransform = "perspective(2000px) rotateX("+clickOffset_x/-0.2*x_rotate+"deg) rotateY("+clickOffset_y/0.2*y_rotate+"deg)"
          }
        else if(clickOffset_y<0.2 && clickOffset_y >-0.2 && clickOffset_x<0.2 && clickOffset_x >-0.2){
          calculatorTransform = "scale(0.98,0.98)"
          //alert("yo")
        }
        const rotateX = Math.abs(clickOffset_x/0.15)*-5;
        const rotateY = 0;
        if(rotateX>-7)[
          calculatorTransform = "scale(0.98,0.98)"
        ]

        calculatorTransform = "perspective(2000px) rotateX("+rotateX+"deg)"
        calculatorElement.style.transform = calculatorTransform


     })

     calculatorElement.addEventListener("mouseup",(e)=>{
       //alert("o")
      calculatorElement.style.transform = "rotateX(0deg)"
      calculatorElement.style.transition = "all 0.25s";

     });
  }



  handleThemeToggle() {
    this.setState((state) => {
      if (state.currentBaseColor == "dark") {
        return { 
          currentBaseColor: "light"
         };
      } else {
        if (state.currentBaseColor == "light") {
          return { 
            currentBaseColor: "dark"
           };
        }
      }
    });
  }
  render() {
    return (
    
  
      <div className={this.state.currentBaseColor == "dark" ? "calculator-dark" : "calculator"} id="calculatorApp" >

            <Header
              title="FCC Calculator App"
              themeToggleImage={this.state.currentBaseColor}
              handleThemeToggle={this.handleThemeToggle}
            />
            <DisplayPanel theme={this.state.currentBaseColor}/>
            <div className="numberPad">
                        <InputButton id="clear" class="inputButton" buttonText="AC" theme={this.state.currentBaseColor}/>
                        <InputButton id="clearLine" class="inputButton" buttonText="C" theme={this.state.currentBaseColor}/>
                        <InputButton id="divide" class="inputButton" buttonText="/" theme={this.state.currentBaseColor}/>
                        <InputButton id="multiply" class="inputButton" buttonText="X" theme={this.state.currentBaseColor}/>

                    

                        <InputButton id="seven" class="inputButton" buttonText="7" theme={this.state.currentBaseColor}/>
                        <InputButton id="eight" class="inputButton" buttonText="8" theme={this.state.currentBaseColor}/>
                        <InputButton id="nine" class="inputButton" buttonText="9" theme={this.state.currentBaseColor}/>
                        <InputButton id="subtract" class="inputButton" buttonText="-" theme={this.state.currentBaseColor}/>

                       

                        <InputButton id="four" class="inputButton" buttonText="4" theme={this.state.currentBaseColor}/>
                        <InputButton id="five" class="inputButton" buttonText="5" theme={this.state.currentBaseColor}/>
                        <InputButton id="six" class="inputButton" buttonText="6" theme={this.state.currentBaseColor}/>
                        <InputButton id="add" class="inputButton" buttonText="+" theme={this.state.currentBaseColor}/>
                        
                       

                        <InputButton id="one" class="inputButton" buttonText="1" theme={this.state.currentBaseColor}/>
                        <InputButton id="two" class="inputButton" buttonText="2" theme={this.state.currentBaseColor}/>
                        <InputButton id="three" class="inputButton" buttonText="3" theme={this.state.currentBaseColor}/>
                        <InputButton id="equals" class="bigInputButton" buttonText="=" theme={this.state.currentBaseColor}/>
                        
                     

                        <InputButton id="?" class="inputButton" buttonText="?" theme={this.state.currentBaseColor}/>
                        <InputButton id="zero" class="inputButton" buttonText="0" theme={this.state.currentBaseColor}/>
                        <InputButton id="decimal" class="inputButton" buttonText="." theme={this.state.currentBaseColor}/>
              </div>
        
      </div>
    );
  }
}
