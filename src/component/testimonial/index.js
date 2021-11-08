import styled from "styled-components";
import '../../script/bootstrap.min.css';
import profile from "../../assets/profile1.png";

import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

const SECTION = styled.div`
    background: var(--testi);
    padding: 20px 80px;
    *,
    ::after,
    ::before {
        box-sizing: border-box;
    }
    h4 {
        letter-spacing: 0.1rem;
        text-transform: capitalize;
        line-height: 1.25;
        margin-top: 10px;
        font-size: 0.875rem;
    }
    p {
        color: var(--white);
    }
    @media screen and (min-width: 800px) {
        h4 {
          font-size: 1rem;
          line-height: 1;
        }
        body {
          font-size: 1rem;
        }
    }
    @media screen and (min-width: 992px) {
        .section {
          width: 100%;
        }
    }
    .section {
        max-width: 1170px;
        
    }
    .title {
        text-align: center;
        margin-top: 10px;
      }
    .title {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
    }
    .section-center {
        
        margin-top: 75px;
        height: 450px;
        text-align: center;
        position: relative;
        display: flex;
        overflow: hidden;
    }
    .person-img {
        border-radius: 50%;
        margin-top: 20px;
        border: 4px solid hsl(210, 31%, 80%);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
    article h4 {
        text-transform: uppercase;
        color: var(--white);
    }
    .text {
        max-width: 35em;
        margin: 0 auto;
        margin-top: 2rem;
        line-height: 2;
        color: var(--white);
    }
    .icon {
        font-size: 3rem;
        margin-top: 1rem;
        color: var(--white);
    }
    .prev,
    .next {
        position: absolute;
        top: 200px;
        transform: translateY(-50%);
        background: hsl(210, 22%, 49%);
        color: var(--white);
        width: 1.25rem;
        height: 1.25rem;
        display: grid;
        place-items: center;
        border-color: transparent;
        font-size: 1rem;
        border-radius: 0.25rem;
        cursor: pointer;
        transition: all 0.3s linear;
    }
    .prev:hover,
    .next:hover {
        background: var(--footertwo);
    }
    .prev {
        left: 0;
    }
    .next {
        right: 0;
    }
    @media (min-width: 800px) {
        .text {
          max-width: 45em;
        }
        .prev,
        .next {
          width: 2rem;
          height: 2rem;
          font-size: 1.5rem;
        }
    }
    article {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: all 0.3s linear;
    }
    article.activeSlide {
        opacity: 1;
        transform: translateX(0);
    }
    article.lastSlide {
        transform: translateX(-100%);
    }
    article.nextSlide {
        transform: translateX(100%);
    }
    @media only Screen and (max-width: 48em) {
        padding: 1rem;
    }
`;

function Testi() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <SECTION>
    <section className="section">
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, name, role, quote } = person;

          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide';
          }

          return (
            <article className={position} key={id}>
              <FaQuoteRight className="icon" />
              <p className="text">{quote}</p>
              <img src={profile} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{role}</p>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
    </SECTION>
  );
}

export default Testi;