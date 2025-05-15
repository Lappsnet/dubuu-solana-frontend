"use client"

import { Users, Mail, Phone, Car, Shield } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"

export default function UsersPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">Registered Users</h1>
        
        <div className="grid gap-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="bg-[#181f2e] rounded-xl p-6 border border-[#1a2236] shadow-lg">
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-lg bg-cyan-400/20 flex items-center justify-center">
                    <Users className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">John Doe</h3>
                    <div className="mt-2 flex flex-col gap-1">
                      <div className="flex items-center text-[#b3c2d6]">
                        <Mail className="h-4 w-4 mr-2" />
                        john@example.com
                      </div>
                      <div className="flex items-center text-[#b3c2d6]">
                        <Phone className="h-4 w-4 mr-2" />
                        (555) 123-4567
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-purple-400/20 text-purple-400">
                    <Car className="h-4 w-4" />
                    <span>3 Vehicles</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-400">
                    <Shield className="h-4 w-4" />
                    <span>Verified</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
} 