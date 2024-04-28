import { createLazyFileRoute } from '@tanstack/react-router'
import Button from '@mui/material/Button'
export const Route = createLazyFileRoute('/test/')({
  component: () => <div>
    <Button variant="contained" color="primary" className='bg-black'>Test</Button>
  </div>
})