interface IconProps {
  className?: string
}

export function StatItem({
  children,
  icon: Icon,
}: {
  children: React.ReactNode
  icon: React.ComponentType<IconProps>
}) {
  return (
    <div className="flex items-center">
      <Icon className="w-4 h-4 mr-2 text-black" />
      <span className="font-normal">{children}</span>
    </div>
  )
}
