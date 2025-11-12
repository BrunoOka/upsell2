import BenefitItem from '../BenefitItem'
import { Video } from 'lucide-react'

export default function BenefitItemExample() {
  return (
    <div className="p-8 bg-background max-w-xl">
      <BenefitItem
        icon={Video}
        title="25 vídeos práticos"
        description="Mostrando a execução perfeita de cada exercício"
      />
    </div>
  )
}
