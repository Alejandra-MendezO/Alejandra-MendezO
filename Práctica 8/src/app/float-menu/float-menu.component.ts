<ion-header>
    <ion-toolbar>
        <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
        </ion-buttons>

        <ion-title>{{titleMenu}}</ion-title>
    </ion-toolbar>
</ion-header>

<ion-menu side="start" content-id="main" (ionWillOpen)="onMenuOpen()">
    <ion-content id="menuFloat">
        <ion-list>
            <ion-menu-toggle *ngFor="let c of datosMenu">
                <ion-item (click)="navegar(c.enlace, c.nombre)">
                    <ion-icon name='{{c.icono}}'></ion-icon>
                    <ion-label>{{ c.nombre }}</ion-label>
                </ion-item>
            </ion-menu-toggle>
        </ion-list>
    </ion-content>
</ion-menu>
