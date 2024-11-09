
import { CctvIcon, Router } from "lucide-react";
import React from "react";
import { BsHddNetwork } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { SiTplink } from "react-icons/si";
import { TbAccessPoint } from "react-icons/tb";

export const NavbarData = [
    {
        id: '@homepage',
        name: 'homepage',
        link: '/',
    },
    {
        id: '@docs',
        name: 'docs',
        link: '/docs',
    },
] as const ;

export const ProgrammingData = [
    {
        id: Math.random(),
        title: 'web development',
        link: '/docs/web_dev',
        icon: React.createElement(CgWebsite),
    }
] as const;

export const NetworkingData = [
    {
        id: '@mikrotik_router',
        title: 'mikrotik router',
        icon: React.createElement(Router),
        link: '/docs/mikrotik_router'
    },
    {
        id: '@huawei_switch',
        title: 'huawei switch',
        icon: React.createElement(BsHddNetwork),
        link: '/docs/huawei_switch'
    },
    {
        id: '@rujie_ap',
        title: 'ruijie access point',
        icon: React.createElement(TbAccessPoint),
        link: '/docs/rujie_ap'
    },
    {
        id: '@unifi_ap',
        title: 'unifi access point',
        icon: React.createElement(TbAccessPoint),
        link: '/docs/unifi_ap'
    },
    {
        id: '@tp_link_router',
        title: 'tp-link router',
        icon: React.createElement(SiTplink),
        link: '/docs/tp_link_router'
    },
    {
        id: '@cctv',
        title: 'CCTV',
        icon: React.createElement(CctvIcon),
        link: '/docs/cctv'
    },
] as const;