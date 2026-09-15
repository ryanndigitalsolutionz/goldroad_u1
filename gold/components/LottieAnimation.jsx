import { DotLottieReact } from '@lottiefiles/dotlottie-react'

export default function LottieAnimation({
  src,
  autoplay = true,
  loop = true,
}) {
  return (
    <DotLottieReact
      src={src}
      autoplay={autoplay}
      loop={loop}
    />
  )
}
