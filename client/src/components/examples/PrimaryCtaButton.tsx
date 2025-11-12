import PrimaryCtaButton from '../PrimaryCtaButton'

export default function PrimaryCtaButtonExample() {
  return (
    <div className="p-8 bg-background max-w-2xl">
      <PrimaryCtaButton onClick={() => console.log('CTA clicked')}>
        QUERO O PACK POR R$8,99 AGORA
      </PrimaryCtaButton>
    </div>
  )
}
