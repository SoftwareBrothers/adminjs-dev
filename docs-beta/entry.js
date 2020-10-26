
    window.reactComponents = {};

    window.vueComponents = {};

    window.Components = {};

  
      import React from "react";

      import ReactDOM from "react-dom";


      import ReactWrapper from '../better-docs/lib/components/react-wrapper.js';

      window.React = React;

      window.ReactDOM = ReactDOM;

      window.ReactWrapper = ReactWrapper;

    
    import './styles/reset.css';

    import './styles/iframe.css';

  
      import _CustomWrapper from '../admin-bro/docs-helpers/component.tsx';

      window._CustomWrapper = _CustomWrapper;

      import FnComponent0 from '../admin-bro/src/frontend/hooks/use-current-admin.ts';
Components['useCurrentAdmin'] = FnComponent0;

import FnComponent1 from '../admin-bro/src/frontend/hooks/use-local-storage/use-local-storage.ts';
Components['useLocalStorage'] = FnComponent1;

import FnComponent2 from '../admin-bro/src/frontend/hooks/use-notice.ts';
Components['useNotice'] = FnComponent2;

import FnComponent3 from '../admin-bro/src/frontend/hooks/use-record/use-record.tsx';
Components['useRecord'] = FnComponent3;

import FnComponent4 from '../admin-bro/src/frontend/hooks/use-records/use-records.ts';
Components['useRecords'] = FnComponent4;

import FnComponent5 from '../admin-bro/src/frontend/hooks/use-resource/use-resource.ts';
Components['useResource'] = FnComponent5;

import FnComponent6 from '../admin-bro/src/frontend/hooks/use-selected-records/use-selected-records.ts';
Components['useSelectedRecords'] = FnComponent6;

import FnComponent7 from '../admin-bro/src/frontend/hooks/use-translation.ts';
Components['useTranslation'] = FnComponent7;

import Component0 from '../admin-bro/src/frontend/components/app/action-button/action-button.tsx';
reactComponents['ActionButton'] = Component0;

import Component1 from '../admin-bro/src/frontend/components/app/action-header/action-header.tsx';
reactComponents['ActionHeader'] = Component1;

import Component2 from '../admin-bro-design-system/src/atoms/badge/badge.tsx';
reactComponents['Badge'] = Component2;

import Component3 from '../admin-bro/src/frontend/components/app/base-action-component.tsx';
reactComponents['BaseActionComponent'] = Component3;

import Component4 from '../admin-bro/src/frontend/components/property-type/index.tsx';
reactComponents['BasePropertyComponent'] = Component4;

import Component5 from '../admin-bro-design-system/src/atoms/box/box.tsx';
reactComponents['Box'] = Component5;

import Component6 from '../admin-bro/src/frontend/components/app/breadcrumbs.tsx';
reactComponents['Breadcrumbs'] = Component6;

import Component7 from '../admin-bro-design-system/src/atoms/button/button.tsx';
reactComponents['Button'] = Component7;

import Component8 from '../admin-bro-design-system/src/organisms/button-group/button-group.tsx';
reactComponents['ButtonGroup'] = Component8;

import Component9 from '../admin-bro-design-system/src/atoms/check-box.tsx';
reactComponents['CheckBox'] = Component9;

import Component10 from '../admin-bro-design-system/src/organisms/current-user-nav/current-user-nav.tsx';
reactComponents['CurrentUserNav'] = Component10;

import Component11 from '../admin-bro-design-system/src/molecules/date-picker.tsx';
reactComponents['DatePicker'] = Component11;

import Component12 from '../admin-bro-design-system/src/molecules/drawer/drawer.tsx';
reactComponents['Drawer'] = Component12;

import Component13 from '../admin-bro-design-system/src/molecules/drawer/drawer-content.tsx';
reactComponents['DrawerContent'] = Component13;

import Component14 from '../admin-bro-design-system/src/molecules/drawer/drawer-footer.tsx';
reactComponents['DrawerFooter'] = Component14;

import Component15 from '../admin-bro/src/frontend/components/app/drawer-portal.tsx';
reactComponents['DrawerPortal'] = Component15;

import Component16 from '../admin-bro-design-system/src/molecules/drop-down/drop-down.tsx';
reactComponents['DropDown'] = Component16;

import Component17 from '../admin-bro-design-system/src/molecules/drop-down/drop-down-item.tsx';
reactComponents['DropDownItem'] = Component17;

import Component18 from '../admin-bro-design-system/src/molecules/drop-down/drop-down-menu.tsx';
reactComponents['DropDownMenu'] = Component18;

import Component19 from '../admin-bro-design-system/src/molecules/drop-down/drop-down-trigger.tsx';
reactComponents['DropDownTrigger'] = Component19;

import Component20 from '../admin-bro-design-system/src/molecules/drop-zone/drop-zone.tsx';
reactComponents['DropZone'] = Component20;

import Component21 from '../admin-bro-design-system/src/molecules/drop-zone/drop-zone-item.tsx';
reactComponents['DropZoneItem'] = Component21;

import Component22 from '../admin-bro/src/frontend/components/app/error-message.tsx';
reactComponents['ErrorMessageBox'] = Component22;

import Component23 from '../admin-bro-design-system/src/molecules/form-group/form-group.tsx';
reactComponents['FormGroup'] = Component23;

import Component24 from '../admin-bro-design-system/src/molecules/form-group/form-message.tsx';
reactComponents['FormMessage'] = Component24;

