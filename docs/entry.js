import 'regenerator-runtime/runtime';

    window.Components = {};

  
      import React from "react";

      import ReactDOM from "react-dom";


      import Wrapper from '../better-docs/src/react-wrapper.jsx';

      window.React = React;

      window.ReactDOM = ReactDOM;

      window.Wrapper = Wrapper;

    
    import './styles/reset.css';

    import './styles/iframe.css';

  
      import _CustomWrapper from '../docs-src/options/component.jsx';

      Components._CustomWrapper = _CustomWrapper;

      import BaseActionComponent from '../admin-bro/src/frontend/components/app/base-action.jsx';
Components['BaseActionComponent'] = BaseActionComponent;

import BasePropertyComponent from '../admin-bro/src/frontend/components/property-type/index.jsx';
Components['BasePropertyComponent'] = BasePropertyComponent;

import Column from '../admin-bro/src/frontend/components/ui/column.jsx';
Components['Column'] = Column;

import Columns from '../admin-bro/src/frontend/components/ui/columns.jsx';
Components['Columns'] = Columns;

import DashboardHeader from '../admin-bro/src/frontend/components/ui/dashboard-header.jsx';
Components['DashboardHeader'] = DashboardHeader;

import Dropdown from '../admin-bro/src/frontend/components/ui/dropdown.jsx';
Components['Dropdown'] = Dropdown;

import Label from '../admin-bro/src/frontend/components/ui/label.jsx';
Components['Label'] = Label;

import Loader from '../admin-bro/src/frontend/components/ui/loader.jsx';
Components['Loader'] = Loader;

import Paginate from '../admin-bro/src/frontend/components/ui/paginate.jsx';
Components['Paginate'] = Paginate;

import PropertyInEdit from '../admin-bro/src/frontend/components/ui/property-in-edit.jsx';
Components['PropertyInEdit'] = PropertyInEdit;

import PropertyInFilter from '../admin-bro/src/frontend/components/ui/property-in-filter.jsx';
Components['PropertyInFilter'] = PropertyInFilter;

import PropertyInShow from '../admin-bro/src/frontend/components/ui/property-in-show.jsx';
Components['PropertyInShow'] = PropertyInShow;

import StyledButton from '../admin-bro/src/frontend/components/ui/styled-button.jsx';
Components['StyledButton'] = StyledButton;

import Table from '../admin-bro/src/frontend/components/ui/table.jsx';
Components['Table'] = Table;

import ValueBlock from '../admin-bro/src/frontend/components/ui/value-block.jsx';
Components['ValueBlock'] = ValueBlock;

import WrapperBox from '../admin-bro/src/frontend/components/ui/wrapper-box.jsx';
Components['WrapperBox'] = WrapperBox;