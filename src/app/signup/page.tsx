import { Suspense } from 'react'
import SignupForm from './signup-form'

export default function SignupPage() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <SignupForm />
    </Suspense>
  )
}