import Component25 from '../admin-bro-design-system/src/atoms/typography/header.tsx';
reactComponents['Header'] = Component25;

import Component26 from '../admin-bro-design-system/src/atoms/icon.tsx';
reactComponents['Icon'] = Component26;

import Component27 from '../admin-bro-design-system/src/atoms/illustration.tsx';
reactComponents['Illustration'] = Component27;

import Component28 from '../admin-bro-design-system/src/molecules/info-box.tsx';
reactComponents['InfoBox'] = Component28;

import Component29 from '../admin-bro-design-system/src/atoms/input.tsx';
reactComponents['Input'] = Component29;

import Component30 from '../admin-bro-design-system/src/molecules/form-group/input-group.tsx';
reactComponents['InputGroup'] = Component30;

import Component31 from '../admin-bro-design-system/src/atoms/label.tsx';
reactComponents['Label'] = Component31;

import Component32 from '../admin-bro-design-system/src/atoms/link.tsx';
reactComponents['Link'] = Component32;

import Component33 from '../admin-bro-design-system/src/atoms/loader.tsx';
reactComponents['Loader'] = Component33;

import Component34 from '../admin-bro-design-system/src/molecules/logged-user.tsx';
reactComponents['LoggedUser'] = Component34;

import Component35 from '../admin-bro-design-system/src/molecules/message-box.tsx';
reactComponents['MessageBox'] = Component35;

import Component36 from '../admin-bro-design-system/src/molecules/modal/modal.tsx';
reactComponents['Modal'] = Component36;

import Component37 from '../admin-bro-design-system/src/molecules/modal/modal-inline.tsx';
reactComponents['ModalInline'] = Component37;

import Component38 from '../admin-bro-design-system/src/molecules/nav-group.tsx';
reactComponents['NavGroup'] = Component38;

import Component39 from '../admin-bro-design-system/src/organisms/navigation/navigation.tsx';
reactComponents['Navigation'] = Component39;

import Component40 from '../admin-bro-design-system/src/molecules/navigation-element/navigation-element.tsx';
reactComponents['NavigationElement'] = Component40;

import Component41 from '../admin-bro-design-system/src/molecules/pagination.tsx';
reactComponents['Pagination'] = Component41;

import Component42 from '../admin-bro-design-system/src/atoms/placeholder.tsx';
reactComponents['Placeholder'] = Component42;

import Component43 from '../admin-bro-design-system/src/atoms/radio.tsx';
reactComponents['Radio'] = Component43;

import Component44 from '../admin-bro/src/frontend/components/app/records-table/records-table.tsx';
reactComponents['RecordsTable'] = Component44;

import Component45 from '../admin-bro/src/frontend/components/app/records-table/records-table-header.tsx';
reactComponents['RecordsTableHeader'] = Component45;

import Component46 from '../admin-bro-design-system/src/molecules/rich-text/rich-text.tsx';
reactComponents['RichText'] = Component46;

import Component47 from '../admin-bro-design-system/src/atoms/section.tsx';
reactComponents['Section'] = Component47;

import Component48 from '../admin-bro/src/frontend/components/actions/show.tsx';
reactComponents['ShowAction'] = Component48;

import Component49 from '../admin-bro/src/frontend/components/actions/bulk-delete.tsx';
reactComponents['ShowAction'] = Component49;

import Component50 from '../admin-bro/src/frontend/components/app/sidebar/sidebar-resource-section.tsx';
reactComponents['SidebarResourceSection'] = Component50;

import Component51 from '../admin-bro-design-system/src/molecules/stepper/step.tsx';
reactComponents['Step'] = Component51;

import Component52 from '../admin-bro-design-system/src/molecules/stepper/stepper.tsx';
reactComponents['Stepper'] = Component52;

import Component53 from '../admin-bro-design-system/src/atoms/table/table.tsx';
reactComponents['Table'] = Component53;

import Component54 from '../admin-bro-design-system/src/atoms/table/table-body.tsx';
reactComponents['TableBody'] = Component54;

import Component55 from '../admin-bro-design-system/src/atoms/table/table-caption.tsx';
reactComponents['TableCaption'] = Component55;

import Component56 from '../admin-bro-design-system/src/atoms/table/table-cell.tsx';
reactComponents['TableCell'] = Component56;

import Component57 from '../admin-bro-design-system/src/atoms/table/table-head.tsx';
reactComponents['TableHead'] = Component57;

import Component58 from '../admin-bro-design-system/src/atoms/table/table-row.tsx';
reactComponents['TableRow'] = Component58;

import Component59 from '../admin-bro-design-system/src/atoms/text.tsx';
reactComponents['Text'] = Component59;

import Component60 from '../admin-bro-design-system/src/atoms/text-area.tsx';
reactComponents['TextArea'] = Component60;

import Component61 from '../admin-bro-design-system/src/atoms/tooltip/tooltip.tsx';
reactComponents['Tooltip'] = Component61;

import Component62 from '../admin-bro-design-system/src/atoms/tooltip/tooltip-control.tsx';
reactComponents['TooltipControl'] = Component62;

import Component63 from '../admin-bro-design-system/src/atoms/tooltip/tooltip-content.tsx';
reactComponents['TooltipContent'] = Component63;

import Component64 from '../admin-bro-design-system/src/molecules/value-group/value-group.tsx';
reactComponents['ValueGroup'] = Component64;

import Component65 from '../admin-bro/src/frontend/hoc/with-notice.ts';
reactComponents['withNotice'] = Component65;