import { createGlobalStyle } from "styled-components";
import {
  b1,
  b2,
  b3,
  large,
  xlarge,
  medium,
  small,
  xsmall,
  primaryFont,
  secondaryFont,
} from "./utilsStyle";

const GlobalStyle = createGlobalStyle`
* {
    padding:0px;
    margin:0px;
    box-sizing:border-box;
}
.cinzelStyle {
    font-family: ${primaryFont};
    font-weight: ${b3};
 
}
.headerWrapper{
    overflow: visible;
    position: fixed;
    top: 0;
    z-index: 4;
 
    background: #111;
 
    height: 78px;
    width: 100%;
 
    @media all and (max-width:${large}){
     height:auto;
    }
 
    .logo {
        width: 263px;
        height: 100px;
        cursor: pointer;
        position: relative;
        z-index: 1;
        @media all and (max-width:${large}){
            height: auto;
            width: 120px;
            background-image:none;
             margin-bottom: 0px;
        }
        img{
           width: 100%;
           height:100%;
      
           display:none;
           @media all and (max-width:${large}){
            display:block;
           }
        }
    }
    .navLink,a {
        white-space: nowrap;
        font-family: ${primaryFont};
        font-weight: ${b2};
        font-size: 18px;
        line-height: 21px;
        text-transform: uppercase;
        color: #EDEDED;
        margin-right:20px;
        cursor: pointer;
        text-decoration: none;
        &.active{
        color: #E6C04E;
        }
        &:hover{
            color: #E6C04E; 
            transition: all 0.5s ease-in-out;
        }
        
    }
    .flex-row-center {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .flex-row-left {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        position: absolute;
        margin-top: 45px;
    }
    .flex-row-right {
 
        align-items: center;
        justify-content: flex-end;
        position: absolute;
        margin-bottom: 30px;
    }
}
.responsiveWrapper{
    text-transform: uppercase;
    font-family: ${primaryFont};
    font-weight: ${b3};
    &.active{
        color: #E6C04E;
        }
        &:hover{
            color: #E6C04E; 
        }
}
.heroWrapper {
    height: 1835px;
 
    position: relative;
    overflow: hidden;
    
    @media all and (max-width:${xlarge}) {
        height: 100vh;
        width: auto;
        padding: 25% 0px;
        position: "relative";
    } 
    .label {
 
        position: relative;
        padding: 400px 0px 0px 400px;
        @media all and (max-width:${xlarge}) {
          padding: 70px 0px 0px 20px;
        }     
    }
    .btnRead{
        margin-top:20px;   
        
    }
}
.socialWrapper {
    width:1000px;
    margin: 0 auto;
    background: rgba(1, 1, 1, 0.3);
 
    box-sizing: border-box;
 
    border-radius: 5px;
    padding: 30px 80px;
    position: absolute;
    top: -50px;
    z-index: 1;
    left: 50%;
    transform: translateX(-50%);
    @media all and (max-width:${large}) {
        width: 90%;
        margin: 0px 10px;
        padding: 30px 40px;
    } 
    @media all and (max-width:${xsmall}) {
        display: none;
    } 
    .icons {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
 
    }
    .imgIcon {
        cursor: pointer;
        &:hover {            
            transform: scale(1.2);
            transition-duration: 0.2s;
        } 
    }
    .sliderAction{
        width: 50px;
        @media all and (max-width:${large}) {
            width: 25px;
        } 
    }
}
.sectionOneWrapper {
    height: 100%;
    padding-top: 10%;
    
    background: #0E1922;
    position: relative;
    overflow: visible;
    
    @media all and (min-width:${large}) {
        padding-bottom:1300px;
    } 
    
    @media all and (min-width:${medium}) {
      padding-bottom:800px;
    } 
    .popularText {
      width: 800px;
      margin: auto;
      @media all and (max-width:${large}) {
          width: 100%;
      }  
    }
    .head{
       margin-bottom: 73px;
       line-height: 55px;  
    }
    .tip {
      position: absolute;
      @media all and (max-width:${large}) {
          display: none;
      }
      &.p1Tip{
          left: 0px;
          top: 5%;
          width: 200px;
      }
      &.p2Tip{
          right: 0px;
          top: 20%;
          width: 100px;
      }
      &.p3Tip{
          left: 0px;
          top: 50%;
          width: 100px;
      }
      &.p4Tip{
          right: 0px;
          bottom: 0px;
          width: 400px; 
      }
    }
    .innerRow{
        width: 1000px;
        margin: 0 auto;
      @media all and (max-width:${large}) {
          width: 100%;
      }   
    }
    .col-12 {
      @media all and (max-width:${large}) {
         text-align:center;
      }   
    }
  
    .leftImage{
      @media all and (max-width:${large}) {
          width: 350px;
          margin: 0 auto;
      } 
    }
    .textWrapper{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content:center;
    }
    .innerHead{
      font-size: 25px;
      line-height: 30px; 
      font-family:${secondaryFont}; 
      margin-bottom: 30px;
      text-align: left;
      @media all and (max-width:${large}) {
          text-align: center;
      } 
    }
    .dec{
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 28px;
      color: #EDEDED; 
      font-family: ${secondaryFont}; 
    }
}
.sectionTwoWrapper {
     

    background-color: #2B2946;
    position: relative;
    
    @media all and (min-width:${large}) {
        padding: 120px 0px;
 
        padding-bottom:1300px;
        padding: 70px 0px;
    }
    @media all and (min-width:${medium}) {
        padding-bottom:800px;
    } 
    .headingMain{
        margin-bottom: 20px;
    }
    .decText{
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        color: #EDEDED;
        width: 703px;
        margin: 0 auto;
        font-family: ${secondaryFont};
        text-align: center;
        text-transform: capitalize;
        width: 100%;
        @media all and (max-width:${xlarge}) {
            width: 80%;
        }
    }
    .sideImage {
        width: 100%;
        @media all and (max-width:${xlarge}) {
            width: 80%;
        } 
        @media all and (max-width:${large}) {
            width: 100%;
        } 
        @media all and (max-width:${medium}) {
            position: relative;
            width: 50%;
            margin: 0 auto;
        } 
   }
   .col-sm-12 {
        @media all and (max-width:${xlarge}) {
            text-align: center;
            position: relative;
        }     
    }
    .mt-c {
        padding-top: 272px; 
        padding-bottom: 0px;
        font-family: ${secondaryFont};
        text-align:left;
        line-height: 40px;
        @media all and (max-width:${large}) {
            padding-top: 50px; 
        }
        span {
            &:after{
                bottom: -3px;
                right: 93px;   
            }
        }
    
    }
    .innerDec{
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 28px;  
        font-family: ${secondaryFont};
        text-align: left;
        margin-bottom:30px;
        @media all and (max-width:${large}) {
            width: 100%;
        }
    }
}
.roadmapWrapper {
    height: 100%;
    padding-top: 10%;
    
    background: #0E1922;
    position: relative;
    overflow: visible;
    position: relative;
    height: 100%; 
    @media all and (min-width:${large}) {
        padding: 120px 0px;
    }
    
}
.headingMain{
    font-family: ${primaryFont};
    font-style: normal;
    font-weight: ${b3};
    font-size: 50px;
    line-height: 70px;
    color: #E6C04E;
    text-transform: uppercase;
    text-align: center;
    @media all and (max-width:${small}){
        font-size: 30px;
        line-height: 40px;
    }
    &.timeLineHead {
        font-family: ${primaryFont};
        font-size: 29px;
        line-height: 30px;
        width: 278px;
        text-align:left;
        text-transform: uppercase;
        margin: 40px 20px 10px 20px;
        span{
            &:after{
                width:140px;
                @media all and (max-width:${small}){
                    display: none;
                }
            }
        }
    }
}
.timeLineList {
    margin: 0px 39.5px;
    padding: 0px;
    list-style:none;
    &.mt-negative{
        margin-top: -205px;
    }
    .listItem {
        font-family: ${secondaryFont};
        font-style: normal;
        font-weight: 500;
        font-size: 22px;
        line-height: 30px;
        padding: 0px;
        color: #EDEDED;
        position: relative;
        &:before {
            content:"";
            background: #00FFFA;
            width: 12px;
            height: 12px;
            position: absolute;
            left: -18px;
            top: 10px;
            clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);
        }
    } 
}
.timeline {
	position: relative;
	padding: 0px 0;
	width: 1000px;
    margin: 0 auto;
	box-sizing: border-box;
    @media all and (max-width:${large}) {
        width: 100%;
        
    }
    
	&:before {
		content: '';
		position: absolute;
		left: 50%;
        width: 3px;
        height: 86.7%;
        background: #00FFFA;
        @media all and (max-width:${large}) {
            height: 100%;
            display: none;
        }
	}
    &:after {
	   content: '';
	   position: absolute;
       width: 54px;
       height: 54px;
        top: -54px;
        left: 47.5%;
        background: #00FFFA;
	   border-radius: 50%;
	   box-shadow: 0 0 0 3px rgba(0, 255, 250, 0.25);    
       @media all and (max-width:${small}){
        display: none;
        }
	}
	.mainTimeUl {
		padding: 0;
		margin: 0;
        display: inline-block;
        @media all and (max-width:${small}) {
          width: 100%;
            
        }
		.mainTimeLi {
			list-style: none;
			position: relative;
			width: 100%;
			box-sizing: border-box;
            
			&:nth-child(odd) {
				float: left;
				clear: both;
                text-align: left;
                padding: 50px 100px 50px 50px;
                .content {
                    background: rgba(17, 17, 17, 0.8);
                    border: 2px solid #00FFFA;
                    box-sizing: border-box;
                     
                    border-radius: 20px;
                    padding-bottom: 20px;
                    
                    @media all and (min-width:${medium}) {
                        width: 300px;
                    }
                }
				&:before {
					content: '';
					position: absolute;
					width: 30px;
					height: 30px;
                    top: 47%;
                    right: 84px;
                    background: #00FFFA;
					border-radius: 50%;
                    z-index: 1;
                    box-shadow: 0 0 0 3px rgba(0, 255, 250, 0.25);    @media all and (max-width:${small}){
                        display: none;
                    }
				}
                &:after{
                    content:"";
                    position: absolute;
                    top: 50%;
                    right: -53px;
                    width: 145px;
                    height: 3px;
                    background: #00FFFA;
                    @media all and (max-width:${medium}) {
                        display: none;
                    }
                }
			}
			&:nth-child(even) {
				float: right;
				text-align: left;
				clear: both;
                padding: 50px 10px 50px 100px;
                margin: 0px -550px 0px 0px;
                @media all and (max-width:${medium}) {
                    margin: 0px 0px 0px 0px;
                }
                .content {
                    background: rgba(17, 17, 17, 0.8);
                    border: 2px solid #00FFFA;
                    box-sizing: border-box;
                    
                    border-radius: 20px;
                    padding-bottom: 20px;

                    @media all and (min-width:${medium}) {
                        width: 300px;
                    }
                }
				&:before {
					content: '';
					position: absolute;
					width: 30px;
					height: 30px;
                    top: 47.5%;
					left: 85px;
                    z-index: 1;
                    background: #00FFFA;
					border-radius: 50%;
                    box-shadow: 0 0 0 3px rgba(0, 255, 250, 0.25);
                    @media all and (max-width:${small}){
                        display: none;
                    }
				}
                &:after{
                    content:"";
                    position: absolute;
                    top: 50%;
                    left: -50px;
                    width: 150px;
                    height: 3px;
                    background: #00FFFA;
                    @media all and (max-width:${medium}) {
                        display: none;
                    }
                }
			}
		}
	}
}
 
@media all and (max-width:${medium}) {
	.timeline {
		width: 100%;
		padding-bottom: 0;
		&:before {
			left: 20px;
			height: 100%;
		}
        &:after {
            width: 30px;
            height: 30px;
            top: -25px;
            left: 7px;
		}
        .mt-negative{
          margin-top: -108px;
        }
		.mainTimeUl {
			.mainTimeLi {
				&:nth-child(odd) {
					width: 100%;
					text-align: left;
                    padding: 50px;
					&:before {
                        top: 50%;
                        left: 11px;
                        width: 20px;
                        height: 20px;
					}
				}
				&:nth-child(even) {
					width: 100%;
					text-align: left;
                    padding: 50px;
					&:before {
                        top: 50%;
                        left: 11px;
                        width: 20px;
                        height: 20px;
					}
				}
			}
		}
	}
}
.redirectWrapper{
    width: 500px;
    height: 100%;
    padding-bottom: 30%;
    .headingMain{
        text-align: center;
        padding-top:30px;
        
    }
 
}
.accessPassWrapper {
    height: 100%;
 
    .headingMain{
        text-align: center;
        padding-top:30px;
    }
    .dec-minting{
        font-family: ${secondaryFont};
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        color: #000000;
        width: 703px;
        margin: 0 auto;
        text-align: center;
        padding: 10px 30px;
        @media all and (max-width:${medium}) {
            width:100%;
        } 
    }
}
.accessPassRow {
    border-radius: 2px;
    
    margin: 0 auto;
    padding: 145px 0;
    @media all and (min-width:${medium}) {
        width:100%;
        width: 1000px;
    } 
 
}
.accessPassHeading { 
    margin-bottom: 30px; 
}
.blockchain-logo {
    border-radius: 5px;
    background-color:rgba(0, 0, 0, 0.3);
    width: 100%; 
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    &:hover {            
        transform: scale(1.06);
        transition-duration: 0.2s;
    } 
    .blockchainTitle {
        padding: 15px 0px 0px 0px;
    }
    .cardBox {
        cursor: pointer;
        width: 80%;
        padding: 0px  0px 0px  0px;
        display: flex;
        align-items: center;
        justify-content: center;     
        transition: all 0.2s ease-in;
        &:hover {
            transform: scale(1.06);
            transition-duration: 0.2s;
        } 
        .priceLabel {
            height: 100%;
            width: 100%;
            color: #fff;
        }
    }
    .bottomSection {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center; 
        
    }   
}
.buttonScale {
    transition: all 0.4s ease-in;
    &:hover {            
        transform: scale(1.03);
        transition-duration: 0.2s;
    }
}
.characterBox {
    align-items: center;
    justify-content: center; 
    cursor: pointer;
    transition: all 0.4s ease-in;
    &:hover {            
        transform: scale(1.06);
        transition-duration: 0.2s;
    } 
}
.selectedCharacterBox {
    border-style: solid;
    border-color: green;
    cursor: pointer;
    transition: all 0.4s ease-in;
    &:hover {            
        transform: scale(1.06);
        transition-duration: 0.2s;
    } 
}
.accessPass {
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.3);
    width: 100%; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    &:hover {            
        transform: scale(1.06);
        transition-duration: 0.2s;
    } 
    .cardBox{
        cursor: pointer;
        width: 80%;
        padding: 12px  0px;
        display: flex;
        align-items: center;
        justify-content: center;     
        transition: all 0.2s ease-in;
        &:hover {
            transform: scale(1.06);
            transition-duration: 0.2s;
        } 
        .priceLabel {
            height: 100%;
            width: 100%;
            color: #fff;
        }
    }
    .bottomSection {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;  
    }
    
}
 
.activateButtonComingSoon {
    background-color:rgba(208, 231, 49, 0.1);
    border-radius: 2px;
    text-decoration: none;
    cursor: pointer;
    width: 80%;
    height: 80%;
     
    font-style: normal;
    font-weight: ${b3};
    font-size: 25px;
    line-height: 19px;
  
    color: #fff;
    font-family: ${secondaryFont};
    text-align: center;
    padding: 10px 5px;
    margin-bottom: 15px;
    &:hover { 
        background:  linear-gradient(-180deg, #00244B, #00558E);
        color: #fff;
        font-family: ${primaryFont};
        font-size: 20px;
    } 
    transition: all 0.3s ease-in;
}
.activateButtonPrototype {
    border-radius: 2px;
    text-decoration: none;
    cursor: pointer;
    width: 80%;
    height: 80%;
    background: linear-gradient(160deg, #03EDFA, #0012B9);
    font-style: normal;
    font-weight: ${b3};
    font-size: 25px;
    line-height: 19px;
  
    color: #fff;
    font-family: ${secondaryFont};
    text-align: center;
    padding: 10px 5px;
    margin-bottom: 15px;
    &:hover { 
        background:  linear-gradient(-180deg, #00244B, #00558E);
        color: #fff;
        font-family: ${primaryFont};
        font-size: 20px;
    } 
    transition: all 0.3s ease-in;
}
.activateButton365 {
    border-radius: 2px;
    text-decoration: none;
    cursor: pointer;
    width: 80%;
    height: 80%;
    background: linear-gradient(160deg, #D0E630, #02A0FE);
    font-style: normal;
    font-weight: ${b3};
    font-size: 30px;
    line-height: 19px;
  
    color: #fff;
    font-family: ${secondaryFont};
    text-align: center;
    padding: 10px 5px;
    margin-bottom: 15px;
    &:hover { 
        background: linear-gradient(-180deg, #00244B, #00558E);
        color: #fff;
        font-family: ${primaryFont};
        font-size: 20px;
    } 
    transition: all 0.3s ease-in;
}
.activateButton {
    border-radius: 2px;
    text-decoration: none;
    cursor: pointer;
    width: 80%;
    height: 80%;
    background: #071846;
    font-style: normal;
    font-weight: ${b3};
    font-size: 25px;
    line-height: 19px;
  
    color: #fff;
    font-family: ${secondaryFont};
    text-align: center;
    padding: 10px 5px;
    margin-bottom: 15px;
    &:hover { 
        background: linear-gradient(-180deg, #00244B, #00558E);
        color: #fff;
        font-family: ${primaryFont};
        font-size: 20px;
    } 
    transition: all 0.3s ease-in;
}
.pageWrapper {
    
    margin: 0 auto;
    padding: 25px 0;
   
    @media all and (min-width:${medium}) {
        width:1000px;
    }  
}
.loginWrapper {
    width: 500px;
   
    margin: 0 auto;
    padding: 100px 0;
    @media all and (max-width:${medium}) {
        width:100%;
    }  
}
.headingWrapper {
    padding-bottom: 5px;
 
    text-align:center;
    .heading {
        font-family: ${primaryFont};
        font-style: normal;
        font-weight: ${b3};
        font-size: 50px;
        line-height: 130%;
        margin-bottom: 25px;
        color: #fff;
    }
    .para {
        font-family: ${secondaryFont};
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        color: #fff;
    }
}

.transparentBox {
    
    background-color: rgba(17, 17, 17, 0.8);   
}
 
.textSection {
    padding: 50px;
    background-color:  rgba(17, 17, 17, 0.8);
    margin-bottom:80px;
    .wrapImageRight {
        padding: 0px 25px;
        float: right; 
        margin: 25px;      
        margin-bottom:80px;
    }
    .wrapImageLeft {
        padding: 0px 25px;
        float: left; 
        margin: 25px;      
        margin-bottom:80px;
    }
}
.imgBorder {
    border-radius: 5%;
}
.updates {
    background-color: rgba(1, 1, 1, 0.3);
    justify-content: center;
}
.darkTransparentBg {
    background-color: rgba(17, 17, 17, 0.85);
    justify-content: center;
}
.defaultText {
    text-indent: 50px;
    margin: 15px 0px 0px 0px;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 35px;
    font-family: ${secondaryFont};
    color: #ededed;
    margin-bottom:80px;
    text-align: left; 
    align-content: center;
}
.faqsPageWrapper {
    height: 100%;
 
    position: relative;
    .image{
        display: none;
        position: absolute;
        left: 0px;
        top: 20%;
        width: 75px;
        @media all and (max-width:${medium}) {
         display: none;
        } 
    }
}
.faqWrapper{
    width: 1000px;
    margin: 0 auto;
    padding: 16% 0;
    @media all and (max-width:${medium}) {
        width:100%;
    }  
    .accordion{
        background: #292F3F;
        border: 1px solid #586587;
        box-sizing: border-box;
        .accordion-item{
            background: #292F3F;
            padding: 20px 30px 20px 70px;  
            .accordion-header{
                .accordion-button{
                    background: #292F3F; 
                    box-shadow: none;
                    font-family: ${secondaryFont};
                    font-style: normal;
                    font-weight: ${b2};
                    font-size: 25px;
                    color: #EDEDED;
                    padding-bottom: 10px;
                    span {
                        position: absolute;
                        left: -40px;
                        font-size: 30px;
                    }
                }
            }
            .accordion-body{
                font-family: ${secondaryFont};
                font-style: normal;
                font-weight: normal;
                font-size: 20px;
                line-height: 35px;
                color: #EDEDED;
            }
        }
    }
}
.footer{
  background: #111;
  border-top: 1px solid rgba(225,225,225,0.1);
  padding: 50px 0px 20px 0px;
  position: relative;
  overflow: hidden;
  .placeholderImage{
     position: absolute;
     top: 70px;
     right:0px;
     @media all and (max-width:${large}){
       display:none;
    }
   }
  .innerContainer{
    width: 1068px;
    margin:0 auto;
    @media all and (max-width:${large}){
        width: 100%;
        
    }
    .logoRow {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 25px;
            @media all and (max-width:${large}){
                flex-direction: column;
                display: none;
            }
      .logo{
        width: 250px;
        cursor: pointer;
        @media all and (max-width:${large}){
           margin-bottom: 0px;
        }
    }  
      .getStarted {
            display: flex;
            align-items: center;
            @media all and (max-width:${xsmall}){
                flex-direction: column;
                width: 100%; 
            }
            @media all and (max-width:${large}){
              margin-bottom: 0px;
              
            }
        .getStartedText{
            font-style: normal;
            font-weight: normal;
            font-size: 22px;
            line-height: 29px;
            color: #EDEDED;
            margin-bottom:0px;            
            font-family: ${secondaryFont};
        }
      } 
    }
  }
}
.btnGetStarted{
   background: #111;
   font-style: normal;
   font-weight: ${b3};
   font-size: 20px;
   line-height: 19px;
   color: #fff;
   padding: 10px 35px;
   font-family: ${primaryFont};
   text-decoration: none;
   display: inline-block;
   &:hover {
        background: #E6C04E;
       color: #171315;
       transition: all 0.8s ease-in-out;
   }
 
}
.btnGetStartedFooter{
    background: #111;
    font-style: normal;
    font-weight: ${b3};
    font-size: 20px;
    line-height: 19px;
    color: #EDEDED;
    padding: 10px 35px;
    font-family: ${primaryFont};
    text-decoration: none;
  
    display: inline-block;
    &:hover {
         background: #E6C04E;
        color: #111;
        transition: all 0.8s ease-in-out;
    }
  
 }
 
.footerNavWrapper {
    padding: 0px 0px 0px 30px;
    @media all and (max-width:${large}){
        padding: 0px 0px 0px 0px;
    }
   .subscribe{
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 29px;
    letter-spacing: -0.3px;
    color: #EDEDED;
    margin-bottom:30px;
    width:165px;
    font-family: ${secondaryFont};
    margin-top: 40px;
    margin-bottom: 30px;
   }
   .formWrapper{
     width: 100%;
     position: relative;
    .actionBtn{
        padding: 15px;
        background: #E6C04E;
        border-radius: 8px 8px 0px 0px;
        position: absolute;
        right: 0px;
        top: 0px;
        img{
            width: 14px;
        }
    }
    .input {
        padding: 10px 0px 0px 0px;
        font-family: ${secondaryFont};
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 20px;
        color: #EDEDED;
        width: 100%;
        background-color: transparent;
        outline: none;
        border: none;
        border-bottom: 1px solid rgba(225,225,225,0.1);
        &:placeholder{
        }
        &::focus-visible {
            outline:none;
            border:none;
            box-shadow:none;
            border-bottom: 1px solid rgba(225,225,225,0.1);
        }
    }
   }
}
.navList{
    padding: 0px;
    list-style: none;
    margin-top: 0px;
    &.pl {
        padding-left:30px;
        
    }
    @media all and (max-width:${large}){
        padding-left:0px;
        display: none;
    }
   .navLink{
    cursor: pointer;
    font-style: normal;
    font-weight: ${b3};
    font-family: ${secondaryFont};
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.204545px;
    color: #EDEDED;
    margin-bottom:20px;
    &.active{
        color: #E6C04E;
    }
    &:hover{
        color: #E6C04E; 
    }
    transition: all 0.3s ease-in;
   } 
}
.copyRightWrapper{
    background: #111;
    display: flex;
    align-items: center;
     
    padding: 0px 90px;
    margin-top: 50px;
    @media all and (max-width:${large}){
        display: grid;
       
        padding:0px;
        gap: 50px;
    }
    
  .left-policy {
    @media all and (max-width:${large}){
        display: flex;
       
        padding:0px;
     
    }
    .link {
        transition: all 0.3s ease-in;
        font-family: ${secondaryFont};
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 20px;
        color: #EDEDED;
        letter-spacing: -0.204545px;
        margin-right:20px; 
        text-decoration: none; 
        &:hover{
            color: #E6C04E; 
        }
    }
 
  }
  .right-policy {
    .link{
        margin-right:5px;
        display: inline-block;
        width: 20px;
        img{
            width: 100%;
        }
        
        &.tw {
            width: 17px;
            margin-right: 25px;
        }
        &:hover{
            color: #E6C04E; 
        }
 
    }
  }
}
.copyEmpire {
    color: #ededed;
    display: grid;
    font-size: 0.8rem;
    line-height: 1.8rem;
    font-weight: 400;
   
    font-family: ${secondaryFont};
    margin-top: 50px;
    @media all and (max-width:${large}){
        display: grid;
        
        padding:0px;
        gap: 50px;
    }
    
   
}
 
  
.variationsWidget{
    width: 1000px;
    margin: 0px auto;
    @media all and (max-width:${large}) {
        width: 100%;
        padding: 80px 0px;
    }
    .row{
     @media all and (max-width:${large}) {
      width: 100%;
     }   
    }
    .variationItem{
      padding-top: 10px;
      text-align: center;
     .clipImage{
      width: 100%;
      height: auto;
      border-radius: 10px;
      @media all and (max-width:${large}) {
        width: 350px;
        margin: 0 auto;
      }
      @media all and (max-width:${small}) {
        width: 250px;
        margin: 0 auto;
      }
     } 
     .clipText{
        font-size: 24px;
        line-height: 25px; 
        text-align: center;
        margin-bottom:24px;
        margin-top:10px;
        font-family: ${secondaryFont};
        @media all and (max-width:${large}) {
            margin-top:30px;
        }
        @media all and (max-width:${small}) {
            font-size: 20px;
        }
     }  
     .decText{
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        color: #EDEDED;
        font-family: ${secondaryFont};
        text-align: center;
        text-transform: capitalize;
     }
    }
}
 
.GamingZonePlay{
    height: 100%;
 
    .headingMain{
        text-align: center;
        padding-top: 50px;
    }
    .dec-minting{
        font-family: ${secondaryFont};
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        color: #000000;
        width: 703px;
        margin: 0 auto;
        text-align: center;
        padding: 20px 50px;
        @media all and (max-width:${medium}) {
            width:100%;
        } 
    }
}
 
.pageHeading {
    width: 800px;
    padding-bottom: 50px;
    @media all and (max-width:${medium}) {
        width:100%;
    } 
}
 
.abThree {
    .headingMain {
        font-family: ${primaryFont};
        font-style: normal;
        font-weight: ${b2};
        font-size: 30px;
        line-height: 40px;
        margin-bottom: 5px;
        color: #fff;
        padding: 80px 0px;
        text-align:left;
    }
}
.rowImage{
    img {
        border: 2px solid #586587;
        box-sizing: border-box;
        border-radius: 20px;
        margin-top:20px;
    }
}
.cardItem {
    background: #292F3F;
    border: 1px solid #586587;
    box-sizing: border-box;
    border-radius: 15px;
    @media all and (max-width:${medium}){
        margin-bottom: 15px;
    }
   .cardHead {
       .img {
        border-radius: 15px 15px 0px 0px;
       }
    }  
   .cardBody{
       padding: 21px 30px 28px 20px;
     .head{
        font-family: ${primaryFont};
        font-style: normal;
        font-weight: ${b3};
        font-size: 20px;
        line-height: 27px;
 
        margin-bottom: 15px;
     }
     .dec {
        font-family: ${secondaryFont};
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
 
        margin-bottom: 40px;
    
     }
     .readDetail{
         display: flex;
         align-items:center;
         justify-content:space-between;
        span {
            font-family: ${secondaryFont};
            font-style: normal;
            font-weight: ${b3};
            font-size: 12px;
            line-height: 15px;
       
        }
     }
   }
 }
 .blogArticleWrapper{
    width: 1200px;
    margin: 0 auto;
    padding: 20px 50px;
    margin-bottom: 100px;
    background: radial-gradient(50% 50% at 50% 50%, rgba(41, 47, 63, 0) 43.75%, #232739 100%);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    @media all and (max-width:${xlarge}) {
        width:100%;
    }  
}
.TempContainer{
    width: 1000px;
    margin: 0 auto;
    padding: 0px 0;
    @media all and (max-width:${xlarge}) {
        width:100%;
    }  
}
.messagesWrapper {
    background: #292F3F;
    border: 1px solid #E6C04E;
    box-sizing: border-box;
    box-shadow: 1px 0px 0px rgba(0, 0, 0, 0.08);
    border-radius: 20px 0px 0px 20px; 
    height:100%; 
}
.headerMessages {
    border-bottom:1px solid #000;
    padding: 25px;
    .items {
        display: flex;
        align-items: center;
        .head {
        font-family: ${secondaryFont};
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        color: #EDEDED;
        }
        .messageCount {
            font-family: ${secondaryFont};
            margin: 0px 10px;
            display: inline-block;
            background: #E6C04E;
            border-radius: 24px;
            font-style: normal;
            font-weight: 600;
            font-size: 12px;
            color: #000000;
            padding: 2px 8px;
        }
        .plus{
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 30px;
            height: 30px;
            background: #E6C04E;
            box-shadow: 0px 0px 15px rgba(65, 62, 189, 0.24);
            border-radius: 30px;
            svg {
                font-size: 20px;
                path {
                    color: #292F3F;
                }
            }
        }
    }
    
}
.searchWrapper{
    position: relative;
    padding: 10px 20px;
   input {
    width: 100%;
    padding: 8px 30px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #000000;
    background: #fff;
    border-radius: 12px;
    font-family: ${secondaryFont};
    &::focus-visible {
        outline: none;
    }
   }
   svg {
    position: absolute;
    left: 29px;
    top: 20px;
    color: #000000;
    opacity: 0.4;
    font-size: 20px;
   }
}
.messageChat{
  &.send {
    flex-direction: row-reverse;
    .LeftText {
        margin-left:15px;
    }
    .textSpaceWrapper{
        background: #03A9F1;
        color: #fff;
        .textSpace {
            color: #fff; 
        }
    }
  }  
}
.personBox {
    border-radius: 12px;
    padding: 12px;
    display: flex;
    margin: 10px 20px;
    &.active {
        background: rgba(255, 255, 255, 0.12);
    }
    .leftSide{
      width: 48px;
      min-width:48px;
    }
    .LeftText{
      width: 35px;
      min-width:35px;  
    }
    .textSpaceWrapper {
      min-width:calc(250px - 35px);
      position: relative;
      background: #F1F1F1;
      border-radius: 10px;
      padding: 3px 12px; 
      margin-left: 15px;
      .textSpace {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        color: #000000;
      }  
    }
    .RightSide{
      min-width:calc(100% - 48px);
      position: relative;
      margin-left: 15px;
      .hour{
        font-family: ${secondaryFont};
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        color: #EDEDED;
        position: absolute;
        right: 15px;
        top: -3px;
      }
      .heading{
        font-family: ${secondaryFont};
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        color: #EDEDED;
        margin-bottom: 50px;
      }
      .text{
          display: block;
          font-style: normal;
          font-weight: 600;
          font-size: 12px;
          margin-bottom: 5px;
          color: rgba(255, 255, 255, 0.7);
      }
      .labelDis{
        font-family: ${secondaryFont};
        border: 1px solid #CBD5E0;
        box-sizing: border-box;
        border-radius: 12px;
        padding: 0px 8px 3px 8px;
        display: inline-block;
        color: #718096;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
      }
      .labelQuestion{
        color: #DD6B20;
        font-family: ${secondaryFont};
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        background: #FEEBC8;
        border-radius: 12px;
        padding: 0px 8px 3px 8px;
        display: inline-block;
      }
      .labelWanted{
        color: #38A169;
        font-family: ${secondaryFont};
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        background: #C6F6D5;
        border-radius: 12px;
        padding: 0px 8px 3px 8px;
        display: inline-block;
        margin-left: 5px;;
      }
    }
}
.directory{
    background: #292F3F;
    border: 1px solid #E6C04E;
    box-sizing: border-box;
    box-shadow: 1px 0px 0px rgba(0, 0, 0, 0.08);
    border-radius: 0px 20px 20px 0px;
    height:100%;
    .items{
        display: flex;
        justify-content:space-between;
    }
    .labelTeam{
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        color: #EDEDED;
        margin: 24px 15px 4px;
        font-family: ${secondaryFont};
    }
    .bubble{
        font-family: ${secondaryFont};
        width: 20px;
        height: 20px;
        background: #EDF2F7;
        border-radius: 24px;
        margin-left: 8px;
        padding: 4px 5px;
        color: #000000;
        font-style: normal;
        font-weight: 600;
        font-size: 10px;
        display: inline-block;
    }
}
.ChatBoxWrapper{
    background: #292F3F;
    border: 1px solid #E6C04E;
    box-sizing: border-box;
    height:100%;
   .header {
       padding: 16px 24px;
       border-bottom: 1px solid #000;
       display: flex;
       align-items: center;
       justify-content: space-between;
        .chatSide{
           display: flex;
           align-items:center;
        }
        .leftSide {
            width: 48px;
            min-width:48px;
        }
        .rightSide{
           min-width:calc(100% - 48px);
           position: relative;
           margin-left: 15px; 
        }
        .heading {
            font-family: ${secondaryFont};
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            color: #EDEDED;
            margin-bottom: 0px;
        }
        .online {
            font-family: ${secondaryFont};
            display: inline-block;
            font-style: normal;
            font-weight: 600;
            font-size: 12px;
            color: #EDEDED;
            opacity: 0.6;
            svg {
                color: #68D391;
                margin-right: 6px;
                margin-top: 1px;
            }
        }
      .callSide{
        background: #E6C04E;
        border-radius: 8px; 
        padding: 8px 15px;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        color: #292F3F;
        cursor: pointer;
        display: inline-block;
        svg {
            margin-right: 11px;
            margin-top: -4px;
        }
      } 
    }
}
.MessageTypeInput{
    display: flex;
    width:100%;
    padding: 2px 23px;
    margin-bottom: 24px;
    .inputWrapper{
        position: relative;
        width:95%;
    }
   .clipArea{
       width:5%;
       margin-right: 10px;
       .clip {
        font-size: 25px;
        color: #fff;
        cursor: pointer;
       }
   }
   .textInput{
    background: #EDEDED;
    border: 2px solid #E2E8F0;
    box-sizing: border-box;
    border-radius: 12px;  
    padding: 6px 20px;
    color: #000000;
    font-style: normal;
    font-weight: normal;
    width:100%;
    font-size: 14px;
    color: #000000;
    &::focus-visible {
        outline: none;
    }
   } 
   .Plane{
    position: absolute;
    right: 10px;
    top: 5px;
    font-size: 24px;
    cursor: pointer;
    color: #292F3F;
   }
}
.formContainer{
   width:550px;
   margin: 0 auto;
   @media all and (max-width:${small}) {
    width: 100%;
   }
   .dec {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 28px;
    color:#fff;
    font-family: ${secondaryFont};
    margin-bottom: 20px;
    padding-bottom:10px;
    border-bottom:1px solid #fff;
   }
   .head-dec {
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 28px;
    color:#fff;
    font-family: ${secondaryFont};
    margin-bottom: 20px;
    padding-bottom:20px;
    padding-top:20px;
    border-bottom:1px solid #fff;
   }
}
.inputWrapper{
    .label{
        font-family: ${secondaryFont};
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #EDEDED;
        margin-bottom: 14px;
        display: block;
    }
    .inputArea {
        font-family: ${secondaryFont};
        padding: 15px 30px;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #494949;
        width: 100%;
        background: #EDEDED;
        box-sizing: border-box;
        box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.11);
        border-radius: 6px;
        margin-bottom: 24px;
        &:active, &:focus, &::focus-visible{
            border: 2px solid #E6C04E;
            outline: none !important;
        }
    }
}
.checkbox-label {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #EDEDED;
    line-height: 19px;
    margin-left: 30px;
    margin-bottom: 30px;
}
.actionFormBtn{
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    font-family: ${secondaryFont};
    padding: 15px;
    width: 100%;
    display: block;
    text-align: center;
    background-color: #E6C04E;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.8s ease-in-out;
    &:hover {
        background: #000;
        color: #fff;
    }
}
.footerRoute{
    display: flex;
    align-items:center;
    justify-content:space-between;
}
.alreadyAction{
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 19px;
    font-family: ${secondaryFont};
    color: #EDEDED; 
    margin:20px 0px;
    display: inline-block;
    cursor: pointer;
    &.tr {
        text-align: right;
    }
    &.tl {
        text-align: left;
    }
}
.formPageWrapper{
    padding-bottom: 140px;
}
.pt-8{
    padding-top: 80px !important;
}
.pt-15{
    padding-top: 150px !important;
}
.pt-10{
    padding-top: 100px !important;
}
.pb-10{
    padding-bottom: 100px !important;
}
.dashboardWrapper{
  .dec{
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 28px;
    color:#fff;
    font-family: ${secondaryFont};
    text-align:center;
    width: 700px;
    margin: 0 auto;
    @media all and (max-width:${medium}){
       width: 100%;
    }
  } 
  .rowWrapper {
      width: 800px;
      margin: 0 auto;
    @media all and (max-width:${medium}){
       width: 100%;
    }
  }
  .playerWrapper{
    background: rgba(6, 43, 73, 0.3);
    border: 2px solid #E6C04E;
    box-sizing: border-box;
   
    border-radius: 20px;
     img {
        padding: 20px 40px;
        max-width: 100%;
     } 
  } 
  .sub-head{
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 28px;
    color: #EDEDED;
    font-family: ${secondaryFont};
    margin-bottom:30px;
    margin-top: 20px;
    padding-left: 20px;
  }
  .num-sub{
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 28px;
    color: #EDEDED;
    font-family: ${secondaryFont};
    margin-bottom:20px;
    padding-left: 20px;
    &.ex-mb{
     margin-bottom: 30px;
    }
  }
  .innerHead{
    text-align:left;
    padding-left: 20px;
  }
  .Withdraw {
    margin-left: 20px; 
  }
}
.popularItemApp{
    .headerTicket{
       background-color: rgba(159, 159, 159, 1);
       padding:10px 10px 0px 10px;
    }
    .heading{
    font-family: ${secondaryFont};
    font-style: normal;
    font-weight: 900;
    font-size: 33px;
    line-height: 40px;
    text-transform: uppercase;
    background: -webkit-linear-gradient(#D99E00, #FFFD9A, #9D4F00);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom:0px;
    }
    .para {
        font-style: normal;
        font-weight: normal;
        font-size: 25px;
        color: #000000;
        font-family: ${secondaryFont};
    }
}
.sm-view-now {
    width: 100%;
    padding: 10px 0px;
    display:none;
}
@media all and (max-width:${medium}){
  .sm-view-now{
    display:block;  
  }
  .lg-view-now{
      display:none;
  }
}
.small-version{
    margin-bottom:40px;
    .playerWrapper {
        text-align: center;
        img {
            padding: 10px;
            margin: 0 auto;
        }
    }
    .innerHead,.num-sub{
        display:none;
    }
    .col-sm-12{
        justify-content: center;
        display: flex;
        flex-direction: column;
    }
    .Withdraw{
     width:175px;
    }
}
.useless-class {
    display: none;
}
 
`;

export default GlobalStyle;
