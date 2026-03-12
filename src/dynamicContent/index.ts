type DynamicContentResult = {
  data: Record<string, unknown>
  errors?: string[]
}

const fetchHomeData = async (): Promise<DynamicContentResult> => {
  try {
    // Static fallback: the custom home sections use local mock data, so
    // we return an empty object to keep the page render stable.
    return { data: {} }
  } catch (error) {
    return {
      data: {},
      errors: [
        `Failed to resolve home dynamic content fallback: ${
          error instanceof Error ? error.message : 'unknown error'
        }`,
      ],
    }
  }
}

const dynamicContent: Record<string, () => Promise<DynamicContentResult>> = {
  home: fetchHomeData,
}

export default dynamicContent
