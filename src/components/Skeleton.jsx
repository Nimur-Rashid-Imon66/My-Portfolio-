import PropTypes from 'prop-types';

export function SkeletonCard({ lines = 3 }) {
  return (
    <div aria-busy="true" role="status" className="rounded-xl bg-gray-100 dark:bg-gray-800/80 p-6 space-y-4 border border-gray-200 dark:border-gray-700">
      <div className="h-4 w-1/3 rounded-full skeleton-shimmer" />
      <div className="h-6 w-2/3 rounded-full skeleton-shimmer" />
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className="h-3 rounded-full skeleton-shimmer" style={{ width: `${90 - i * 12}%` }} />
      ))}
      <span className="sr-only">Loading...</span>
    </div>
  );
}

SkeletonCard.propTypes = {
  lines: PropTypes.number,
};

export function SkeletonGrid({ count = 3, lines = 3 }) {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} lines={lines} />
      ))}
    </div>
  );
}

SkeletonGrid.propTypes = {
  count: PropTypes.number,
  lines: PropTypes.number,
};
