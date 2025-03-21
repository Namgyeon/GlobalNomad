"use client";
import { useState } from "react";
import { Plus, X } from "lucide-react";
import styles from "./postImage.module.css";

export default function BannerImage() {
    const[image, setImage] = useState<File|null>(null);

    

  // 이미지 삭제 함수
  const handleRemoveImage =()=> {
    setImage(null);
  }
    


  return (
    <div >
      <p className={styles.title}>배너 이미지</p>
      <div className={styles.container}>
        {/* 이미지 등록 버튼 */}
        <label htmlFor="imageUpload" className={styles.uploadButton}>
          <img
            className={styles.buttonImg}
            src="/images/postImage.png"
            alt="postImageButton"
          />
          <div className={styles.buttonComponents}>
            <Plus strokeWidth={1} className={styles.plusSign} size={50} />
            <p className={styles.buttonText}>이미지 등록</p>
          </div>
        </label>

        {/* 업로드된 이미지 미리보기 */}
        <div className={styles.imagePreviewContainer}>
            <div className={styles.imageItem}>
              {/* ✅ 이미지 */}
              <div className={styles.imageWrapper}>
                <img
                 src={URL.createObjectURL(image!)}
                  alt="BannerImage"
                  className={styles.previewImg}
                />
              </div>
              {/* ✅ X 버튼을 이미지 바깥에 배치 */}
              <button className={styles.removeButton} onClick={() => handleRemoveImage()}>
                <X className={styles.xIcon} strokeWidth={2} size={16} />
              </button>
            </div>
        </div>
      </div>

      {/* 숨겨진 파일 업로드 input */}
      <input
        type="file"
        id="imageUpload"
        accept="image/*"
        multiple
        onChange={(e) => {
          const file = e.target.files?.[0]; // 첫 번째 이미지만 가져옴
          if (file) {
            setImage(file);
          }
        }}
        className={styles.hiddenInput}
      />
    </div>
  );
}