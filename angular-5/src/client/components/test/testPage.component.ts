import { Component } from '@angular/core'
import { template } from './template/testPage.template'

@Component({
    selector: 'test-page',
    template
})
export class TestPage {
    public items : Array<any>
    constructor(){
        this.items = [{title: 'a'},{title: 'b'},{title: 'c'},{title: 'd'},{title: 'e'},{title: 'f'}]
    }

}
