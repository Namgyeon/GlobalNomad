'use client';

import Image from 'next/image';
import { SetStateAction, useState } from 'react';
import CustomButton from '@/components/CustomButton';
import styles from '../style.module.css';
import { RESERVATION_STATUS } from '@/constants/ReservationStatus';
import useFormatDate from '@/utils/useFormatDate';
import { Reservation } from '@/lib/types';
import { useDateUtils } from '@/utils/useDateUtils';

interface Props {
  reservationsData: Reservation[] | undefined;
  setShowModal: React.Dispatch<SetStateAction<boolean>>;
  setIsModalMessage: React.Dispatch<SetStateAction<string>>;
  handleNavigate: (activityId: string) => void;
}

export default function ReservationItem({
  reservationsData,
  setShowModal,
  setIsModalMessage,
  handleNavigate,
}: Props) {
  const cancelReservationButton: React.CSSProperties = {
    padding: '8px 20px',
    background: '#fff',
    color: '#112211',
    border: '1px solid #112211',
    fontWeight: '700',
  };
  const writeReviewButton: React.CSSProperties = {
    padding: '8px 20px',
    fontWeight: '700',
  };

  const statusMode = RESERVATION_STATUS;

  const [imageSrcMap, setImageSrcMap] = useState<Record<string, string>>({});

  const handleImageError = (id: string) => {
    setImageSrcMap((prev) => ({ ...prev, [id]: '/images/no_thumbnail.png' }));
  };

  function DateUtils(date: string | undefined, startTime: string | undefined) {
    return useDateUtils(date, startTime);
  }

  function FormattedDate(date: string) {
    const formatted = useFormatDate(date);

    return <span>{formatted.slice(0, formatted.length - 1)}</span>;
  }

  function handleCancelReservation() {
    setShowModal(true);
    setIsModalMessage('예약을 취소하시겠어요?');
  }

  function handleWriteReview() {}

  return (
    <>
      {reservationsData?.map((reservation) => {
        const { activity, date } = reservation;
        const statusInfo =
          statusMode[reservation.status!] || statusMode['pending'];

        return (
          <li
            key={reservation.id}
            className={`${styles.reservationBox} ${
              DateUtils(reservation.date, reservation.startTime) &&
              styles.noClick
            }`}
            onClick={() =>
              !DateUtils(reservation.date, reservation.startTime) &&
              handleNavigate(String(activity.id))
            }
          >
            {DateUtils(reservation.date, reservation.startTime) && (
              <div className={styles.overlay}></div>
            )}

            <div className={styles.thumbnail}>
              {DateUtils(reservation.date, reservation.startTime) && (
                <div className={styles.overlay}></div>
              )}
              <Image
                src={
                  imageSrcMap[activity.id] ||
                  activity.bannerImageUrl ||
                  '/images/no_thumbnail.png'
                }
                alt='썸네일'
                fill
                sizes='100vw'
                style={{ objectFit: 'cover' }}
                priority
                onError={() => handleImageError(String(activity.id))}
              />
            </div>
            <div className={styles.detail}>
              <div className={styles.top}>
                <p
                  className={styles.status}
                  style={{ color: statusInfo.color }}
                >
                  {statusInfo.text}
                </p>
                <div className={styles.info}>
                  <p className={styles.title}>{activity.title}</p>
                  <p className={styles.plan}>
                    {FormattedDate(date!)}
                    <span className={styles.circle}>·</span>
                    {reservation.startTime} - {reservation.endTime}
                    <span className={styles.circle}>·</span>
                    {reservation.headCount}명
                  </p>
                </div>
              </div>
              <div className={styles.bottom}>
                <div className={styles.price}>
                  ₩{reservation.totalPrice?.toLocaleString('ko-KR')}
                </div>
                {statusInfo.text === '예약 신청' &&
                !DateUtils(reservation.date, reservation.startTime) ? (
                  <CustomButton
                    style={cancelReservationButton}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCancelReservation();
                    }}
                  >
                    예약 취소
                  </CustomButton>
                ) : statusInfo.text === '체험 완료' ? (
                  <CustomButton
                    style={writeReviewButton}
                    onClick={handleWriteReview}
                  >
                    후기 작성
                  </CustomButton>
                ) : DateUtils(reservation.date, reservation.startTime) ? (
                  <div className={styles.notice}>기한 만료</div>
                ) : (
                  ''
                )}
              </div>
            </div>
          </li>
        );
      })}
    </>
  );
}
