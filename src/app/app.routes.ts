import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', loadChildren: () =>
            import('./components/containers/dashboard/dashboard.module').then(
                (m) => m.DashboardModule
            )
    }
];
