"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
//import '../../styles/car-card.css'
import { Gavel } from "lucide-react"

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
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Active Auctions</h1>
          <button className="car-card-btn">Create Auction</button>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {auctions.map((a) => (
            <div className="car-card" key={a.title}>
              <div className="car-card-image-area">
                <img src={a.image} alt={a.title} className="car-card-image" />
                <div className="car-card-glare"></div>
              </div>
              <div className="car-card-content">
                <div className="car-card-title flex items-center gap-2"><Gavel className="h-5 w-5 text-cyan-400" />{a.title}</div>
                <div className="car-card-specs mb-2">
                  <div className="car-card-spec">{a.started}</div>
                  <div className="car-card-spec">Ends {a.ends}</div>
                </div>
                <div className="car-card-specs mb-2">
                  <div className="car-card-spec">Starting: {a.startingPrice}</div>
                  <div className="car-card-spec">Current: {a.currentBid}</div>
                  <div className="car-card-spec">Bids: {a.numBids}</div>
                  <div className="car-card-spec">Min Inc: {a.minIncrement}</div>
                </div>
                <div className="car-card-specs mb-2">
                  <div className="car-card-spec">{a.make}</div>
                  <div className="car-card-spec">{a.model}</div>
                  <div className="car-card-spec">{a.year}</div>
                  <div className="car-card-spec">{a.mileage}</div>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="car-card-price">{a.status}</span>
                </div>
                <div className="flex justify-end gap-2 mt-2">
                  <button className="car-card-btn">View Details</button>
                  <button className="car-card-btn">End Auction</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
