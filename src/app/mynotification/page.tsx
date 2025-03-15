'use client';

import Dropdown from '@/components/Dropdown';
import useMyActivities from '@/hooks/useMyActivities';
import { useEffect, useState } from 'react';

export default function MyNotification() {
  const { data: activities, isLoading, error } = useMyActivities();
  const [selectedActivity, setSelectedActivity] = useState<{
    id: number;
    title: string;
  } | null>(null);

  useEffect(() => {
    if (activities && activities.length > 0) {
      setSelectedActivity(activities[0]);
    }
  }, [activities]);

  if (isLoading) return <p>로딩 중...</p>;
  if (error) return <p>에러 발생: {error.message}</p>;

  return (
    <>
      <Dropdown
        options={
          activities?.map((activity) => ({
            id: activity.id,
            title: activity.title,
          })) || []
        }
        selected={selectedActivity}
        onChange={(value) => setSelectedActivity(value)}
      />
    </>
  );
}
