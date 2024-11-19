import { Button } from '@nextui-org/react'
import Link from 'next/link'
import { GoSmiley } from 'react-icons/go'

export default function Home() {
  return (
    <div className=''>
      <h1 className='text-3xl'>Hello</h1>
      <Button
        as={Link}
        href='/members'
        color='primary'
        variant='bordered'
        startContent={<GoSmiley size={20} />}
      >
        Click me!!!
      </Button>
    </div>
  )
}
