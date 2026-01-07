// src/components/Skeleton.tsx

interface SkeletonProps {
    className?: string;
}

export default function Skeleton({ className }: SkeletonProps) {
    return (
        <div
            className={`animate-pulse bg-white/5 rounded-lg ${className}`}
        ></div>
    );
}