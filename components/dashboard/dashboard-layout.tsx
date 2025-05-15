"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Car, Gavel, Home, LayoutDashboard, LogOut, Settings, Shield, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { PhantomConnectButton } from "@/components/phantom-connect-button"

interface DashboardLayoutProps {
  children: ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname()

  const navigation = [
    {
      title: "Overview",
      icon: LayoutDashboard,
      href: "/dashboard",
      isActive: pathname === "/dashboard",
    },
    {
      title: "Verification Requests",
      icon: Shield,
      href: "/dashboard/verification",
      isActive: pathname === "/dashboard/verification",
    },
    {
      title: "Auctions",
      icon: Gavel,
      href: "/dashboard/auctions",
      isActive: pathname === "/dashboard/auctions",
    },
    {
      title: "Vehicles",
      icon: Car,
      href: "/dashboard/vehicles",
      isActive: pathname === "/dashboard/vehicles",
    },
    {
      title: "Users",
      icon: Users,
      href: "/dashboard/users",
      isActive: pathname === "/dashboard/users",
    },
    {
      title: "Analytics",
      icon: BarChart3,
      href: "/dashboard/analytics",
      isActive: pathname === "/dashboard/analytics",
    },
    {
      title: "Settings",
      icon: Settings,
      href: "/dashboard/settings",
      isActive: pathname === "/dashboard/settings",
    },
  ]

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-[#101624] to-[#0b1120]">
      {/* Sidebar */}
      <div className="hidden md:flex w-64 flex-col border-r border-[#1a2236] bg-[#101624]">
        <div className="flex items-center gap-2 p-4 border-b border-[#1a2236]">
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center">
            <span className="text-white font-bold text-xl">D</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              Dubuu
            </span>
            <span className="text-xs text-[#b3c2d6]">Admin Dashboard</span>
          </div>
        </div>

        <nav className="flex-1 p-4">
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start text-[#b3c2d6] hover:text-cyan-400 hover:bg-cyan-400/10" asChild>
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Back to Marketplace
              </Link>
            </Button>
            {navigation.map((item) => (
              <Button
                key={item.title}
                variant={item.isActive ? "secondary" : "ghost"}
                className={`w-full justify-start ${
                  item.isActive 
                    ? "bg-cyan-400/20 text-cyan-400 hover:bg-cyan-400/30" 
                    : "text-[#b3c2d6] hover:text-cyan-400 hover:bg-cyan-400/10"
                }`}
                asChild
              >
                <Link href={item.href}>
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.title}
                </Link>
              </Button>
            ))}
          </div>
        </nav>

        <div className="p-4 border-t border-[#1a2236]">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="/admin-interface.png" alt="Admin" />
              <AvatarFallback className="bg-gradient-to-r from-cyan-400 to-purple-500">AD</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-white">Admin User</span>
              <span className="text-xs text-[#b3c2d6]">admin@dubuu.com</span>
            </div>
            <Button variant="ghost" size="icon" className="ml-auto text-[#b3c2d6] hover:text-cyan-400 hover:bg-cyan-400/10">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <header className="flex h-16 items-center gap-4 border-b border-[#1a2236] px-6 bg-[#101624]">
          <div className="relative flex-1 max-w-md">
            <Input 
              type="search" 
              placeholder="Search..." 
              className="pl-9 bg-[#181f2e] border-[#1a2236] text-[#b3c2d6] placeholder:text-[#b3c2d6]/50 focus:border-cyan-400/50 focus:ring-cyan-400/20" 
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4 text-[#b3c2d6]"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <PhantomConnectButton />
          </div>
        </header>
        <main className="flex-1 overflow-auto p-6 bg-gradient-to-b from-[#101624] to-[#0b1120]">{children}</main>
      </div>
    </div>
  )
}
