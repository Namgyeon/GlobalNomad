'use client';

import { useState, useEffect } from 'react';
import axios from '@/lib/api';
import { ActivitiesArray } from '@/lib/types';
import PopularActivities from './landingComponents/PopulorActivities';
import ActivitiesList from './landingComponents/ActivitiesList';
import Dropdown from '@/components/Dropdown';
import Pagination from './landingComponents/Pagination';
// import Footer from '@/components/footer/Footer';
import styles from './landingComponents/LandingPage.module.css';

export default function Home() {
  const [selectedSort, setSelectedSort] = useState<string | null>(null);
  const [activities, setActivities] = useState<ActivitiesArray>([]);
  const [popularActivities, setPopularActivities] = useState<ActivitiesArray>(
    [],
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [size, setSize] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const sortOptions = [
    { value: 'latest', label: '최신순' },
    { value: 'most_reviewed', label: '리뷰많은순' },
    { value: 'price_asc', label: '낮은가격순' },
    { value: 'price_desc', label: '높은가격순' },
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const updateSize = () => {
        if (window.innerWidth <= 450) {
          setSize(4);
        } else if (window.innerWidth <= 768) {
          setSize(9);
        } else {
          setSize(8);
        }
      };

      updateSize(); // 초기 실행
      window.addEventListener('resize', updateSize);

      return () => window.removeEventListener('resize', updateSize);
    }
  }, []);

  // 체험 리스트 API호출
  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await axios.get('/activities', {
          params: { method: 'offset', page: currentPage, size: size },
        });

        setActivities(response.data.activities);
        setTotalPages(Math.ceil(response.data.totalCount / size)); // 전체 페이지 수 계산
        setIsLoading(false);
      } catch (error) {
        console.error('데이터 가져오기 실패:', error);
        setError('데이터를 가져오는 데 실패했습니다.');
        setIsLoading(false);
      }
    };

    fetchActivities();
  }, [size, currentPage]);

  // 인기체험 API호출
  useEffect(() => {
    const fetchPopularActivities = async () => {
      try {
        const response = await axios.get('/activities', {
          params: { method: 'offset', page: 1, size: 9 },
        });

        setPopularActivities(response.data.activities);
      } catch (error) {
        console.error('인기 체험 데이터 가져오기 실패:', error);
      }
    };

    fetchPopularActivities();
  }, []);

  // 페이지 변경
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className={styles.imgContainer}>
        <div className={styles.textContainer}>
          <p className={styles.text1}>
            함께 배우면 즐거운
            <br /> 스트릿 댄스
          </p>
          <p className={styles.text2}>1월의 인기체험 BEST</p>
        </div>
      </div>
      {/* 인기 체험 */}
      <PopularActivities activities={popularActivities} />
      {/* 카테고리 영역 */}
      <div className={styles.categoryContainer}>
        <ul className={styles.category}>
          <li className={styles.item}>문화•예술</li>
          <li className={styles.item}>식음료</li>
          <li className={styles.item}>스포츠</li>
          <li className={styles.item}>투어</li>
          <li className={styles.item}>관광</li>
          <li className={styles.item}>웰빙</li>
        </ul>
        <Dropdown
          options={sortOptions}
          selectedValue={selectedSort}
          onChange={setSelectedSort}
        />
      </div>
      {/* 체험 리스트 */}
      <ActivitiesList
        activities={activities}
        isLoading={isLoading}
        error={error}
      />
      {/* 페이지네이션 */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setPage={handlePageChange}
      />

      {/* <Footer /> */}
    </>
  );
}
