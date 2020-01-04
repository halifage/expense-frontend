import {NgModule} from '@angular/core';
import {MatMomentDateModule} from '@angular/material-moment-adapter'
import {
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatDatepickerModule,
  MatSelectModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatDividerModule,
  MatGridListModule, MatTabsModule, MatProgressBarModule, MatListModule, MatTableModule, MatExpansionModule
} from '@angular/material';

const MaterialComponents = [
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatDatepickerModule,
  MatMomentDateModule,
  MatSelectModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatDividerModule,
  MatGridListModule,
  MatTabsModule,
  MatProgressBarModule,
  MatListModule,
  MatTableModule,
  MatExpansionModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
  providers: []
})
export class MaterialModule {
}
