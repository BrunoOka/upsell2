import TrustBadge from '../TrustBadge'
import { Lock } from 'lucide-react'

export default function TrustBadgeExample() {
  return (
    <div className="p-8 bg-background">
      <TrustBadge icon={Lock} text="Pagamento 100% seguro" />
    </div>
  )
}
