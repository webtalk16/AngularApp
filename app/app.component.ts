import { Component } from 'angular2/core';
@Compoent({
    selector: 'pm-app',
    template:`
    <div><h1>{{pageTitle}}</h1>
        <div>My First Component</div>
    < / div>
        <div><h2>{{pageTitle}}< / h2 >
    <div>My First Component </div >
    < / div>
     `
})
export class AppComponent {
    pageTitle: string = 'Acme Product Management';
}