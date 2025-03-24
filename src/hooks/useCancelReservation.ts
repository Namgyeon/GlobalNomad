import instance from '@/lib/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const fetchCancelReservation = async (id?: number) => {
  if (!id) throw new Error('유효한 예약 ID가 없습니다.');

  try {
    await instance.patch(`/my-reservations/${id}`, {
      status: 'canceled',
    });
  } catch (error: unknown) {
    console.error('API 요청 실패:', error);
    throw new Error('데이터를 삭제하는 데 실패했습니다.');
  }
};

const useCancelReservation = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, number>({
    mutationFn: fetchCancelReservation,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['reservation'] });
    },
    onError: (error) => {
      console.error('삭제 중 오류 발생', error);
    },
  });
};

export default useCancelReservation;

