import {
  $debug,
  backButton,
  initData,
  miniApp,
  themeParams,
  viewport,
  init as initSDK,
} from '@telegram-apps/sdk-react'

/**
 * Initializes the Telegram Mini App environment.
 * @param {boolean} debug - Whether to enable debug mode.
 */
export function init(debug: boolean): void {
  // Enable debug mode if specified
  $debug.set(debug)

  // Initialize SDK
  initSDK()

  // Mount necessary components
  mountComponents()

  // Restore initial data
  initData.restore()

  // Mount viewport and handle any errors
  void mountViewport()

  // Bind CSS variables
  bindCssVariables()
}

/**
 * Mounts necessary components for the Mini App.
 */
function mountComponents(): void {
  if (backButton.isSupported()) {
    backButton.mount()
  }
  miniApp.mount()
  themeParams.mount()
}

/**
 * Mounts the viewport and logs any errors.
 */
async function mountViewport(): Promise<void> {
  try {
    await viewport.mount()
  } catch (error) {
    console.error('Something went wrong mounting the viewport:', error)
  }
}

/**
 * Binds CSS variables for various components.
 */
function bindCssVariables(): void {
  viewport.bindCssVars()
  miniApp.bindCssVars()
  themeParams.bindCssVars()
}
