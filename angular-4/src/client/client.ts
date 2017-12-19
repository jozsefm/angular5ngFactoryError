import 'reflect-metadata'
require('zone.js/dist/zone.min.js')
import { hybridBootstrap } from './util/aotBootstrap'
import { TestPage } from './components/test/testPage.component'
import { downgradeComponent } from '@angular/upgrade/static'

export const client = {
    hybridBootstrap,
    components: {
        testPage : downgradeComponent({component: TestPage})
    }
}