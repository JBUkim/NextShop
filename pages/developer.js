import React from "react";
import styles from "../styles/profile.module.css";
import Image from "next/image";
import pic from "../public/images/profile.jpg";
import Layout from "../components/Layout";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";
import { SiNaver, SiVercel } from "react-icons/si";

export default function profile() {
  return (
    <Layout title="profile">
      <div className={styles.wrap}>
        <h1 className={styles.h1}>Profile</h1>
        <div className={styles.review_box}>
          <div className={styles.slide} id="slide">
            <div className={styles.card}>
              <div className={styles.profile}>
                <div className={styles.image}>
                  <Image src={pic} width={70} height={70} />
                </div>
                <div>
                  <h3 className="ml-5">김다혁</h3>
                </div>
              </div>
              <p>
                학교: 중부대학교 <br />
                학번: 91812103 <br />
                학과: 정보보호학과 <br />
                이메일: hyuk6589@gamil.com <br />
              </p>

              <button className="px-4 py-2 font-bold text-2xl hover:bg-gray-300 rounded-full">
                <a href="https://www.facebook.com/" className={styles.btn}>
                  <BsFacebook />
                </a>
              </button>

              <button className="px-4 py-2 font-bold text-2xl hover:bg-gray-300 rounded-full">
                <a href="https://twitter.com/?lang=ko" className={styles.btn}>
                  <BsTwitter />
                </a>
              </button>
              <button className="px-4 py-2 font-bold text-2xl hover:bg-gray-300 rounded-full">
                <a
                  href="https://www.instagram.com/kim.d.bung/"
                  className={styles.btn}
                >
                  <BsInstagram />
                </a>
              </button>
              <button className="px-4 py-2 font-bold text-2xl hover:bg-gray-300 rounded-full">
                <a href="https://www.naver.com" className={styles.btn}>
                  <SiNaver />
                </a>
              </button>
              <button className="px-4 py-2 font-bold text-2xl  hover:bg-gray-300 rounded-full">
                <a href="https://github.com/JBUkim" className={styles.btn}>
                  <BsGithub />
                </a>
              </button>

              <button className="px-4 py-2 font-bold text-2xl hover:bg-gray-300 rounded-full">
                <a href="https://vercel.com/dashboard" className={styles.btn}>
                  <SiVercel />
                </a>
              </button>
            </div>
          </div>
          <div className={styles.sidebar}></div>
        </div>
      </div>
    </Layout>
  );
}
