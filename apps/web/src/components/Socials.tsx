import React from 'react'
import styles from '@/styles/Socials.module.css'
import FacebookIcon from './FacebookIcon'
import GithubIcon from './GithubIcon'
import YoutubeIcon from './YoutubeIcon'
import LinkedinIcon from './LinkedinIcon'
import TwitterIcon from './TwitterIcon'
import { InstagramSVGIcon } from './InstagramSVGIcon'
import Link from 'next/link'
interface social {
  link: string
  id?: string
}
interface SocialProps {
  facebook?: social
  twitter?: social
  instagram?: social
  linkedin?: social
  github?: social
  youtube?: social
  size: 'sm' | 'md' | 'lg'
}
const Socials: React.FC<SocialProps> = ({
  size,
  facebook,
  github,
  instagram,
  linkedin,
  twitter,
  youtube,
}) => {
  return (
    <div className={styles['socials-inner-container']}>
      {facebook && (
        <i className={`${styles['socials-icon-container']} ${styles.facebook}`}>
          <Link href={facebook.link} target="_blank" rel="noreferrer">
            <div className={`${styles.facebook}`}>
              <FacebookIcon
                size={size === 'sm' ? 30 : size === 'lg' ? 40 : 80}
              />
              {facebook.id && (
                <span className="hidden pl-2 sm:block">{facebook.id}</span>
              )}
            </div>
          </Link>
        </i>
      )}
      {youtube && (
        <i className={`${styles['socials-icon-container']} ${styles.youtube}`}>
          <Link href={youtube.link} target="_blank" rel="noreferrer">
            <div className={`${styles.youtube}`}>
              <YoutubeIcon
                size={size === 'sm' ? 30 : size === 'lg' ? 40 : 80}
              />
              {youtube.id && (
                <span className="hidden pl-2 sm:block"> {youtube.id}</span>
              )}
            </div>
          </Link>
        </i>
      )}
      {instagram && (
        <i className={`${styles['socials-icon-container']}`}>
          <Link href={instagram.link} target="_blank" rel="noreferrer">
            <div className={styles['instagram-icon-container']}>
              <div className={styles['instagram-icon']}>
                <InstagramSVGIcon
                  className={styles['instagram-icon']}
                  size={size === 'sm' ? 30 : size === 'lg' ? 40 : 80}
                />
                {instagram.id && (
                  <span className={styles.instagram}> {instagram.id}</span>
                )}
              </div>
            </div>
          </Link>
        </i>
      )}
      {github && (
        <i className={`${styles['socials-icon-container']} ${styles.github}`}>
          <Link href={github.link} target="_blank" rel="noreferrer">
            <div className={`${styles.github}`}>
              <GithubIcon size={size === 'sm' ? 30 : size === 'lg' ? 40 : 80} />
              {github.id && (
                <span className="hidden pl-2 sm:block">{github.id}</span>
              )}
            </div>
          </Link>
        </i>
      )}
      {linkedin && (
        <i className={`${styles['socials-icon-container']} ${styles.linkedin}`}>
          <Link href={linkedin.link} target="_blank" rel="noreferrer">
            <div className={`${styles.linkedin}`}>
              <LinkedinIcon
                size={size === 'sm' ? 30 : size === 'lg' ? 40 : 80}
              />
              {linkedin.id && (
                <span className="hidden pl-2 sm:block">{linkedin.id}</span>
              )}
            </div>
          </Link>
        </i>
      )}
      {twitter && (
        <i className={`${styles['socials-icon-container']} ${styles.twitter}`}>
          <Link href={twitter.link} target="_blank" rel="noreferrer">
            <div className={`${styles.twitter}`}>
              <TwitterIcon
                size={size === 'sm' ? 30 : size === 'lg' ? 40 : 80}
              />
              {twitter.id && (
                <span className="hidden pl-2 sm:block">{twitter.id}</span>
              )}
            </div>
          </Link>
        </i>
      )}
    </div>
  )
}

export default Socials
