
/*
* File: app.ts
* Author: Markó Kevin
* Copyright: 2024, Markó Kevin
* Group: Szoft I-2-N
* Date: 2024-05-30
* Github: https://github.com/MKewin05
* Licenc: GNU GPL
*/

class Teglalap {
    aSide?: HTMLInputElement |null
    bSide?: HTMLInputElement |null
    result?: HTMLInputElement |null
    calcButton?: HTMLInputElement |null

    constructor() {
        this.bindHTML()
        this.handleEvent()
    }

    bindHTML() {
        this.aSide = document.querySelector('#aSide')
        this.bSide = document.querySelector('#bSide')
        this.result = document.querySelector('#result')
        this.calcButton = document.querySelector('#calcButton')
    }

    handleEvent() {
        this.calcButton?.addEventListener('click', () => {
        this.startCalc()    
        })
    }

    startCalc() {
        const aSide = Number(this.aSide?.value)
        const bSide = Number(this.bSide?.value)
        const Result = this.calcResult(aSide, bSide)
        this.result!.value = String(Result)
         
        
    }

    calcResult(aSide: number, bSide:number):number {
        return Math.sqrt(aSide ** 2 + bSide ** 2)
    }



}

new Teglalap()