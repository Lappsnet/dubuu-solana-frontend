"use client"

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
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Registered Vehicles</h1>
          <button className="car-card-btn">Register Vehicle</button>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((v) => (
            <div className="car-card" key={v.vin}>
              <div className="car-card-image-area">
                <img src={v.image} alt={v.title} className="car-card-image" />
                <div className="car-card-glare"></div>
              </div>
              <div className="car-card-content">
                <div className="car-card-title">{v.title}</div>
                <div className="car-card-specs">
                  <div className="car-card-spec">{v.year}</div>
                  <div className="car-card-spec">{v.mileage}</div>
                  <div className="car-card-spec">VIN: {v.vin}</div>
                </div>
                <div className="car-card-specs mb-2">
                  <div className="car-card-spec">Owner: {v.owner}</div>
                  <div className="car-card-spec">{v.registered}</div>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="car-card-price">{v.status}</span>
                  <span className="text-xs text-[#b3c2d6]">{v.email}</span>
                </div>
                <div className="flex justify-end gap-2 mt-2">
                  <button className="car-card-btn">View Details</button>
                  <button className="car-card-btn">List for Auction</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
} 