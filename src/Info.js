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
                <p>Bank w zasięgu ręki</p>
            </div>
        </div>
        <div className="content">
            <div className="mobile__info">
                <p className="anim">Dostępna na urządzenia z systemami Android, iOS i Huawei</p>
            </div>
            <div className="section1">
                <div className="section1__textblock">
                    <div className="section1__line"></div>
                    <div className="section1__title">eBank Go</div>
                    <div className="section1__text">
                        <p>Nowa aplikacja mobilna eBank Go stawia przede wszystkim na bezpieczeństwo, nowoczesny wygląd i intuicyjną obsługę. Pobierz aplikację na swój smartfon i zyskaj niezwodny, szybki i wygodny dostęp do wszystkich produktów bankowych. Zarządzaj swoimi finansami - gdziekolwiej jesteś, cokolwiek robisz!</p>
                    </div>
                </div>
                <div className="section1__img"><img src={mobilka1} alt=""/></div>
            </div>
            <div className="mobile__info">
                <p>Poznaj wszystkie funkcjonalności eBank Go i ciesz się swobodą!</p>
            </div>
            <div className="section__left">
                <div className="section__left__img"><img src={logowanie} alt=""/></div>
                <div className="section__left__textblock">
                    <div className="section__left__text">
                        <div className="section__left__text__item">
                            <h3>Bezpieczne logowanie</h3>
                            <p>Loguj się za pomocą biometrii, FaceID lub kody PIN</p>
                        </div>
                        <div className="section__left__text__item">
                            <h3>Przydatne skróty</h3>
                            <p>Na ekranie logowania możesz ustawić skróty do najczęściej używanych funkcji</p>
                        </div>
                        <div className="section__left__text__item">
                            <h3>Trzy motywy kolorystyczne</h3>
                            <p>Wybierz swój ulubiony!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section__right">
                <div className="section__right__textblock">
                    <div className="section__right__text">
                        <div className="section__right__text__item">
                            <h3>Stan konta na bieżąco</h3>
                            <ul>
                                <li>Informacje o dosepnych środkach</li>
                                <li>Informacje o rachunkach i historia operacji</li>
                                <li>Przejrzysta wizualizacja danych w postaci graficznych wykresów</li>
                            </ul>
                        </div>
                        <div className="section__right__text__item">
                            <h3>Podlgąd środków i operacji bez logowania</h3>
                            <ul>
                                <li>Procentowy podgląd dostępnych środków</li>
                                <li>Dokładny podgląd salda</li>
                                <li>Widok ostatnich operacji i zleceń</li>
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
                                <li>Przelewy zwykłe i ekspresowe</li>
                                <li>Podgląd paczek przelewów</li>
                                <li>Przelewy zdefiniowane do ZUS i Urzędu Skarbowego</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section__right__two">
                <div className="section__right__textblock">
                    <div className="section__right__text">
                        <div className="section__right__text__item">
                            <h3>Lokaty, kredyty w zasięgu ręki !</h3>
                            <ul>
                                <li>informacja o posiadanych lokatach kredytowych i kartach</li>
                                <li>Graficzna prezentacja Twoich produktów bankowych</li>
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
