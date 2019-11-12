import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ColorsComponent} from '../components/colors/colors.component';
import {FormsComponent} from '../components/forms/forms.component';
import {GridComponent} from '../components/grid/grid.component';
import {StandardsComponent} from '../components/standards/standards.component';
import {TypographyComponent} from '../components/typography/typography.component';
import {ShellComponent} from '../../../shell/shell.component';

const routes: Routes = [
  {
    path: '', component: ShellComponent, children: [

      {path: 'standards', component: StandardsComponent},
      {path: 'standards/colors', component: ColorsComponent},
      {path: 'standards/forms', component: FormsComponent},
      {path: 'standards/grid', component: GridComponent},
      {path: 'standards/typography', component: TypographyComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class StandardsRoutesModule { }
