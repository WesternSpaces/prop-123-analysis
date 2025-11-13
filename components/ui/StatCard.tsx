interface StatCardProps {
  label: string;
  value: string | number;
  subtext?: string;
  trend?: 'up' | 'down' | 'neutral';
}

export function StatCard({ label, value, subtext, trend }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="text-sm font-medium text-slate-600 mb-2">{label}</div>
      <div className="text-3xl font-bold text-slate-900 mb-1">{value}</div>
      {subtext && (
        <div className="text-sm text-slate-500">{subtext}</div>
      )}
      {trend && (
        <div className={`text-xs font-medium mt-2 ${
          trend === 'up' ? 'text-red-600' :
          trend === 'down' ? 'text-green-600' :
          'text-slate-600'
        }`}>
          {trend === 'up' && '↑ Increasing'}
          {trend === 'down' && '↓ Decreasing'}
          {trend === 'neutral' && '→ Stable'}
        </div>
      )}
    </div>
  );
}
