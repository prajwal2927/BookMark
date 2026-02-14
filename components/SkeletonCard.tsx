export default function SkeletonCard() {
  return (
    <div className="card-elevated p-5 space-y-4 animate-pulse">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-blue-100" />
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-blue-100 rounded-lg w-3/4" />
          <div className="h-3 bg-blue-100 rounded-lg w-1/2" />
        </div>
      </div>

      {/* URL */}
      <div className="h-3 bg-blue-100 rounded-lg w-full" />

      {/* Footer */}
      <div className="flex justify-between items-center pt-3 border-t border-border">
        <div className="h-3 bg-blue-100 rounded-lg w-16" />
        <div className="flex gap-2">
          <div className="w-8 h-8 bg-blue-100 rounded-lg" />
          <div className="w-8 h-8 bg-blue-100 rounded-lg" />
        </div>
      </div>
    </div>
  );
}
