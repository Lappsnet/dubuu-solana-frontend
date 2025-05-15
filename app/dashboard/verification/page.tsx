"use client"

import { Shield, CheckCircle2, XCircle } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Button } from "@/components/ui/button"

export default function VerificationPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">Verification Requests</h1>
        
        <div className="grid gap-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="bg-[#181f2e] rounded-xl p-6 border border-[#1a2236] shadow-lg">
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-lg bg-cyan-400/20 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Tesla Model S Plaid</h3>
                    <p className="text-[#b3c2d6]">Submitted by John Doe</p>
                    <div className="mt-2 flex gap-2">
                      <span className="px-2 py-1 rounded-full text-xs bg-purple-400/20 text-purple-400">2022</span>
                      <span className="px-2 py-1 rounded-full text-xs bg-blue-400/20 text-blue-400">5,000 miles</span>
                      <span className="px-2 py-1 rounded-full text-xs bg-cyan-400/20 text-cyan-400">San Francisco, CA</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button className="bg-green-500/20 text-green-400 hover:bg-green-500/30 hover:text-green-300">
                    <CheckCircle2 className="h-4 w-4 mr-2" />
                    Approve
                  </Button>
                  <Button className="bg-red-500/20 text-red-400 hover:bg-red-500/30 hover:text-red-300">
                    <XCircle className="h-4 w-4 mr-2" />
                    Reject
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
