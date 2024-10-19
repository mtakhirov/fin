import { useEffect, useRef } from 'react'

type UseClientOnceFn = () => void

/**
 * A custom React hook that ensures a function is called only once on the client side.
 *
 * @param {UseClientOnceFn} fn - The function to be executed once on the client side.
 *
 * @example ```ts
 * useClientOnce(() => {
 *   console.log('This will be logged only once on the client side');
 * });
 * ```
 * @see https://github.com/Telegram-Mini-Apps/telegram-apps/blob/master/playgrounds/next/src/hooks/useClientOnce.ts
 */
export function useClientOnce(fn: UseClientOnceFn): void {
  const hasRun = useRef(false)

  useEffect(() => {
    if (!hasRun.current) {
      hasRun.current = true
      fn()
    }
  }, [fn])

  return
}
