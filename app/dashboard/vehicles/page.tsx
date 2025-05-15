"use client"

import { Car, Calendar, Gauge, MapPin, Shield, Tag } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"

const vehicles = [
  {
    image: '/cars/bmw-m4.jpg',
    title: 'BMW M4 Competition',
    year: 2019,
    mileage: '15,000 mi',
    vin: 'WBS4R9C50KB123456',
    owner: 'John Doe',
    email: 'john@example.com',
    phone: '(555) 123-4567',
    wallet: '0x1234...5678',
    status: 'Verified',
    registered: '2 months ago',
  },
  {
    image: '/cars/tesla-model3.jpg',
    title: 'Tesla Model 3 Performance',
    year: 2021,
    mileage: '8,200 mi',
    vin: '5YJ3E1EA7KF123456',
    owner: 'Jane Smith',
    email: 'jane@example.com',
    phone: '(555) 987-6543',
    wallet: '0x5678...1234',
    status: 'Verified',
    registered: '1 month ago',
  },
  {
    image: '/cars/porsche-911.jpg',
    title: 'Porsche 911 Carrera S',
    year: 2020,
    mileage: '12,000 mi',
    vin: 'WP0AB2A99LS123456',
    owner: 'Alex Turner',
    email: 'alex@example.com',
    phone: '(555) 246-8101',
    wallet: '0x9abc...def0',
    status: 'Verified',
    registered: '3 weeks ago',
  },
]

export default function VehiclesPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">Registered Vehicles</h1>
        
        <div className="grid gap-6">
          {vehicles.map((v) => (
            <div key={v.vin} className="bg-[#181f2e] rounded-xl p-6 border border-[#1a2236] shadow-lg">
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-lg bg-cyan-400/20 flex items-center justify-center">
                    <img src={v.image} alt={v.title} className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{v.title}</h3>
                    <div className="mt-2 flex flex-col gap-1">
                      <div className="flex items-center text-[#b3c2d6]">
                        <Calendar className="h-4 w-4 mr-2" />
                        {v.year}
                      </div>
                      <div className="flex items-center text-[#b3c2d6]">
                        <Gauge className="h-4 w-4 mr-2" />
                        {v.mileage}
                      </div>
                      <div className="flex items-center text-[#b3c2d6]">
                        <MapPin className="h-4 w-4 mr-2" />
                        {v.owner}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-purple-400/20 text-purple-400">
                    <Tag className="h-4 w-4" />
                    <span>{v.status}</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-400">
                    <Shield className="h-4 w-4" />
                    <span>{v.registered}</span>
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