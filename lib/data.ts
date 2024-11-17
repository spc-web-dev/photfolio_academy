
import { CctvIcon, Router } from "lucide-react";
import React from "react";
import { BsHddNetwork } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { SiTplink } from "react-icons/si";
import { TbAccessPoint } from "react-icons/tb";

export const NavbarData = [
    {
        id: 'homepage',
        name: 'homepage',
        link: '/',
    },
    {
        id: 'docs',
        name: 'docs',
        link: '/docs',
    },
] as const ;

export const ProgrammingData = [
    {
        id: Math.random(),
        title: 'web development',
        link: '/docs/programming/web_dev',
        icon: React.createElement(CgWebsite),
    }
] as const;

export const NetworkingData = [
    {
        id: 'mikrotik_router',
        title: 'mikrotik router',
        icon: React.createElement(Router),
        link: '/docs/networking/mikrotik_router'
    },
    {
        id: 'huawei_switch',
        title: 'huawei switch',
        icon: React.createElement(BsHddNetwork),
        link: '/docs/networking/huawei_switch'
    },
    {
        id: 'ruijie_ap',
        title: 'ruijie access point',
        icon: React.createElement(TbAccessPoint),
        link: '/docs/networking/ruijie_ap'
    },
    {
        id: 'unifi_ap',
        title: 'unifi access point',
        icon: React.createElement(TbAccessPoint),
        link: '/docs/networking/unifi_ap'
    },
    {
        id: 'tp_link_router',
        title: 'tp-link router',
        icon: React.createElement(SiTplink),
        link: '/docs/networking/tp_link_router'
    },
    {
        id: 'cctv',
        title: 'CCTV',
        icon: React.createElement(CctvIcon),
        link: '/docs/networking/cctv'
    },
] as const;

export const VideosData = [
    {
        id: 1,
        title: 'Mikrotik Basic Configuration',
        type: 'network',
        lesson_id: 'mikrotik_router',
        url:'/videos/lesson.mp4',
    },
    {
        id: 2,
        title: 'PPPOE Server & Client on Mikroitk router',
        type: 'network',
        lesson_id: 'mikrotik_router',
        url:'/videos/lesson.mp4',
    },
    {
        id: 3,
        title: 'TP-Link basic configuration',
        type: 'network',
        lesson_id: 'tp_link_router',
        url:'/videos/lesson.mp4',
    },
    {
        id: 4,
        title: 'Ruijie AP Basic Configuration',
        type: 'network',
        lesson_id: 'ruijie_ap',
        url:'/videos/lesson.mp4',
    },
    {
        id: 5,
        title: 'Unifi AP Basic Configuration',
        type: 'network',
        lesson_id: 'unifi_ap',
        url:'/videos/lesson.mp4',
    },
    {
        id: 6,
        title: 'DVR Hikvision basic configuration',
        type: 'network',
        lesson_id: 'cctv',
        url:'/videos/lesson.mp4',
    },
    {
        id: 7,
        title: 'Basic Configure Huawei Switch',
        type: 'network',
        lesson_id: 'huawei_switch',
        url:'/videos/lesson.mp4',
    },
    {
        id: 8,
        title: 'DHCP Server and Client Configure on Mikrotik router',
        type: 'network',
        lesson_id: 'mikrotik_router',
        url:'/videos/lesson.mp4',
    },
    {
        id: 9,
        title: 'VLAN Configure On Mikrotik Router',
        type: 'network',
        lesson_id: 'mikrotik_router',
        url:'/videos/lesson.mp4',
    },
] as const;