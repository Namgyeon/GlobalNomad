'use client';
import { useRouter } from 'next/router';
import { MoreVertical } from 'lucide-react';
import Dropdown from '@/components/Dropdown';
import { useState } from 'react';

export default function KebabDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <div>
      <div>
        {/* <button onClick={() => setIsOpen(true)}>
           
        </button> */}
      </div>
      {isOpen && (
        <div>
          <Dropdown
            selected={ <MoreVertical />}
            options={['수정하기', '삭제하기']}
            onChange={(value) => {
              if (value === '수정하기') {
                router.push('/editMyActivity/page.tsx');
              } else if (value === '삭제하기') {
                // 삭제하기 모달창 팝업
              }
            }}
          ></Dropdown>
        </div>
      )}
    </div>
  );
}
