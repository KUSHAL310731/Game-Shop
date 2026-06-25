import React from "react";
import styles from "./About.module.css";

const team = [
  {
    name: "Alex Rivera",
    role: "Founder & CEO",
    emoji: "👨‍💼",
    bio: "Passionate gamer with 15+ years in the gaming industry.",
  },
  {
    name: "Sarah Chen",
    role: "Head of Curation",
    emoji: "👩‍💻",
    bio: "Expert in discovering hidden gems and blockbuster titles.",
  },
  {
    name: "Marcus Johnson",
    role: "Community Manager",
    emoji: "🎧",
    bio: "Building vibrant gaming communities since 2015.",
  },
  {
    name: "Emily Watson",
    role: "Lead Developer",
    emoji: "👩‍🔬",
    bio: "Crafting seamless digital experiences for gamers worldwide.",
  },
];

const About = () => (
  <div className={styles.about}>
    <section className={`${styles.hero} container`}>
      <h1>About GameShop</h1>
      <p>
        We are passionate gamers dedicated to bringing you the best titles,
        exclusive deals, and an unmatched shopping experience. Since 2018,
        GameShop has been the go-to destination for gamers of all levels.
      </p>
    </section>

    <section className={`${styles.section} container`}>
      <h2 className={styles.sectionTitle}>Mission & Vision</h2>
      <div className={styles.missionGrid}>
        <div className={styles.missionCard}>
          <div className={styles.missionIcon}>🎯</div>
          <h3>Our Mission</h3>
          <p>
            To make gaming accessible to everyone by offering the widest
            selection of titles at competitive prices, backed by exceptional
            customer service and a community-first approach.
          </p>
        </div>
        <div className={styles.missionCard}>
          <div className={styles.missionIcon}>🔭</div>
          <h3>Our Vision</h3>
          <p>
            To become the world's most trusted gaming marketplace — where
            every player finds their next adventure and every developer
            reaches their audience.
          </p>
        </div>
      </div>
    </section>

    <section className={`${styles.section} container`}>
      <h2 className={styles.sectionTitle}>Why Choose GameShop?</h2>
      <div className={styles.whyGrid}>
        <div className={styles.whyItem}>
          <span>🎮</span>
          <h4>Vast Catalog</h4>
          <p>500+ games across all genres and platforms</p>
        </div>
        <div className={styles.whyItem}>
          <span>💰</span>
          <h4>Best Prices</h4>
          <p>Exclusive deals and seasonal discounts</p>
        </div>
        <div className={styles.whyItem}>
          <span>⚡</span>
          <h4>Instant Delivery</h4>
          <p>Digital keys delivered within seconds</p>
        </div>
        <div className={styles.whyItem}>
          <span>🛡️</span>
          <h4>Secure Payments</h4>
          <p>256-bit encryption for safe transactions</p>
        </div>
        <div className={styles.whyItem}>
          <span>💬</span>
          <h4>24/7 Support</h4>
          <p>Expert help whenever you need it</p>
        </div>
        <div className={styles.whyItem}>
          <span>🏆</span>
          <h4>Rewards Program</h4>
          <p>Earn points with every purchase</p>
        </div>
      </div>
    </section>

    <section className={`${styles.section} container`}>
      <h2 className={styles.sectionTitle}>Meet Our Team</h2>
      <div className={styles.teamGrid}>
        {team.map((member) => (
          <div key={member.name} className={styles.teamCard}>
            <div className={styles.avatar}>{member.emoji}</div>
            <h4>{member.name}</h4>
            <p className={styles.role}>{member.role}</p>
            <p>{member.bio}</p>
          </div>
        ))}
      </div>
    </section>

    <section className={`${styles.section} container`}>
      <h2 className={styles.sectionTitle}>Gaming Industry Experience</h2>
      <div className={styles.experience}>
        <p>
          With over 8 years in the gaming retail industry, our team has
          partnered with major publishers including Rockstar, EA, Ubisoft,
          CD Projekt Red, and Sony Interactive Entertainment. We've served
          more than 50,000 gamers worldwide and curated collections spanning
          AAA blockbusters to indie masterpieces.
        </p>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <div className={styles.statNumber}>8+</div>
            <div className={styles.statLabel}>Years Experience</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>50K+</div>
            <div className={styles.statLabel}>Happy Gamers</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>100+</div>
            <div className={styles.statLabel}>Publishers</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>4.9★</div>
            <div className={styles.statLabel}>User Rating</div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default About;
