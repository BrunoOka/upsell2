import DeclineButton from '../DeclineButton'

export default function DeclineButtonExample() {
  return (
    <div className="p-8 bg-background max-w-2xl">
      <DeclineButton onClick={() => console.log('Decline clicked')}>
        Não quero evoluir agora
      </DeclineButton>
    </div>
  )
}
