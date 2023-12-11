import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  console.log('starting main')

  // const i = await prisma.item.create({
  //   data: {
  //     title: 'Pay Acme',
  //     notes: {
  //       create: [
  //         {
  //           body: 'Spoke with Sandy Smith who instructed me to reach out to Kim Kane in the finance department to clarify the amount that needs to be paid',
  //         },
  //         // {
  //         //   body: 'Kim Kane clarified that the amount to be paid is $5,271.45',
  //         // },
  //       ],
  //     },
  //   },
  // })
  const i = await prisma.item.create({
    data: {
      title: 'Add 2',
      notes: {
        create: [
          {
            body: 'one',
          },
          {
            body: 'two',
          },
        ],
      },
    },
  })
  console.log('i', i)
}

main()
