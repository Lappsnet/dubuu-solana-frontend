"use client"

import { BarChart3, Car, Gavel, Users } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">Dashboard Overview</h1>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#181f2e] rounded-xl p-6 border border-[#1a2236] shadow-lg">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-cyan-400/20 flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-cyan-400" />
              </div>
              <div>
                <p className="text-[#b3c2d6] text-sm">Total Revenue</p>
                <p className="text-2xl font-bold text-white">$1,234,567</p>
              </div>
            </div>
          </div>
          
          <div className="bg-[#181f2e] rounded-xl p-6 border border-[#1a2236] shadow-lg">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-purple-400/20 flex items-center justify-center">
                <Gavel className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <p className="text-[#b3c2d6] text-sm">Active Auctions</p>
                <p className="text-2xl font-bold text-white">24</p>
              </div>
            </div>
          </div>
          
          <div className="bg-[#181f2e] rounded-xl p-6 border border-[#1a2236] shadow-lg">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-blue-400/20 flex items-center justify-center">
                <Car className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <p className="text-[#b3c2d6] text-sm">Registered Vehicles</p>
                <p className="text-2xl font-bold text-white">1,234</p>
              </div>
            </div>
          </div>
          
          <div className="bg-[#181f2e] rounded-xl p-6 border border-[#1a2236] shadow-lg">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-green-400/20 flex items-center justify-center">
                <Users className="h-6 w-6 text-green-400" />
              </div>
              <div>
                <p className="text-[#b3c2d6] text-sm">Active Users</p>
                <p className="text-2xl font-bold text-white">5,678</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-[#181f2e] rounded-xl p-6 border border-[#1a2236] shadow-lg">
            <h2 className="text-xl font-semibold text-white mb-4">Recent Transactions</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-[#101624] rounded-lg">
                  <div>
                    <p className="text-white font-medium">Tesla Model S Plaid</p>
                    <p className="text-sm text-[#b3c2d6]">Transaction #{i}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-cyan-400 font-semibold">$129,990</p>
                    <p className="text-sm text-[#b3c2d6]">2 hours ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#181f2e] rounded-xl p-6 border border-[#1a2236] shadow-lg">
            <h2 className="text-xl font-semibold text-white mb-4">Pending Verifications</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-[#101624] rounded-lg">
                  <div>
                    <p className="text-white font-medium">Porsche 911 GT3</p>
                    <p className="text-sm text-[#b3c2d6]">Verification #{i}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-purple-400 font-semibold">Pending</p>
                    <p className="text-sm text-[#b3c2d6]">1 day ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
