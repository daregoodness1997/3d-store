import React from 'react';

interface TabProps {
  tab: {};
  handleClick?: (e?: React.SyntheticEvent) => void;
  isFilterTab?: boolean;
  isActiveTab?: boolean;
}

const Tab: React.FC<TabProps> = ({
  tab,
  handleClick,
  isFilterTab,
  isActiveTab,
}) => {
  return <div>Tab</div>;
};

export default Tab;
