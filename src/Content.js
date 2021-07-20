import React, { useEffect } from 'react'
import './Content.css'
import Button from './Button'
import tele from './resources/telefony.png'
import Info from './Info'
import  gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function Content() {

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    const image = document.querySelector('.Content__image');
    gsap.set([image],{autoAlpha: 0});
    const tl = gsap.timeline({defaults: {ease: 'power3.inOut'}});
    tl.fromTo(image, {x: '-=100'},{duration:1 ,x: '0', autoAlpha:1, })
  })


    class TypeWriter {
        constructor(txtElement, words, wait = 3000) {
          this.txtElement = txtElement;
          this.words = words;
          this.txt = '';
          this.wordIndex = 0;
          this.wait = parseInt(wait, 10);
          this.type();
          this.isDeleting = false;
        }
      
        type() {
          // Current index of word
          const current = this.wordIndex % this.words.length;
          // Get full text of current word
          const fullTxt = this.words[current];
      
          // Check if deleting
          if(this.isDeleting) {
            // Remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
          } else {
            // Add char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
          }
      
          // Insert txt into element
          this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
      
          // Initial Type Speed
          let typeSpeed = 100;
      
          if(this.isDeleting) {
            typeSpeed /= 6;
          }
      
          // If word is complete
          if(!this.isDeleting && this.txt === fullTxt) {
            // Make pause at end
            typeSpeed = this.wait;
            // Set delete to true
            this.isDeleting = true;
          } else if(this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            // Move to next word
            this.wordIndex++;
            // Pause before start typing
            typeSpeed = 500;
          }
      
          setTimeout(() => this.type(), typeSpeed);
        }
      }
      
      
      // Init On DOM Load
      document.addEventListener('DOMContentLoaded', init);
      
      // Init App
      function init() {
        const txtElement = document.querySelector('.txt-type');
        const words = JSON.parse(txtElement.getAttribute('data-words'));
        const wait = txtElement.getAttribute('data-wait');
        // Init TypeWriter
        new TypeWriter(txtElement, words, wait);
      }
    return (
        <>
        <div className="Content__container">
            <div className="Content__text">
                <p>Aplikacja Mobilna eBank Go. <span className="txt-type green" data-wait="2000" data-words='["Prosto", "Szybko", "Bezpiecznie"]'></span></p>
                <Button />
            </div>
            <div className="Content__image"><img src={tele}></img></div>
        </div>
        <Info />
        </>
    )
}

export default Content
