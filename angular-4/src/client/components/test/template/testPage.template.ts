export let template = `
    <div>
        <ul>
            <test-item *ngFor="let item of items" [item]="item"></test-item>
        </ul>
    </div>
`