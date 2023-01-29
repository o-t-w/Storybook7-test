import React from 'react';
import {MyButton} from './MyButton';

export default {
    title: 'Forms/Button',
    component: MyButton
  };

  export const Primary = {
  args: {
    label: "Submit",
    className: "primary"
  }
  };
  

  export const Secondary = {
    args: {
      label: "Click",
      className: "secondary"
    },
    parameters: {
        backgrounds: {
            values: [
              { name: 'red', value: '#f00' },
              { name: 'green', value: '#0f0' },
              { name: 'blue', value: '#00f' },
            ],
          },
    }
    };

export const Disabled = {
    args: {
        label: 'Search',
        disabled: true
    }
}

export const Destructive = {
  args: {
      label: 'Delete',
      className: 'destructive'
  }
}