import { createFileRoute } from '@tanstack/react-router'
import Welcome from '../features/authentication/Welcome'

export const Route = createFileRoute('/')({
  component: Welcome,
})

