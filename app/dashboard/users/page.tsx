"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { User } from "lucide-react"

export default function UsersPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Registered Users</h1>
          <Button>Add User</Button>
        </div>

        <div className="grid gap-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <Card key={i}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle>John Doe</CardTitle>
                      <CardDescription>Joined 2 months ago • 3 vehicles registered</CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                    Active
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="font-medium mb-2">User Details</h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>Email: john@example.com</p>
                      <p>Phone: (555) 123-4567</p>
                      <p>Wallet: 0x1234...5678</p>
                      <p>Role: Vehicle Owner</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Activity</h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>Vehicles Registered: 3</p>
                      <p>Active Auctions: 1</p>
                      <p>Completed Auctions: 2</p>
                      <p>Total Bids: 15</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end gap-2 mt-4">
                  <Button variant="outline">View Profile</Button>
                  <Button>Suspend User</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
} 