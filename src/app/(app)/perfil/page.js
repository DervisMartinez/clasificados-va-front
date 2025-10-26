"use client";

import { useSearchParams, useRouter } from "next/navigation";

import AuthGuard from "@/components/Guards/AuthGuard";

import ProfileTab from "./Tabs/ProfileTab";
import AdTab from "./Tabs/AdTab/AdTab";
import AdddressTab from "./Tabs/AddressTab";
import SecurityTab from "./Tabs/SecurityTab";

import Sidebar from "./Tabs/Sidebar";
import Title from "@/components/Base/Title";

import { useAuth } from "@/context/AuthContext";
import { useTab } from "@/hooks/useTab";

import Head from "next/head";


export default function Profile() {
  //const [activeTab, setActiveTab] = useState("perfil"); // 'perfil' o 'anuncios'

  const router = useRouter();

  const { user } = useAuth();


  const atabs = [
    {
      key: 'perfil',
      title: 'Perfil',
      component: ProfileTab,
    },
    {
      key: 'informacion-acceso',
      title: 'Información de acceso',
      component: SecurityTab,
    },
    {
      key: 'direccion',
      title: 'Dirección',
      component: AdddressTab,
    },
    {
      key: 'anuncios',
      title: 'Mis anuncios',
      component: AdTab,
    },
  ]

  const params = useSearchParams();

  const queryObject = Object.fromEntries(params.entries());

  const { activeTab, setActiveTabIndex, tabs, } = useTab(atabs, queryObject.tab);

  const TabComponent = activeTab.component;


  const handleTabChange = (index) => {

    setActiveTabIndex(index);

    const tabKey = atabs[index].key;

    router.push(`?tab=${tabKey}`, { scroll: false });

    window.scrollTo({ top: 0, behavior: 'smooth' })
  };


  return (
    <AuthGuard middleware="auth">
     <title>Mi perfil | Clasificados RA</title>

      <div className="px-8 md:px-18 py-8">
        {/* Sidebar */}

        <Title as="h1" title="Mi cuenta" align="left" />

        <div className="flex flex-col md:flex-row gap-5 py-5">

          <Sidebar activeTab={activeTab} tabs={tabs} setActiveTabIndex={handleTabChange} />

          {/* Main content */}
          <main className="flex-1 p-8 overflow-y-auto bg-white rounded-md min-h-full">
            <TabComponent user={user} />
          </main>
        </div>

      </div>

    </AuthGuard>
  );
}


