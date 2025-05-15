"use client"

import { BarChart3, Car, Gavel, Users, TrendingUp, TrendingDown } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">Analytics Overview</h1>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#181f2e] rounded-xl p-6 border border-[#1a2236] shadow-lg">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-cyan-400/20 flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-cyan-400" />
              </div>
              <div>
                <p className="text-[#b3c2d6] text-sm">Monthly Revenue</p>
                <p className="text-2xl font-bold text-white">$234,567</p>
                <div className="flex items-center text-sm text-green-400">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +12.5%
                </div>
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
                <div className="flex items-center text-sm text-green-400">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +8.2%
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#181f2e] rounded-xl p-6 border border-[#1a2236] shadow-lg">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-blue-400/20 flex items-center justify-center">
                <Car className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <p className="text-[#b3c2d6] text-sm">New Listings</p>
                <p className="text-2xl font-bold text-white">156</p>
                <div className="flex items-center text-sm text-red-400">
                  <TrendingDown className="h-4 w-4 mr-1" />
                  -3.1%
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#181f2e] rounded-xl p-6 border border-[#1a2236] shadow-lg">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-green-400/20 flex items-center justify-center">
                <Users className="h-6 w-6 text-green-400" />
              </div>
              <div>
                <p className="text-[#b3c2d6] text-sm">New Users</p>
                <p className="text-2xl font-bold text-white">89</p>
                <div className="flex items-center text-sm text-green-400">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +15.3%
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Revenue Chart */}
        <div className="bg-[#181f2e] rounded-xl p-6 border border-[#1a2236] shadow-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Monthly Revenue</h2>
          <div className="h-[300px] flex items-center justify-center text-[#b3c2d6]">
            Chart Placeholder
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-[#181f2e] rounded-xl p-6 border border-[#1a2236] shadow-lg">
            <h2 className="text-xl font-semibold text-white mb-4">Top Performing Vehicles</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-[#101624] rounded-lg">
                  <div>
                    <p className="text-white font-medium">Tesla Model S Plaid</p>
                    <p className="text-sm text-[#b3c2d6]">Views: 1,234</p>
                  </div>
                  <div className="text-right">
                    <p className="text-cyan-400 font-semibold">$129,990</p>
                    <p className="text-sm text-[#b3c2d6]">5 bids</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#181f2e] rounded-xl p-6 border border-[#1a2236] shadow-lg">
            <h2 className="text-xl font-semibold text-white mb-4">User Activity</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-[#101624] rounded-lg">
                  <div>
                    <p className="text-white font-medium">John Doe</p>
                    <p className="text-sm text-[#b3c2d6]">Active for 2 days</p>
                  </div>
                  <div className="text-right">
                    <p className="text-purple-400 font-semibold">3 Listings</p>
                    <p className="text-sm text-[#b3c2d6]">5 Bids</p>
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