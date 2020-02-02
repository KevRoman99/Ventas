import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import * as anime from 'animejs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
//( <HTMLElement>( <HTMLElement>event.target ).parentNode );
click(){
    //console.clear();
    console.log("HOLA");
// const loginBtn = document.getElementById('login');
// const signupBtn = document.getElementById('signup');

// loginBtn.addEventListener('click', (e) => {
// 	let parent = ( <HTMLElement>( <HTMLElement>event.target ).parentNode );
// 	Array.from(parent.classList).find((element) => {
// 		if(element !== "slide-up") {
// 			parent.classList.add('slide-up')
// 		}else{
// 			signupBtn.parentNode[0].classList.add('slide-up')
// 			parent.classList.remove('slide-up')
// 		}
// 	});
// });

// signupBtn.addEventListener('click', (e) => {
// 	let parent = ( <HTMLElement>( <HTMLElement>event.target ).parentNode );
// 	Array.from(( <HTMLElement>( <HTMLElement>event.target ).parentNode ).classList).find((element) => {
// 		if(element !== "slide-up") {
// 			parent.classList.add('slide-up')
// 		}else{
// 			loginBtn.parentNode.parentNode[0].classList.add('slide-up')
// 			parent.classList.remove('slide-up')
// 		}
// 	});
// });
// var current = null;
// document.querySelector('#email').addEventListener('focus', function(e) {
//   if (current) current.pause();
//   current = anime({
//     targets: 'path',
//     strokeDashoffset: {
//       value: 0,
//       duration: 700,
//       easing: 'easeOutQuart'
//     },
//     strokeDasharray: {
//       value: '240 1386',
//       duration: 700,
//       easing: 'easeOutQuart'
//     }
//   });
// });
// document.querySelector('#password').addEventListener('focus', function(e) {
//   if (current) current.pause();
//   current = anime({
//     targets: 'path',
//     strokeDashoffset: {
//       value: -336,
//       duration: 700,
//       easing: 'easeOutQuart'
//     },
//     strokeDasharray: {
//       value: '240 1386',
//       duration: 700,
//       easing: 'easeOutQuart'
//     }
//   });
// });
// document.querySelector('#submit').addEventListener('focus', function(e) {
//   if (current) current.pause();
//   current = anime({
//     targets: 'path',
//     strokeDashoffset: {
//       value: -730,
//       duration: 700,
//       easing: 'easeOutQuart'
//     },
//     strokeDasharray: {
//       value: '530 1386',
//       duration: 700,
//       easing: 'easeOutQuart'
//     }
//   });
// });
  }
  
  
}
