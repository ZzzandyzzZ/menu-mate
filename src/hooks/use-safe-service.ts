import { useState } from 'react'

interface Props<T, R> {
  execute: (data: T) => Promise<R>
  data: T
  callback?: () => void
}

export function useSafeService<T, R = Record<string, unknown>>({
  execute,
  data,
  callback = () => {}
}: Props<T, R>) {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<R | null>(null)
  const [error, setError] = useState<string | null>(null)
  const runner = async () => {
    setLoading(true)
    try {
      setResult(await execute(data))
      callback()
    } catch (error) {
      setError((error as Error).message)
    }
    setLoading(false)
  }

  return { loading, runner, result, error }
}
