"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield } from "lucide-react"

export default function VerificationPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Verification Requests</h1>
          <Button>New Request</Button>
        </div>

        <div className="grid gap-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <Card key={i}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle>Vehicle Ownership Verification</CardTitle>
                      <CardDescription>Requested by John Doe • 2 days ago</CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
                    Pending Review
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="font-medium mb-2">Vehicle Details</h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>Make: BMW</p>
                      <p>Model: M4 Competition</p>
                      <p>Year: 2019</p>
                      <p>VIN: WBS4R9C50KB123456</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Owner Details</h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>Name: John Doe</p>
                      <p>Email: john@example.com</p>
                      <p>Phone: (555) 123-4567</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end gap-2 mt-4">
                  <Button variant="outline">Reject</Button>
                  <Button>Approve</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
