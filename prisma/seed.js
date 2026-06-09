const { PrismaClient } = require('../node_modules/@prisma/client')
const prisma = new PrismaClient()

async function main() {
  await prisma.college.createMany({
    data: [
      {
        name: "IIT Bombay",
        location: "Mumbai, Maharashtra",
        fees: 200000,
        rating: 4.8,
        courses: ["CSE", "ECE", "ME", "AI"],
        placements: "Average package 18 LPA",
        overview: "Premier engineering institute in India"
      },
      {
        name: "NIT Warangal",
        location: "Warangal, Telangana",
        fees: 150000,
        rating: 4.5,
        courses: ["CSE", "ECE", "Civil", "ME"],
        placements: "Average package 12 LPA",
        overview: "Top NIT in South India"
      },
      {
        name: "BITS Pilani",
        location: "Pilani, Rajasthan",
        fees: 500000,
        rating: 4.7,
        courses: ["CSE", "ECE", "Mechanical", "Chemical"],
        placements: "Average package 15 LPA",
        overview: "Premier private engineering college"
      },
      {
        name: "VIT Vellore",
        location: "Vellore, Tamil Nadu",
        fees: 180000,
        rating: 4.2,
        courses: ["CSE", "ECE", "MBA", "Biotech"],
        placements: "Average package 8 LPA",
        overview: "Top private university in South India"
      },
      {
        name: "JNTU Hyderabad",
        location: "Hyderabad, Telangana",
        fees: 80000,
        rating: 4.0,
        courses: ["CSE", "ECE", "Civil", "EEE"],
        placements: "Average package 6 LPA",
        overview: "Leading state university in Telangana"
      }
    ]
  })
  console.log('✅ Seed data added!')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())