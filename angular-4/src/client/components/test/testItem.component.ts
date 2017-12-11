import { Component, Input } from '@angular/core'
import { template } from './template/testItem.template'

@Component({
    selector: 'test-item',
    template
})
export class TestItem {
    @Input() item: any
}