"use client"

import { Gavel, Clock, DollarSign, Users, TrendingUp } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
//import '../../styles/car-card.css'

const auctions = [
  {
    image: '/cars/bmw-m4.jpg',
    title: 'BMW M4 Competition Auction',
    started: '2 days ago',
    ends: 'in 5 days',
    startingPrice: '$45,000',
    currentBid: '$52,000',
    numBids: 8,
    minIncrement: '$1,000',
    make: 'BMW',
    model: 'M4 Competition',
    year: 2019,
    mileage: '15,000 miles',
    status: 'Active',
  },
  {
    image: '/cars/tesla-model3.jpg',
    title: 'Tesla Model 3 Performance Auction',
    started: '1 day ago',
    ends: 'in 4 days',
    startingPrice: '$40,000',
    currentBid: '$44,500',
    numBids: 5,
    minIncrement: '$1,000',
    make: 'Tesla',
    model: 'Model 3 Performance',
    year: 2021,
    mileage: '8,200 miles',
    status: 'Active',
  },
  {
    image: '/cars/porsche-911.jpg',
    title: 'Porsche 911 Carrera S Auction',
    started: '3 days ago',
    ends: 'in 2 days',
    startingPrice: '$90,000',
    currentBid: '$98,000',
    numBids: 6,
    minIncrement: '$2,000',
    make: 'Porsche',
    model: '911 Carrera S',
    year: 2020,
    mileage: '12,000 miles',
    status: 'Active',
  },
]

export default function AuctionsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">Active Auctions</h1>
        
        <div className="grid gap-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="bg-[#181f2e] rounded-xl p-6 border border-[#1a2236] shadow-lg">
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-lg bg-cyan-400/20 flex items-center justify-center">
                    <Gavel className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Porsche 911 GT3</h3>
                    <div className="mt-2 flex flex-col gap-1">
                      <div className="flex items-center text-[#b3c2d6]">
                        <DollarSign className="h-4 w-4 mr-2" />
                        Current Bid: $189,990
                      </div>
                      <div className="flex items-center text-[#b3c2d6]">
                        <Clock className="h-4 w-4 mr-2" />
                        Ends in: 2 days
                      </div>
                      <div className="flex items-center text-[#b3c2d6]">
                        <Users className="h-4 w-4 mr-2" />
                        12 Bidders
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-purple-400/20 text-purple-400">
                    <TrendingUp className="h-4 w-4" />
                    <span>Active</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-400">
                    <Clock className="h-4 w-4" />
                    <span>2 days left</span>
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
