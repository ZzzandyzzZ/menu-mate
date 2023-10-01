import { useState } from 'react'

export function useSafeService<T, R = Record<string, unknown>>(
  fn: (data: T) => Promise<R>,
  data: T,
  onSuccess: () => void = () => {}
) {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<R | null>(null)
  const [error, setError] = useState<string | null>(null)
  const runner = async () => {
    setLoading(true)
    try {
      setResult(await fn(data))
      onSuccess()
    } catch (error) {
      setError((error as Error).message)
    }
    setLoading(false)
  }

  return { loading, runner, result, error }
}
