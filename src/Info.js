import React, { useEffect } from 'react'
import './Info.css'
import mobilka1 from './img/mobilka1.png'
import logowanie from './img/logowanie_img.png'
import rachunki from './img/rachunki-1.png'
import przelewy from './img/przelewy_jpg.png'
import lokaty from './img/lokaty_kredyty_jpg.png'
import logo from './img/Logo_iOS.png'
import  gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Info() {

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        const logo = document.querySelector('.hero__img');
        const hero_text = document.querySelector('.hero__txt');
        const info = document.querySelector('.anim');
        const section1 = document.querySelector('.section1');
        const section__left = document.querySelector('.section__left')
        const section__right = document.querySelector('.section__right')
        const section__left__two = document.querySelector('.section__left__two')
        const section__right__two = document.querySelector('.section__right__two')
        gsap.set([logo,hero_text,info,section1],{autoAlpha: 0});
        const tl = gsap.timeline({defaults: {ease: 'power3.inOut'}});
        tl.fromTo(logo, {x: '-=100'},{duration:1 ,x: '0', autoAlpha:1, scrollTrigger:{
            trigger:".hero__img",
            scrub:2,
            start:'-=3500',
        }})
        .fromTo(hero_text, {x: '-=100'},{duration:1,x: '0', autoAlpha:1,scrollTrigger:{
            trigger:".hero__txt",
            scrub:2,
            start:'-=3500',
        }
    
    })
        .fromTo(info,{y: '+=200'},{duration:1.5,y: '0' ,autoAlpha:1, scrollTrigger:{
                trigger:".mobile__info",
                scrub:2,
                start:'-=3500',     
            }})
        .fromTo(section1,{x:'-=600'},{duration:1.7, x:'0', autoAlpha:1,scrollTrigger:{
            trigger:'.section1',
            scrub:2,
            start:'-=3500',

         
        }})
        .fromTo(section__left,{x:'-=1000'},{duration:2.0, x:'0', autoAlpha:1,scrollTrigger:{
            trigger:'.section__left',
            scrub:2,
            start:'-=3500',
        
          
        }})
        .fromTo(section__right,{x:'-=1000'},{duration:2.0, x:'0', autoAlpha:1,scrollTrigger:{
            trigger:'.section__right',
            scrub:2,
            start:'-=3500',
     
           
        }})
        .fromTo(section__left__two,{x:'-=1000'},{duration:2.0, x:'0', autoAlpha:1,scrollTrigger:{
            trigger:'.section__left__two',
            scrub:2,
            start:'-=3500',
        
          
        }})
        .fromTo(section__right__two,{x:'-=1000'},{duration:2.0, x:'0', autoAlpha:1,scrollTrigger:{
            trigger:'.section__right__two',
            scrub:2,
            start:'-=3500',
     
           
        }})




    },[])



    
    
    return (
        <div>
    <div className="container">
        <div className="hero" id="hero">
            <div className="hero__img"><img src={logo} alt=""/></div>
            <div className="hero__txt">
                <p>eBank GO</p>
                <p>Bank w zasi??gu r??ki</p>
            </div>
        </div>
        <div className="content">
            <div className="mobile__info">
                <p className="anim">Dost??pna na urz??dzenia z systemami Android, iOS i Huawei</p>
            </div>
            <div className="section1">
                <div className="section1__textblock">
                    <div className="section1__line"></div>
                    <div className="section1__title">eBank Go</div>
                    <div className="section1__text">
                        <p>Nowa aplikacja mobilna eBank Go stawia przede wszystkim na bezpiecze??stwo, nowoczesny wygl??d i intuicyjn?? obs??ug??. Pobierz aplikacj?? na sw??j smartfon i zyskaj niezwodny, szybki i wygodny dost??p do wszystkich produkt??w bankowych. Zarz??dzaj swoimi finansami - gdziekolwiej jeste??, cokolwiek robisz!</p>
                    </div>
                </div>
                <div className="section1__img"><img src={mobilka1} alt=""/></div>
            </div>
            <div className="mobile__info">
                <p>Poznaj wszystkie funkcjonalno??ci eBank Go i ciesz si?? swobod??!</p>
            </div>
            <div className="section__left">
                <div className="section__left__img"><img src={logowanie} alt=""/></div>
                <div className="section__left__textblock">
                    <div className="section__left__text">
                        <div className="section__left__text__item">
                            <h3>Bezpieczne logowanie</h3>
                            <p>Loguj si?? za pomoc?? biometrii, FaceID lub kody PIN</p>
                        </div>
                        <div className="section__left__text__item">
                            <h3>Przydatne skr??ty</h3>
                            <p>Na ekranie logowania mo??esz ustawi?? skr??ty do najcz????ciej u??ywanych funkcji</p>
                        </div>
                        <div className="section__left__text__item">
                            <h3>Trzy motywy kolorystyczne</h3>
                            <p>Wybierz sw??j ulubiony!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section__right">
                <div className="section__right__textblock">
                    <div className="section__right__text">
                        <div className="section__right__text__item">
                            <h3>Stan konta na bie????co</h3>
                            <ul>
                                <li>Informacje o dosepnych ??rodkach</li>
                                <li>Informacje o rachunkach i historia operacji</li>
                                <li>Przejrzysta wizualizacja danych w postaci graficznych wykres??w</li>
                            </ul>
                        </div>
                        <div className="section__right__text__item">
                            <h3>Podlg??d ??rodk??w i operacji bez logowania</h3>
                            <ul>
                                <li>Procentowy podgl??d dost??pnych ??rodk??w</li>
                                <li>Dok??adny podgl??d salda</li>
                                <li>Widok ostatnich operacji i zlece??</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="section__right__img"><img src={rachunki} alt=""/></div>
            </div>
            <div className="section__left__two">
                <div className="section__left__img"><img src={przelewy} alt=""/></div>
                <div className="section__left__textblock">
                    <div className="section__left__text">
                        <div className="section__left__text__item">
                            <h3>Intuicyjne przelewy krajowe</h3>
                            <ul>
                                <li>Przelewy zwyk??e i ekspresowe</li>
                                <li>Podgl??d paczek przelew??w</li>
                                <li>Przelewy zdefiniowane do ZUS i Urz??du Skarbowego</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section__right__two">
                <div className="section__right__textblock">
                    <div className="section__right__text">
                        <div className="section__right__text__item">
                            <h3>Lokaty, kredyty w zasi??gu r??ki !</h3>
                            <ul>
                                <li>informacja o posiadanych lokatach kredytowych i kartach</li>
                                <li>Graficzna prezentacja Twoich produkt??w bankowych</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="section__right__img"><img src={lokaty} alt=""/> </div>
            </div>
            </div>
            </div>
        </div>
        
    )
}

export default Info
