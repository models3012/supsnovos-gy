import { createFileRoute } from '@tanstack/react-router'
import { generateMerchantFeed } from '@/lib/merchant-api'

export const Route = createFileRoute('/api/public/merchant/feed')({
  server: {
    handlers: {
      GET: async () => {
        const feed = await generateMerchantFeed()
        return new Response(JSON.stringify(feed), {
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'public, max-age=3600'
          }
        })
      }
    }
  }
})
