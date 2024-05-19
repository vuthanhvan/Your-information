import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'MENUITEMS.MENU.TEXT',
        isTitle: true
    },
    {
        id: 2,
        icon: 'bx-home-circle',
        label: 'MENUITEMS.DASHBOARDS.LIST.DEFAULT',
        link: '/dashboard',
        parentId: 2
    },
    {
        icon: 'bx-task',
        id: 3,
        label: 'MENUITEMS.DASHBOARDS.LIST.SAAS',
        link: '/dashboards/saas',
        parentId: 2
    },
    {
        id: 4,
        icon: 'bx-tone',
        label: 'MENUITEMS.DASHBOARDS.LIST.SETTING',
        link: '/dashboards/setting',
        parentId: 2
    },
       
];

