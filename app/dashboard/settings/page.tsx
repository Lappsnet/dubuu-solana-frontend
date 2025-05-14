"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Settings } from "lucide-react"

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Settings</h1>
          <Button>Save Changes</Button>
        </div>

        <div className="grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Configure your marketplace settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="marketplace-name">Marketplace Name</Label>
                <Input id="marketplace-name" defaultValue="Dubuu Marketplace" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="marketplace-description">Marketplace Description</Label>
                <Input
                  id="marketplace-description"
                  defaultValue="A decentralized marketplace for luxury vehicles"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-email">Contact Email</Label>
                <Input id="contact-email" type="email" defaultValue="contact@dubuu.com" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Auction Settings</CardTitle>
              <CardDescription>Configure auction-related settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Enable Automatic Bidding</Label>
                  <p className="text-sm text-muted-foreground">
                    Allow users to set maximum bids for automatic bidding
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Enable Reserve Prices</Label>
                  <p className="text-sm text-muted-foreground">
                    Allow sellers to set minimum prices for their auctions
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="min-bid-increment">Minimum Bid Increment (%)</Label>
                <Input id="min-bid-increment" type="number" defaultValue="5" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Verification Settings</CardTitle>
              <CardDescription>Configure vehicle verification settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Require Vehicle Verification</Label>
                  <p className="text-sm text-muted-foreground">
                    All vehicles must be verified before being listed
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Enable Automatic Verification</Label>
                  <p className="text-sm text-muted-foreground">
                    Use AI to automatically verify vehicle documents
                  </p>
                </div>
                <Switch />
              </div>
              <div className="space-y-2">
                <Label htmlFor="verification-fee">Verification Fee (ETH)</Label>
                <Input id="verification-fee" type="number" defaultValue="0.01" step="0.001" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Blockchain Settings</CardTitle>
              <CardDescription>Configure blockchain-related settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="network">Network</Label>
                <Input id="network" defaultValue="Ethereum Mainnet" disabled />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contract-address">Marketplace Contract Address</Label>
                <Input
                  id="contract-address"
                  defaultValue="0x1234...5678"
                  disabled
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gas-limit">Default Gas Limit</Label>
                <Input id="gas-limit" type="number" defaultValue="300000" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
