import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Reports',
    icon: 'home-outline',
    link: '/pages/dashboard',
  },
  // {
  //   title: 'IoT Dashboard',
  //   icon: 'home-outline',
  //   link: '/pages/iot-dashboard',
 // },
  {
    title: 'Basel Prudential Regulation',
    // group: true,
    icon: 'layout-outline',
  },
  {
    title: 'Pillar I Risks',
    icon: 'clipboard-outline',
    children: [
      {
        title: 'Credit Risk',
        // link: '/pages/layout/stepper',
      },
      {
        title: 'Counterparty Credit Risk(SACCR)',
        link: '/pages/layout/stepper',
        home: true,
      },
      {
        title: 'Market Risk',
        // link: '/pages/layout/stepper',
      },
      {
        title: 'Operational Risk',
        // link: '/pages/layout/stepper',
      },
      {
        title: 'Liquidity Risk',
        // link: '/pages/layout/stepper',
        children: [
          {
            title: 'LCR',
          },
          {
            title: 'NSFR',
          },
        ],
      },
      // {
      //   title: 'Stepper',
      //   link: '/pages/layout/stepper',
      // },
      // {
      //   title: 'List',
      //   link: '/pages/layout/list',
      // },
      // {
      //   title: 'Infinite List',
      //   link: '/pages/layout/infinite-list',
      // },
      // {
      //   title: 'Accordion',
      //   link: '/pages/layout/accordion',
      // },
      // {
      //   title: 'Tabs',
      //   pathMatch: 'prefix',
      //   link: '/pages/layout/tabs',
      // },
    ],
  },
  {
    title: 'Pillar II Risks',
    icon: 'clipboard-outline',
    children: [
      {
        title: 'Credit Concentration Risk',
        // link: '/pages/layout/stepper',
      },
      {
        title: 'IRRBB',
        // link: '/pages/layout/stepper',
      },
      {
        title: 'Reputational Risk',
        // link: '/pages/layout/stepper',
      },
      {
        title: 'Legal Risk',
        // link: '/pages/layout/stepper',
      },
      {
        title: 'Step in Risk',
        // link: '/pages/layout/stepper',
      },
      {
        title: 'Other Risks',
        // link: '/pages/layout/stepper',
      },
    ],
  },
  {
    title: 'Pillar III Disclosures',
    icon: 'clipboard-outline',
    children: [
      {
        title: 'Credit Risk',
        // link: '/pages/layout/stepper',
      },
      {
        title: 'Counterparty Credit Risk',
        // link: '/pages/layout/stepper',
      },
      {
        title: 'Securitization',
        // link: '/pages/layout/stepper',
      },
      {
        title: 'Market Risk ( FRTB)',
        // link: '/pages/layout/stepper',
      },
      {
        title: 'Composition of Capital & TLAC',
        // link: '/pages/layout/stepper',
      },
      {
        title: 'Leverage Ratio',
        // link: '/pages/layout/stepper',
      },
      {
        title: 'Operational Risk',
        // link: '/pages/layout/stepper',
      },
      {
        title: 'LCR',
        // link: '/pages/layout/stepper',
      },
      {
        title: 'NSFR',
        // link: '/pages/layout/stepper',
      },
      {
        title: 'Large Exposures',
        // link: '/pages/layout/stepper',
      },
      {
        title: 'Linking between FS & Risk Reports',
        // link: '/pages/layout/stepper',
      },
      {
        title: 'Capital Distribution and Remuneration',
        // link: '/pages/layout/stepper',
      },
    ],
  },
  {
    title: 'IFRS Regulations',
    icon: 'clipboard-outline',
    children: [
      {
        title: 'Form Inputs',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/pages/forms/layouts',
      },
      {
        title: 'Buttons',
        link: '/pages/forms/buttons',
      },
      {
        title: 'Datepicker',
        link: '/pages/forms/datepicker',
      },
    ],
  },
  // {
  //   title: 'Forms',
  //   icon: 'edit-2-outline',
  //   children: [
  //     {
  //       title: 'Form Inputs',
  //       link: '/pages/forms/inputs',
  //     },
  //     {
  //       title: 'Form Layouts',
  //       link: '/pages/forms/layouts',
  //     },
  //     {
  //       title: 'Buttons',
  //       link: '/pages/forms/buttons',
  //     },
  //     {
  //       title: 'Datepicker',
  //       link: '/pages/forms/datepicker',
  //     },
  //   ],
  // },
  // {
  //   title: 'UI Features',
  //   icon: 'keypad-outline',
  //   link: '/pages/ui-features',
  //   children: [
  //     {
  //       title: 'Grid',
  //       link: '/pages/ui-features/grid',
  //     },
  //     {
  //       title: 'Icons',
  //       link: '/pages/ui-features/icons',
  //     },
  //     {
  //       title: 'Typography',
  //       link: '/pages/ui-features/typography',
  //     },
  //     {
  //       title: 'Animated Searches',
  //       link: '/pages/ui-features/search-fields',
  //     },
  //   ],
  // },
  // {
  //   title: 'Modal & Overlays',
  //   icon: 'browser-outline',
  //   children: [
  //     {
  //       title: 'Dialog',
  //       link: '/pages/modal-overlays/dialog',
  //     },
  //     {
  //       title: 'Window',
  //       link: '/pages/modal-overlays/window',
  //     },
  //     {
  //       title: 'Popover',
  //       link: '/pages/modal-overlays/popover',
  //     },
  //     {
  //       title: 'Toastr',
  //       link: '/pages/modal-overlays/toastr',
  //     },
  //     {
  //       title: 'Tooltip',
  //       link: '/pages/modal-overlays/tooltip',
  //     },
  //   ],
  // },
  // {
  //   title: 'Extra Components',
  //   icon: 'message-circle-outline',
  //   children: [
  //     {
  //       title: 'Calendar',
  //       link: '/pages/extra-components/calendar',
  //     },
  //     {
  //       title: 'Progress Bar',
  //       link: '/pages/extra-components/progress-bar',
  //     },
  //     {
  //       title: 'Spinner',
  //       link: '/pages/extra-components/spinner',
  //     },
  //     {
  //       title: 'Alert',
  //       link: '/pages/extra-components/alert',
  //     },
  //     {
  //       title: 'Calendar Kit',
  //       link: '/pages/extra-components/calendar-kit',
  //     },
  //     {
  //       title: 'Chat',
  //       link: '/pages/extra-components/chat',
  //     },
  //   ],
  // },
  // {
  //   title: 'Maps',
  //   icon: 'map-outline',
  //   children: [
  //     {
  //       title: 'Google Maps',
  //       link: '/pages/maps/gmaps',
  //     },
  //     {
  //       title: 'Leaflet Maps',
  //       link: '/pages/maps/leaflet',
  //     },
  //     {
  //       title: 'Bubble Maps',
  //       link: '/pages/maps/bubble',
  //     },
  //     {
  //       title: 'Search Maps',
  //       link: '/pages/maps/searchmap',
  //     },
  //   ],
  // },
  // {
  //   title: 'Charts',
  //   icon: 'pie-chart-outline',
  //   children: [
  //     {
  //       title: 'Echarts',
  //       link: '/pages/charts/echarts',
  //     },
  //     {
  //       title: 'Charts.js',
  //       link: '/pages/charts/chartjs',
  //     },
  //     {
  //       title: 'D3',
  //       link: '/pages/charts/d3',
  //     },
  //   ],
  // },
  // {
  //   title: 'Editors',
  //   icon: 'text-outline',
  //   children: [
  //     {
  //       title: 'TinyMCE',
  //       link: '/pages/editors/tinymce',
  //     },
  //     {
  //       title: 'CKEditor',
  //       link: '/pages/editors/ckeditor',
  //     },
  //   ],
  // },
  // {
  //   title: 'Tables & Data',
  //   icon: 'grid-outline',
  //   children: [
  //     {
  //       title: 'Smart Table',
  //       link: '/pages/tables/smart-table',
  //     },
  //     {
  //       title: 'Tree Grid',
  //       link: '/pages/tables/tree-grid',
  //     },
  //   ],
  // },
  // {
  //   title: 'Miscellaneous',
  //   icon: 'shuffle-2-outline',
  //   children: [
  //     {
  //       title: '404',
  //       link: '/pages/miscellaneous/404',
  //     },
  //   ],
  // },
  // {
  //   title: 'Auth',
  //   icon: 'lock-outline',
  //   children: [
  //     {
  //       title: 'Login',
  //       link: '/auth/login',
  //     },
  //     {
  //       title: 'Register',
  //       link: '/auth/register',
  //     },
  //     {
  //       title: 'Request Password',
  //       link: '/auth/request-password',
  //     },
  //     {
  //       title: 'Reset Password',
  //       link: '/auth/reset-password',
  //     },
  //   ],
  // },
];
