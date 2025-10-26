import { useState } from "react";

export function useTab(componentTabs, activeKey) {
  
    const initialIndex = componentTabs.findIndex(tab => tab.key === activeKey);

  const [activeTabIndex, setActiveTabIndex] = useState(
    initialIndex !== -1 ? initialIndex : 0
  );

  const tabs = componentTabs.map((tab, index) => ({
    index,
    title: tab.title,
    component: tab.component,
    key: tab.key,
  }));

  const activeTab = tabs[activeTabIndex];

  return {
    activeTabIndex,
    setActiveTabIndex,
    activeTab,
    tabs,
  };
}