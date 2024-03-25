import { cn } from '@/lib/utils'

type BlobBackgroundProps = {
  className?: string
}

export const BlobBackground = (props: BlobBackgroundProps) => {
  return (
    <>
      <div
        className={cn(
          'fixed inset-0 blur-[100px] flex items-center justify-center -z-[9999]',
          props.className,
        )}
      >
        <img src="/static/bg/blob.svg" className="w-full h-full opacity-50" />
      </div>
      {/* Noise */}
      <div className="absolute inset-0 overlay-noise -z-[9999]" />
    </>
  )
}
