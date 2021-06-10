import React from 'react';
import {TouchableOpacity} from 'react-native';
import {ICNavbefore, ICNavbeforeLight} from '../../../assets';

const IconOnly = ({onPress, icon}) => {
  const Icon = () => {
    if (icon === 'before-dark') {
      return <ICNavbefore />;
    }
    if (icon === 'before-light') {
      return <ICNavbeforeLight />;
    }
    return <ICNavbefore />;
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default IconOnly;
