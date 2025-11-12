import CountdownTimer from '../CountdownTimer'

export default function CountdownTimerExample() {
  return (
    <div className="p-8 bg-background">
      <CountdownTimer initialMinutes={10} onExpire={() => console.log('Timer expired')} />
    </div>
  )
}
