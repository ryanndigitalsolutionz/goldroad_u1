import { createFileRoute } from '@tanstack/react-router'
import RoleSelection from '../features/authentication/RoleSelection'

export const Route = createFileRoute('/role-selection')({
  component: RoleSelection,
})