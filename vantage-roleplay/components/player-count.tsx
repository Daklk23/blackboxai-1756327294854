"use client"

import { useQuery } from '@tanstack/react-query'
import { motion } from 'framer-motion'

interface PlayerStats {
  online: number
  max: number
}

async function fetchPlayerCount(): Promise<PlayerStats> {
  const response = await fetch('/api/status/players')
  if (!response.ok) {
    throw new Error('Failed to fetch player count')
  }
  return response.json()
}

export function PlayerCount() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['playerCount'],
    queryFn: fetchPlayerCount,
    refetchInterval: 30000, // Refetch every 30 seconds
    retry: 3,
  })

  return (
    <motion.div
      className="bg-card border border-border rounded-xl p-6 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">Server Status</h3>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-lime-500 rounded-full animate-pulse" />
          <span className="text-sm text-muted-foreground">Live</span>
        </div>
      </div>

      <div className="text-center">
        {isLoading ? (
          <div className="animate-pulse">
            <div className="h-12 bg-muted rounded mb-2" />
            <div className="h-4 bg-muted rounded w-24 mx-auto" />
          </div>
        ) : error ? (
          <div className="text-center">
            <div className="text-3xl font-bold text-muted-foreground mb-2">–/–</div>
            <p className="text-sm text-muted-foreground">Nedostupno</p>
          </div>
        ) : (
          <motion.div
            key={`${data?.online}-${data?.max}`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-4xl font-bold text-lime-500 mb-2">
              {data?.online || 0}
              <span className="text-muted-foreground">/{data?.max || 0}</span>
            </div>
            <p className="text-sm text-muted-foreground">Igrača online</p>
          </motion.div>
        )}
      </div>

      <div className="mt-4 pt-4 border-t border-border">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Server IP:</span>
          <span className="font-mono">connect vantage-rp.com</span>
        </div>
      </div>
    </motion.div>
  )
}
