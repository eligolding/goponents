import {Component, Input, OnInit} from '@angular/core';
import {NavGroup} from '../../../../go-lib/src/lib/components/go-side-nav/nav-group.model';
import {NavItem} from '../../../../go-lib/src/lib/components/go-side-nav/nav-item.model';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  date: Date = new Date();
  menuItems: Array<NavGroup | NavItem> = [
    { route: '//getting-started', routeIcon: 'power_settings_new', routeTitle: 'Getting Started' },
    { route: '/standards', routeIcon: 'gavel', routeTitle: 'Standards', subRoutes: [
        { route: '/standards/colors', routeTitle: 'Colors' },
        { route: '/standards/forms', routeTitle: 'Forms' },
        { route: '/standards/grid', routeTitle: 'Grid System' },
        { route: '/standards/typography', routeTitle: 'Typography' }
      ]},
    { route: '/ui-kit', routeIcon: 'widgets', routeTitle: 'Components', subRoutes: [
        { route: '/ui-kit/accordion', routeTitle: 'Accordion' },
        { route: '/ui-kit/action-sheet', routeTitle: 'Action Sheet' },
        { route: '/ui-kit/badge', routeTitle: 'Badge' },
        { route: '/ui-kit/button', routeTitle: 'Button' },
        { route: '/ui-kit/card', routeTitle: 'Card' },
        { route: '/ui-kit/configuration', routeTitle: 'Configuration' },
        { route: '/ui-kit/copy', routeTitle: 'Copy' },
        { route: '/ui-kit/forms', routeTitle: 'Forms' },
        { route: '/ui-kit/icon-button', routeTitle: 'Icon Button' },
        { route: '/ui-kit/layout', routeTitle: 'Layout' },
        { route: '/ui-kit/loader', routeTitle: 'Loader' },
        { route: '/ui-kit/icon', routeTitle: 'Icon' },
        { route: '/ui-kit/modal', routeTitle: 'Modal' },
        { route: '/ui-kit/off-canvas', routeTitle: 'Off Canvas' },
        { route: '/ui-kit/table', routeTitle: 'Table'},
        { route: '/ui-kit/toast', routeTitle: 'Toast' }
      ]}
  ];

  constructor() { }

  ngOnInit() {
  }

}
