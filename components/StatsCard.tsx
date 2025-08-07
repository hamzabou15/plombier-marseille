'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import {  CheckCircle , MapPin, Users, Wrench } from 'lucide-react'

const stats = [
  {
    value: 920,
    label: 'Interventions plomberie réalisées à Marseille',
    icon: Wrench,
    color: 'text-[#43926b]',
  },
  {
    value: 85,
    label: 'Fuites d’eau détectées et réparées rapidement',
    icon: CheckCircle,
    color: 'text-[#22c55e]',
  },
  {
    value: 25,
    label: 'Plombiers experts qualifiés à votre service',
    icon: Users,
    color: 'text-[#3b82f6]',
  },
  {
    value: 12,
    label: 'Quartiers et villes desservis autour de Marseille',
    icon: MapPin,
    color: 'text-[#f59e0b]',
  },
]

const StatsCard = () => {
  return (
    <section
      id="chiffres-plomberie-marseille"
      aria-label="Statistiques sur les interventions de plomberie à Marseille"
      className="max-w-7xl mx-auto py-20 px-6 sm:px-12 bg-white "
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {stats.map(({ value, label, icon: Icon, color }, idx) => (
          <StatItem key={idx} value={value} label={label} Icon={Icon} color={color} />
        ))}
      </div>
    </section>
  )
}

const StatItem = ({
  value,
  label,
  Icon,
  color,
}: {
  value: number
  label: string
  Icon: React.FC<React.SVGProps<SVGSVGElement>>
  color: string
}) => {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let start: number | null = null
    const duration = 2000

    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      setCount(Math.floor(progress * value))
      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }

    requestAnimationFrame(step)
  }, [isVisible, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex flex-col items-center text-center p-6 rounded-xl shadow-md"
    >
      <Icon className={`w-12 h-12 mb-4 ${color}`} aria-hidden="true" />
      <motion.h2
        className="text-5xl font-extrabold text-gray-900"
        aria-label={`${count} ${label}`}
      >
        {value === 98 ? '98%' : count}
      </motion.h2>
      <p className="mt-3 text-sm text-gray-700 max-w-xs">{label}</p>
    </motion.div>
  )
}

export default StatsCard