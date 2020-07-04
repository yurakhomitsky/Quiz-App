import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
    providedIn: 'root'
}
)
export class LoaderService {
    constructor() {}

    private loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public isLoading = this.loading.asObservable();

    public show(): void {
        this.loading.next(true);
    }

    public hide(): void {
        this.loading.next(false);
    }
}