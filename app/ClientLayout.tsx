'use client';
import { ReactNode } from "react";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import './globals.css'
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

interface RootLayoutProps {
    children: ReactNode;
}

const ClientLayout = ({ children }: RootLayoutProps) => {
    const color = useSelector((state: RootState) => state.color.color);

    return (
        <div className="flex h-screen overflow-hidden bg-dark">
            <Sidebar />
            <div className="flex flex-col flex-1 overflow-hidden">
                <Header />
                <div className="flex flex-col flex-1 overflow-hidden">
                    <main className={`flex-1 overflow-auto p-4  bg-[${color}]`}>
                        {children}
                    </main>
                </div>
            </div>
        </div>
   );
};

export default ClientLayout;
