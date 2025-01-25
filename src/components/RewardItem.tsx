export const RewardItem: React.FC<RewardItemProps> = ({
  icon,
  title,
  point,
}) => {
  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center">
        <div className="bg-gray-700 p-2 rounded-full mr-2">{icon}</div>
        <span>{title}</span>
      </div>
      <span>{point > 0 ? '+' + point : 0}</span>
    </div>
  )
}

type RewardItemProps = {
  icon: React.ReactNode
  title: string
  point: number
}
